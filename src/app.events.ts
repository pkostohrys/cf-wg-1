import { Injectable } from '@nestjs/common';

@Injectable()
export class AppLifecycleEvents {
    onApplicationShutdown(signal: string) {
        console.log('Bye ' + signal); // e.g. "SIGINT"
    }
}
