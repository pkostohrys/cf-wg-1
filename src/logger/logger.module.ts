import { Module } from '@nestjs/common';
import { BestLogger } from './custom.logger';

@Module({
    providers: [BestLogger],
    exports: [BestLogger],
})
export class LoggerModule {}
