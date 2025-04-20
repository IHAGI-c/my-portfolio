import { z } from 'zod';

/**
 * 사용자 역할 타입
 */
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

/**
 * 사용자 스키마
 */
export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(50),
  email: z.string().email(),
  role: z.nativeEnum(UserRole).default(UserRole.USER),
  avatar: z.string().url().optional(),
  bio: z.string().max(500).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

/**
 * 사용자 인터페이스
 */
export type User = z.infer<typeof userSchema>; 