import "./css/common.css";
import "./css/core.css";
import "./css/bodyMain.css";
import { useState } from "react";
import {ADD_POST } from "./js/fetchLibrary.js";
import { post } from "./js/networkHander";

export default function PostForm() {
  const [form, setForm] = useState({ header: "", content: "" });

  function onSubmit(event) {
    event.preventDefault();
    post(ADD_POST, form);
  }

  function onChanged(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <form
      id="post-form"
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
        <input
          type="text"
          name="header"
          placeholder="Give your post a title!"
          aria-label="Input Text Field to add a title to your post."
          onChange={(e) => {
            onChanged(e);
          }}
        ></input>
        <textarea
          width="100px"
          height="100px"
          name="content"
          label="Input Text Area to create your post!"
          placeholder="Enter your post content here."
          onChange={(e) => {
            onChanged(e);
          }}
        ></textarea>
      <button name="submit-btn">Post</button>
    </form>
  );
}
