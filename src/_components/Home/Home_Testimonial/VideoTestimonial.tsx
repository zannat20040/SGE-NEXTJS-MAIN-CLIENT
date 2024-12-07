// GoogleDriveVideos.tsx
import React from 'react';
import  videoData  from '../../../assets/json/VideoData.json';  

const GoogleDriveVideos: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {videoData.map((video) => (
        <div
          key={video.id}
          className="w-full md:w-[45%] lg:w-[30%] bg-gray-100 shadow-lg rounded-lg p-4"
        >
          <h3 className="text-lg font-semibold text-gray-800">{video.name}</h3>
          <p className="text-sm text-gray-600 mb-2">Country: {video.country}</p>
          <iframe
            src={`https://drive.google.com/file/d/${video.id}/preview`}
            width="100%"
            height="300"
            allow="autoplay"
            className="rounded-md"
            title={video.name}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default GoogleDriveVideos;
