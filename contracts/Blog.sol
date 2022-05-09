//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counter.sol"

contract Blog {

    string public name;
    string public owner;

    using Counters for Counters.Counter;
    Counters.Counter private _postIds;

    struct Post {
        uint id;
        string title;
        string content;
        bool published;
    }

    mapping(uint => Post) private idToPost;
    mapping(string => Post) private hashToPost;


    event PostCreated(uint id, string title, string hash);
    event PostUpdated(uint id, string title, string hash, bool published);

    constructor(string memory _name){
        console.log("Deploying Blog with name:", _name);
        name = _name;
        owner = msg.sender;
    }

    function updateName(string memory _name) public {
        name = _name;
    }

    function transferOwnership(string memory _newOwner) public onlyOwner {
        owner = _newOwner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function fetchPosts(string memory _hash) public view return(Post memory) {
        return hashToPost[_hash];
    }

    function createPost(string memory _title, string memory _hash) public onlyOwner {
        _postIds.increment();
        uint postId = _postIds.current();
        Post storage post = idToPost[postId];
        post.id = postId;
        post.title = title;
        post.content = _hash;
        post.published = true;
        hashToPost[hash] = post;
        emit PostCreated{postId, _title, _hash}
    }

    function updatePost(uint _postId, string memory _title, string memory _hash, bool memory _published) public onlyOwner {
        Post storage post = idToPost[_postId];
        post.title = _title;
        post.published = _published;
        post.content = _hash;
        idToPost[postId] = post;
        hashToPost[hash] = post;
        emit PostUpdated(post.id, _title, _hash, _pusblished);
    }


    function fetchPosts() public view returns(Post[] memory) {
        uint itemCounter = _postIds.current();

        Post[] memory posts = new Post[](itemCounter);

        for(uint i=0; i < itemCounter; i++) {
            uint currentId = i + 1;
            Post storage currentItem = idToPost[currentId];
            posts[i] = currentItem;
        }
        return posts;
    }
}
