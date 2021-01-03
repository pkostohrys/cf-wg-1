import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: () => ({
                uri: 'mongodb://local.codefresh.io:27017/nest',
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true,
            }),
        }),
        UserModule,
        AuthModule,
    ],
})
export class AppModule {}
