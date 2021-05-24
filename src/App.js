import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  const handleSignOut = () => {
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
    window.location.reload();
  };

  return (
    <>
      <nav class="navigation">
        <div class="nav-brand">CZAT</div>
        <button className="signout-btn" onClick={handleSignOut}>
          SignOut
        </button>
      </nav>
      <div className="App">
        <ChatEngine
          height={"90vh"}
          projectID={"1fa7a631-b793-463e-b321-46b9d83d391c"}
          userName={localStorage.getItem("username")}
          userSecret={localStorage.getItem("password")}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
      </div>
    </>
  );
};

export default App;
