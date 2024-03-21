import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";

import { t1 } from "../data/topics";
import { usersObj } from "../data/users";
import { useState } from "react";
import { addReplyToPost, updateUpvoteToReply } from "../helpers/forumHelpers";

export default function ForumPost(props) {
  const [forumPost, setForumPost] = useState(t1);
  const [users, setUsers] = useState(usersObj);

  const forumPoster = users[forumPost.userId];

  const addReply = (content) => {
    const randomUserId = Math.ceil(Math.random() * Object.keys(users).length);

    const updatedForumPost = addReplyToPost(forumPost, content, randomUserId);

    setForumPost(updatedForumPost);
  };

  const updateUpvote = (replyId, isUpvote) => {
    const updatedForumPost = updateUpvoteToReply(forumPost, replyId, isUpvote);

    setForumPost(updatedForumPost);
  };

  return (
    <section className="ForumPost">
      <header>
        <h1>{forumPost.question}</h1>
        <img src={forumPoster.profile_url} alt="" />
        <p>{forumPoster.username}</p>
      </header>
      <ReplyList replies={forumPost.replies} users={users} updateUpvote={updateUpvote} />
      <ReplyForm onSubmit={addReply} />
    </section>
  );
}
