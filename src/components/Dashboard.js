import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../firebaseConfig";
import { query, collection, getDocs, where } from "firebase/firestore";
import Home from "../pages/Home";
function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [tournamentResults, setTournamentResults] = useState([]);

  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      const infoQ = query(collection(db, "playerInfo"), where("uid", "==", user?.uid));
      setName(data.name);
      setRating(data.rating);
      setTournamentResults(data.results);
    } catch (err) {
        return(
            <Home/>
        )
      console.error(err);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserData();
  }, [user, loading]);

  return (
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div>
     </div>
  );
}
export default Dashboard;