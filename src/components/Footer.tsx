import Link from "next/link";
import { siteConfig, telLink, waLink } from "@/config/site";
import { CrownMark, PhoneIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <CrownMark className="h-6 w-9 text-gold" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg tracking-wide text-cream">
                  MASHAAL
                </span>
                <span className="tracked-label text-[10px] text-bronze">
                  Rent A Car
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              A mobility vertical of Mashaal Groups, delivering institutionally
              governed monthly fleet rentals across Punjab.
            </p>
            <a
              href={siteConfig.parentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tracked-label mt-6 inline-block text-[10px] text-gold-light/80 hover:text-gold-light"
            >
              Part of Mashaal Groups →
            </a>
          </div>

          <div>
            <h3 className="tracked-label text-xs text-bronze">Navigate</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <Link href="/fleet" className="hover:text-gold-light">
                  The Fleet
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="tracked-label text-xs text-bronze">Categories</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>SUV &amp; 4x4</li>
              <li>Executive &amp; Luxury</li>
              <li>Sedan</li>
              <li>Economy</li>
            </ul>
          </div>

          <div>
            <h3 className="tracked-label text-xs text-bronze">Reach Us</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href={telLink()}
                  className="flex items-center gap-2 hover:text-gold-light"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0" />
                  {siteConfig.phoneNumber}
                </a>
              </li>
              <li>
                <a
                  href={waLink("Hi, I'd like to enquire about a monthly rental.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gold-light"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li className="text-cream/50">{siteConfig.city}</li>
            </ul>
          </div>
        </div>

        <div className="hairline-solid mt-14" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mashaal Rent A Car. All rights reserved.</p>
          <p>A Mashaal Groups company.</p>
        </div>
      </div>
    </footer>
  );
}
