import { Dispatch } from "react";
import { CryptAction, CryptDispachTypes } from "../interfaces/actions";
import crypto from "crypto-extra";
import CryptoJS from "crypto-js";
import { CRYPT_ERROR, CRYPT_LOADING, CRYPT_SUCCESS } from "./types";

export const cryptAction =
  (
    file: File | undefined,
    data: string | ArrayBuffer | null | undefined,
    type: string,
    pass: string = ""
  ) =>
  async (dispatch: Dispatch<CryptDispachTypes>) => {
    dispatch({
      type: CRYPT_LOADING,
      payload: {},
    });
    const cryptWorker = new Worker("./cryptoWorker.js");
    try {
      console.log(type);
      console.log(data);

      if (typeof data !== "string") return null;
      if (type === "enc") {
        const randomKey = await crypto.randomKey(32);

        const key = btoa(randomKey);
        cryptWorker.postMessage({ data, key: randomKey, type });
        cryptWorker.onmessage = (e) => {
          const fileURL = e.data;
          const fileName = `${file!.name}.enc`;
          dispatch({
            type: CRYPT_SUCCESS,
            payload: {
              fileURL,
              fileName,
              key,
              type,
            },
          });
        };
      } else {
        const key = atob(pass);
        cryptWorker.postMessage({ data, key, type });
        cryptWorker.onmessage = (e) => {
          const fileURL = e.data;
          const fileName = `${file!.name.replace(".enc", "")}`;
          dispatch({
            type: CRYPT_SUCCESS,
            payload: {
              fileURL,
              fileName,
              key: "",
              type,
            },
          });
        };
      }
      cryptWorker.onerror = (e) => {
        throw Error;
      };
    } catch (err) {
      dispatch({
        type: CRYPT_ERROR,
        payload: {
          error: "there was a problem with the file",
        },
      });
    }
  };
