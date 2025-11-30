function Info() {
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-15 border-b border-b-black/10">
      <div className="text-justify">
        {/* Image - Floats right on desktop, centered on mobile */}
        <img
          src="/akshit-anand.png"
          alt="Akshit Anand"
          className="w-full sm:w-80 md:w-96 lg:w-[600px] h-auto 
                   mx-auto sm:float-right sm:ml-6 md:ml-8 lg:ml-10 
                   mb-6 sm:mb-8 md:mb-10 
                   rounded-xl sm:rounded-2xl border border-black/10 shadow-lg"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl highlight-text mb-3 sm:mb-4 text-center sm:text-left">
          AKSHIT ANAND
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          Akshit Anand is a dedicated Speech-Language Pathologist, Swallowing
          Specialist and Audiologist committed to improving the communication,
          hearing, and swallowing abilities of individuals across all age
          groups. With a strong academic foundation from India&apos;s premier
          institute, the All India Institute of Speech and Hearing (AIISH), he
          blends clinical expertise with a deep sense of empathy and
          patient-centred care.
          <br />
          <br />
          Specializing in a wide spectrum of speech, language, and swallowing
          disorders, Akshit provides comprehensive assessment and individualized
          therapy for conditions such as speech-sound disorders, stammering,
          language delays, voice disorders, cognitive-communication
          difficulties, dysphagia, and hearing-related challenges. His approach
          is rooted in evidence-based practice, ensuring that every treatment
          plan is tailored to the unique needs, goals, and strengths of each
          patient.
        </p>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mt-4 sm:mt-5">
          He strongly believes that communication is central to a person&apos;s
          identity, confidence, and quality of life. His practice is built on
          the philosophy of empowering patients, helping them express themselves
          clearly, connect meaningfully with others, and regain independence in
          daily interactions. Whether working with children developing early
          speech and language skills or adults recovering communication
          abilities after neurological conditions, he brings patience,
          precision, and genuine compassion to every session.
        </p>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mt-4 sm:mt-5">
          With a commitment to continuous learning and clinical excellence,
          Akshit strives to make high-quality speech, language, and hearing care
          accessible, effective, and deeply supportive for the individuals and
          families he serves.
        </p>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mt-4 sm:mt-5">
          Akshit has been invited for over 30 conferences, including National
          and International Platforms including IDC, AOICON, PHONOCON, RCI - CRE
          PROGRAMS, LVA etc.
          <br />
          He has successfully trained 20+ interns and conducted 10+ workshops
          for Speech and swallow rehabilitation.
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center items-center mt-8 sm:mt-10 px-2 sm:px-4">
        <ul
          className="flex flex-col sm:flex-row justify-center items-center 
                      bg-[#0D2F5C] rounded-2xl sm:rounded-full 
                      p-3 sm:p-4 shadow-lg backdrop-blur-lg 
                      w-full max-w-5xl gap-0"
        >
          {[
            { num: "5+", label: "Years of Experience" },
            { num: "5", label: "Certifications" },
            { num: "1000+", label: "Patients Treated" },
            { num: "10+", label: "Workshops Conducted" },
            { num: "3+", label: "Research Publications" },
          ].map((item, index) => (
            <li
              key={index}
              className={`flex flex-col items-center text-white 
                        px-4 sm:px-6 md:px-8 lg:px-10 
                        py-3 sm:py-0
                        w-full sm:w-auto
                        ${
                          index !== 4
                            ? "border-b sm:border-b-0 sm:border-r border-white/30"
                            : ""
                        }`}
            >
              <span className="text-2xl md:text-3xl">{item.num}</span>
              <span className="text-xs sm:text-sm md:text-base text-center mt-1">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Info;
