import JSEncrypt from "jsencrypt";

// encryption
const encrypt = new JSEncrypt();
const publicKey =
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD3zgqDy0U/bbzyNfxr1Z79WRyK" +
  "nu9iXPxpcG8+F7L3CbJDmXNcORmY00HabXesn2VJpwF3OJjBk2LbNCzfbX6Wmk14" +
  "DfDGDLroUhrSoguBKfFU8KZ43vpvk3y0rJSf6RIyh6/lKA+6dV9Tb+xpAs1UU/lw" +
  "Vl9Pt16BnO0xQHMfFwIDAQAB";
encrypt.setPublicKey(publicKey);

const GLOBAL = "http://172.16.0.173:30777/";
// const GLOBAL = ".."

export default {
  base: "/test",
  // res: GLOBAL + "/Resources/",
  // ws: GLOBAL + "/WS",
  // server: GLOBAL,
  // geoserver: GLOBAL + "/geoserver",
  statistics: false,
  config: {
    szCenter: [22.64, 114.21]
  },
  file: {
    manage: GLOBAL + "/ifofiles"
  },
  cookieID: "SZQJXTH",
  encrypt: data => {
    let dataStr = JSON.stringify(data);
    return encrypt.encrypt(dataStr);
  }
};
