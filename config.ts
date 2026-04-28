import { Config } from "./types.js";

export const config: Config = {
    name: "BasedProxy",
    bindHost: "0.0.0.0",
    bindPort: Number(process.env.PORT) || 10000,
    maxPlayers: 20,
    motd: {
        iconURL: null,
        l1: "hi",
        l2: "lol"
    },
    server: {
        host: "unnamed18889.aternos.me",
        port: 34621
    },
    security: { // provide path to key & cert if you want to enable encryption/secure websockets
        enabled: false,
        key: null,
        cert: null
    }
}

export const BRANDING: Readonly<string> = Object.freeze("EaglerXProxy")
export const VERSION: Readonly<string> = "1.0.0"
export const NETWORK_VERSION: Readonly<string> = Object.freeze(BRANDING + "/" + VERSION)
