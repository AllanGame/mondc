import { Client } from "discord.js";
import Actionable from "./actionable";

export default interface Manager {

    debug: boolean;
    register(registable: Actionable[], client: Client): void;
    
}