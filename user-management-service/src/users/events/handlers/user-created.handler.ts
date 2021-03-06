import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { UserCreatedEvent } from "../impl/user-created.event";
import { Logger } from "@nestjs/common";



@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  
  handle(event: UserCreatedEvent) {
    Logger.log("In Event", 'UserCreatedEvent');
  }

}