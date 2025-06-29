// import React, { useEffect, useState } from 'react';
// import { getUserData } from '../Services/Data';

// const Header = () => {
//   const [user, setUser] = useState(null); // or { name: '', email: '' }

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getUserData();
//         setUser(data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <header className="bg-gray-200 p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">My App</h1>
//       {user ? (
//         <div className="text-right">
//           <p className="text-sm font-medium">{user._id}</p>
//           <p className="text-xs text-gray-600">{user.email}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </header>
//   );
// };

// export default Header;



//   the abpve code for user extract at fronend side at service>data.js file  by getUserData function
import React from 'react'

function Header() {
  return (
    <div>Header</div>
  )
}

export default Header