import React, { useEffect } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { useAppDispacth, useAppSelector } from "./app/hooks";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useAppSelector((state) => state.user);
  //const user = null;

  const dispacth = useAppDispacth();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispacth(
          login({
          uid: loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName,
        })
      );
      }else{
        dispacth(logout());
      }
    });
  }, [dispacth]);

  return (
    <div className="App">
      {user ? (
        <>
          {/* サイドバー */}
          <Sidebar />

          {/* チャット */}
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
