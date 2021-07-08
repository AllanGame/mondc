import { client } from "..";
import { Listener } from "mondc";

export default class ReadyListener implements Listener {
    name;
    event;

    constructor() {
        this.name = "ReadyListener";
        this.event = 'ready';
    }

    execute() {
        console.log('Logged in as ' + client.user.tag);
    }
}