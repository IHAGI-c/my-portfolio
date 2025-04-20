import { z } from 'zod';

/**
 * 이메일 유효성 검사 함수
 */
export function isValidEmail(email: string): boolean {
  const emailSchema = z.string().email();
  const result = emailSchema.safeParse(email);
  return result.success;
}

/**
 * 전화번호 유효성 검사 함수
 */
export function isValidPhoneNumber(phoneNumber: string): boolean {
  // 한국 전화번호 형식(010-1234-5678 또는 01012345678)
  const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  return phoneRegex.test(phoneNumber);
}

/**
 * URL 유효성 검사 함수
 */
export function isValidUrl(url: string): boolean {
  const urlSchema = z.string().url();
  const result = urlSchema.safeParse(url);
  return result.success;
} 