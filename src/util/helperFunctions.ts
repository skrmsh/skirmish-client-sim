import { Configuration } from "../Api/generated";

export function getHTTPUrl(serverHost: string, secureConnection: boolean) {
  console.log("Generating HTTP URL with", serverHost, secureConnection);
  // remove trailing slashes from serverHost
  return `http${secureConnection ? "s" : ""}://${serverHost.replace(
    /\/+$/,
    ""
  )}`;
}
export function getApiConfiguration(
  serverHost: string,
  secureConnection: boolean
): Configuration {
  return new Configuration({
    basePath: getHTTPUrl(serverHost, secureConnection),
  });
}
