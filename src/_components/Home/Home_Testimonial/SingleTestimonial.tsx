import Image from "next/image";
interface TestimonialItem {
  image: string;
  name: string;
  comment: string;
}
const SingleTestimonial = ({ item }:{item:TestimonialItem}) => {
  const { image, name, comment } = item;
  return (
    <div className="bg-[#D9D9D9] bg-rounded bg-gradient relative text-center w-[371px] h-[530px]">
      <Image width={100} height={100}
        className="mx-auto w-40 h-40 pt-[78px] mb-[27px] border-2"
        src={image}
        alt=""
      />
      <p className="poppins-semibold lg:text-[28px] text-[11px] text-center mb-[19px]">
        {name}
      </p>
      <p className="mulish-regular lg:text-base text-[6px] lg:text-left text-center pb-[36px]">
        {comment}
      </p>
      <div className="absolute top-[31px] left-[19px]">
        <Image width={100} height={100} className="w-auto h-auto" src="./assets/quote.png" alt="" />
      </div>
    </div>
  );
};

export default SingleTestimonial;
