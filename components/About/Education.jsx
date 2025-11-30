import { ChevronRight } from "lucide-react";

function Education() {
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-15 border-b border-b-black/10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-5  highlight-text">
        Education
      </h2>
      <ul className="space-y-4 sm:space-y-6">
        {[
          {
            degree:
              "Bachelor's in Audiology and Speech Language Pathology (BASLP)",
            college:
              "All India Institute of Speech and Hearing (AIISH), Mysuru, India",
            duration: "2015-2019",
          },
          {
            degree:
              "Master's of Science in Speech Language Pathology (MSc.SLP)",
            college:
              "All India Institute of Speech and Hearing (AIISH), Mysuru, India",
            duration: "2019-2021",
          },
        ].map((item) => (
          <li
            key={item.degree}
            className="px-4 sm:px-6 md:px-8 lg:px-10 
                     py-4 sm:py-5 
                     bg-white rounded-xl shadow-sm hover:shadow-md 
                     transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex gap-3 sm:gap-4 items-start">
              <ChevronRight className="highlight-text w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 shrink-0 mt-1" />
              <div className="space-y-1 sm:space-y-2">
                <h4 className="highlight-text text-lg sm:text-xl md:text-2xl lg:text-3xl  leading-tight">
                  {item.degree}
                </h4>
                <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  {item.college}
                </h5>
                <h6 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium">
                  {item.duration}
                </h6>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
