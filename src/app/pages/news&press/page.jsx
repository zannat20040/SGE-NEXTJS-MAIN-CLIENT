import Banner from "@/_components/shared/About/Banner";
import PhotoCard from "@/_components/shared/About/PhotoCard";
import React from "react";

export default function page() {
  const bannerDescription = [
    {
      para: "Stay informed with the latest updates from SGE. Our News & Press section keeps you connected to the most recent developments, achievements, and announcements in the education sector. Explore insightful articles, success stories, and key events that highlight our commitment to excellence and innovation. Follow us for breaking news and press releases that shape the future of global education.",
    },
  ];

  const latestNews = [
    {
      title: "New University Partnerships",
      description:
        "Explore our growing collaborations with top global universities, creating more opportunities for students in various fields like engineering, business, and arts.",
      url: "https://www.shabujglobal.com/static/media/img1.354af1d852d73ac82cae.jpg",
    },
    {
      title: "Admissions Updates",
      description:
        "Don't miss the latest deadlines for upcoming intakes, application tips, and exclusive scholarship opportunities.",
      url: "https://www.shabujglobal.com/static/media/img2.4d75b29f7f7273d5ab65.jpg",
    },
    {
      title: "Program Launches",
      description:
        "Learn about newly introduced services, including study abroad consultations, career guidance programs, and student mentorship services.",
      url: "https://www.shabujglobal.com/static/media/img3.c9db17061f92e3d76b1e.jpg",
    },
  ];

  const PressRelease = [
    {
      title: "Global Collaborations",
      description:
        "Details on agreements with international universities, providing students with direct access to world-class educational programs.",
      url: "https://www.shabujglobal.com/static/media/dun3.73079785858645ddff3f.jpg",
    },
    {
      title: "New Services",
      description:
        "Information on newly introduced student programs, workshops, and events aimed at helping students excel in their academic journeys.",
      url: "https://www.shabujglobal.com/static/media/bir2.0962eb35b764779c6eb3.jpg",
    },
    {
      title: "Expansion News",
      description:
        "Updates on Shabuj Global's expansion into new regions or areas of expertise, allowing more students to benefit from our services.",
      url: "https://www.shabujglobal.com/static/media/DSC06439.c55468ec8debfb5577fa.jpg",
    },
  ];

  const media = [
    {
      title: "Featured Articles",
      description:
        "Shabuj Global Education in the spotlight—discover articles and interviews highlighting our mission to connect students with global education opportunities.",
      url: "https://www.shabujglobal.com/static/media/dun2.eb887c18d5875a0911cd.jpg",
    },
    {
      title: "Video Features",
      description:
        "Watch our team in action at education fairs, seminars, and interviews with media outlets discussing the future of international education.",
      url: "https://www.shabujglobal.com/static/media/DSC06774.8b1f8d2bdc8253a126f2.jpg",
    },
  ];

  const events = [
    {
      title: "Upcoming Events",
      description:
        "Details on scheduled webinars, workshops, and fairs where students can interact with university representatives, get personalized guidance, and learn about scholarship options.",
      url: "https://www.shabujglobal.com/static/media/DSC06612.418b4b96f682a3a59efc.jpg",
    },
    {
      title: "Event Highlights",
      description:
        "Recaps of recent events with photo galleries, student testimonials, and key takeaways from our workshops and fairs.",
      url: "https://www.shabujglobal.com/static/media/DSC06481.9c92f8de555e66af194d.jpg",
    },
  ];

  const gallery = [
    {
      title: "Event Photos",
      description:
        "Explore images from international education fairs, student workshops, and key company events.",
      url: "https://www.shabujglobal.com/static/media/DSC06474.c4a47e40ccc41c1856a5.jpg",
    },
    {
      title: "Videos",
      description:
        "Watch informative sessions, student success stories, and press features on Shabuj Global’s role in shaping the future of education for Bangladeshi students.",
      url: "https://www.shabujglobal.com/static/media/DSC06428.968c5e32637a400a518f.jpg",
    },
  ];

  return (
    <div>
      <Banner
        title={"Join a Collaborative Team"}
        description={bannerDescription}
        style={"text-white"}
      />

      {/* latest news */}
      <div className="bg-[#EFF6FF] py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px] ">
              Latest News
            </h2>
            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Stay up-to-date with our latest development
            </p>
          </div>
          <PhotoCard data={latestNews} />
        </div>
      </div>

      {/* press release */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px] ">
              Press Releases
            </h2>
            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Official announcements on key achievements and partnerships:
            </p>
          </div>
          <PhotoCard data={PressRelease} />
        </div>
      </div>

      {/* media */}
      <div className="bg-[#EFF6FF] py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px] ">
              In the Media{" "}
            </h2>
            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Explore our coverage across various platforms
            </p>
          </div>
          <PhotoCard data={media} />
        </div>
      </div>

      {/* events */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px] ">
              Events{" "}
            </h2>
            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Join us at our upcoming events and review past highlights{" "}
            </p>
          </div>
          <PhotoCard data={events} />
        </div>
      </div>

      {/* gallery */}
      <div className="bg-[#EFF6FF] py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px] ">
              Media Gallery{" "}
            </h2>
            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Take a visual tour of our journey
            </p>
          </div>
          <PhotoCard data={gallery} />
        </div>
      </div>

      <div className="pb-48"></div>
    </div>
  );
}
