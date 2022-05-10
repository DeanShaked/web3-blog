const { expect } = require("chai");
const { ethers } = require("hardhat");

let Blog = null;
let blog = null;

describe("Blog", function () {

  beforeEach(async ()=> {
    // Deploy the smart contract
    Blog = await ethers.getContractFactory('Blog');
    blog = await Blog.deploy("My Blog");
    await blog.deployed();
  });

  it('Should create a Post', async () => {
    // Create a post
    await blog.createPost("My first post","12345");

    // Fetch posts
    const posts = await blog.fetchPosts();

    // Test results
    expect(posts[0].title).to.equal("My first post");
  })


  it('Should edit a post', async () => {
    // Create a post
    await blog.createPost("My second post","12345");

    // Update the post
    await blog.updatePost(1, "My updated post", "23456", true);

    // Fetch posts
    const posts = await blog.fetchPosts();

    // Test the post title
    expect(posts[0].title).to.equal("My updated post");
  })

  it('Should update the name', async () => {

    const name = await blog.name();

    console.log('name', name)
    // Test the blog name
    expect(await blog.name()).to.equal("My Blog");

    // Update the blog name
    await blog.updateName('My new blog');

    // Test the updated blog name
    expect(await blog.name().to.equal("My new blog"));
  })


});
