import React from "react";
const memberships = [
  "Indian Speech and Hearing Association (ISHA)",
  "Delhi Branch of Indian Speech and Hearing Association (DISHA)",
  "SLPQuest, Bangalore, India",
  "Rehabilitation Council Of India (RCI) - A78605",
];
function Memberships() {
  return (
    <div className="p-15 border-b border-b-black/10">
      <h2 className="text-4xl mb-10">Memberships</h2>
      <div>
        {memberships.map((item, index) => (
          <div
            key={item}
            className={`py-2  highlight-text text-2xl border-t border-t-black/40 ${
              index == memberships.length - 1
                ? " border-b border-b-black/40"
                : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Memberships;
