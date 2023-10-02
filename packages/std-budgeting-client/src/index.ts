import { Button } from "./component/button";

console.log(Button);

export const add = (...args: number[]) => args.reduce((a, b) => a + b, 0);
