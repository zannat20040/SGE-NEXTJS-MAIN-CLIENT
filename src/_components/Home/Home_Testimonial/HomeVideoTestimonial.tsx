'use client';

import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import sliders from '../../../assets/json/VideoData.json';

const HomeVideoTestimonial = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<{ id: string; name: string } | null>(null);

    const openModal = (video: { id: string; name: string }) => {
        setSelectedVideo(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedVideo(null);
    };

    const nextSlider = () =>
        setCurrentSlider((currentSlider) =>
            currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        );

    const prevSlider = () =>
        setCurrentSlider((currentSlider) =>
            currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
        );

    return (
        <div className="bg-gradient-to-r from-[#031EE5] to-[#2081ff] overflow-hidden">
            <div className="md:grid grid-cols-2 block md:mx-20 md:ml-2 ml-0 relative gap-20">
                <div className="w-full md:ml-10 lg:ml-20 drop-shadow-lg ">
                    <h1 className="lg:text-7xl text-3xl sm:text-5xl lg:text-left md:text-left text-center font-bold mb-3 bg-gradient-to-r from-[#88F3D0] to-[#88F3D0] bg-clip-text text-transparent w-full transition-all duration-300 lg:pt-16 md:pt-16 pt-10 pr-4 ">
                        Become a Part of Our Success Stories
                    </h1>
                    <div className="flex gap-3 px-5 lg:pt-[200px] md:pt-[200px] pt-[400px] pb-10 lg:justify-start md:justify-start justify-center">
                        <button
                            onClick={prevSlider}
                            className="flex justify-center items-center text-white border-white border-[2px] lg:text-5xl md:text-5xl text-4xl hover:bg-white rounded-full lg:p-2 md:p-2 p-4 hover:text-black transition-colors duration-300"
                        >
                            <GoArrowLeft />
                        </button>
                        <button
                            onClick={nextSlider}
                            className="flex justify-center items-center text-white border-white border-[2px] lg:text-5xl md:text-5xl text-4xl hover:bg-white rounded-full lg:p-2 md:p-2 p-4 hover:text-black transition-colors duration-300"
                        >
                            <GoArrowRight />
                        </button>
                    </div>
                </div>

                <div className="lg:w-[1000px] md:w-[1000px] w-full flex items-center lg:relative md:relative absolute lg:top-0 md:top-0 top-80 lg:overflow-hidden md:overflow-hidden overflow-visible lg:ml-auto md:ml-auto ml-10">
                    <div
                        className="lg:w-[80%] md:w-[80%] w-[100%] ease-linear flex gap-[2%] absolute md:left-0 left-10 transition-transform duration-300 -mt-30 lg:mt-0 h-max items-center py-6"
                        style={{ transform: `translateX(-${currentSlider * 52}%)` }}
                    >
                        {sliders.map((slide, inx) => (
                            <div
                                key={inx}
                                className={`${currentSlider === inx
                                    ? "bg-gradient-to-b from-[#88D6F3] via-[#88F3D0] to-[#ACFFE4] transition-all duration-300"
                                    : " transition-all duration-300"
                                    } h-full flex-grow !p-5 min-w-[50%] relative duration-200 bg-white rounded-3xl md:block hidden cursor-pointer`}
                                onClick={() => openModal(slide)} // Open modal on click
                            >
                                <div className="lg:mx-5 flex-1">
                                    <p className="text-xl lg:text-3xl my-5 font-semibold text-center">
                                        {slide.name}
                                    </p>
                                    <p className="text-xs lg:text-lg mx-2 text-center ">{slide.country}</p>
                                </div>
                            </div>
                        ))}

                        {/* For mobile */}
                        {sliders.map((slide, inx) => (
                            <div
                                key={inx}
                                className={`${currentSlider === inx
                                    ? "bg-gradient-to-b from-[#88D6F3] via-[#88F3D0] to-[#ACFFE4] h-[280px] md:h-[530px] lg:h-[530px] transition-all duration-300"
                                    : "h-[280px] md:h-[530px] lg:h-[530px] transition-all duration-300"
                                    } min-w-[50%] duration-200 bg-white rounded-3xl lg:hidden md:hidden  relative mx-1 flex flex-col justify-center`}
                                onClick={() => openModal(slide)} // Open modal on click
                            >


                                <div className="">
                                    <p className="text-sm my-2 font-semibold text-center">
                                        {slide.name}
                                    </p>
                                    <p className="text-[9px] text-center text-lg  mx-5">{slide.country}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-[90%] max-w-3xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">{selectedVideo.name}</h3>
                            <button onClick={() => closeModal()} className="btn outline-none btn-xs btn-circle text-xs text-blue-600  z-10 right-2 top-2">✕</button>

                        </div>
                        <iframe
                            src={`https://drive.google.com/file/d/${selectedVideo.id}/preview`}
                            width="100%"
                            height="800px"
                            allow="autoplay"
                            className="rounded-md"
                            title={selectedVideo.name}
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeVideoTestimonial;
