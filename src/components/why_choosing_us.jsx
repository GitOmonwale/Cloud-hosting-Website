import hardware from '../assets/images/hardware.jpg'

function Why() {
    return <>
        <div className='mt-20'>
            <div className="flex justify-center md:flex-row flex-col">
                <div className='md:w-1/2 w-full lg:p-20 p-10 bg-blue order-2 md:order-1'>
                    <p className='text-violet-300'>INTRODUCTION</p>
                    <h3 className='text-2xl'>Why choose use ?</h3>
                    <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam laborum ullam optio dignissimos, reprehenderit quod libero tempora molestias neque est sunt odit consequatur autem laudantium alias nulla vero, et inventore.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sapiente atque corporis, modi exercitationem voluptates ipsum possimus? Facere hic ullam vitae temporibus ut rerum at quam quisquam aliquam natus. Accusamus.
                    </p>
                    <p className='text-violet-300'>Read more</p>
                </div>
                <div className='md:w-1/2 w-full order-1 md:order-2'>
                <img src={hardware} alt=""  />
                </div>
              
            </div>
        </div>
    </>
}

export default Why