import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>,
    ) {}

    async createUser(userDto: CreateUserDto): Promise<User> {
        const user = await new this.userModel(userDto);
        return user.save();
    }
}
