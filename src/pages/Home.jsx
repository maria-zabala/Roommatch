import Navbar from "../components/Navbar";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Navbar />

      
    </div>
  );
}