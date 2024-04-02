import { comments as data } from "../data/comments";
import { generateId } from "../utils";

let comments = [...data];

function getCommentById(id) {
  return comments.find(comment => comment.id === id);
}

function getCommentsByPostId(postId) {
  return comments.filter(comment => comment.postId === postId);
}

function updateCommentBody(id, body) {
  const index = comments.findIndex(comment => comment.id === id);
  if (index !== -1) {
    comments[index].body = body;
    return true; // update successful
  }
  return false; // commentId is not found
}

function deleteCommentById(id) {
  const index = comments.findIndex(comment => comment.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
    return true; // deletion is successful
  }
  return false; // commentId is not found
}

function generateId(arr) {
  return arr.length > 0 ? Math.max(...arr.map(item => item.id)) + 1 : 1;
}

function addComment(comment) {
  const id = generateId(comments);
  comment.id = id;
  comments.push(comment);
  return id; // generated id of the new comment
}

export { getCommentById, getCommentsByPostId, updateCommentBody, deleteCommentById, addComment };