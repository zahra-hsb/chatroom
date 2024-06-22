import Image from "next/image";

import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import Sidebar from "./component/Sidebar";
import Avatar1 from '@/public/img/Avatar1.png'
import Avatar2 from '@/public/img/Avatar2.png'
import { useState } from "react";

export default function Home() {
  const [isSent, setSend] = useState(false)
  const [value, setValue] = useState('')
  function handleClick() {
    setSend(true)
  }

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <>
      <section className="bg-main bg-cover h-full lg:h-screen w-full p-5 lg:p-12 flex flex-col lg:flex-row justify-between">
        <Sidebar />
        <div className="lg:w-2/4 w-full h-full flex-col justify-between pt-5 ">
          <div className="w-full flex lg:hidden justify-between px-10 items-center">
            <div className="flex items-start justify-center gap-1">
              <h3 className="text-sm text-[#C5B7FF]">Mentalso</h3>
              <IoMdArrowDropdown fill="#C5B7FF" size={20} />
            </div>
            <div className="flex gap-2 my-5">
              <p className="text-[#C5B7FF]">40:00</p>
              <Link href={'#'}>
                {/* plus */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm6.75 10.75H16a.75.75 0 0 0 0-1.5h-3.25V8a.75.75 0 0 0-1.5 0v3.25H8a.75.75 0 0 0 0 1.5h3.25V16a.75.75 0 0 0 1.5 0v-3.25z" fill="#C5B7FF" />
                </svg>
              </Link>
            </div>
          </div>
          <section className="flex flex-col gap-3 w-full max-h-[500px] overflow-auto">
            {/* pm  */}
            <div className="flex items-start gap-3">
              <Image src={Avatar1} alt="" width={30} height={30} className="rounded-full sm:border-2" />
              <span className="text-white p-3 rounded-xl rounded-bl-none bg-[#3d3d3d]">
                hey there
              </span>
            </div>

            <div className="flex items-start gap-3">
              {/* <Image src={Avatar1} alt="" width={30} height={30} className="rounded-full sm:border-2"/> */}
              <span className="text-white p-3 rounded-xl rounded-bl-none bg-[#3d3d3d] ml-10">
                I am here to chat with you
              </span>
            </div>

            <div className="flex items-start gap-3 justify-end">
              <span className="text-white p-3 rounded-xl rounded-br-none bg-[#977efb]">
                hey dude! Whutsup?
              </span>
              <Image src={Avatar2} alt="" width={30} height={30} className="rounded-full sm:border-2" />
            </div>
            <div className="flex items-start gap-3">
              <Image src={Avatar1} alt="" width={30} height={30} className="rounded-full sm:border-2" />
              <span className="text-white p-3 rounded-xl rounded-bl-none bg-[#3d3d3d]">
                Kendinizi son bir hafta icinde depresyon halinde hissettiniz mi?

                <ul className="w-full pt-5">
                  <li className="p-2 bg-[#5f5f5f] rounded-md cursor-pointer mb-2">Hicbir zaman</li>
                  <li className="p-2 bg-[#5f5f5f] rounded-md cursor-pointer mb-2">Ara sira</li>
                  <li className="p-2 bg-[#5f5f5f] rounded-md cursor-pointer mb-2">Cok sik</li>
                  <li className="p-2 bg-[#5f5f5f] rounded-md cursor-pointer mb-2">Surekli</li>
                </ul>

              </span>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <span className="text-white p-3 rounded-xl rounded-br-none bg-[#977efb]">
                hey dude! Whutsup?
              </span>
              <Image src={Avatar2} alt="" width={30} height={30} className="rounded-full sm:border-2" />
            </div>
            {isSent && value && <div className="flex items-start gap-3 justify-end">
              <span className="text-white p-3 rounded-xl rounded-br-none bg-[#977efb]">

              </span>
              <Image src={Avatar2} alt="" width={30} height={30} className="rounded-full sm:border-2" />
            </div>}
            <div className="flex p-2 gap-2">
              <Image src={Avatar1} alt="" width={20} height={20} className="rounded-full" />
              <p className="italic text-sm text-white">is typing...</p>
            </div>

          </section>
          <div className="w-full p-5 rounded text-white bg-[#202020] flex justify-between items-center">

            <input type="text"
              className="w-full bg-transparent outline-none"
              placeholder="please type here..."
            />
            {/* send */}
            <svg onClick={handleClick} className="cursor-pointer hover:text-[#b09ef8]" width="18" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 6.985a.73.73 0 0 1-.107.385.762.762 0 0 1-.298.278L1.16 13.904a.801.801 0 0 1-.774-.007.767.767 0 0 1-.282-.274.735.735 0 0 1-.104-.374s1.93-5.594 1.93-6.264C1.93 6.315 0 .75 0 .75 0 .619.037.49.104.377A.768.768 0 0 1 .387.103.8.8 0 0 1 1.16.096L13.595 6.33a.751.751 0 0 1 .297.273.719.719 0 0 1 .108.382z" fill="#C5B7FF" />
            </svg>

          </div>
        </div>
      </section>
    </>
  );
}
