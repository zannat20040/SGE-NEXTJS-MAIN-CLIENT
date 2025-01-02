import Doc1 from "@/_components/StudyDestinationComponents/Australia/SVG/Doc1";
import React from "react";

export default function University_Required_Docs({
  country,
  Doc1,
  Doc2,
  Doc3,
  details,
}) {
  console.log(details);
  return (
    <div>
      <div className="min-h-screen bg-[#EFF6FF] py-10 lg:py-28">
        <h1 className="poppins-semibold w-full md:w-4/6 md:mx-auto text-[28px] text-[#081831] lg:text-[56px] lg:leading-[72.8px] lg:-tracking-[0.01em] pb-14 px-8 md:px-0 text-center">
          Documents Required to Study in the {country} for International
          Students
        </h1>
        <div className="relative flex flex-col md:max-w-screen-xl lg:px-10 mx-auto lg:grid grid-cols-2 items-center justify-between">
          <div className="flex-1 px-10 lg:px-0 text-[18px] font-normal text-[#1F1F1F]">
            <p className="text-gray-700 mb-8">
              {details?.documentDescription}{" "}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {details?.documentList?.some((list) => list !== "") ? (
                details?.documentList?.map(
                  (list, index) => list !== "" && <li key={index}>{list}</li>
                )
              ) : (
                <p className="text-center italic font-lg">
                  No documents list available
                </p>
              )}
            </ul>
          </div>
          <div>{Doc1 && <Doc1 />}</div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] w-full">
        <div className="max-w-[1154px] mx-auto lg:pt-[137px] pt-[50px] lg:pb-[120px] pb-[50px]">
          <div className="text-center">
            <h2 className="poppins-semibold w-full md:w-4/6 md:mx-auto text-[28px] text-[#081831] lg:text-[56px] lg:leading-[72.8px] lg:-tracking-[0.01em] pb-14 px-8 md:px-0 text-center">
              Statement of Purpose for {country}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:gap-[35px] gap-0 lg:pt-[58px] pt-[20px]">
            <div>{Doc2 && <Doc2 />}</div>
            <div className="px-5 lg:px-0">
              <p className="poppins-medium text-[18px] text-[#1F1F1F] pb-[19px]">
                {details?.statementDescription}
              </p>
              <p className="poppins-medium text-[18px] text-[#1F1F1F] pb-8">
                A typical SOP generally follows the following structure:
              </p>
              <ul className="list-disc poppins-medium text-[18px] text-[#1F1F1F] pl-6">
                {details?.statementList?.some((list) => list !== "") ? (
                  details?.statementList?.map(
                    (list, index) => list !== "" && <li key={index}>{list}</li>
                  )
                ) : (
                  <p className="text-center italic font-lg">
                    No statement list available
                  </p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#EFF6FF] py-10 lg:py-28">
        <h1 className="poppins-semibold w-full md:w-4/6 md:mx-auto text-[28px] text-[#081831] lg:text-[56px] lg:leading-[72.8px] lg:-tracking-[0.01em] pb-14 px-8 md:px-0 text-center">
          Documents Required to apply for {country} Study Visa
        </h1>
        <div className="relative flex flex-col items-center md:max-w-screen-xl lg:px-10 mx-auto lg:grid grid-cols-2">
          <div className="flex-1 px-10 lg:px-0 text-[18px] poppins-medium md:poppins-semibold text-[#1F1F1F]">
            <p className="pb-8">{details?.applyDocumentDescription}</p>
            <ul className="list-disc pl-6">
              {details?.applyDocumentList?.some((list) => list !== "") ? (
                details?.applyDocumentList?.map(
                  (list, index) => list !== "" && <li key={index}>{list}</li>
                )
              ) : (
                <p className="text-center italic font-lg">
                  No application document list available
                </p>
              )}
            </ul>
          </div>
          <div>{Doc3 && <Doc3 />}</div>
        </div>
      </div>
    </div>
  );
}
