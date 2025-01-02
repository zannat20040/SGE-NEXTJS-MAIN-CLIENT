import { useEffect, useState } from "react";
import Requirement_Card_SmallScreen from "./Requirement_Card_SmallScreen";
import Requirement_Card_LargeScreen from "./Requirement_Card_LargeScreen";
import { GiConsoleController } from "react-icons/gi";

const RequirementCard = ({ country, requirement }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="m-5 md:m-0 lg:m-0 px-4 ">
      <div className="max-w-screen-xl mx-auto">
        <h1 className=" text-center font-semibold text-3xl md:text-4xl lg:text-6xl">
          {" "}
          Requirements for Studying in the {country}
        </h1>
        {requirement?.length > 0 ? (
          <Requirement_Card_LargeScreen requirement={requirement} />
        ) : (
          <p className="text-center italic text-xl  mt-10 pb-20">
            No requirement related data found
          </p>
        )}
      </div>
    </div>
  );
};

export default RequirementCard;
