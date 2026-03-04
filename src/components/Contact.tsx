import { type FormEvent, useCallback, useRef, useState } from "react";

type FormState = "idle" | "sending" | "success" | "mailto" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const openMailto = useCallback(
    (name: string, email: string, message: string) => {
      const subject = encodeURIComponent(`Contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:johnkrentschler@icloud.com?subject=${subject}&body=${body}`;
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const name = (
        form.elements.namedItem("name") as HTMLInputElement
      ).value.trim();
      const email = (
        form.elements.namedItem("email") as HTMLInputElement
      ).value.trim();
      const message = (
        form.elements.namedItem("message") as HTMLTextAreaElement
      ).value.trim();
      const website = (
        form.elements.namedItem("website") as HTMLInputElement
      ).value;

      if (!name || !email || !message) {
        setState("error");
        return;
      }

      setState("sending");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message, website }),
        });

        if (res.ok) {
          setState("success");
          formRef.current?.reset();
        } else {
          // Server couldn't deliver — open email client as fallback
          openMailto(name, email, message);
          setState("mailto");
          formRef.current?.reset();
        }
      } catch {
        // Network error — open email client as fallback
        openMailto(name, email, message);
        setState("mailto");
        formRef.current?.reset();
      }
    },
    [openMailto],
  );

  return (
    <section
      className="section section-alt"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Connect</div>
          <h2 id="contact-heading" className="section-title">
            Get in Touch
          </h2>
          <p className="section-desc">
            Open to opportunities and interesting conversations. Let&rsquo;s
            build something together.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Contact Details</h3>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 4 10 8 10-8" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">
                  <a href="mailto:johnkrentschler@icloud.com">
                    johnkrentschler@icloud.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">GitHub</div>
                <div className="contact-detail-value">
                  <a
                    href="https://github.com/rntschlr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @rntschlr
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Location</div>
                <div className="contact-detail-value">
                  United States &rarr; Hungary
                </div>
              </div>
            </div>

            <div className="contact-availability">
              <h4>Availability</h4>
              <p>
                Currently relocating to Hungary via family reunification visa.
                Open to remote work and European opportunities. Interested in
                frontend development, fintech, and product engineering roles.
              </p>
            </div>
          </div>

          <form
            ref={formRef}
            className="contact-form reveal reveal-delay-1"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>
            {/* Honeypot — hidden from humans, bots fill it and get rejected */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            {state === "success" && (
              <div className="form-status success visible">
                Message sent! I&rsquo;ll get back to you soon.
              </div>
            )}
            {state === "mailto" && (
              <div className="form-status success visible">
                Your email client should open with the message. If it
                didn&rsquo;t, email me directly at{" "}
                <a
                  href="mailto:johnkrentschler@icloud.com"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  johnkrentschler@icloud.com
                </a>
              </div>
            )}
            {state === "error" && (
              <div className="form-status error visible">
                Please fill in all fields.
              </div>
            )}

            <button
              type="submit"
              className="form-submit"
              disabled={state === "sending"}
            >
              {state === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
