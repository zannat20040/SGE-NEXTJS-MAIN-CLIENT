import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";

const BlogSingle = ({ blog }) => {
  console.log(blog);

  const Header = ({ title }) => {
    return <h2 className="text-xl font-semibold">{title}</h2>;
  };

  const Text = ({ text }) => {
    return <p className="">{text}</p>;
  };

  const Label = ({ text }) => {
    return (
      <p className="font-medium">
        {text}
        <span className="text-red-500">*</span>
      </p>
    );
  };

  const Input = ({ text, type }) => {
    return (
      <input
        className="overscroll-none border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1 placeholder:text-xs placeholder:text-gray-300 focus:outline-[#3b82f6]"
        placeholder={text}
        type={type}
      />
    );
  };

  const Card = ({ img, title }) => {
    return (
      <div className="space-y-2 lg:w-full sm:w-[48%] w-full shadow-2xl rounded-2xl h-max !mt-0">
        <Image
          width={100}
          height={100}
          src={img}
          alt=""
          className="w-full h-auto"
        />
        <div className="p-5">
          <div className="bg-[#fff2ee] w-fit p-2 text-xs text-[#ff8156] rounded-sm">
            Networking
          </div>
          <h2 className="font-semibold w-11/12 pt-3">{title}</h2>
        </div>
      </div>
    );
  };

  return (
    <div className="poppins my-10 pt-16 sm:pt-40">
      <div className="max-w-6xl lg:grid grid-cols-5 gap-10 lg:mx-auto px-5">
        {/* Blog content */}
        <div className="col-span-3">
          <div className="mb-5">
            <Header title="1. Introduction" />
            <Text text="Embarking on higher education in the UK is a crucial journey..." />
          </div>
          {/* Other content */}
        </div>

        {/* Sidebar */}
        <div className="col-span-2">
          <div className="shadow-2xl rounded-b-2xl">
            <div className="bg-[#3b82f6] text-center text-white p-5 rounded-t-2xl">
              <h2 className="text-2xl font-semibold">Want to Study Abroad?</h2>
              <p className="text-xs font-light">We can help - Fill in your details and we’ll call...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
