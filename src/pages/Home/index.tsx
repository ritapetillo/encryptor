import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  HomeContainer,
  TextWrapper,
  DroppedFileDiv,
  ButtonWrapper,
} from "./home.elements";
import { Button, InputDiv } from "../../styles/uiKit";
import { FaFile } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import DropZone from "../../components/DropZone";
import { CRYPT_RESET } from "../../actions/types";

const Home = () => {
  const dispatch = useDispatch();
  const { fileURL, fileName, key, error, type } = useSelector(
    (state: RootStore) => state.crypto
  );
  const handleReset = () => {
    dispatch({
      type: CRYPT_RESET,
    });
  };

  return (
    <HomeContainer>
      <TextWrapper>
        <h2>fdsfjsdpofjdpspsjg</h2>
        <p>
          fdsfdsfdsfdsgfdsfdsfdsfdshjfgjghjtyighhrfth4564565dfedfbhvkdfbgskdfbgkdfghdfklhew4ulo;i;o';fgkk;dfllgkdf;heroh
        </p>
      </TextWrapper>
      {fileURL ? (
        <>
          <DroppedFileDiv>
            <FaFile style={{ marginRight: "10px" }} />
            {fileName}
          </DroppedFileDiv>
          {type === "enc" && (
            <>
              {" "}
              <p>Your encryption key:</p>
              <InputDiv>
                <span>{key}</span>
                <Button
                  onClick={() => {
                    if (key) navigator.clipboard.writeText(key);
                  }}
                >
                  Copy
                </Button>
              </InputDiv>
            </>
          )}
          <ButtonWrapper>
            <a href={fileURL} download={fileName}>
              <Button style={{ backgroundColor: "orange" }}>Download</Button>{" "}
            </a>
            <Button onClick={handleReset}>Done</Button>
          </ButtonWrapper>
        </>
      ) : (
        <DropZone />
      )}
    </HomeContainer>
  );
};

export default Home;
