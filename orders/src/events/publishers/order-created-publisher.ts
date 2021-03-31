import { Publisher, OrderCreatedEvent, Subjects } from '@tansprabahal/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
	subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
