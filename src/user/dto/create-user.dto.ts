import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsEmail()
    readonly username: string;

    @ApiProperty()
    @IsString()
    readonly password: string;
}
