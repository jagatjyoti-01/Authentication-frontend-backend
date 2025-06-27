import { jwtDecode } from "jwt-decode";
export function getUserData(){
    const token = localStorage.getItem('token');
  try{

    const decoded = jwtDecode(token);
    console.log("Decoded token is", decoded);


  }catch(err){
    console.log("Error in getUserData", err);
  }
}

