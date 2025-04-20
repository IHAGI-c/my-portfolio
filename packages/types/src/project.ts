import { z } from 'zod';

/**
 * 프로젝트 카테고리 타입
 */
export enum ProjectCategory {
  WEB = 'web',
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
  GAME = 'game',
  OTHER = 'other',
}

/**
 * 프로젝트 기술 스택 타입
 */
export enum TechStack {
  REACT = 'react',
  NEXT_JS = 'nextjs',
  VUE = 'vue',
  ANGULAR = 'angular',
  NODE_JS = 'nodejs',
  EXPRESS = 'express',
  NEST_JS = 'nestjs',
  SPRING = 'spring',
  DJANGO = 'django',
  FLASK = 'flask',
  TAILWIND = 'tailwind',
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript',
  PYTHON = 'python',
  JAVA = 'java',
  KOTLIN = 'kotlin',
  SWIFT = 'swift',
  FLUTTER = 'flutter',
  REACT_NATIVE = 'react-native',
  OTHER = 'other',
}

/**
 * 프로젝트 스키마
 */
export const projectSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(100),
  description: z.string().min(1),
  category: z.nativeEnum(ProjectCategory),
  techStack: z.array(z.nativeEnum(TechStack)),
  imageUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

/**
 * 프로젝트 인터페이스
 */
export type Project = z.infer<typeof projectSchema>; 