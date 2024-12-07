import Image from "next/image";

const Registration_Events = () => {
    return (
        <div className="bg-white lg:w-[560px] md:w-[560px] w-auto p-10 rounded-3xl shadow-md shadow-zinc-200 space-y-10">
            <Image width={100} height={100} className='rounded-3xl w-auto h-auto' src='https://i.ibb.co.com/9cMYN3s/register-3.png' alt="" />
            <Image width={100} height={100} className='rounded-3xl w-auto h-auto' src='https://i.ibb.co.com/SKvK16T/register-2.png' alt="" />
            <Image width={100} height={100} className='rounded-3xl w-auto h-auto' src='https://i.ibb.co.com/fGw9ZQq/register-1.jpg' alt="" />
        </div>
    );
};

export default Registration_Events;