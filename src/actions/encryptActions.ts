import { Dispatch } from "react";
import { CryptAction, CryptDispachTypes } from "../interfaces/actions";
import crypto from "crypto-extra";
import CryptoJS from "crypto-js";
import { CRYPT_ERROR, CRYPT_LOADING, CRYPT_SUCCESS } from "./types";

export const cryptAction =
  (file: File | undefined, type: string) =>
  async (dispatch: Dispatch<CryptDispachTypes>) => {
    dispatch({
      type: CRYPT_LOADING,
      payload: {},
    });
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (!file) return null;
        const data: string | ArrayBuffer | null = reader.result;
        if (!data || typeof data !== "string") return null;
        if (type === "enc") {
          const randomKey = await crypto.randomKey(32);
          const key = btoa(randomKey);
          const encrypted = CryptoJS.AES.encrypt(data, key);
          const fileURL = "data:application/octet-stream," + encrypted;
          const fileName = `${file.name}.enc`;
          dispatch({
            type: CRYPT_SUCCESS,
            payload: {
              fileURL,
              fileName,
              key,
              type,
            },
          });
        }
        reader.readAsDataURL(file);
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
