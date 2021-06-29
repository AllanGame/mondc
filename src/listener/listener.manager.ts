import { Client } from "discord.js";
import Manager from "../manager/manager";
import Listener from "./listener";
import DefaultCommandListener from "./summary/default.command.listener";

export class ListenerManager implements Manager {
    
    debug: boolean;
    commandListener: Listener; 
    client: Client;   

    constructor(client: Client, props={debug: true, prefix: "!", commandListener: DefaultCommandListener}) {
        this.debug = props.debug;
        this.commandListener = new props.commandListener(props.prefix);
        
        if(this.commandListener !== null) {
            this.client.on(this.commandListener.event as any, this.commandListener.execute)
        }
    }

    register(listener: Listener): void {
        this.client.on(listener.event as any, listener.execute as any);
        if(this.debug === true) {
            console.log(`Registering listener ${listener.name} (Type: ${listener.event})`)
        }
    }
    
}