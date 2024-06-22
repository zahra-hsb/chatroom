import Image from "next/image";

import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import Sidebar from "./component/Sidebar";


export default function Home() {

  
  return (
    <>
      <section className="bg-main bg-cover h-screen w-full p-14">
        <Sidebar />
        <div></div>
      </section>
    </>
  );
}
