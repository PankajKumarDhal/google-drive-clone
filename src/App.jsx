
// import React, { useEffect, useState } from "react";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Data from "./components/Data";
// import './App.css';
// import { auth, provider, signInWithPopup } from "./firebase";
// import { onAuthStateChanged } from "firebase/auth"; 

// function App() {
//   const [user, setUser] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeOption, setActiveOption] = useState("My Drive");
//   const [theme, setTheme] = useState("light"); 
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log("User logged in:", user); // Check if photoURL is present
//         setUser(user);
//       } else {
//         console.log("No user logged in");
//         setUser(null);
//       }
//     });
  
//     return () => unsubscribe();
//   }, []);
//   const signIn = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         setUser(user); // This should include user.photoURL
//       })
//       .catch((error) => {
//         console.error("Error during sign-in:", error);
//         alert(error.message);
//       });
//   };

//   const toggleTheme = (selectedTheme) => {
//     setTheme(selectedTheme);
//     document.body.className = selectedTheme; 
//   };

//   return (
//     <>
//       {user ? (
//         <>
//           <Header
//             photoURL={user.photoURL}
//             setSearchTerm={setSearchTerm}
//             setUser={setUser}
//             theme={theme} // Pass theme to Header
//             toggleTheme={toggleTheme} // Pass toggleTheme function to Header
//           />
//           <div className={`App ${theme}`}>
//             <Sidebar setActiveOption={setActiveOption} />
//             <Data searchTerm={searchTerm} activeOption={activeOption} />
//           </div>
//         </>
//       ) : (
//         <div className="loginWrap">
//           <img src="https://static-00.iconduck.com/assets.00/google-drive-icon-2048x2048-j5sa1hcp.png" alt="" />
//           <button onClick={signIn}>Login to Google-Drive</button>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

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
          <div className="loginHeader">
            <img src="https://static-00.iconduck.com/assets.00/google-drive-icon-2048x2048-j5sa1hcp.png" alt="Drive Icon" className="driveIcon" />
            <span>Google Disk</span>
            <button onClick={signIn} className="loginHeaderButton">Log In</button>
          </div>
          
          <div className="loginContent">
            <div className="loginText">
              <h1>Easy and secure access to your content</h1>
              <p>Store, share, and collaborate on files and folders from your mobile device, tablet, or computer</p>
              <button onClick={signIn} className="loginContentButton">Sign Up</button>
            </div>
            
            <div className="loginImage">
              <img src="https://lh3.googleusercontent.com/GAMKSxQD4Rz2FGgskL7102Bem7GDR53mpBeCn-JdS8_HYt4PAWKEPZPjL77twM0wlS1S-FpviFKuKEtmuftq1inPddj0NFihDeFQ=e365-pa-nu-rw-w720" alt="Drive Devices" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
