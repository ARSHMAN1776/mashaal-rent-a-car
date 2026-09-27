import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactSections } from "@/components/ContactSections";

export const metadata: Metadata = {
  title: "Contact — Mashaal Rent A Car",
  description:
    "Reach Mashaal Rent A Car via WhatsApp or phone to enquire about monthly vehicle rentals across Punjab.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's get you"
        italicTitle="on the road."
        description="No forms, no waiting — WhatsApp or call our desk directly and we'll take it from there."
      />
      <ContactSections />
    </>
  );
}
