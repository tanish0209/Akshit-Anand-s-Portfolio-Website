import { ChevronRight } from "lucide-react";
import React from "react";

function Education() {
  return (
    <div className="p-15 border-b border-b-black/10">
      <h2 className="text-4xl mb-5">Education</h2>
      <ul>
        {[
          {
            degree:
              "Bachelor's in Audiology and Speech Language Pathology(BASLP)",
            college:
              "All India Institute of Speech and Hearing (AIISH), Mysuru, India",
            duration: "2015-2019",
          },
          {
            degree: "Master's of Science in Speech Language Pathology(MSc.SLP)",
            college:
              "All India Institute of Speech and Hearing (AIISH), Mysuru, India",
            duration: "2019-2021",
          },
        ].map((item) => (
          <li key={item.degree} className="px-10 py-5">
            <div className="space-x-2 flex">
              <ChevronRight className="highlight-text size-10" />
              <div className="space-y-2">
                <h4 className="highlight-text text-3xl">{item.degree}</h4>
                <h5 className="text-2xl">{item.college}</h5>
                <h6 className="text-2xl text-gray-600">{item.duration}</h6>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
