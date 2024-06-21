import Image from "next/image";
import Logo from "@/public/logo/Logo1.png"
import flag from "@/public/img/flag-Stars-and-Stripes-May-1-1795.webp"
import { IoMdArrowDropdown } from "react-icons/io";


export default function Home() {
  return (
    <>
      <section className="bg-main bg-cover h-screen w-full p-14">
        <div className="lg:w-1/3 sm:w-1/2 border-2 border-white rounded-xl p-5 h-full bg-gradient-to-br from-slate-700 to-black">
          <div>
            <Image src={Logo} alt="logo" />
            {/* discord */}
            <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.852 6.912A11.294 11.294 0 0 0 17.002 6a.043.043 0 0 0-.046.022 8.43 8.43 0 0 0-.355.751 10.343 10.343 0 0 0-3.2 0 7.711 7.711 0 0 0-.36-.75.045.045 0 0 0-.046-.023c-1 .177-1.957.488-2.85.91a.041.041 0 0 0-.019.017c-1.815 2.796-2.312 5.522-2.068 8.215a.05.05 0 0 0 .018.033 11.48 11.48 0 0 0 3.496 1.822.045.045 0 0 0 .049-.017c.27-.379.51-.778.715-1.199a.046.046 0 0 0-.024-.063 7.548 7.548 0 0 1-1.092-.537.047.047 0 0 1-.005-.077c.074-.056.147-.115.217-.175a.043.043 0 0 1 .046-.006c2.29 1.078 4.771 1.078 7.035 0a.042.042 0 0 1 .046.006c.07.06.144.119.218.175.025.02.023.06-.004.077-.349.21-.712.388-1.093.536a.047.047 0 0 0-.024.064c.21.42.45.82.715 1.199.011.016.03.023.05.017a11.44 11.44 0 0 0 3.5-1.822.047.047 0 0 0 .019-.033c.292-3.113-.49-5.817-2.07-8.214a.036.036 0 0 0-.018-.017zm-7.174 6.591c-.69 0-1.258-.653-1.258-1.454 0-.802.557-1.455 1.258-1.455.707 0 1.27.659 1.258 1.455 0 .801-.557 1.454-1.258 1.454zm4.652 0c-.69 0-1.258-.653-1.258-1.454 0-.802.557-1.455 1.258-1.455.707 0 1.27.659 1.259 1.455 0 .801-.552 1.454-1.259 1.454z" fill="#fff" />
            </svg>
            {/* twitter */}
            <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.45 6h1.84l-4.02 4.66L21 17h-3.703l-2.9-3.845L11.078 17H9.237l4.3-4.984L9 6h3.797l2.622 3.515L18.45 6zm-.645 9.883h1.02l-6.582-8.825h-1.094l6.656 8.825z" fill="#fff" />
            </svg>

          </div>
          <div>

          </div>
          <div>
            <div>
              <Image src={flag} alt="lang" width={35}/>
              <IoMdArrowDropdown fill="white"/>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}
