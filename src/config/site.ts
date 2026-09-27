// Single place to update placeholder contact/pricing details before launch.
export const siteConfig = {
  name: "Mashaal Rent A Car",
  parentBrand: "Mashaal Groups",
  parentUrl: "https://www.mashaalgroups.com/",
  tagline: "Monthly fleet rentals, institutionally backed.",
  whatsappNumber: "923042774444",
  phoneNumber: "0304 2774444",
  phoneNumberHref: "+923042774444",
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
