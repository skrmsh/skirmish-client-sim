import { io } from "socket.io-client";
import { getWSUrl } from "./helperFunctions";

class SocketManager {
  private static _instance: SocketManager;

  /**
   * Returns the current instance of SKBLEManager
   */
  public static get Instance() {
    return this._instance || (this._instance = new SocketManager());
  }

  private socket: any; // todo figure out correct type :D

  public constructor() {}

  public connectToServer(host: string, secureConnection: boolean) {
    if (this.isConnected()) {
      // todo: tear down current connection
    }
    this.socket = io(getWSUrl(host, secureConnection), {
      transports: ["websocket"],
    });
    console.log("Hey there :)");

    this.socket.on("disconnect", () => {
      this.connectionStateChangedCallbacks.forEach((cb) => cb(false));
    });
    this.socket.on("connect", () => {
      this.connectionStateChangedCallbacks.forEach((cb) => cb(true));
    });
  }

  public isConnected(): boolean {
    if (!this.socket) {
      return false;
    }
    return this.socket?.connected;
  }

  public authenticate(accessToken: string) {
    this.socket.emit("join", { access_token: accessToken });
  }

  private connectionStateChangedCallbacks: Array<CallableFunction> = [];
  public onConnectionStateChanged(callback: CallableFunction) {
    this.connectionStateChangedCallbacks.push(callback);
  }
}

export default SocketManager;
