/**
 * 날짜를 포맷팅하는 함수
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * 통화 금액을 포맷팅하는 함수
 */
export function formatCurrency(
  amount: number,
  currency: string = 'KRW'
): string {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * 숫자에 천 단위 구분자를 추가하는 함수
 */
export function formatNumber(number: number): string {
  return new Intl.NumberFormat('ko-KR').format(number);
} 