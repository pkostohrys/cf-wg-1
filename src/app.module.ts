import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './config/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get('database.uri'),
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true,
            }),
            inject: [ConfigService],
        }),
        UserModule,
        AuthModule,
    ],
})
export class AppModule {}
