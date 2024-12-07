import Banner from '@/_components/shared/Services/Banner';
import ParaGraph from '@/_components/shared/Services/ParaGraph';
import Image from 'next/image';
import React from 'react';

const page = () => {

    const Para = () => {
        return (
            <span className="  p-6   max-w-xl mx-auto">
                <p className="text-lg font-medium mb-4">
                    Studying abroad can be costly, but we’re here to help you find financial support through:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>Scholarship Identification:</strong> Matching you with relevant scholarship opportunities from universities and external organizations.
                    </li>
                    <li>
                        <strong>Scholarship Applications:</strong> Assisting in preparing and submitting compelling applications to boost your chances of securing funding.
                    </li>
                </ul>

                <hr className="border-gray-400 my-6" />

                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>Budget Planning:</strong> Helping you plan your finances to manage costs like tuition, accommodation, and living expenses.
                    </li>
                </ul>

                <p className="text-base text-gray-700">
                    Our guidance ensures you explore all available avenues to make your education affordable.
                </p>
            </span>


        )
    }

    return (
        <div className=' '>
            <Banner title='Scholarship and Financial Aid Guidance' />
            <div className="  py-14 pb-32 bg-[#EFF6FF] px-5 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
                    <div>
                        <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
                            Aid Guidance
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