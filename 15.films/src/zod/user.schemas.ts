import { z } from 'zod';

export const ProfileDTOSchema = z.object({
  firstName: z.string(),
  surname: z.string(),
  avatar: z.string(),
});

export const UserCredentialsDTOSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const RegisterUserDTOSchema = UserCredentialsDTOSchema.extend({
  role: z.enum(['ADMIN', 'EDITOR', 'USER']).optional(),
  profile: ProfileDTOSchema,
});

export const UpdateUserDTOSchema = z.object({
  email: z.string().optional(),
  password: z.string().min(6).optional(),
  role: z.enum(['ADMIN', 'EDITOR', 'USER']).optional(),
});

export type ProfileDTO = z.infer<typeof ProfileDTOSchema>;
export type LoginUserData = z.infer<typeof UserCredentialsDTOSchema>;
export type RegisterUserData = z.infer<typeof RegisterUserDTOSchema>;
export type UserUpdateDTO = z.infer<typeof UpdateUserDTOSchema>;

export type User = {
  id: number;
  email: string;
  role: string;
  profile?: ProfileDTO;
};
