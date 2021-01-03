import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.schema';

@Controller('/api/user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	createUser(@Body() userDto: CreateUserDto): Promise<User> {
		return this.userService.createUser(userDto);
	}
}
