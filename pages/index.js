// React Context
import { useContext } from "react";
import { AccountContext } from "../context";

// Next Router
import { useRouter } from "next/router";
import Link from "next/link";

// Config
import { contractAddress, ownerAddress } from "../config";

// Web3 Tools
import { ethers } from "ethers";

// Smart Contract
import Blog from "../artifacts/contracts/Blog.sol/Blog.json";

// Styles
import { css } from "@emotion/css";

export default function Home(props) {
  const { posts } = props;
  const account = useContext(AccountContext);

  const router = useRouter();
  async function navigate() {
    router.push("/create-post");
  }

  return (
    <div>
      <div className={postsList}>
        {[
          posts.map((post, index) => {
            return (
              <Link href={`/posts/${post[2]}`} key={index}>
                <a>
                  <div className={linkStyle}>
                    <p className={postTitle}>{post[1]}</p>
                    <div className={arrowContainer}>
                      <img
                        src="/right-arrow.svg"
                        alt="Right Arrow"
                        className={smallArrow}
                      ></img>
                    </div>
                  </div>
                </a>
              </Link>
            );
          }),
        ]}
      </div>
    </div>
  );
}

export async function getServerSideProps() {}
