import React from "react";
import Info from "../../components/About/Info";
import Education from "../../components/About/Education";
import Career from "../../components/About/Career";
import Certifications from "../../components/About/Certifications";
import Memberships from "../../components/About/Memberships";

function page() {
  return (
    <div className=" bg-linear-to-r from-[#E3F2FD] to-[#FFFFFF]">
      <Info />
      <Education />
      <Career />
      <Certifications />
      <Memberships />
    </div>
  );
}

export default page;
