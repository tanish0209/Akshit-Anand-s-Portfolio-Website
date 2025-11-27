"use client";
import Image from "next/image";
function Info() {
  return (
    <div className="p-15 border-b border-b-black/10">
      <div className="text-justify">
        <Image
          src="/akshit-anand.png"
          width={600}
          height={600}
          alt="picture"
          className="float-right ml-10 mb-10 rounded-2xl border border-black/10"
        />
        <h1 className="text-6xl highlight-text mb-4">AKSHIT ANAND</h1>
        <p className="text-2xl leading-relaxed">
          Akshit Anand is a dedicated Speech-Language Pathologist, Swallowing
          Specialist and Audiologist committed to improving the communication,
          hearing, and swallowing abilities of individuals across all age
          groups. With a strong academic foundation from India’s premier
          institute, the All India Institute of Speech and Hearing (AIISH), he
          blends clinical expertise with a deep sense of empathy and
          patient-centred care.
          <br /> Specializing in a wide spectrum of speech, language, and
          swallowing disorders, Akshit provides comprehensive assessment and
          individualized therapy for conditions such as speech-sound disorders,
          stammering, language delays, voice disorders, cognitive-communication
          difficulties, dysphagia, and hearing-related challenges. His approach
          is rooted in evidence-based practice, ensuring that every treatment
          plan is tailored to the unique needs, goals, and strengths of each
          patient.
        </p>
        <p className="text-2xl leading-relaxed mt-5">
          He strongly believes that communication is central to a person’s
          identity, confidence, and quality of life. His practice is built on
          the philosophy of empowering patients, helping them express themselves
          clearly, connect meaningfully with others, and regain independence in
          daily interactions. Whether working with children developing early
          speech and language skills or adults recovering communication
          abilities after neurological conditions, he brings patience,
          precision, and genuine compassion to every session.{" "}
        </p>
        <p className=" text-2xl leading-relaxed">
          With a commitment to continuous learning and clinical excellence,
          Akshit strives to make high-quality speech, language, and hearing care
          accessible, effective, and deeply supportive for the individuals and
          families he serves.
        </p>
        <p className="text-2xl leading-relaxed mt-5">
          Akshit has been invited for over 30 conferences, including National
          and International Platforms including IDC, AOICON, PHONOCON, RCI - CRE
          PROGRAMS, LVA etc. <br />
          He has successfully trained 20+ interns and conducted 10 + workshops
          for Speech and swallow rehabilitation.
        </p>
      </div>
      <div className="flex justify-center items-baseline mt-10 ">
        <ul className="flex justify-center items-center bg-[#0D2F5C] rounded-full p-3 shadow-lg backdrop-blur-lg">
          {[
            { num: "5+", label: "Years of Experience" },
            { num: "5", label: "Certifications" },
            { num: "1000+", label: "Patients Treated" },
            { num: "10+", label: "Workshops Conducted" },
            { num: "3+", label: "Research Publications" },
          ].map((item, index) => (
            <li
              key={index}
              className={`flex flex-col items-center text-white px-10 ${
                index !== 4 ? "border-r border-white/30" : ""
              }`}
            >
              <span className="text-2xl">{item.num}</span>
              <span className="text-sm ">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Info;
