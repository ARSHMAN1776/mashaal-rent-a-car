import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactSections } from "@/components/ContactSections";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Contact — Mashaal Rent A Car",
  description:
    "Reach Mashaal Rent A Car via VIP WhatsApp or phone to enquire about monthly vehicle rentals across Pakistan.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#fbf9f5] min-h-screen">
      <PageHeader
        eyebrow="VIP Concierge Desk"
        title="Direct Consultation,"
        italicTitle="without waiting."
        description="No complex forms or tedious automated queues. Connect directly with our fleet dispatch managers via VIP WhatsApp or direct desk phone."
      />
      <ContactSections />
      <CTABand />
    </div>
  );
}
