import React from "react";
import "./Meme.css";
import { useDispatch } from "react-redux";

const Meme = ({ memeInfo, ind }) => {
  const dispatch = useDispatch();
  const remove = ind => dispatch({ type: "REMOVE", index: ind });
  return (
    <div className="Meme-container">
      <button className="Meme-remove-button" onClick={() => remove(ind)}>
        X
      </button>
      <div className="Meme-topText">{memeInfo.topText}</div>
      <img src={memeInfo.memeURL} />
      <div className="Meme-bottomText">{memeInfo.bottomText}</div>
    </div>
  );
};

export default Meme;
