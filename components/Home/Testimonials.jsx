"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

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
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.05 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400"
              viewBox="0 0 24 24"
            >
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
  const [isHolding, setIsHolding] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    if (isHolding) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [isHolding]);

  const getPosition = (pos) => {
    const diff = (pos - index + reviews.length) % reviews.length;

    if (isMobile) {
      // Mobile: Show only center card
      if (diff === 0) return { scale: 1, zIndex: 40, opacity: 1, x: 0 };
      return { scale: 0.2, zIndex: 0, opacity: 0, x: 0 };
    } else {
      // Desktop: Show 3 cards
      if (diff === 0) return { scale: 1, zIndex: 40, opacity: 1, x: 0 };
      if (diff === 1 || diff === reviews.length - 1)
        return {
          scale: 0.85,
          zIndex: 20,
          opacity: 0.98,
          x: diff === 1 ? 300 : -300,
        };
      return { scale: 0.2, zIndex: 0, opacity: 0, x: 0 };
    }
  };

  return (
    <div className="p-3 sm:p-5 border-b border-b-black/10 w-full">
      <div className="min-h-[90vh] rounded-xl sm:rounded-2xl bg-linear-to-b from-blue-100 to-blue-200 p-4 sm:p-5">
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl highlight-text ">
            Patient Testimonials
          </h2>
          <h5 className="text-lg sm:text-xl lg:text-2xl subtext mt-1">
            What Our Patients Say
          </h5>
        </div>

        <div className="relative w-full flex justify-center items-center min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] px-4">
          {reviews.map((item, i) => {
            const { scale, zIndex, opacity, x } = getPosition(i);

            return (
              <div
                key={item.author}
                onMouseDown={() => setIsHolding(true)}
                onMouseUp={() => setIsHolding(false)}
                onMouseLeave={() => setIsHolding(false)}
                onTouchStart={() => setIsHolding(true)}
                onTouchEnd={() => setIsHolding(false)}
                className="absolute w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] xl:w-[40vw] 
                          h-[55vh] sm:h-[58vh] md:h-[60vh]
                          bg-white border rounded-xl sm:rounded-2xl shadow-lg 
                          p-4 sm:p-5 overflow-hidden
                          transition-all duration-500 ease-out cursor-grab active:cursor-grabbing"
                style={{
                  transform: `translateX(${x}px) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
              >
                {/* Author Name */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2 px-2 sm:px-4">
                  {item.author}
                </h3>

                {/* Rating */}
                <div className="px-2 sm:px-4 mb-3">
                  <StarRating rating={parseFloat(item.rating)} />
                </div>

                {/* Review Text */}
                <div className="px-2 sm:px-4 h-[calc(100%-140px)] sm:h-[calc(100%-150px)] overflow-y-auto">
                  <p className="text-sm sm:text-base md:text-lg font-light text-black text-justify leading-relaxed">
                    {item.review}
                  </p>
                </div>

                {/* Pause Hint */}
                <p className="text-center text-gray-500 mt-2 sm:mt-3 text-xs sm:text-sm">
                  {isMobile ? "Tap & hold to pause" : "Click & hold to pause"}
                </p>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="relative z-50 flex justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-6">
          <button
            onClick={prev}
            className="p-2 sm:p-3 bg-[#0D2F5C] text-white rounded-full hover:scale-110 transition shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                  i === index ? "bg-[#0D2F5C] w-6 sm:w-8" : "bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 sm:p-3 bg-[#0D2F5C] text-white rounded-full hover:scale-110 transition shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
