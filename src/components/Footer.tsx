import Link from 'next/link';
import Image from 'next/image';
import { NetworkLink } from '@/types';

function IconInstagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="w-5 h-5 shrink-0 block transition-colors duration-200"
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
      className="w-5 h-5 shrink-0 block transition-colors duration-200"
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
      className="w-5 h-5 shrink-0 block transition-colors duration-200"
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

function IconYouTube() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="w-5 h-5 shrink-0 block transition-colors duration-200"
    >
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="4"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <polygon
        points="10,8.5 10,15.5 16,12"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const heartfulnessNetwork: NetworkLink[] = [
    {
      title: 'Daaji, the Global Guide of Heartfulness',
      url: 'https://www.daaji.org/',
    },
    {
      title: 'Green Kanha',
      url: 'https://heartfulness.org/kanha/green-initiatives',
    },
    {
      title: 'Shri Ram Chandra Mission',
      url: 'http://www.srcm.org/',
    },
    {
      title: 'Heartfulness Meditation Technique',
      url: 'https://www.youtube.com/watch?v=gDClb-yjNdQ',
    },
  ];

  return (
    <footer className="bg-tapas-soft border-t border-tapas-border pt-14 pb-8 mt-auto">
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pb-12">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="inline-block" aria-label="TAPAS Home">
              <div className="relative h-[3rem] w-[150px]">
                <Image
                  src="/images/tapas-logo.png"
                  alt="TAPAS Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-[0.95rem] sm:text-[1.05rem] font-semibold text-tapas-text leading-snug max-w-[22rem]">
              <span className="inline-block">RELAX • MEDITATE</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline sm:mt-0">REJUVENATE • CONNECT</span>
            </p>
            <p className="text-[0.92rem] text-tapas-muted leading-[1.6] max-w-[24rem]">
              Emphasizing the mental well-being of students through guided Heartfulness meditation,
              workshops, and holistic campus initiatives.
            </p>
            <div className="mt-2">
              <Link
                href="/join"
                className="inline-flex items-center justify-center bg-tapas-accent text-white px-6 py-[0.65rem] rounded-[6px] text-[0.95rem] font-semibold transition-colors duration-200 hover:bg-tapas-accent-hover shadow-sm"
              >
                Join Us
              </Link>
            </div>
          </div>

          {/* Right Column: Heartfulness Network */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[1.1rem] mb-4 text-tapas-text font-heading font-semibold">
                Heartfulness Network
              </h3>
              <ul className="list-none flex flex-col gap-[0.55rem]">
                {heartfulnessNetwork.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.92rem] text-tapas-muted inline-block transition-colors duration-200 hover:text-tapas-accent hover:underline"
                    >
                      {item.title} &rarr;
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-1">
              <h4 className="text-[0.92rem] font-semibold text-tapas-text mb-1">Get in Touch</h4>
              <a
                href="mailto:tapas.pce@mes.ac.in"
                className="text-[0.92rem] text-tapas-muted hover:text-tapas-accent transition-colors duration-200 underline py-1 inline-block"
              >
                tapas.pce@mes.ac.in
              </a>
              <a
                href="tel:+919324281653"
                className="text-[0.92rem] text-tapas-muted hover:text-tapas-accent transition-colors duration-200 underline py-1 inline-block"
              >
                93242 81653
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tapas-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[0.88rem] text-tapas-muted">
            <span className="font-semibold text-tapas-text">
              TAPAS • Pillai University, New Panvel
            </span>
            <span className="hidden sm:inline">•</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-tapas-muted">
            <a
              href="https://www.instagram.com/tapas.pce"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200 hover:text-tapas-accent hover:bg-tapas-pastel"
              aria-label="TAPAS on Instagram"
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100092632995551"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200 hover:text-tapas-accent hover:bg-tapas-pastel"
              aria-label="TAPAS on Facebook"
            >
              <IconFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/tapas-pce-ab809a1a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200 hover:text-tapas-accent hover:bg-tapas-pastel"
              aria-label="TAPAS on LinkedIn"
            >
              <IconLinkedIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
