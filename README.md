# Mondc
### Mondc is a package written in typescript that helps you creating commands and listeners in discord.js

## CommandManager
First, you need to know how to create commands, for creating commands you need classes that extends from 'Command', here is an example

```ts
// TypeScript
export default class ExampleCommand implements Command {
    name;
    aliases;
    permissions;
    client;


    // if you need you can request the bot client in constructor to use it in the command
    constructor(client: Client) {
        this.name = "example";
        this.aliases = ["test", "alias"];
        this.permissions = [] // no permissions required
        this.client = client; // null if you don't need client
    }

    execute(message: Message) {
        message.channel.send("Hello World");
    }

}
```
And here is the command manager, with the command manager you can register commands in the CommandRegistry that you can use to get the commands in a message listener to create the commands.
```js
const commandManager = new CommandManager();
commandManager.register(new ExampleCommand());
```

## Creating command listener