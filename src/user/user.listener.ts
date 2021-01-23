import {
    Ctx,
    MessagePattern,
    Payload,
    RmqContext,
} from '@nestjs/microservices';
import { Controller, Injectable } from '@nestjs/common';
import { RabbitRPC, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class UserListener {
    @RabbitSubscribe({
        exchange: 'users',
        routingKey: 'users',
        queue: 'users',
        queueOptions: {
            durable: false,
        },
    })
    getNotifications(msg = {}) {
        console.log(msg);
    }
}
