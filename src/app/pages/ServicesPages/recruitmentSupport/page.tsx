import Banner from '@/_components/shared/Services/Banner';
import ParaGraph from '@/_components/shared/Services/ParaGraph';
import Image from 'next/image';
import React from 'react';

const page = () => {

    const Para = () => {
        return (
            <span className=" p-6   max-w-xl mx-auto">
                <ul className="list-disc pl-6 mb-4">
                    <li>We provide our partners with branded materials, promotional content, and joint webinars to attract more students.</li>
                    <li>Our co-hosted events and workshops give your institution the chance to promote its global impact while attracting potential students.</li>
                </ul>
            </span>


        )
    }

    return (
        <div className=' '>
            <Banner title=' Marketing and Recruitment Support' />
            <div className="  py-14 pb-20 bg-[#EFF6FF] px-5 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
                    <div>
                        <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
                            Marketing and Recruitment Support
                        </h2>
                        <div className="flex-col gap-3 flex ">
                            <span className="text-base  text-gray-700 max-w-lg "  >
                                <ParaGraph description={<Para />} />
                            </span>

                        </div>
                    </div>

                    <Image
                        width={100}
                        height={100}
                        className="w-full h-full rounded-2xl"
                        src="https://i.ibb.co.com/HDj7Xdh/education-people-great-design-for-any-purposes-flat-design-vector-removebg-preview.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default page;