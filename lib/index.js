"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerManager = exports.CommandManager = exports.aliases = exports.commands = void 0;
const command_registry_1 = require("./command/command.registry");
Object.defineProperty(exports, "commands", { enumerable: true, get: function () { return command_registry_1.commands; } });
Object.defineProperty(exports, "aliases", { enumerable: true, get: function () { return command_registry_1.aliases; } });
const command_manager_1 = require("./command/command.manager");
Object.defineProperty(exports, "CommandManager", { enumerable: true, get: function () { return command_manager_1.CommandManager; } });
const listener_manager_1 = require("./listener/listener.manager");
Object.defineProperty(exports, "ListenerManager", { enumerable: true, get: function () { return listener_manager_1.ListenerManager; } });
//# sourceMappingURL=index.js.map