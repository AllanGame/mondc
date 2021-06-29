"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandManager = void 0;
const command_registry_1 = require("./command.registry");
class CommandManager {
    constructor(props = { debug: true }) {
        this.debug = props.debug;
    }
    register(command) {
        command_registry_1.commands.set(command.name, command);
        if (this.debug === true) {
            console.log(`Registering command ${command.name}`);
        }
        if (command.aliases.length > 0) {
            command_registry_1.aliases.set(command.aliases, command);
            if (this.debug === true) {
                console.log(`[${command.name}] Registering aliases ${command.aliases.join(", ")}`);
            }
        }
    }
}
exports.CommandManager = CommandManager;
//# sourceMappingURL=command.manager.js.map