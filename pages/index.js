import Image from "next/image";

import Sidebar from "./component/Sidebar";

import ChatBox from "./component/ChatBox";

export default function Home() {
  

  return (
    <>
      <section className="bg-main bg-cover h-full lg:h-screen w-full p-5 lg:p-12 flex flex-col lg:flex-row justify-between">
        <Sidebar />
        <ChatBox />
      </section>
    </>
  );
}
