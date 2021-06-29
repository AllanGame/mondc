import Command from "./command";

const commands: Map<string, Command> = new Map()
const aliases: Map<string[], Command> = new Map()

export {
    commands,
    aliases
}