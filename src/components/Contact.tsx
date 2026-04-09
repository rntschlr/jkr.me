import { type FormEvent, useCallback, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

type FormState = "idle" | "sending" | "success" | "mailto" | "error";

interface ContactResponse {
  error?: string;
  fallback?: "mailto";
  success?: boolean;
}

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 150;
const MAX_MESSAGE_LENGTH = 5000;

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useLanguage();

  const openMailto = useCallback(
    (name: string, email: string, subject: string, message: string) => {
      const subj = encodeURIComponent(subject || `${t.contact.mailtoSubject} ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:johnkrentschler@icloud.com?subject=${subj}&body=${body}`;
    },
    [t],
  );

  const setErrorState = useCallback(
    (message: string) => {
      setErrorMessage(message);
      setState("error");
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const nameInput = form.elements.namedItem("name") as HTMLInputElement;
      const emailInput = form.elements.namedItem("email") as HTMLInputElement;
      const subjectInput = form.elements.namedItem("subject") as HTMLInputElement;
      const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;
      const websiteInput = form.elements.namedItem("website") as HTMLInputElement;

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();
      const website = websiteInput.value;

      if (!name || !email || !message) {
        setErrorState(t.contact.errRequired);
        return;
      }

      if (!emailInput.validity.valid) {
        setErrorState(t.contact.errEmail);
        return;
      }

      if (
        name.length > MAX_NAME_LENGTH ||
        email.length > MAX_EMAIL_LENGTH ||
        subject.length > MAX_SUBJECT_LENGTH ||
        message.length > MAX_MESSAGE_LENGTH
      ) {
        setErrorState(t.contact.errLength);
        return;
      }

      setState("sending");
      setErrorMessage("");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message, website }),
        });
        const data = (await res.json().catch(() => null)) as ContactResponse | null;

        if (res.ok) {
          setState("success");
          formRef.current?.reset();
          return;
        }

        if (data?.fallback === "mailto") {
          openMailto(name, email, subject, message);
          setState("mailto");
          formRef.current?.reset();
          return;
        }

        setErrorState(data?.error ?? t.contact.errGeneric);
      } catch {
        // Network error — open email client as fallback
        openMailto(name, email, subject, message);
        setState("mailto");
        formRef.current?.reset();
      }
    },
    [openMailto, setErrorState, t],
  );

  return (
    <section
      className="section section-alt"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">{t.contact.label}</div>
          <h2 id="contact-heading" className="section-title">
            {t.contact.heading}
          </h2>
          <p className="section-desc">{t.contact.desc}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>{t.contact.detailsHeading}</h3>

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
                <div className="contact-detail-label">{t.contact.emailLabel}</div>
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
                <div className="contact-detail-label">{t.contact.githubLabel}</div>
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
                <div className="contact-detail-label">{t.contact.locationLabel}</div>
                <div className="contact-detail-value">{t.contact.locationValue}</div>
              </div>
            </div>

            <div className="contact-availability">
              <h4>{t.contact.availabilityHeading}</h4>
              <p>{t.contact.availabilityDesc}</p>
            </div>
          </div>

          <form
            ref={formRef}
            className="contact-form reveal reveal-delay-1"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name">{t.contact.labelName}</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                maxLength={MAX_NAME_LENGTH}
                placeholder={t.contact.placeholderName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contact.labelEmail}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                inputMode="email"
                maxLength={MAX_EMAIL_LENGTH}
                placeholder={t.contact.placeholderEmail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t.contact.labelSubject}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                maxLength={MAX_SUBJECT_LENGTH}
                placeholder={t.contact.placeholderSubject}
              />
            </div>
            {/* Honeypot — fully hidden from humans and AT, bots fill it and get rejected */}
            <div style={{ display: "none" }} aria-hidden="true">
              <label>Website</label>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contact.labelMessage}</label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={MAX_MESSAGE_LENGTH}
                placeholder={t.contact.placeholderMessage}
              />
            </div>

            {state === "success" && (
              <div className="form-status success visible" role="status" aria-live="polite">
                {t.contact.successMsg}
              </div>
            )}
            {state === "mailto" && (
              <div className="form-status success visible" role="status" aria-live="polite">
                {t.contact.mailtoMsg}{" "}
                <a
                  href="mailto:johnkrentschler@icloud.com"
                  className="contact-inline-link"
                >
                  johnkrentschler@icloud.com
                </a>
              </div>
            )}
            {state === "error" && (
              <div className="form-status error visible" role="alert">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="form-submit"
              disabled={state === "sending"}
            >
              {state === "sending" ? t.contact.submitting : t.contact.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
