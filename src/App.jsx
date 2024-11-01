
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Data from "./components/Data";
import './App.css';
import { auth, provider, signInWithPopup } from "./firebase";
import { onAuthStateChanged } from "firebase/auth"; 

function App() {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeOption, setActiveOption] = useState("My Drive");
  const [theme, setTheme] = useState("light"); 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User logged in:", user); // Check if photoURL is present
        setUser(user);
      } else {
        console.log("No user logged in");
        setUser(null);
      }
    });
  
    return () => unsubscribe();
  }, []);
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user); // This should include user.photoURL
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
        alert(error.message);
      });
  };

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    document.body.className = selectedTheme; 
  };

  return (
    <>
      {user ? (
        <>
          <Header
            photoURL={user.photoURL}
            setSearchTerm={setSearchTerm}
            setUser={setUser}
            theme={theme} // Pass theme to Header
            toggleTheme={toggleTheme} // Pass toggleTheme function to Header
          />
          <div className={`App ${theme}`}>
            <Sidebar setActiveOption={setActiveOption} />
            <Data searchTerm={searchTerm} activeOption={activeOption} />
          </div>
        </>
      ) : (
        <div className="loginWrap">
          <img src="https://static-00.iconduck.com/assets.00/google-drive-icon-2048x2048-j5sa1hcp.png" alt="" />
          <button onClick={signIn}>Login to Google-Drive</button>
        </div>
      )}
    </>
  );
}

export default App;

