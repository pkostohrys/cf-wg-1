import { Injectable } from '@nestjs/common';
import { User } from '../user/user.schema';
import { UserService } from '../user/user.service';
import { UserLoginDto } from './dto/user-login.dto';
import { LoginStatus } from './interfaces/login-status.interfaces';
import { JwtPayload } from './interfaces/payload.interfaces';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    validateUser(username: string, password: string): Promise<User> {
        return this.userService.findOne(username);
    }

    async login(loginUserDto: UserLoginDto): Promise<LoginStatus> {
        // find user in db
        const user = await this.userService.findOne(loginUserDto.username);

        // generate and sign token
        const token = this._createToken(user.username);

        return {
            username: user.username,
            ...token,
        };
    }

    private _createToken(username): any {
        const expiresIn = process.env.EXPIRESIN;

        const user: JwtPayload = { username };
        const accessToken = this.jwtService.sign(user);
        return {
            expiresIn,
            accessToken,
        };
    }
}
