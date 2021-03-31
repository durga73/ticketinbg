import { Subjects, Publisher, OrderCancelledEvent } from '@tansprabahal/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
	subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
