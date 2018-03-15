import { Utilities } from "@chen/common";

export class User {
  public id: string;
  constructor(public name: string, public avatarSrc: string) {
    this.id = Utilities.uuid();
  }
}
