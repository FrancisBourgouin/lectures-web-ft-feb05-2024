import "./App.scss";
import ForumPost from "./components/ForumPost";
import Header from "./components/Header";
import ReplyForm from "./components/ReplyForm";
import ReplyList from "./components/ReplyList";
import ReplyListItem from "./components/ReplyListItem";
import { t1 } from "./data/topics";
import { usersObj } from "./data/users";

function App() {
  return (
    <>
      <Header />
      <ForumPost />
    </>
  );

  // return <Header />;
  // return <ReplyForm onSubmit={(formData) => console.log(formData)} />;
  // return <ReplyListItem {...t1.replies[0]} user={usersObj[2]} />;
  // return <ReplyList replies={t1.replies} users={usersObj} />;
  // return <ForumPost />;
}

export default App;
