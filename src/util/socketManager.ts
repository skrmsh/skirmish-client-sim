import { io } from "socket.io-client";
import { getWSUrl } from "./helperFunctions";
import Logger from "./logger";

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

    this.socket.on("disconnect", () => {
      Logger.log("Websocket: 'disconnect' event fired");
      this.connectionStateChangedCallbacks.forEach((cb) => cb(false));
    });
    this.socket.on("connect", () => {
      Logger.log("Websocket: 'connect' event fired");
      this.connectionStateChangedCallbacks.forEach((cb) => cb(true));
    });
    this.socket.on("message", (data: string) => {
      this.onMessageCallbacks.forEach((cb) => cb(JSON.parse(data)));
      Logger.log(
        "Websocket: received data @ message:\n",
        JSON.stringify(JSON.parse(data))
      );
    });
  }

  public isConnected(): boolean {
    if (!this.socket) {
      return false;
    }
    return this.socket?.connected;
  }

  public authenticate(accessToken: string) {
    Logger.log("Websocket: authenticating");
    this.socket.emit("join", { access_token: accessToken });
  }

  public send(data: object) {
    if (this.isConnected()) {
      this.socket.emit("message", data);
      Logger.log("Websocket: sending message:\n", JSON.stringify(data));
    } else {
      Logger.log("Websocket: ERROR: Tried to send to closed socket!\n");
    }
  }

  private connectionStateChangedCallbacks: Array<CallableFunction> = [];
  public onConnectionStateChanged(callback: CallableFunction) {
    this.connectionStateChangedCallbacks.push(callback);
  }

  private onMessageCallbacks: Array<CallableFunction> = [];
  public onMessage(callback: CallableFunction) {
    this.onMessageCallbacks.push(callback);
  }
}

export default SocketManager;
