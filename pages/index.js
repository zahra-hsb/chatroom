import Image from "next/image";

import Sidebar from "./component/Sidebar";

import ChatBox from "./component/ChatBox";

export default function Home() {
  

  return (
    <>
      <section className="bg-main bg-cover h-full lg:h-screen w-full p-5 flex flex-col lg:flex-row justify-between bottom-0">
        <Sidebar />
        <ChatBox />
      </section>
    </>
  );
}
