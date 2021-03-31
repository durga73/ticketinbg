import { Subjects, Publisher, PaymentCreatedEvent } from '@tansprabahal/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
