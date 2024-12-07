'use client';
import { useMyContext } from '@/_components/Context/MyContextProvider';
import Image from 'next/image';
import React from 'react';

const HomePageModal: React.FC = () => {
  const { modalOpen, setModalOpen } = useMyContext();

  return (
    <div>
      {/* Only display the modal if modalOpen is true */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Fullscreen modal box */}
          <div className="relative w-2/3 h-fit max-w-full max-h-full flex flex-col bg-white rounded-lg overflow-hidden">
            <div className="flex justify-end items-center p-4 border-b">
              {/* Close button */}
              <button onClick={() => setModalOpen(false)} className="text-white hover:text-gray-800 bg-gray-500  hover:bg-white p-1 rounded-full px-2  text-sm" > X </button>
            </div>

            {/* Image content */}
            <div className="flex-grow">
              <Image
                className="w-2/3 h-auto"
                layout="responsive"
                width={100}
                height={100}
                src="https://i.ibb.co.com/L0KDWhd/event1.png"
                alt="Event Image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageModal;
