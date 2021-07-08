import { Client } from 'discord.js';
import { CommandManager, ListenerManager } from 'mondc'
import * as dotenv from "dotenv";
import ReadyListener from './listeners/ready';
dotenv.config();
const client = new Client()
client.login(process.env['DEMO_TOKEN'])


const commandManager = new CommandManager();

const eventManager = new ListenerManager(client);
eventManager.register(new ReadyListener());



export {
    client
}