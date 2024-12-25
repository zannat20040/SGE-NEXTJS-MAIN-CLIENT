import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Requirement_Card_SmallScreen = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 pt-24 pb-36">
      {/* first card */}
      <motion.div
        onClick={() => toggleCard(1)}
        initial={{ height: "450px" }}
        animate={{ height: expandedCard === 1 ? "auto" : "450px" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative bg-[#59C3CF] rounded-[32px] overflow-hidden"
      >
        <div className="text-white px-8 py-14">
          <h2 className="text-4xl font-semibold mb-2">Diploma</h2>
          <p className={`mb-2 ${expandedCard === 1 ? "hidden" : "flex"}`}>
            Students usually need to have completed their secondary education,
            such as SSC or O-levels, with satisfactory grades. The specific
            grade requirements may vary depending on the university and program.
          </p>
          {expandedCard === 1 && (
            <div className="overflow-hidden">
              <p>
                Students usually need to have completed their secondary
                education, such as SSC or O-levels, with satisfactory grades.
                The specific grade requirements may vary depending on the
                university and program.
              </p>
              <br />
              <p>
                A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                individual component (Reading, Writing, Listening, Speaking)
                score below 5.5, a minimum overall score of 72 to 79 on the
                internet-based test (IBT) in TOEFL, and a minimum overall score
                of C1 or C2 level respectively are typically required.
              </p>
            </div>
          )}
        </div>
        <motion.div
          className={`absolute bottom-0 right-0 ${
            expandedCard == 1 ? "hidden" : ""
          }`}
        >
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/sWF93mL/49a.png"
            alt="Diploma"
            className="object-cover h-auto w-auto group-hover:scale-125"
          />
        </motion.div>
      </motion.div>

      {/* Second Card */}
      <motion.div
        onClick={() => toggleCard(2)}
        initial={{ height: "450px" }}
        animate={{ height: expandedCard === 2 ? "auto" : "450px" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative bg-[#E2635E] rounded-[32px] overflow-hidden"
      >
        <div className="text-white px-8 py-14">
          <h2 className="text-4xl font-semibold mb-2">{`Master's`}</h2>
          <p className={`mb-2 ${expandedCard === 2 ? "hidden" : "flex"}`}>
            Hold a relevant {`Bachelor's`} degree or an equivalent qualification
            from a recognized institution.
          </p>
          {expandedCard === 2 && (
            <div className="overflow-hidden">
              <p>
                Students usually need to have completed their {`Bachelor's`} degree
                or an equivalent qualification from a recognized institution
                with satisfactory grades. The specific grade requirements may
                vary depending on the university and program.
              </p>
              <br />
              <p>
                A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                individual component (Reading, Writing, Listening, Speaking)
                score below 5.5, a minimum overall score of 72 to 79 on the
                internet-based test (IBT) in TOEFL, and a minimum overall score
                of C1 or C2 level respectively are typically required.
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Third Card */}
      <motion.div
        onClick={() => toggleCard(3)}
        initial={{ height: "450px" }}
        animate={{ height: expandedCard === 3 ? "auto" : "450px" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative bg-[#A881F3] rounded-[32px] overflow-hidden"
      >
        <div className="text-white px-8 py-14">
          <h2 className="text-4xl font-semibold mb-2">{`Bachelor's`}</h2>
          <p className={`mb-2 ${expandedCard === 3 ? "hidden" : "flex"}`}>
            Students need to have completed their higher secondary education,
            such as HSC or A-levels, with satisfactory grades.
          </p>
          {expandedCard === 3 && (
            <div className="overflow-hidden">
              <p>
                Students usually need to have completed their higher secondary
                education, such as HSC or A-levels, with satisfactory grades.
              </p>
              <br />
              <p>
                A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                individual component score below 5.5, is typically required.
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Fourth Card */}
      <motion.div
        onClick={() => toggleCard(4)}
        initial={{ height: "450px" }}
        animate={{ height: expandedCard === 4 ? "auto" : "450px" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative bg-[#58B1EA] rounded-[32px] overflow-hidden"
      >
        <div className="text-white px-8 py-14">
          <h2 className="text-4xl font-semibold mb-2">Doctorate</h2>
          <p className={`mb-2 ${expandedCard === 4 ? "hidden" : "flex"}`}>
            Hold a relevant {`Master's`} degree or equivalent qualification.
          </p>
          {expandedCard === 4 && (
            <div className="overflow-hidden">
              <p>
                Students need a {`Master's`} degree or equivalent qualification with
                satisfactory grades.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Requirement_Card_SmallScreen;
