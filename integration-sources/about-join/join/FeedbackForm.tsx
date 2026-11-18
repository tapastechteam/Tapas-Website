'use client';

import { useState } from 'react';


const CONTACT_EMAIL = 'tapas.pce@mes.ac.in';

type FormFields = {
  name: string;
  email: string;
  type: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

export default function FeedbackForm() {
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    type: 'Question',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string>('');
  const [copyStatus, setCopyStatus] = useState<string>('');
  const [truncated, setTruncated] = useState<boolean>(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!fields.name.trim()) newErrors.name = 'Name is required.';
    else if (fields.name.length > 80) newErrors.name = 'Name must be at most 80 characters.';

    if (fields.email) {
      // Simple email regex – sufficient for client‑side validation
      const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailRe.test(fields.email)) newErrors.email = 'Enter a valid email address.';
    }

    if (!fields.message.trim()) newErrors.message = 'Message is required.';
    else if (fields.message.length < 10) newErrors.message = 'Message must be at least 10 characters.';
    else if (fields.message.length > 1000) newErrors.message = 'Message must be no more than 1000 characters.';

    return newErrors;
  };

  const handleChange =
    (field: keyof FormFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFields({ ...fields, [field]: e.target.value });
      // Clear field‑specific error on change
      if (errors[field]) setErrors({ ...errors, [field]: undefined });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    const subject = `[TAPAS] ${fields.type} from ${fields.name}`;
    let body = `${fields.message}\n\nName: ${fields.name}`;
    if (fields.email) body += `\nEmail: ${fields.email}`;
    body += `\nMessage type: ${fields.type}`;

    let mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Ensure URL stays under ~1800 chars (typical limit for mailto links)
    if (mailtoUrl.length > 1800) {
      const allowedMessageLength = fields.message.length - (mailtoUrl.length - 1800) - 10; // extra safety buffer
      const trimmedMessage = fields.message.slice(0, Math.max(0, allowedMessageLength));
      const trimmedBody = `${trimmedMessage}\n\nName: ${fields.name}` + (fields.email ? `\nEmail: ${fields.email}` : '') + `\nMessage type: ${fields.type}`;
      mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(trimmedBody)}`;
      setTruncated(true);
    }

    // Open the user's mail client
    window.location.href = mailtoUrl;
    setStatus('Your email app should open with your message ready. Just press Send. Nothing opens? Email us directly at ' + CONTACT_EMAIL + '.');
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyStatus('Copied!');
    } catch {
      setCopyStatus('Failed');
    }
    setTimeout(() => setCopyStatus(''), 2000);
  };

  return (
    <section aria-labelledby="feedback-heading" className="mt-16">
      <div className="text-center mb-8">
        <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
          Send Us a Message
        </span>
        <h2
          id="feedback-heading"
          className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-4"
        >
          We&apos;d love your feedback
        </h2>
        <p className="max-w-[44rem] mx-auto text-tapas-muted text-[1.03rem] leading-[1.68]">
          Have a question, suggestion, or just want to say hello? Fill in the form and we’ll draft an email for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6" noValidate>
        {/* Name */}
        <div>
          <label htmlFor="feedback-name" className="block text-tapas-muted mb-1">
            Name<span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="feedback-name"
            name="name"
            value={fields.name}
            onChange={handleChange('name')}
            maxLength={80}
            className="w-full px-4 py-2 bg-tapas-soft border border-tapas-border rounded-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-tapas-accent"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'error-name' : undefined}
          />
          {errors.name && (
            <p id="error-name" className="mt-1 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email (optional) */}
        <div>
          <label htmlFor="feedback-email" className="block text-tapas-muted mb-1">
            Email (optional)
          </label>
          <input
            type="email"
            id="feedback-email"
            name="email"
            value={fields.email}
            onChange={handleChange('email')}
            className="w-full px-4 py-2 bg-tapas-soft border border-tapas-border rounded-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-tapas-accent"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'error-email' : undefined}
          />
          {errors.email && (
            <p id="error-email" className="mt-1 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message type */}
        <div>
          <label htmlFor="feedback-type" className="block text-tapas-muted mb-1">
            Message type
          </label>
          <select
            id="feedback-type"
            name="type"
            value={fields.type}
            onChange={handleChange('type')}
            className="w-full px-4 py-2 bg-tapas-soft border border-tapas-border rounded-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-tapas-accent"
          >
            <option>Feedback</option>
            <option>Question</option>
            <option>Join a session</option>
            <option>Collaboration</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="feedback-message" className="block text-tapas-muted mb-1">
            Message<span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="feedback-message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={handleChange('message')}
            maxLength={1000}
            className="w-full px-4 py-2 bg-tapas-soft border border-tapas-border rounded-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-tapas-accent"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'error-message' : 'msg-counter'}
          />
          <div className="flex justify-between mt-1 text-sm text-tapas-muted" id="msg-counter">
            <span>{fields.message.length} / 1000</span>
            {errors.message && (
              <span className="text-red-600" id="error-message">
                {errors.message}
              </span>
            )}
          </div>
        </div>

        {/* Submit button */}
        <div className="flex items-center space-x-4">
          <button
            type="submit"
            className="px-6 py-2 bg-tapas-accent text-white rounded-[12px] font-heading hover:bg-tapas-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-tapas-accent"
          >
            Open email app
          </button>
          <button
            type="button"
            onClick={copyEmail}
            className="px-4 py-2 bg-tapas-soft border border-tapas-border rounded-[12px] text-tapas-text hover:bg-tapas-soft/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-tapas-accent"
          >
            {copyStatus || 'Copy email address'}
          </button>
        </div>

        {status && (
          <p role="status" aria-live="polite" className="mt-4 text-tapas-muted">
            {status}
          </p>
        )}
        {truncated && (
          <p className="mt-2 text-sm text-tapas-muted">
            Your message was trimmed to fit the mail client limits.
          </p>
        )}
      </form>

      <p className="mt-6 text-center text-tapas-muted text-sm">
        Prefer to write directly? <a href={`mailto:${CONTACT_EMAIL}`} className="text-tapas-accent underline">{CONTACT_EMAIL}</a>
      </p>
    </section>
  );
}
