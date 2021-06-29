import { Client } from "discord.js";
import Command from "../command/command";
import Actionable from "./actionable";

export default interface Manager {

    debug: boolean;

    
    register(registable: Actionable, client: Client): void;
    
}