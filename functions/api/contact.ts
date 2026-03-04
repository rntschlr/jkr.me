interface ContactBody {
  name: string;
  email: string;
  message: string;
  website?: string;
}

interface Env {
  RESEND_API_KEY?: string;
}

const ALLOWED_ORIGINS = [
  "https://johnkrentschler.me",
  "https://www.johnkrentschler.me",
  "http://localhost:5173",
];

function getCorsOrigin(request: Request): string {
  const origin = request.headers.get("Origin") ?? "";
  return ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]!;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": getCorsOrigin(request),
  };

  try {
    const body = (await request.json()) as ContactBody;

    // Honeypot — if filled, it's a bot
    if (body.website) {
      // Return 200 so bots think it worked
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers,
      });
    }

    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers,
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers,
      });
    }

    // If an email service is configured, deliver the message
    if (env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "contact@johnkrentschler.me",
          to: "johnkrentschler@icloud.com",
          subject: `Contact from ${body.name}`,
          text: `Name: ${body.name}\nEmail: ${body.email}\n\n${body.message}`,
          reply_to: body.email,
        }),
      });

      if (!res.ok) {
        console.error("Resend API error:", await res.text());
        return new Response(JSON.stringify({ error: "Failed to send" }), {
          status: 502,
          headers,
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers,
      });
    }

    // No email service configured — tell the client to fall back to mailto
    console.log("Contact form submission (no email service configured):", {
      name: body.name,
      email: body.email,
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ error: "Email service not configured", fallback: "mailto" }),
      { status: 501, headers },
    );
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers,
    });
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async ({ request }) => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": getCorsOrigin(request),
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
