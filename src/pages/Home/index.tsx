import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  ButtonWrapper,
  DropZoneDiv,
  DropZoneWrapper,
  HomeContainer,
  TextWrapper,
  DroppedFileDiv,
} from "./home.elements";
import { useDropzone } from "react-dropzone";
import { Button, ButtonInput } from "../../styles/uiKit";
import { Row } from "../../styles/grid";
import { BsChevronDown } from "react-icons/bs";
import { FaFile } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cryptAction } from "../../actions/encryptActions";
import { RootStore } from "../../store";
import { isPropertyAssignment } from "typescript";
import { CRYPT_ERROR } from "../../actions/types";
const Home = () => {
  const [file, setFile] = useState<File | undefined>();
  const [data, setData] = useState<string | ArrayBuffer | null>();
  const [pass, setPass] = useState<string | undefined>();
  const [decrypt, setDecrypt] = useState(false);
  const dispatch = useDispatch();
  const { fileURL, fileName, key, error } = useSelector(
    (state: RootStore) => state.crypto
  );

  const onDrop = useCallback((file: File[]) => {
    if (file[0]) setFile(file[0]);
  }, []);

  const handleCrypt = async (type: string) => {
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
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const uploadArea = useMemo(
    () =>
      !file ? (
        <>
          <ButtonInput>
            <div>
              <FaFile style={{ marginRight: "10px" }} />
              {"Upload File"}
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

          <input type="text" onChange={(e) => setPass(e.target.value)} />
          <p>{error}</p>
        </DroppedFileDiv>
      ),
    [file, error]
  );

  return (
    <HomeContainer>
      <TextWrapper>
        <h2>fdsfjsdpofjdpspsjg</h2>
        <p>
          fdsfdsfdsfdsgfdsfdsfdsfdshjfgjghjtyighhrfth4564565dfedfbhvkdfbgskdfbgkdfghdfklhew4ulo;i;o';fgkk;dfllgkdf;heroh
        </p>
      </TextWrapper>
      <DropZoneWrapper>
        <DropZoneDiv {...getRootProps({ refKey: "innerRef" })}>
          {uploadArea}
        </DropZoneDiv>
      </DropZoneWrapper>
      <ButtonWrapper>
        <Button encrypt onClick={() => handleCrypt("enc")}>
          Encrypt
        </Button>
        <Button onClick={() => handleCrypt("dec")}>Decrypt</Button>
      </ButtonWrapper>
      <DroppedFileDiv>
        <FaFile style={{ marginRight: "10px" }} />
        {fileName}
      </DroppedFileDiv>
      <p>Your encryption key:</p>
      <div>{key}</div>
      <a href={fileURL} download={fileName}>
        <Button>Download</Button>
      </a>
    </HomeContainer>
  );
};

export default Home;
