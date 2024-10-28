import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Data from "./components/Data";
import './App.css'
import { auth, provider, signInWithPopup } from "./firebase"; // Correct import

function App() {
  const [user, setUser] = useState(null);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error); // Log the error for debugging
        alert(error.message);
      });
  };

  return (
    <>
      {user ? (
        <>
          <Header photoURL={user.photoURL}/>
          <div className="App">
            <Sidebar />
            <Data />
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
