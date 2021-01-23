import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { UserListener } from './user.listener';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        RabbitMQModule.forRoot(RabbitMQModule, {
            exchanges: [
                {
                    name: 'users',
                    type: 'direct',
                },
            ],
            uri: 'amqp://guest:guest@local.codefresh.io:5672',
        }),
    ],
    controllers: [UserController],
    providers: [UserService, UserListener],
    exports: [UserService],
})
export class UserModule {}
