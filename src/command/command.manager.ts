import Manager from "../manager/manager";
import Command from "./command";
import { aliases, commands } from './command.registry';

export class CommandManager implements Manager {
    
    debug: boolean;

    constructor(props={debug: true}) {
        this.debug = props.debug;

    }

    register(command: Command): void {
        commands.set(command.name, command);
        if(this.debug === true) {
            console.log(
                `Registering command ${command.name}`
            )
        }

        if(command.aliases.length > 0) {
            aliases.set(command.aliases, command);
            if(this.debug === true) {
                console.log(
                    `[${command.name}] Registering aliases ${command.aliases.join(", ")}`
                )
            }
        }

    }
    
}