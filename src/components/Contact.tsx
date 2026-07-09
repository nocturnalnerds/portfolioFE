import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { personalInfo } from '../data/portfolio';
import '../styles/Contact.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function validate(form: { name: string; email: string; message: string }): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.message.trim()) errors.message = 'Message is required.';
  else if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    if (touched[e.target.name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setStatus("loading");

    try {
        const res = await fetch(`${import.meta.env.VITE_CONTACT_LINK}/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        if (!res.ok) throw new Error();

        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setErrors({});
        setTouched({});
    } catch {
        setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4500);
};

  return (
    <section className="contact" id="contact" ref={ref as React.RefObject<HTMLElement>}>
      {/* Toast notification */}
      {(status === 'success' || status === 'error') && (
        <div className={`contact__toast contact__toast--${status}`}>
          {status === 'success' ? (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Message sent successfully!
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Failed to send. Please try again.
            </>
          )}
        </div>
      )}
      <div className="contact__inner">
        {/* Left: info */}
        <div className={`contact__info reveal${inView ? ' visible' : ''}`}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's work<br />together.</h2>
          <p className="contact__text">
            Have a project in mind or want to chat? I'm always open to new
            opportunities and interesting conversations.
          </p>

          <div className="contact__links">
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} className="contact__link">
              <div className="contact__link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <span className="contact__link-label">Email</span>
                <span className="contact__link-value">{personalInfo.email}</span>
              </div>
            </a>

            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
              <div className="contact__link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <span className="contact__link-label">LinkedIn</span>
                <span className="contact__link-value">Connect with me</span>
              </div>
            </a>

            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact__link">
              <div className="contact__link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div>
                <span className="contact__link-label">GitHub</span>
                <span className="contact__link-value">View my work</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right: form */}
        <form
          className={`contact__form reveal reveal-delay-2${inView ? ' visible' : ''}`}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="contact__field">
            <label htmlFor="name" className="contact__label">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className={`contact__input${errors.name && touched.name ? ' contact__input--error' : ''}`}
              placeholder="Williams Sandjaya"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="name"
            />
            {errors.name && touched.name && (
              <span className="contact__error">{errors.name}</span>
            )}
          </div>

          <div className="contact__field">
            <label htmlFor="email" className="contact__label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`contact__input${errors.email && touched.email ? ' contact__input--error' : ''}`}
              placeholder="sandjayawilliams16072005@gmail.com"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="email"
            />
            {errors.email && touched.email && (
              <span className="contact__error">{errors.email}</span>
            )}
          </div>

          <div className="contact__field">
            <label htmlFor="message" className="contact__label">Message</label>
            <textarea
              id="message"
              name="message"
              className={`contact__textarea${errors.message && touched.message ? ' contact__input--error' : ''}`}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={5}
            />
            {errors.message && touched.message && (
              <span className="contact__error">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className={`contact__submit${status === 'loading' ? ' contact__submit--loading' : ''}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <>
                <span className="contact__spinner" />
                Sending…
              </>
            ) : (
              <>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
