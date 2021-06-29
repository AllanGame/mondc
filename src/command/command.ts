import { Client, Message } from "discord.js";
import Actionable from "../manager/actionable";

export default interface Command extends Actionable {
    
    name: string;
    aliases: string[];
    permissions: string[];
    client: Client;
    execute(message: Message): void;
}