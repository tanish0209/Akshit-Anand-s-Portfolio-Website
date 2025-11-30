import React from "react";

const careerData = [
  {
    id: 1,
    role: "Speech Language Pathologist",
    company: "Rajiv Gandhi Cancer Institute and Research Center",
    period: "Sep 2025 - Present",
  },
  {
    id: 2,
    role: "Speech and Swallowing Specialist",
    company: "Max Healthcare, Delhi",
    period: "Aug 2023 - Sep 2025",
  },
  {
    id: 3,
    role: "Medical Speech Language Pathologist",
    company: "Maulana Azad Medical College, Delhi",
    period: "Apr 2022 - Sep 2023",
  },
  {
    id: 4,
    role: "Speech Language Pathologist",
    company: "Delhi",
    period: "Feb 2022 - Apr 2022",
  },
  {
    id: 5,
    role: "Speech Language Pathologist - Fellowship",
    company: "Max Healthcare, Delhi",
    period: "Oct 2021 - Jan 2022",
  },
  {
    id: 6,
    role: "Speech Language Pathologist, Audiologist - Internship",
    company: "Dr. Ram Manohar Lohia Hospital (PGIMER), Delhi",
    period: "Nov 2018 - Apr 2019",
  },
  {
    id: 7,
    role: "Speech Language Pathologist, Audiologist - Internship",
    company: "All India Institute of Speech and Hearing, Mysore",
    period: "Jun 2018 - Nov 2018",
  },
];

function Career() {
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-15 border-b border-b-black/10 min-h-[90vh]">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-5 highlight-text">
        Career Progression
      </h2>

      <div className="py-6 sm:py-8 md:py-12 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Timeline container */}
          <div className="relative">
            {/* Vertical line - Hidden on mobile, shown on desktop (center) */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 w-0.5 border-l-2 border-dashed border-gray-400 transform -translate-x-1/2"
              style={{ height: `calc(100% - 4rem)` }}
            ></div>

            {/* Vertical line - Left side for mobile/tablet */}
            <div
              className="lg:hidden absolute left-4 sm:left-6 top-0 w-0.5 border-l-2 border-dashed border-gray-400"
              style={{ height: `calc(100% - 7rem)` }}
            ></div>

            {/* Timeline items */}
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {careerData.map((item) => (
                <div key={item.id} className="relative">
                  {/* Timeline dot - Desktop (center) */}
                  <div className="hidden lg:block absolute left-1/2 top-0 transform -translate-x-1/2">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-gray-600 border-2 flex items-center justify-center border-dashed shadow-lg ">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#0D2F5C]"></div>
                    </div>
                  </div>

                  {/* Timeline dot - Mobile/Tablet (left side) */}
                  <div className="lg:hidden absolute left-4 sm:left-6 top-0 transform -translate-x-1/2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-gray-600 border-2 flex items-center justify-center border-dashed shadow-lg ">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#0D2F5C]"></div>
                    </div>
                  </div>

                  {/* Content - Consistent layout for all items */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-20">
                    {/* Mobile/Tablet Layout */}
                    <div className="lg:hidden pl-10 sm:pl-14">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-serif highlight-text leading-tight mb-2">
                        {item.role}
                      </h3>
                      <h4 className="text-base sm:text-lg md:text-xl text-[#0d2f5c]/90 font-normal mb-1">
                        {item.company}
                      </h4>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        {item.period}
                      </p>
                    </div>

                    {/* Desktop Layout - Role always on left */}
                    <div className="hidden lg:block text-right pr-8 xl:pr-12">
                      <h3 className="text-xl xl:text-2xl 2xl:text-3xl highlight-text leading-tight">
                        {item.role}
                      </h3>
                    </div>

                    {/* Desktop Layout - Company/Period always on right */}
                    <div className="hidden lg:block pl-8 xl:pl-12">
                      <h4 className="text-lg xl:text-xl 2xl:text-2xl text-[#0d2f5c]/90 font-normal mb-1">
                        {item.company}
                      </h4>
                      <p className="text-base xl:text-lg 2xl:text-xl text-gray-600">
                        {item.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
