import { posts as data } from "../data/posts";
import { generateId } from "../utils";

let posts = [...data];

function getPosts() {
  return posts;
}

function getPostsByUser(userId) {
  return posts.filter(post => post.userId === userId);
}

function getPostById(id) {
  return posts.find(post => post.id === id);
}

function addPost(post) {
  const newPost = {
    id: generateId(posts),
    ...post
  };
  posts.unshift(newPost);
  return newPost;
}

function updatePostTitle(id, title) {
  const postToUpdate = posts.find(post => post.id === id);
  if (postToUpdate) {
    postToUpdate.title = title;
    return postToUpdate;
  } else {
    return null;
  }
}

function updatePostBody(id, body) {
  const postToUpdate = posts.find(post => post.id === id);
  if (postToUpdate) {
    postToUpdate.body = body;
    return postToUpdate;
  } else {
    return null;
  }
}

function updatePost(id, updatedPost) {
  const postToUpdate = posts.find(post => post.id === id);
  if (postToUpdate) {
    if (updatedPost.title) {
      postToUpdate.title = updatedPost.title;
    }
    if (updatedPost.body) {
      postToUpdate.body = updatedPost.body;
    }
    return postToUpdate;
  } else {
    return null;
  }
}

function deletePostBy(id) {
  const index = posts.findIndex(post => post.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

function deletePostsByUserId(userId) {
  const initialLength = posts.length;
  posts = posts.filter(post => post.userId !== userId);
  return initialLength !== posts.length;
}
