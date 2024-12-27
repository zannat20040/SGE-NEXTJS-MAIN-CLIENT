import Image from "next/image";

const Deadline = ({ country, preparationTime }) => {
  return (
    <div className="max-w-[1250px] mx-auto px-4 mt-10 py-10 lg:py-0">
      <div className="flex w-full text-[#181A1B] items-center lg:flex-row flex-col">
        <div className="lg:w-[70%] w-full">
          <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-center">
            Deadline for the {country} Universities
          </h1>
          <p className="text-xl font-medium text-center mx-auto mt-5">
            {preparationTime}
          </p>
        </div>
        <div className="lg:w-[35%] w-full lg:block hidden">
          <Image
            width={100}
            height={100}
            className="w-full h-auto"
            src="https://i.ibb.co/6vKQm6G/Deadline-rafiki-1.png"
            alt="Deadline illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Deadline;
