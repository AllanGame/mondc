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
    
          const command = args.shift().toLowerCase();
          const cmd = commands.get(command) || 
          aliases
          .forEach(x => x.aliases && x.aliases.includes(command));
          
          if (!cmd) {
              return;
          }
    
          if(!message.member.permissions.has(cmd.permissions as any)) {
              return;
          }
    
          cmd.execute(message);
    } 

}