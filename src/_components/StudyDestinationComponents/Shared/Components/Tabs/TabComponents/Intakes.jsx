import Image from "next/image";

const Intakes = ({ country, academicIntake }) => {
  const tableData = [
    {
      col1: "Summer Intake",
      col2: "May-June",
    },
    {
      col1: "Autumn Intake",
      col2: "September-October",
    },
    {
      col1: "Spring Intake",
      col2: "January-February",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="flex w-full text-[#181A1B] items-center lg:flex-row flex-col gap-5">
        <div className="lg:w-[55%] w-full mt-20">
          <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-center">
            Academic Intake to Study in the {country}
          </h1>
          <p className="text-xl font-medium text-center lg:w-[70%] w-full mx-auto mt-5">
            Colleges and universities in the {country} offer three intakes.
            Intakes may also be referred to as terms in some institutions. The
            three intakes available in the {country} are:
          </p>
          <div className="mx-auto text-xl mt-10">
            {academicIntake?.length > 0 ? (
              <table className="bg-white border border-gray-300 mx-auto overflow-x-scroll">
                <thead>
                  <tr className="bg-[#3B82F6] text-white">
                    <th className="py-2 px-4 border-b">QUALIFICATION</th>
                    <th className="py-2 px-4 border-b">DURATION</th>
                  </tr>
                </thead>
                <tbody>
                  {academicIntake.map((row, index) => (
                    <tr key={index} className="bg-[#EFF6FF] font-medium">
                      <td className="px-8 py-3 border-[E1E1E1] border-2">
                        {row.qualification}
                      </td>
                      <td className="px-8 border-[E1E1E1] border-2 text-center">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center italic">No academic intake related data found</p>
            )}
          </div>
        </div>
        <div className="lg:w-[45%] w-full lg:block hidden">
          <Image
            width={100}
            height={100}
            className="w-[80%] h-auto mt-28 mx-auto"
            src="https://i.ibb.co/2gTnyB9/Calendar1-removebg-preview.png"
            alt="Calendar illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Intakes;
