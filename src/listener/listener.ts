import Actionable from "../manager/actionable";

export default interface Listener extends Actionable {
    name: string;
    event: string;
    execute(...args: any): void;
}