class Logger {
  private static _instance: Logger;

  public static get Instance() {
    return this._instance || (this._instance = new Logger());
  }

  public constructor() {}

  public static log(...text: string[]) {
    return Logger.Instance._log(...text);
  }

  public rawText = "";
  public _log(...text: string[]) {
    this.rawText = this.rawText.concat(...text, "\n");
    console.log("log", this.rawText);
    this.onLogCallbacks.forEach((cb) => cb(this.rawText));
  }

  private onLogCallbacks: CallableFunction[] = [];

  public onLog(cb: CallableFunction) {
    this.onLogCallbacks.push(cb);
  }
}

export default Logger;
