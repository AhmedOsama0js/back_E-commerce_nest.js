import { IsEmail, IsString, IsOptional, MinLength, MaxLength } from "class-validator";

export class CreateUserDto {
  @IsOptional() // لو عايزين الـ id يبقى اختياري، زي لما MongoDB يولده
  @IsString({ message: 'ID لازم يكون نص' })
  readonly id?: string;

  @IsString({ message: 'الاسم لازم يكون نص' })
  @MinLength(2, { message: 'الاسم لازم يكون 2 حروف على الأقل' })
  @MaxLength(50, { message: 'الاسم ممكن يكون 50 حرف كحد أقصى' })
  readonly name: string;

  @IsEmail({}, { message: 'الإيميل غير صحيح' })
  readonly email: string;

  @IsString({ message: 'كلمة السر لازم تكون نص' })
  @MinLength(6, { message: 'كلمة السر لازم تكون 6 أحرف على الأقل' })
  readonly pass: string;
}
