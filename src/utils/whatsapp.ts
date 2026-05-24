const PHONE_NUMBER = '919958628182';

export function openWhatsApp(message: string) {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`, '_blank');
}

export function getServiceRequestMessage(serviceName: string, location?: string) {
  let msg = `Hi, I need ${serviceName} assistance.`;
  if (location) {
    msg += ` My location is: ${location}.`;
  }
  msg += ' Please help!';
  return msg;
}

export function getEmergencyMessage(location?: string) {
  let msg = 'URGENT: I need immediate roadside assistance.';
  if (location) {
    msg += ` My location is: ${location}.`;
  }
  msg += ' Please send help immediately!';
  return msg;
}

export function getContactFormMessage(name: string, phone: string, location: string, service: string, issue: string) {
  return `Hi, I need roadside assistance.\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nService Needed: ${service}\nIssue: ${issue}\n\nPlease help!`;
}

export function getAreaRequestMessage(area: string) {
  return `Hi, I need roadside assistance in ${area}. Please send help!`;
}

export const PHONE_DISPLAY = '99586 28182';
export const PHONE_TEL = 'tel:+919958628182';
