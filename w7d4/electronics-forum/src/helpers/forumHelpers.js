export const addReplyToPost = (forumPost, content, userId) => {
  const newReply = { id: forumPost.replies.length + 1, content, userId, upvotes: 0 };

  const updatedReplies = [...forumPost.replies, newReply];

  const updatedForumPost = { ...forumPost, replies: updatedReplies };

  // updatedForumPost.replies = updatedReplies

  // return {...forumPost, replies:[...forumPost.replies, newReply]}

  return updatedForumPost;
};

export const updateUpvoteToReply = (forumPost, replyId, isUpvote) => {
  const updatedReply = { ...forumPost.replies.find((reply) => reply.id === replyId) };
  const updatedReplyIndex = forumPost.replies.findIndex((reply) => reply.id === replyId);

  updatedReply.upvotes += isUpvote ? 1 : -1;

  const updatedReplies = [...forumPost.replies];
  updatedReplies[updatedReplyIndex] = updatedReply;

  const updatedForumPost = { ...forumPost, replies: updatedReplies };

  return updatedForumPost;
};

// const updatedForumPost = updateUpvoteToReply(forumPost, 3, true);
// const updatedForumPost = addReplyToPost(forumPost, "AHHHHH YEAAAAHH", 5);

// console.log("original", forumPost);
// console.log("changed", updatedForumPost);
