import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Mashaal Rent A Car",
  description:
    "How Mashaal Rent A Car collects, uses, and protects the personal and corporate information provided during a monthly vehicle lease enquiry.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "When you enquire via WhatsApp, phone, or our contact channels, we collect the details you provide directly — including your name, contact number, CNIC, address, and any corporate billing information required to prepare a monthly lease agreement.",
  },
  {
    title: "How We Use Your Information",
    body: "Information is used solely to prepare rental agreements, verify identity, arrange vehicle delivery, issue invoices, and provide ongoing fleet support. We do not use your details for unrelated marketing without consent.",
  },
  {
    title: "Data Sharing",
    body: "We do not sell or trade personal information. Corporate documentation may be shared internally within Mashaal Groups' relevant verticals strictly for billing, compliance, and fleet-dispatch coordination.",
  },
  {
    title: "Data Retention & Security",
    body: "Client records are retained only for as long as necessary to service an active or recent lease, and to meet tax and regulatory record-keeping obligations, after which they are securely archived or deleted.",
  },
  {
    title: "Your Rights",
    body: "You may request a copy of the information we hold about you, ask us to correct inaccuracies, or request deletion once no active agreement or legal obligation requires retention, by contacting the desk below.",
  },
  {
    title: "Contact",
    body: `For any privacy-related request, reach our team at ${siteConfig.email} or through the WhatsApp desk on ${siteConfig.phoneNumber}.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-[#fbf9f5] min-h-screen text-[#111318]">
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy."
        description="How we handle the personal and corporate information shared with Mashaal Rent A Car."
      />

      <section className="bg-white border-t border-slate-200 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-[12.5px] text-[#9a7629] font-semibold uppercase tracking-[0.2em] mb-10">
            Last updated: January 2026
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title} className="pb-10 border-b border-slate-100 last:border-0 last:pb-0">
                <h2 className="font-display text-[22px] font-medium text-[#111318] mb-3">
                  {s.title}
                </h2>
                <p className="text-[14.5px] text-[#5e6370] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
