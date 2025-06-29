import { useEffect, useState } from 'react'
import Login from './pages/Login'
import Header from './pages/Header'
import SummerApi from './common'

import './App.css'

function App() {


   const fetchUserDetails = async () => {
      try {
      const dataResponce = await fetch(SummerApi.current_user.url, {
        method: SummerApi.current_user.method,
        credentials: 'include'
      });
      if (!dataResponce.ok) {
        console.error('Error fetching user details:', dataResponce.status, dataResponce.statusText);
        return;
      }
      const dataApi = await dataResponce.json()

      console.log( "dataApi", dataApi);

      // if(dataApi.success){
      //   dispatch(setUserDetails(dataApi.data))

      // }
     
      // console.log("data_user", dataResponce, dataApi);   // it show resent user whow loged in 
    } catch (error) {
      console.error('Error fetching user details:', error);
      
    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, []);



  return (
    <>
     <Header />
     <Login />
    
    </>
  )
}

export default App
