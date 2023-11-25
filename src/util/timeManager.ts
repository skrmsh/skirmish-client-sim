import Logger from "./logger";

class TimeManager {
  private static _instance: TimeManager;

  private timeOffset: number = 0;

  public static get Instance() {
    return this._instance || (this._instance = new TimeManager());
  }

  public constructor() {}

  public timesync(time: number) {
    let current = new Date().getTime() / 1000;
    this.timeOffset = current - time;
    Logger.log(`TimeManager: Timesync done, offset: ${this.timeOffset}`);
  }

  public getTime() {
    return new Date().getTime() / 1000 + this.timeOffset;
  }
}

export default TimeManager;
