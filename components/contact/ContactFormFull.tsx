'use client';

import { useState, useRef } from 'react';
import { CONTACT_API_ENDPOINT } from '@/lib/constants';
import { SOCIAL_LINKS } from '@/lib/data/socials';
import type { ContactFormData } from '@/lib/types';
import ContactGridCanvas from './ContactGridCanvas';
import styles from './ContactFormFull.module.css';

const socialIconPaths: Record<string, string> = {
  github:
    'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  twitter:
    'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  youtube:
    'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  discord:
    'M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.23A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 00.031.055 20.03 20.03 0 005.993 2.98.078.078 0 00.084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 01-1.872-.878.075.075 0 01-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 01.078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 01.079.009c.12.098.245.195.372.288a.075.075 0 01-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 00-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 00.084.028 19.963 19.963 0 006.002-2.981.076.076 0 00.032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 00-.031-.028z',
};

const SERVICES = ['Design', 'Development', 'Animation', 'Other'] as const;
type ServiceType = (typeof SERVICES)[number];

/* ─── Floating-label input wrapper ─────────────────────────── */
function FloatingField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles['cf-field']}>
      {children}
      <label htmlFor={id} className={styles['cf-label']}>
        {label}
      </label>
      <span className={styles['cf-underline']} aria-hidden="true" />
    </div>
  );
}

export default function ContactFormFull() {
  const [formData, setFormData] = useState<
    Omit<ContactFormData, 'subject'> & { services: ServiceType[] }
  >({ name: '', email: '', message: '', services: [] });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const toggleService = (svc: ServiceType) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter((s) => s !== svc)
        : [...prev.services, svc],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    try {
      const res = await fetch(CONTACT_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: formData.services.join(', ') || 'General Inquiry',
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setFormData({ name: '', email: '', message: '', services: [] });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles['cf-section']}>
      {/* Mesh bg — styled via globals.css .cf-mesh */}
      <div className={styles['cf-mesh']} aria-hidden="true" />
      <ContactGridCanvas />

      <div className={styles['cf-inner']}>
        {/* ── Hero ── */}
        <header className={styles['cf-hero']}>
          <h1 className={styles['cf-hero-title']}>Contact us</h1>
          <div className={styles['cf-hero-sub-row']}>
            <span className={styles['cf-hero-dash']} aria-hidden="true" />
            <p className={styles['cf-hero-subtitle']} aria-hidden="true">Have a project?</p>
          </div>
        </header>

        {/* ── Body grid ── */}
        <div className={styles['cf-body']}>

          {/* LEFT — Form */}
          <form ref={formRef} onSubmit={handleSubmit} noValidate>

            {/* Service chips */}
            <div className={styles['cf-chips']}>
              <p className={styles['cf-section-label']}>What can we do for you?</p>
              <div className={styles['cf-chip-row']} role="group" aria-label="Select services">
                {SERVICES.map((svc) => (
                  <button
                    key={svc}
                    type="button"
                    id={`chip-${svc.toLowerCase()}`}
                    className={styles['cf-chip']}
                    onClick={() => toggleService(svc)}
                    aria-pressed={formData.services.includes(svc)}
                  >
                    {svc}
                  </button>
                ))}
              </div>
            </div>

            {/* Fields */}
            <div className={styles['cf-fields']}>
              <div className={styles['cf-row']}>
                <FloatingField id="contact-name" label="Your name">
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder=" "
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles['cf-input']}
                  />
                </FloatingField>

                <FloatingField id="contact-email" label="Your email">
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder=" "
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles['cf-input']}
                  />
                </FloatingField>
              </div>

              <FloatingField id="contact-message" label="Project details">
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder=" "
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles['cf-input']} ${styles['cf-textarea']}`}
                />
              </FloatingField>
            </div>

            {/* CTA + status */}
            <div className={styles['cf-cta-row']}>
              <button
                id="contact-submit"
                type="submit"
                disabled={loading}
                className={styles['cf-submit']}
                aria-label={loading ? 'Sending your message…' : 'Send request'}
              >
                {loading ? (
                  <>
                    <span className={styles['cf-spinner']} aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <span className={styles['cf-submit-text']}>Send request</span>
                    <span className={styles['cf-submit-arrow']} aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.6">
                        <path d="M5 12h14M12 5l7 7-7 7"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <span className={`${styles['cf-toast']} ${styles['cf-toast--success']}`} role="status">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Request sent — we&apos;ll be in touch!
                </span>
              )}
              {status === 'error' && (
                <span className={`${styles['cf-toast']} ${styles['cf-toast--error']}`} role="alert">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Something went wrong — please try again.
                </span>
              )}
            </div>
          </form>

          {/* RIGHT — Description + Socials */}
          <aside id="contact-info" className={styles['cf-aside']}>
            <div>
              <div className={styles['cf-aside-divider']} aria-hidden="true" />
              <p className={styles['cf-aside-text']}>
                Tell us about your vision: which challenges are you facing?
                What are your goals and expectations? What would success look
                like and how much are you planning to spend to get there?
              </p>
            </div>

            <nav aria-label="Social media links">
              <div className={styles['cf-socials']}>
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    id={`social-${social.name.toLowerCase()}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} (opens in new tab)`}
                    title={social.name}
                    className={styles['cf-social-btn']}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24"
                      fill="currentColor" aria-hidden="true">
                      <path d={socialIconPaths[social.icon] ?? ''} />
                    </svg>
                  </a>
                ))}
              </div>
            </nav>
          </aside>

        </div>
      </div>
    </section>
  );
}
