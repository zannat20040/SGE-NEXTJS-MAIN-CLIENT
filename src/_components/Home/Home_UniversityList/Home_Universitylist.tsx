import './Home_UniversityList.css'
import allUni from '../../../assets/json/ukUni.json'
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Link from 'next/link';
const Home_UniversityList = () => {
    return (
        <div className='lg:mt-[131px] mt-[40px] lg:mb-[117px] mb-[40px]'>
            <div className='text-center'>
                <h2 className='text-[#004ACB] poppins-bold text-[50px] mb-2 px-3'>Universities Across The Globe</h2>
                <p className='poppins-bold pt-5 lg:pt-0 text-4xl lg:text-[67px]'>The Choice is Endless</p>
                <Image width={100} height={100} className='mx-auto lg:w-[290px] w-[190px] py-3 bg-white h-auto' src="https://i.ibb.co/wMCkStV/University-Section-Animation.gif" alt="" />
            </div>
            <Marquee className='mb-10' pauseOnHover={true} speed={250} direction='right'>
                <div className='flex  gap-10'>
                    {allUni.map((uni) => (
                        <Link href={`/singleUniversity/${uni.Name}`} className='cursor-pointer' key={uni?.Name}>
                            <Image width={100} height={100} className='w-[200px] h-auto' src={uni.logo ? uni.logo : ''} alt="university" />
                        </Link>
                    ))}
                </div>
            </Marquee>
            <Marquee pauseOnHover={true} speed={250}>
                <div className='flex  gap-10'>
                    {allUni.map((uni) => (
                        <Link href={`/singleUniversity/${uni.Name}`} className='cursor-pointer' key={uni?.Name}>
                            <Image width={100} height={100} className='w-[200px] h-auto' src={uni.logo ? uni.logo : ''} alt="university" />
                        </Link>
                    ))}
                </div>
            </Marquee>


            <div className='text-center mt-[60px] lg:mt-[98px]'>
                <Link href={"/comingSoon"}>
                    <button className='text-white bg-[#2563EB] hover:bg-[#3D7DED] rounded-[32px] mulish-regular lg:text-[21px] text-[14px] px-[89px] py-2 mb-[41px]'>View All Universites</button>
                </Link>
            </div>
        </div>
    );
};

export default Home_UniversityList;