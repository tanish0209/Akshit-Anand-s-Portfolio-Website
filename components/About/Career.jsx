import React from "react";
const careerData = [
  {
    id: 1,
    role: "Speech Language Pathologist",
    company: "Rajiv Gandhi Cancer Institute and Reseach Center",
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
    <div className="p-15 border-b border-b-black/10 min-h-[90vh]">
      <h2 className="text-4xl mb-5">Career Progression</h2>
      <div className="py-12 px-4 sm:px-6 ">
        <div className="max-w-6xl mx-auto">
          {/* Timeline container */}
          <div className="relative">
            {/* Vertical center line */}
            <div
              className="absolute left-1/2 top-0 w-0.5 border-l-2 border-dashed border-gray-400 transform -translate-x-1/2"
              style={{ height: `calc(100% - 4rem)` }}
            ></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {careerData.map((item) => (
                <div key={item.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
                    <div className="w-7 h-7 rounded-full  border-gray-600 border-2 flex items-center justify-center border-dashed shadow-lg">
                      <div className="w-5 h-5 rounded-full bg-[#0D2F5C]"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid grid-cols-2 gap-20">
                    {/* Left side - Role */}
                    <div className="text-left pr-12">
                      <h3 className="text-3xl font-serif highlight-text leading-tight">
                        {item.role}
                      </h3>
                    </div>

                    {/* Right side - Company and Period */}
                    <div className="pl-12">
                      <h4 className="text-2xl text-[#0d2f5c]/90 font-normal mb-1">
                        {item.company}
                      </h4>
                      <p className="text-gray-600 text-xl">{item.period}</p>
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
