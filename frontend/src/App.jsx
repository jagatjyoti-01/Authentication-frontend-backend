import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Header from "./pages/Header";
import SummerApi from "./common";

import "./App.css";

function App() {
  const fetchUserDetails = async () => {
    try {
      const dataResponce = await fetch(
        "http://localhost:3000/api/user-details",
        {
          method: "GET",
          credentials: "include", // ✅ tells browser to send cookies
        }
      );
      if (!dataResponce.ok) {
        console.error(
          "Error fetching user details:",
          dataResponce.status,
          dataResponce.statusText
        );
        return;
      }
      const dataApi = await dataResponce.json();

      console.log("dataResponce", dataResponce);

      // if(dataApi.success){
      //   dispatch(setUserDetails(dataApi.data))

      // }

      // console.log("data_user", dataResponce, dataApi);   // it show resent user whow loged in
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <Header />
      <Login />
    </>
  );
}

export default App;
