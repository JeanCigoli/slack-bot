import { FilterMessages } from '@/domain/usecases';

export class DbFilterMessages implements FilterMessages {
  async filter(allMessages: FilterMessages.Params): FilterMessages.Result {
    const keys = ['PIX', 'BOLETO'];

    const messages = allMessages.filter((value) => {
      const canSendMessage = keys.map((key) =>
        value.text.toUpperCase().includes(key)
      );

      return canSendMessage.includes(true);
    });

    return messages;
  }
}
