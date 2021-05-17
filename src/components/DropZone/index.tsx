import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  ButtonWrapper,
  DropZoneDiv,
  DroppedFileDiv,
  DropZoneWrapper,
  KeyInputDiv,
} from "./dropzone.elements";
import { useDropzone } from "react-dropzone";
import { Button, ButtonInput, InputDiv } from "../../styles/uiKit";
import { BsChevronDown } from "react-icons/bs";
import { FaFile } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cryptAction } from "../../actions/encryptActions";
import { RootStore } from "../../store";
import { CRYPT_ERROR, CRYPT_RESET } from "../../actions/types";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const DropZone = () => {
  const [file, setFile] = useState<File | undefined>();
  const [pass, setPass] = useState<string | undefined>();
  const [decrypt, setDecrypt] = useState(false);
  const [fileLoading, setFileLoading] = useState(false);
  const dispatch = useDispatch();
  const { fileURL, fileName, key, error } = useSelector(
    (state: RootStore) => state.crypto
  );

  const onDrop = useCallback((file: File[]) => {
    setFileLoading(true);
    setTimeout(() => {
      if (file[0]) {
        setFile(file[0]);
        setFileLoading(false);
      }
    }, 1000);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleCrypt = async (type: string) => {
    if (type === "enc") setDecrypt(false);
    if (file) {
      const reader = new FileReader();
      if (type === "dec") {
        if (pass) {
          reader.onload = async (fileRead) => {
            console.log(fileRead);
            if (!file) return null;
            dispatch(cryptAction(file, reader.result, type, pass));
          };
          reader.readAsText(file!);
        } else
          dispatch({
            type: CRYPT_ERROR,
            payload: {
              error: "You must insert the key",
            },
          });
      } else {
        reader.onload = async (fileRead) => {
          console.log(fileRead);
          if (!file) return null;
          dispatch(cryptAction(file, reader.result, type, pass));
        };
        reader.readAsDataURL(file!);
      }
    }
  };

  const handleReset = () => {
    setFile(undefined);
    setDecrypt(false);
  };
  const uploadArea = useMemo(
    () =>
      !file ? (
        <>
          <ButtonInput>
            <div>
              <FaFile style={{ marginRight: "10px" }} />
              {"Choose file!"}
            </div>
            <div>
              <BsChevronDown />
            </div>
          </ButtonInput>
          <input {...getInputProps()} />
          <p>or drop files here</p>
        </>
      ) : (
        <DroppedFileDiv>
          <FaFile style={{ marginRight: "10px" }} />
          {file?.name || "File"}
          <RiDeleteBin2Fill
            style={{ height: "18px", marginTop: "15px", cursor: "pointer" }}
            onClick={handleReset}
          />

          <p style={{ marginTop: "-20px" }}>{error}</p>
        </DroppedFileDiv>
      ),
    [file, error]
  );

  return (
    <>
      <DropZoneWrapper>
        <DropZoneDiv {...getRootProps({ refKey: "innerRef" })}>
          {uploadArea}
        </DropZoneDiv>
        <ClipLoader loading={fileLoading} />
      </DropZoneWrapper>
      {decrypt && (
        <KeyInputDiv>
          <input
            type="text"
            placeholder="secret key"
            onChange={(e) => setPass(e.target.value)}
          />

          <Button onClick={() => handleCrypt("dec")}>Confirm</Button>
        </KeyInputDiv>
      )}
      <ButtonWrapper>
        <Button encrypt onClick={() => handleCrypt("enc")}>
          Encrypt
        </Button>
        <Button onClick={() => setDecrypt(true)}>Decrypt</Button>
      </ButtonWrapper>
    </>
  );
};

export default DropZone;
