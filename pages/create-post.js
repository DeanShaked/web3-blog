// App
import { useState, useRef, userEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// Web3 Libraries
import { ethers } from "ethers";
import { create } from "ipfs-http-client";

// Smart Contract
import Blog from "../artifacts/contracts/Blog.sol/Blog.json";
import { contractAddress } from "../config";

// Styles
import { css } from "@emotion/css";

const client = create("https://ipfs.infura.io:5001/api/v0");

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const initialState = { title: "", content: "" };

function CreatePost() {
  const [post, setPost] = useState(initialState);
  const [image, setImage] = useState(null);
  const [loaded, setLoaded] = useState(false);
}
export default CreatePost;
