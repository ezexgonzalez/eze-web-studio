export function buildWhatsappUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getContactUrls(contact) {
  return {
    whatsapp: buildWhatsappUrl(contact.whatsappNumber, contact.whatsappMessage),
    instagram: contact.instagramUrl,
    email: `mailto:${contact.email}`,
  };
}
