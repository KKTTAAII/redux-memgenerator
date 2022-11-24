import React, { useState } from "react";
import Meme from "./Meme";
import { useDispatch, useSelector } from "react-redux";
import "./MemeInput.css";

const INITIAL_FORMDATA = {
  memeURL: "",
  topText: "",
  bottomText: "",
};

const MemeInput = () => {
  const [formData, setFormData] = useState(INITIAL_FORMDATA);
  const allMemesInfo = useSelector(store => store.allMemes);
  const dispatch = useDispatch();

  const addMeme = input => dispatch({ type: "ADD", inputInfo: input });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addMeme(formData);
  };

  const memes = allMemesInfo.map((memeInfo, i) => (
    <Meme memeInfo={memeInfo} key={i} ind={i}/>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="memeURL">Meme URL</label>
        <input
          type="text"
          name="memeURL"
          id="memeURL"
          onChange={handleChange}
        ></input>

        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          name="topText"
          id="topText"
          onChange={handleChange}
        ></input>

        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          id="bottomText"
          onChange={handleChange}
        ></input>

        <button>Create a meme</button>
      </form>

      <div className="MemeInput-meme-container">{memes}</div>
    </div>
  );
};

export default MemeInput;
