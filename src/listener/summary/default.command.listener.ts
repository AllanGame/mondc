import { Message } from "discord.js";
import { aliases, commands } from "../../command/command.registry";
import Listener from "../listener";

export default class DefaultCommandListener implements Listener {
    name;
    event;
    prefix: string;

    constructor(prefix:string) {
        this.name = "DefaultCommandListener";
        this.event = 'message';
        this.prefix = prefix;
    }

    execute(message: Message): void {
        if(message.author.bot) {
            return;
        }
    
        if(message.webhookID) {
            return;
        }
    
        if(message.content.startsWith(this.prefix)) {
            return;
        }
    
        const args = message.content
          .slice(this.prefix.length)
          .trim()
          .split(/ +/g);
    
          const label = args.shift().toLowerCase();
          let command = commands.get(label);

          if (!command) {
              // search aliases
              for(let cmd of commands.values()) {
                  if(cmd.aliases.includes(label)) {
                      command = cmd;
                  } 
              }
  
              if(!command) {
                  return;
              }
          }
          
          if (!command) {
              return;
          }
    
          if(!message.member.permissions.has(command.permissions as any)) {
              return;
          }
    
          command.execute(message);
    } 

}