import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  readonly _id: string;
  @ApiProperty()
  @IsString()
  readonly user_name: string;
  @ApiProperty()
  @IsString()
  readonly password: string;
}
 
export class EditUserDTO {
  @ApiProperty()
  readonly user_name: string;
  @ApiProperty()
  readonly password: string;
}