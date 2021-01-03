import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

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
	],
})
export class AppModule {}
