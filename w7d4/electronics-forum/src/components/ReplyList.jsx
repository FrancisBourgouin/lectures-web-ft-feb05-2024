import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
  const { replies, users, updateUpvote } = props;

  const parsedReplies =
    Array.isArray(replies) &&
    replies.map((reply) => (
      <ReplyListItem
        key={reply.id}
        {...reply}
        user={users[reply.userId]}
        upvote={() => updateUpvote(reply.id, true)}
        downvote={() => updateUpvote(reply.id, false)}
      />
    ));

  return <ul className="ReplyList">{parsedReplies}</ul>;
}
