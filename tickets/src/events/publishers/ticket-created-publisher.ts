import { Publisher, Subjects, TicketCreatedEvent } from '@tansprabahal/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
	subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
