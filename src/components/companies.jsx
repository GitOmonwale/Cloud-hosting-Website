import { FaGithub } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { IoLogoBehance } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io5";
import { IoLogoYahoo } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa6";

function Companies() {
    return <>
        <div className="flex flex-col gap-4 justify-center items-center text-center pt-10 md:max-w-1000 w-full m-auto lg:px-10 px-5">
            <h2 className="text-indigo-200 text-xl font-bold">Long Terms Trusted Companies</h2>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti itaque earum consequatur, mollitia similique nostrum libero, deserunt voluptatibus eum eos nam a quidem ullam magni natus.</h1>
            <div className="flex justify-between items-center text-4xl w-[250px]">
                <FaGithub className="text-logo hover:fill-hover-logo cursor-pointer" />
                <FaAmazon className="text-logo hover:fill-hover-logo cursor-pointer" />
                <IoLogoBehance className="text-logo hover:fill-hover-logo cursor-pointer" />
                <IoLogoApple className="text-logo hover:fill-hover-logo cursor-pointer" />
                <IoLogoYahoo className="text-logo hover:fill-hover-logo cursor-pointer" />
                <IoLogoWhatsapp className="text-logo hover:fill-hover-logo cursor-pointer" />
                <FaWordpress className="text-logo hover:fill-hover-logo cursor-pointer" />
            </div>
        </div>
    </>
}

export default Companies