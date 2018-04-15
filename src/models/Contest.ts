import { Sendable } from './Sendable';
import { Task } from './Task';

export class Contest implements Sendable {
  constructor(public tasks: Sendable[]) {
  }

  send(): Promise<void> {
    return new Promise(async (resolve) => {
      for (let i = 0; i < this.tasks.length; i++) {
        await this.tasks[i].send();
      }

      resolve();
    });
  }
}
