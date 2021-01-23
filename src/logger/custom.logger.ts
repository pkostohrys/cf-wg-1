import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class BestLogger implements LoggerService {
    error(message: any, trace?: string, context?: string): any {
        console.error(message);
    }

    log(message: any, context?: string): any {
        console.log(message);
    }

    warn(message: any, context?: string): any {
        console.log(message);
    }
}
