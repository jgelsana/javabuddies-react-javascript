//Call all functions inside services and log updated value/s
import { 
    getAllUsers,
    updateUser,
    addUser } from "./services/users";

import { 
    getCommentById, 
    getCommentsByPostId, 
    updateCommentBody, 
    deleteCommentById, 
    addComment 
  } from "./services/comments";

  import { 
    getPosts, 
    getPostsByUser, 
    getPostById, 
    addPost, 
    updatePostTitle, 
    updatePostBody, 
    updatePost, 
    deletePostBy, 
    deletePostsByUserId 
  } from "./services/posts";


console.log("Comment by ID:", getCommentById(1));
console.log("Comments by Post ID:", getCommentsByPostId(1));
console.log("Update comment body:", updateCommentBody(1, "Body"));
console.log("Delete comment by ID:", deleteCommentById(1));
console.log("Add comment:", addComment({
  postId: 1,
  body: "Comment",
  userId: 1
}));

console.log("All posts:", getPosts());
console.log("Posts by user ID:", getPostsByUser(1));
console.log("Post by ID:", getPostById(1));
console.log("Add post:", addPost({
  userId: 1,
  title: "Post Title",
  body: "Post Body"
}));
console.log("Update post title:", updatePostTitle(1, "Updated Title"));
console.log("Update post body:", updatePostBody(1, "Updated Body"));
console.log("Update post:", updatePost(1, { title: "Updated Title" }));
console.log("Delete post by ID:", deletePostBy(1));
console.log("Delete posts by user ID:", deletePostsByUserId(1));

console.log("All users:", getAllUsers());
console.log("Update user:", updateUser(1, { email: "roger@77.com" }));
console.log("Add user:", addUser({
  name: "Juan Dela Cruz",
  username: "juan_dela_cruz",
  email: "jdelacruz@example.com",
}));
