import { useRef, useState } from "react";
import Logger from "../../util/logger";
import "./log.css";

function LogDisplay() {
  const [logText, setLogText] = useState("");

  const bottomEl = useRef<null | HTMLDivElement>(null);

  Logger.Instance.onLog((rawText: string) => {
    setLogText(rawText);
    console.log(rawText);
    setTimeout(() => {
      bottomEl?.current?.scrollIntoView({ behavior: "auto", block: "end" });
    }, 50);
  });

  return (
    <>
      <div id="logContainer" className="log" ref={bottomEl}>
        {logText}
      </div>
    </>
  );
}

export default LogDisplay;
