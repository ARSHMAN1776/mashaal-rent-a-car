// Single place to update placeholder contact/pricing details before launch.
export const siteConfig = {
  name: "Mashaal Rent A Car",
  parentBrand: "Mashaal Groups",
  parentUrl: "https://www.mashaalgroups.com/",
  tagline: "Monthly fleet rentals, institutionally backed.",
  whatsappNumber: "923000000000", // TODO: replace with real WhatsApp number (no + or spaces)
  phoneNumber: "+92 300 0000000", // TODO: replace with real phone number
  phoneNumberHref: "+923000000000",
  city: "Lahore & Rahim Yar Khan, Punjab, Pakistan", // TODO: confirm service cities
  email: "rentacar@mashaalgroups.com", // TODO: confirm real email
  fleetSize: 50,
  categoriesCount: 4,
};

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function telLink() {
  return `tel:${siteConfig.phoneNumberHref}`;
}
