import { Client, Message } from 'discord.js';
import { Command, CommandManager } from 'mondc';

const commandManager = new CommandManager();

class ExampleCommand implements Command {
    name: string;
    aliases: string[];
    permissions: string[];
    client: Client;
    execute(message: Message): void {
        throw new Error('Method not implemented.');
    }
    
}

class ExampleCommand2 implements Command {
    name: string;
    aliases: string[];
    permissions: string[];
    client: Client;
    execute(message: Message): void {
        throw new Error('Method not implemented.');
    }
    
}

commandManager.register(new ExampleCommand(), new ExampleCommand2());
