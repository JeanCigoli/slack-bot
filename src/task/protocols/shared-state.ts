import { Message } from '@/domain/models';

export type SharedState = Partial<{
  listMessages: Pick<Message, 'text' | 'blocks'>[];
  filterMessages: Pick<Message, 'text' | 'blocks'>[];
}>;
