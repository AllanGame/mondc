"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerManager = void 0;
class ListenerManager {
    constructor(props = { debug: true }) {
        this.debug = true;
        this.debug = props.debug;
    }
    register(listener, client) {
        client.on(listener.event, listener.execute);
        if (this.debug === true) {
            console.log(`Registering listener ${listener.name} (Type: ${listener.event})`);
        }
    }
}
exports.ListenerManager = ListenerManager;
//# sourceMappingURL=listener.manager.js.map