// {
//   "userId": 2,
//   "content": "Check the power cable and outlet first. Sometimes it's a simple power issue.",
//   "user": {
//     "id": 2,
//     "profile_url": "/profile_pictures/2.png",
//     "username": "VoltageWizard",
//     "bio": "Harnessing the power of volts and currents to mend broken devices."
//   }
// }

export default function ReplyListItem(props) {
  const { content, upvotes, user, upvote, downvote } = props;

  return (
    <li className="ReplyListItem">
      <img src={user.profile_url} alt="" />
      <p className="name">{user.username}</p>
      <p className="reply">{content}</p>
      <p className="upvotes">
        <span onClick={downvote}>-</span>
        <span>{upvotes}</span>
        <span onClick={upvote}>+</span>
      </p>
    </li>
  );
}
