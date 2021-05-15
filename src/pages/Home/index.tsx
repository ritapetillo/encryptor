import React, { useCallback, useState } from "react";
import {
  ButtonWrapper,
  DropZoneDiv,
  DropZoneWrapper,
  HomeContainer,
  TextWrapper,
} from "./home.elements";
import { useDropzone } from "react-dropzone";
import { Button, ButtonInput } from "../../styles/uiKit";
import { Row } from "../../styles/grid";
import { BsChevronDown } from "react-icons/bs";
import { FaFile } from "react-icons/fa";

const Home = () => {
  const [file, setFile] = useState<File | undefined>();
  const onDrop = useCallback((file: File[]) => {
    setFile(file[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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
          <ButtonInput>
            <div>
              <FaFile style={{ marginRight: "10px" }} />
              {file?.name || "File"}
            </div>
            <div>
              <BsChevronDown />
            </div>
          </ButtonInput>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </DropZoneDiv>
      </DropZoneWrapper>
      <ButtonWrapper>
        <Button encrypt>Encrypt</Button>
        <Button>Decrypt</Button>
      </ButtonWrapper>
    </HomeContainer>
  );
};

export default Home;
