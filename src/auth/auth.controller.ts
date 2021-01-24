import { Controller, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from './roles.decorator';
import { UserLoginDto } from './dto/user-login.dto';
import { AuthService } from './auth.service';
import { LoginStatus } from './interfaces/login-status.interfaces';
import { RolesBasedGuard } from './auth.guard';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/auth/login')
    async login(@Body() userLoginDto: UserLoginDto): Promise<LoginStatus> {
        return this.authService.login(userLoginDto);
    }

    @UseGuards(AuthGuard('jwt'), RolesBasedGuard)
    @Roles('admin')
    @Get('/closed')
    async closed() {
        return 'can access';
    }
}
