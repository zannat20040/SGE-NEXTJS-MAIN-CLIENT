import Link from 'next/link';
import countryData from '../../../assets/json/countries.json'
import Image from "next/image";
const Event_Study = () => {
  
  
  const flagClass =" text-center my-2  ";
  return (
    <div className="max-w-screen-xl mx-auto mt-10 mb-20 md:mt-20 md:mb-28 lg:mt-28 lg:mb-40 pb-16">
      <h1 className="text-[24px] md:text-[56px] font-bold text-center mb-5">
        Study in Your Dream Country
      </h1>
      <div>
      <ul className="px-5 grid grid-cols-3 lg:grid-cols-7 justify-between items-center max-w-7xl mx-auto my-8 gap-3">
              {countryData.map((country) => (
                <Link key={country.name} className={flagClass} href={country.to}>
                  <Image width={100} height={100} className='w-2/4 h-auto mx-auto rounded-lg  -rotate-90' src={country.img} alt={country.name} />
                  <li className="">{country.label}</li>
                </Link>
              ))}
            </ul>
      </div>
    </div>
  );
};

export default Event_Study;
