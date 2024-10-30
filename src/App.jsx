import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Data from "./components/Data";
import './App.css';
import { auth, provider, signInWithPopup } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
        alert(error.message);
      });
  };
  // const signIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log("User object:", user); // Check the user data
  //       setUser(user);
  //     })
  //     .catch((error) => {
  //       console.error("Error during sign-in:", error);
  //       alert(error.message);
  //     });
  // };

  return (
    <>
      {user ? (
        <>
          <Header photoURL={user.photoURL} setSearchTerm={setSearchTerm} />
          <div className="App">
            <Sidebar />
            <Data searchTerm={searchTerm} />
          </div>
        </>
      ) : (
        <div className="loginWrap">
          <img
            src="https://static-00.iconduck.com/assets.00/google-drive-icon-2048x2048-j5sa1hcp.png"
            alt=""
          />
          <button onClick={signIn}>Login to Google-Drive</button>
        </div>
      )}
    </>
  );
}

export default App;

