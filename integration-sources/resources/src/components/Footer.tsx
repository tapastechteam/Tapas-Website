import { NetworkLink } from '@/types';

/* ── Inline SVG icons ── no icon library needed ── */
function IconInstagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="w-[1.2rem] h-[1.2rem] shrink-0 block transition-colors duration-200"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="w-[1.2rem] h-[1.2rem] shrink-0 block transition-colors duration-200"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="w-[1.2rem] h-[1.2rem] shrink-0 block transition-colors duration-200"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="11"
        x2="8"
        y2="17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="8"
        x2="8"
        y2="8.01"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 17v-4a2 2 0 0 1 4 0v4"
      />
      <line
        x1="12"
        y1="11"
        x2="12"
        y2="17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Tapas Footer Component
 * Contains the Heartfulness network links and contact/social information.
 * Social links use inline SVG icons — no icon library.
 */
export default function Footer() {
  const networkLinks: NetworkLink[] = [
    {
      title: 'Daaji, the Global Guide of Heartfulness',
      url: 'https://www.daaji.org/',
    },
    {
      title: 'Kanha Shanti Vanam',
      url: 'https://kanha.sahajmarg.org/',
    },
    {
      title: 'Green Kanha',
      url: 'https://heartfulness.org/kanha/green-initiatives',
    },
    {
      title: 'Sahaj Marg',
      url: 'http://sahajmarg.org/',
    },
    {
      title: 'Shri Ram Chandra Mission',
      url: 'http://www.srcm.org/',
    },
    {
      title: 'Gurugram Meditation Center',
      url: 'https://heartfulness.org/gurugram/',
    },
  ];

  return (
    <footer className="bg-tapas-soft border-t border-tapas-border pt-14 pb-10 mt-auto">
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-14">
        {/* Heartfulness Network Section */}
        <div>
          <h2 className="text-[1.15rem] mb-4 text-tapas-text font-heading font-semibold">
            Heartfulness network
          </h2>
          <ul className="list-none grid grid-cols-1 min-[600px]:grid-cols-2 gap-y-[0.6rem] min-[600px]:gap-x-6">
            {networkLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.92rem] text-tapas-muted inline-block transition-colors duration-200 hover:text-tapas-accent hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact and Social Section */}
        <div>
          <h2 className="text-[1.15rem] mb-4 text-tapas-text font-heading font-semibold">
            Contact and social
          </h2>
          <div className="flex flex-col gap-[0.65rem]">
            <div className="text-[0.92rem] text-tapas-muted">
              <span className="font-semibold text-tapas-text mr-[0.35rem]">Email:</span>
              <a
                href="mailto:tapas.pce@mes.ac.in"
                className="text-tapas-muted transition-colors duration-200 hover:text-tapas-accent hover:underline"
              >
                tapas.pce@mes.ac.in
              </a>
            </div>
            <ul className="list-none flex flex-col gap-[0.6rem] mt-[0.35rem]">
              <li>
                <a
                  href="https://www.instagram.com/tapas.pce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[0.55rem] text-[0.95rem] text-tapas-muted transition-colors duration-200 hover:text-tapas-accent"
                  aria-label="TAPAS-PCE on Instagram"
                >
                  <IconInstagram />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100092632995551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[0.55rem] text-[0.95rem] text-tapas-muted transition-colors duration-200 hover:text-tapas-accent"
                  aria-label="TAPAS-PCE on Facebook"
                >
                  <IconFacebook />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tapas-pce-ab809a1a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[0.55rem] text-[0.95rem] text-tapas-muted transition-colors duration-200 hover:text-tapas-accent"
                  aria-label="TAPAS-PCE on LinkedIn"
                >
                  <IconLinkedIn />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
