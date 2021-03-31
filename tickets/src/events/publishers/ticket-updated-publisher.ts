import { Publisher, Subjects, TicketUpdatedEvent } from '@tansprabahal/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
	subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
