import user from '../assets/images/user.png'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
function Reviews() {
    return <>
            <div className="flex flex-col gap-4 justify-center items-center text-center pt-10 max-w-screen-2xl m-auto lg:px-10 px-5">
            <h2 className="text-indigo-200 text-xl font-bold">Long Terms Trusted Companies</h2>
            <h1 className='max-w-1000'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti itaque earum consequatur, mollitia similique nostrum libero, deserunt voluptatibus eum eos nam a quidem ullam magni natus.</h1>
    <div className='flex justify-between gap-8 mt-10 flex-col md:flex-row'>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='bg-white h-20 w-20 pt-4 rounded-full'><img src={user} alt="" className='h-16 w-16 text-center m-auto rounded-full' /></div>
            <p>John Doe</p>
            <p>Aut ad rem ipsa? Quas distinctio reprehenderit eligendi, accusamus qui libero adipisci odio?</p>
            <div className='flex justify-center gap-1 text-yellow-300'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            </div>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='bg-white h-20 w-20 pt-4 rounded-full'><img src={user} alt="" className='h-16 w-16 text-center m-auto rounded-full' /></div>
            <p>John Doe</p>
            <p>Aut ad rem ipsa? Quas distinctio reprehenderit eligendi, accusamus qui libero adipisci odio?</p>
            <div className='flex justify-center gap-1 text-yellow-300'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            </div>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='bg-white h-20 w-20 pt-4 rounded-full'><img src={user} alt="" className='h-16 w-16 text-center m-auto rounded-full' /></div>
            <p>John Doe</p>
            <p>Aut ad rem ipsa? Quas distinctio reprehenderit eligendi, accusamus qui libero adipisci odio?</p>
            <div className='flex justify-center gap-1 text-yellow-300'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            </div>
        </div>
    </div>
    
    </div>
    </>
}

export default Reviews 