export const WHATSAPP_NUMBER = '447828707081'
export const WHATSAPP_DISPLAY = '+44 7828 707081'

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
