import Banner from '@/_components/shared/Services/Banner';
import ParaGraph from '@/_components/shared/Services/ParaGraph';
import Image from 'next/image';
import React from 'react';

const page = () => {

    const Para = () => {
        return (
            <span className="   max-w-xl mx-auto">
                <p className="text-lg font-medium mb-4">
                    We help you find the best-fit university based on:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>Academic Profile:</strong> Your grades, skills, and aspirations.
                    </li>
                    <li>
                        <strong>Preferred Country:</strong> UK, USA, Canada, Australia, Europe, or beyond.
                    </li>
                    <li>
                        <strong>Career Goals:</strong> Aligning your education with future ambitions.
                    </li>
                </ul>
                <p className="text-base text-gray-700">
                    Our experienced counselors analyze your profile and recommend top universities where {`you'll`} thrive, ensuring you get the best education for your chosen career path.
                </p>
            </span>
        )
    }

    return (
        <div>
            <Banner title='Personalized University Selection' />
            <div className="  py-14 pb-32 bg-[#EFF6FF] px-5 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
                    <div>
                        <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
                        University Selection Support
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