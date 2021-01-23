import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BestLogger } from './logger/custom.logger';

const APP_NAME = 'cf-wg-1';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle(APP_NAME)
        .setDescription(`The ${APP_NAME} API description`)
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);

    app.useLogger(new BestLogger());

    await app.startAllMicroservicesAsync();
    await app.listen(3000);
}
bootstrap();
