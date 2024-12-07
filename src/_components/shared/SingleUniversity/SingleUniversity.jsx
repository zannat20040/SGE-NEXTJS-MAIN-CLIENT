'use client'
import { useState, useEffect } from "react";
import Banner1 from "./Single_University_Banner";
import data from '../../../assets/json/ukUni.json'
import Single_Universty_Accordion from "./Single_Universty_Accordion";
import Single_University_Check from "./Single_University_Check";
import Single_University_Info from "./Single_University_Info";
import Single_University_Form from "./Single_University_Form";

// interface University {
//   Name: string | null;
//   Overview: string | number | null;
//   History: string | number | null;
//   "Ranking & Achievement": string | number | null;
//   courses: string | number | null;
//   "Department & Faculty": string | number | null;
//   Fee: string | number | null;
//   Services: number | string | null;
//   Accommodation: number | string | null;
//   established: number | string | null;
//   rank: number | string | null;
//   location: string | number | null;
//   "international student": number | string | null;
//   country: string | number | null;
//   logo: string | null;
// }

const SingleUniversity = ({ Name }) => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  useEffect(() => {
    if (Name) {
      const singleUniversity = data.find((uni) => uni.Name === Name.replace(/%20/g, ' '));

      setSelectedUniversity(singleUniversity || null);
    }
  }, [Name]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!Name) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mb-20 pb-20">
      <Banner1 university={selectedUniversity} />
      <div className="max-w-7xl mx-auto">
        <p className="text-center md:text-6xl text-4xl font-semibold md:mt-36 mt-28 md:mx-0 mx-5">
          {selectedUniversity?.Name}
        </p>
        {selectedUniversity &&
          <div className="md:grid md:grid-cols-12 grid-cols-1 mt-8 md:mt-12 gap-10 px-5">
            <div className="lg:col-span-7 col-span-6">
              <Single_Universty_Accordion university={selectedUniversity} />
              <Single_University_Check />
            </div>
            <div className="lg:col-span-5 col-span-6">
              <Single_University_Info university={selectedUniversity} />
              <Single_University_Form Name={selectedUniversity.Name}/>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default SingleUniversity;