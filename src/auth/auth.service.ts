import { Injectable } from '@nestjs/common';
import { User } from '../user/user.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    validateUser(username: string, password: string): Promise<User> {
        return this.userService.findOne(username);
    }
}
