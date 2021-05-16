import React, { useCallback, useMemo, useState } from "react";
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
import { useDispatch } from "react-redux";
import { cryptAction } from "../../actions/encryptActions";
const Home = () => {
  const [file, setFile] = useState<File | undefined>();
  const onDrop = useCallback((file: File[]) => {
    setFile(file[0]);
  }, []);
  const dispatch = useDispatch();

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
        </DroppedFileDiv>
      ),
    [file]
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
        <Button encrypt onClick={() => dispatch(cryptAction(file, "enc"))}>
          Encrypt
        </Button>
        <Button>Decrypt</Button>
      </ButtonWrapper>
    </HomeContainer>
  );
};

export default Home;
