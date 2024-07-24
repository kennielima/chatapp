// "use client";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { handleSignIn } from "./helper";
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "@/lib/firebase";
// import { addUserToFirestore } from "@/lib/firebase/userController";

// const LoginButton: React.FC = () => {
//   const router = useRouter();
//   const handleSignIn = () => {
//     signInWithPopup(auth, googleProvider).then((result) => {
//       const user = result?.user;
//       addUserToFirestore(user);
//       router.push('/')
//     })
//     .catch((error) => {
//       throw new Error(error.message)
//     })
//   }
//   return (
//     <button 
//     className="p-4 border-black-rounded border-2 rounded-md hover:bg-grey-100"
//     onClick={handleSignIn}
//     >
//       Sign in with Google
//     </button>
//   )
// }

// export default LoginButton;



"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { handleSignIn } from "./helper";

const LoginButton: React.FC = () => {
  const router = useRouter();
  return (
    <button
      className="p-4 border-black-rounded border-2 rounded-md hover:bg-gray-100"
      onClick={() => handleSignIn(router)}
    >
      Sign In With Google
    </button>
  );
};

export default LoginButton;