import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Message } from "./message.model";
import { Thread } from "../thread/thread.model";
import { User } from "../user/user.model";

interface IMessagesOperation extends Function {
  (messages: Array<Message>): Array<Message>;
}

@Injectable()
export class MessagesService {
  // a stream that publishes new messages only once
  newMessages: Subject<Message> = new Subject<Message>();

  //`messages` is a stream that emits an array of the most up to date messages
  messages: Observable<Array<Message>>;

  // `updates` receives _operations_ to be applied to our `messages`
  // it's a way we can perform changes on *all* messages (that are currently
  // stored in `messages`)
  updates: Subject<any> = new Subject<any>();

  constructor() {
    this.messages = this.updates.scan(
      (messages: Array<Message>, operation: IMessagesOperation) => {
        return operation(messages);
      }
    );
  }

  messagesForThreadUser(thread: Thread, user: User) {
    return this.newMessages.filter((msg: Message) => {
      //belongs to given thread but isn't authored by given user
      return msg.thread.id === thread.id && msg.author.id !== user.id;
    });
  }
}
