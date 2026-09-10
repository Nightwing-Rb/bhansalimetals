/**
 * Bhansali Metals - WhatsApp Deep Link Utility
 * Generates pre-filled, encoded WhatsApp inquiry links for industrial procurement.
 * Target sales desk: +91 9892244451 (Opera House / Kalamboli Yard Sales Desk)
 */

export const SALES_WHATSAPP_PHONE = '919892244451';
export const SALES_WHATSAPP_DISPLAY = '+91 98922 44451';

export interface WhatsAppInquiryParams {
  grade?: string;
  product?: string;
  size?: string;
  quantity?: string;
  standard?: string;
  customMessage?: string;
}

/**
 * Generates a direct WhatsApp link with pre-filled technical inquiry text.
 */
export function generateWhatsAppUrl(params: WhatsAppInquiryParams = {}): string {
  const { grade, product, size, quantity, standard, customMessage } = params;

  // If a completely custom message is passed, use it directly
  if (customMessage && !grade && !product) {
    return `https://wa.me/${SALES_WHATSAPP_PHONE}?text=${encodeURIComponent(customMessage.trim())}`;
  }

  const lines: string[] = ['⚡ *BHANSALI METALS — PROCUREMENT INQUIRY*'];

  if (grade) {
    lines.push(`• *Material Grade:* ${grade.trim()}`);
  }

  if (product) {
    lines.push(`• *Product Form:* ${product.trim()}`);
  }

  if (size) {
    lines.push(`• *Size / Schedule:* ${size.trim()}`);
  }

  if (quantity) {
    lines.push(`• *Quantity / BOQ:* ${quantity.trim()}`);
  }

  if (standard) {
    lines.push(`• *Standard / Spec:* ${standard.trim()}`);
  }

  if (customMessage) {
    lines.push(`• *Notes:* ${customMessage.trim()}`);
  }

  // If none of the specific fields were provided, fall back to a standard inquiry message
  if (!grade && !product && !size && !quantity && !standard && !customMessage) {
    lines.push('Hello Bhansali Metals Sales Desk,');
    lines.push('I would like to inquire about alloy availability, pricing, and MTC 3.1 certification for upcoming requirements.');
  } else {
    lines.push('\nPlease confirm stock readiness at Kalamboli Yard and share formal quotation with EN 10204 3.1 MTC.');
  }

  const messageText = lines.join('\n');
  return `https://wa.me/${SALES_WHATSAPP_PHONE}?text=${encodeURIComponent(messageText)}`;
}
