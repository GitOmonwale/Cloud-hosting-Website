import { IoPersonCircle } from "react-icons/io5";

function Header () {
   return <div className="w-full h-screen bg-cover  bg-bg-image">
     <div className="w-full h-full bg-black md:px-20 px-8 bg-opacity-35 md:pt-10 pt-5">
<div className="flex justify-between">
<h1 className="font-bold text-xl cursor-pointer">Hostify</h1>
<nav className="hidden md:flex">
    <ul className="flex justify-between w-80">
        <li><a href="#" className="transition-all duration-300 hover:text-violet-300">Hosting</a></li>
        <li><a href="#" className="transition-all duration-300 hover:text-violet-300">Domains</a></li>
        <li><a href="#" className="transition-all duration-300 hover:text-violet-300">About</a></li>
        <li><a href="#" className="transition-all duration-300 hover:text-violet-300">Contact</a></li>
    </ul>
</nav> 
<IoPersonCircle className="text-3xl"/>
</div>
<div class="flex items-center justify-center h-full">
    <div class="text-center max-w-400 flex justify-between gap-4 flex-col">
     <h1 className="font-bold text-4xl">
        Hight Quality Cloud Hosting And Domain Services
     </h1>
     <p className="px-4">Host Your website in fatest servers and gain user's trust with easy and speed</p>
    </div>
  </div>
     </div>
    </div>
}

export default Header

