"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    author: "Preeti Sharma",
    review:
      "My mother got stroke four months ago and unable to speak .she took speech therapy and shows remarkable improvement. Dr. Akshit Anand is an excellent doctor and a very soft spoken person also.His techniques and approaches for the treatment shows his expertise. Thank you sir for your efforts for my mother. Highly recommended for speech related issues.",
    rating: "5.0",
  },
  {
    author: "Shweta Gupta",
    review:
      "I was diagnosed with a brain stroke on 15 September 2025, with left medullary syndrome. After the incident, I was unable to even drink water without coughing, and had to be on RT feed when I was discharged on 19 September.Then I got in touch with Dr. Akshit Anand, and he has been nothing short of a blessing. In just five therapy sessions, I saw remarkable improvement:He himself removed my RT tube.He assisted me to eat dal-roti safely without coughing.Gradually, he helped me regain control and confidence in swallowing.His approach is caring, precise, and deeply professional.Before meeting him, I had doubts—how could things improve so fast? But Dr. Anand’s expertise, patience, and personalized therapy turned my recovery around. Today, I can eat, drink, and live with dignity again.I am fully satisfied with his treatment. He gave me hope when everything felt broken. I wholeheartedly recommend Dr. Akshit Anand to anyone needing neuro‑rehabilitation or swallowing therapy after a stroke.Thank you, Dr. Anand — my “before & after” is dramatic because of you.",
    rating: "5.0",
  },
  {
    author: "Saroj Bala",
    review:
      "I had an excellent experience with Dr. Akshit. He helped me with speech and swallowing difficulty and therapy sessions with him improved my condition a lot. I will highly recommend him for speech and dysphagia therapy. I truly appreciate your efforts, sir.",
    rating: "5.0",
  },
  {
    author: "Vijay Puri",
    review:
      "My experience with Akshit, was great. He helped with me with my speech clarity and swallowing ability post my tongue cancer surgery. Before my swallowing also affected but now I'm able to manage soft solid diet well. Thanks to him.",
    rating: "5.0",
  },
  {
    author: "Surbhi Jain",
    review:
      "We took speech therapy for my father from Akshit Anand. He has shown noticeable improvement in speech and comprehension under his guidance. He is patient, skilled, and adapts exercises as per the patient’s needs, making each session effective and encouraging. We truly appreciate his expertise and support in his recovery.",
    rating: "5.0",
  },
  {
    author: "Narender Kumar",
    review:
      "Have been consulting with Dr Akshit Anand for more than a year now. Highly professional and always bringing new research and techniques for his patients. I would recommend him.",
    rating: "5.0",
  },
  {
    author: "Rajesh Gupta",
    review:
      "I am a Parkinsons Patient, and I'm taking speech and swallowing therapy from Akshit ji. My problem of swallowing tablets is solved now. My voice is also improving slowly.I can speak a few sentences now. Thanks to Akshit for all his help and support.",
    rating: "5.0",
  },
  {
    author: "Sumit Vashisht",
    review:
      "I have Stammering since I was 7, I have get to know about Skope Centre for Speech, Voice, Swallowing, and Hearing in Vikaspuri. Therefore, I visited & met Dr. Akshit there, I described him about my problem. Now, I can confidently say that it has been a truly transformative experience. Dr. Akshit approach is not only professional and methodical but also deeply empathetic and encouraging.Dr. Akshit takes the time to understand individual needs and customizes therapy accordingly. His techniques are practical, easy to follow, and most importantly effective. I’ve seen noticeable improvement in my fluency, confidence, and ability to communicate in everyday situations.What stands out the most is his patience and positive attitude. He creates a safe, non-judgmental space that motivates you to push past your limits and keep improving.Highly recommended for anyone seeking help with speech or communication issues.",
    rating: "5.0",
  },
  {
    author: "Ashutosh Srivastava",
    review:
      "Skope centre for speech (Vikaspuri)- This is a place where I found practical techniques of speech improvement after a major surgery. Dr. Akshit Anand is an experienced professional, knowledgeable and really helped with positive approach and right techniques (tried and tested) of evaluation to improve the speech. Must try place if anyone needs help.",
    rating: "5.0",
  },
  {
    author: "Manoj Sharma",
    review:
      "Dr. Akshit Anand is an excellent doctor. His speech therapy after stroke has really helped us. Highly recommended.",
    rating: "5.0",
  },
];
const StarRating = ({ rating }) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;

  for (let i = 0; i < full; i++) stars.push("full");
  if (half) stars.push("half");

  return (
    <div className="flex gap-1">
      {stars.map((type, i) => (
        <div key={i}>
          {type === "full" ? (
            <svg
              className="w-6 h-6 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.05 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24">
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#half-${i})`}
                stroke="currentColor"
                strokeWidth="1.2"
                d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isHolding, setIsHolding] = useState(false); // pause carousel

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  // Auto-slide
  useEffect(() => {
    if (isHolding) return; // pause on hold
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [isHolding]);

  const getPosition = (pos) => {
    const diff = (pos - index + reviews.length) % reviews.length;

    if (diff === 0) return { scale: 1, zIndex: 40, opacity: 1, x: 0 };
    if (diff === 1 || diff === reviews.length - 1)
      return {
        scale: 0.85,
        zIndex: 20,
        opacity: 0.98,
        x: diff === 1 ? 300 : -300,
      };

    return { scale: 0.2, zIndex: 0, opacity: 0, x: 0 };
  };

  return (
    <div className="p-5 border-b border-b-black/10 w-full">
      <div className="min-h-[90vh] rounded-2xl bg-linear-to-b from-[#D7E6F9] to-[#B3C8E1] p-5">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl highlight-text">Patient Testimonials</h2>
          <h5 className="text-2xl subtext">What Our Patients Say</h5>
        </div>

        <div className="relative w-full flex justify-center items-center min-h-[70vh]">
          {reviews.map((item, i) => {
            const { scale, zIndex, opacity, x } = getPosition(i);

            return (
              <motion.div
                key={item.author}
                onMouseDown={() => setIsHolding(true)}
                onMouseUp={() => setIsHolding(false)}
                onMouseLeave={() => setIsHolding(false)}
                className="absolute w-[40vw] h-[60vh] bg-white border rounded-2xl shadow-md p-5 overflow-hidden"
                animate={{ scale, zIndex, opacity, x }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              >
                <h3 className="text-2xl font-semibold text-black mb-2 mx-5">
                  {item.author}
                </h3>

                {/* ⭐ RATING */}
                <div className="mx-5 mb-3">
                  <StarRating rating={parseFloat(item.rating)} />
                </div>

                <p className="mx-5 text-md font-light text-black text-justify h-[60%] overflow-y-auto">
                  {item.review}
                </p>

                <p className="text-center text-gray-500 mt-4 text-sm">
                  Click & hold to pause
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="relative z-100 flex place-self-center gap-6 mt-5">
          <button
            onClick={prev}
            className="p-2 bg-[#0D2F5C] text-white rounded-full hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="p-2 bg-[#0D2F5C] text-white rounded-full hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
