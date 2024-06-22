import Image from "next/image"
import Link from "next/link"
import { FaCircle } from "react-icons/fa"
import { IoMdArrowDropdown } from "react-icons/io"
import Logo from "@/public/logo/Logo1.png"
import flag from "@/public/img/flag-Stars-and-Stripes-May-1-1795.webp"

const Sidebar = () => {

    const menu = [
        { title: 'menu', url: '#', isActive: true },
        { title: 'users list', url: '#', isActive: false },
        { title: 'menu', url: '#', isActive: false },
        { title: 'menu', url: '#', isActive: false },
        { title: 'menu', url: '#', isActive: false },
        { title: 'menu', url: '#', isActive: false },
      ]
    return (
        <>
            <div className="lg:w-1/4 shadow-lg sm:w-1/2 border-2 border-[#efb6ff] rounded-xl h-full bg-gradient-to-br from-[#383838] to-[#1b1b1b] flex flex-col justify-between">
                <div className="w-full flex justify-between p-8">
                    <Image src={Logo} alt="logo" />
                    <div className="flex gap-5">

                        {/* search */}
                        <svg width="20" className="cursor-pointer" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.167 16.04A8.328 8.328 0 0 1 0 8.373C-.02 4.758 2.315 1.543 5.778.416 9.24-.712 13.04.506 15.183 3.43a8.276 8.276 0 0 1-.008 9.808l2.625 2.604a.674.674 0 0 1 0 .959.687.687 0 0 1-.966 0l-2.543-2.523a8.443 8.443 0 0 1-9.124 1.76zm5.924-1.21a6.981 6.981 0 0 0 4.34-6.457h-.037c-.005-3.834-3.126-6.947-6.99-6.972a7.037 7.037 0 0 0-6.509 4.305A6.942 6.942 0 0 0 3.42 13.32a7.076 7.076 0 0 0 7.672 1.512z" fill="#fff" />
                        </svg>
                        {/* menu */}
                        <svg width="21" className="cursor-pointer" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="21" height="2" rx="1" fill="#fff" />
                            <rect x="5" y="6" width="16" height="2" rx="1" fill="#fff" />
                            <rect x="11" y="12" width="10" height="2" rx="1" fill="#fff" />
                        </svg>
                    </div>




                </div>
                <div className="text-white p-8">
                    <h3 className="text-sm text-[#C5B7FF]">Mentalso</h3>
                    <h3 className="text-2xl mb-5">Chatroom</h3>
                    <ul className="flex flex-col gap-2">
                        {menu.map((item, index) => (
                            <>
                                <li key={index} className={`${item.isActive && 'text-[#C5B7FF] '} hover:text-[#C5B7FF] flex items-center justify-start gap-1`}>
                                    <div className="flex flex-col items-center gap-[1px]">
                                        <FaCircle size={10} />
                                        {/* <FaCircle size={4} />
                      <FaCircle size={4} />
                      <FaCircle size={4} />
                      <FaCircle size={4} /> */}
                                    </div>
                                    <Link className="-mt-1 font-thin" href={item.url}>{item.title}</Link>
                                </li>
                            </>
                        ))}
                    </ul>
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


                <div className="p-5 flex w-full items-center justify-between border-t border-t-gray-500">
                    <div className="flex bg-[#383838] p-1 rounded cursor-pointer border border-gray-500 active:bg-[#484848] hover:bg-[#414141]">
                        <Image src={flag} alt="lang" width={34} />
                        <IoMdArrowDropdown className="cursor-pointer" size={20} fill="white" />
                    </div>
                    <div className="flex">
                        {/* discord */}
                        <Link href={'#'}>
                            <svg width="35" height="25" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.852 6.912A11.294 11.294 0 0 0 17.002 6a.043.043 0 0 0-.046.022 8.43 8.43 0 0 0-.355.751 10.343 10.343 0 0 0-3.2 0 7.711 7.711 0 0 0-.36-.75.045.045 0 0 0-.046-.023c-1 .177-1.957.488-2.85.91a.041.041 0 0 0-.019.017c-1.815 2.796-2.312 5.522-2.068 8.215a.05.05 0 0 0 .018.033 11.48 11.48 0 0 0 3.496 1.822.045.045 0 0 0 .049-.017c.27-.379.51-.778.715-1.199a.046.046 0 0 0-.024-.063 7.548 7.548 0 0 1-1.092-.537.047.047 0 0 1-.005-.077c.074-.056.147-.115.217-.175a.043.043 0 0 1 .046-.006c2.29 1.078 4.771 1.078 7.035 0a.042.042 0 0 1 .046.006c.07.06.144.119.218.175.025.02.023.06-.004.077-.349.21-.712.388-1.093.536a.047.047 0 0 0-.024.064c.21.42.45.82.715 1.199.011.016.03.023.05.017a11.44 11.44 0 0 0 3.5-1.822.047.047 0 0 0 .019-.033c.292-3.113-.49-5.817-2.07-8.214a.036.036 0 0 0-.018-.017zm-7.174 6.591c-.69 0-1.258-.653-1.258-1.454 0-.802.557-1.455 1.258-1.455.707 0 1.27.659 1.258 1.455 0 .801-.557 1.454-1.258 1.454zm4.652 0c-.69 0-1.258-.653-1.258-1.454 0-.802.557-1.455 1.258-1.455.707 0 1.27.659 1.259 1.455 0 .801-.552 1.454-1.259 1.454z" fill="#fff" />
                            </svg>
                        </Link>
                        {/* twitter */}
                        <Link href={'#'}>
                            <svg width="35" height="25" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.45 6h1.84l-4.02 4.66L21 17h-3.703l-2.9-3.845L11.078 17H9.237l4.3-4.984L9 6h3.797l2.622 3.515L18.45 6zm-.645 9.883h1.02l-6.582-8.825h-1.094l6.656 8.825z" fill="#fff" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar