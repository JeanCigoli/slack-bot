export type Message = {
  clientMsgId?: string;
  type: string;
  text: string;
  user: string;
  ts: string;
  team?: string;
  blocks: any[];
};
