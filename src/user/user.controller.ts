import { Body, Controller, Get, Post, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.schema';

@Controller('/api/user')
export class UserController {
    private readonly logger = new Logger(UserController.name);

    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() userDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(userDto);
    }

    @Get()
    getUser() {
        this.logger.log('Hola codefresh');
        return {};
    }
}
