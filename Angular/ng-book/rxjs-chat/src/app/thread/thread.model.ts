import { Utilities } from "@chen/common";
import { Message } from "../message/message.model";

export class Thread {
  id: string;
  lastMessage: Message;
  name: string;
  avatarSrc: string;

  constructor(id?: string, name?: string, avatarSrc?: string) {
    this.id = id || Utilities.uuid();
    this.name = name;
    this.avatarSrc = avatarSrc;
  }
}
