"use client";
import { Poppins } from "next/font/google";
import { useState } from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});
function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mangwqzb", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="w-full p-3 sm:p-5 border-b border-b-black/10">
      <div className="min-h-[90vh] bg-[#7399C6]  rounded-xl sm:rounded-2xl py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
          {/* Image/Placeholder Section */}
          <div
            className="hidden lg:block  lg:w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] 
                        bg-gray-200 place-self-center 
                        rounded-3xl lg:rounded-r-full lg:rounded-l-none
                        order-1 lg:order-none"
          >
            {/* You can add an image here */}
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="w-[90%] sm:w-[85%] lg:w-[80%] p-6 sm:p-8 lg:p-10 
                     bg-white rounded-2xl sm:rounded-3xl lg:rounded-4xl 
                     place-self-center flex flex-col items-center justify-center
                     order-2 lg:order-none shadow-xl"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-black mb-4 sm:mb-5 text-center">
              GET IN TOUCH!
            </h3>

            {/* Name Field */}
            <div className="flex flex-col gap-1 sm:gap-2 w-full">
              <label className="text-base sm:text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Please Enter Your Name"
                required
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-full 
                         border border-[#0D2F5C] bg-transparent outline-none 
                         text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1 sm:gap-2 w-full mt-4 sm:mt-5">
              <label className="text-base sm:text-lg font-medium text-gray-700">
                E-Mail Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Please Enter Your Mail Address"
                required
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-full 
                         border border-[#0D2F5C] bg-transparent outline-none 
                         text-gray-700 placeholder:text-gray-400
                         "
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-1 sm:gap-2 w-full mt-4 sm:mt-5">
              <label className="text-base sm:text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Please Enter Your Message"
                rows={4}
                required
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl 
                         border border-[#0D2F5C] bg-transparent outline-none 
                         text-gray-700 placeholder:text-gray-400 resize-none
                         "
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className={`${poppins.className} w-full rounded-full my-4 sm:my-5 py-2.5 sm:py-3 
                         text-white bg-[#0D2F5C]
                         font-semibold text-base sm:text-lg
                         hover:from-[#0D2F5C] hover:to-blue-600 
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-600 text-center font-medium text-sm sm:text-base">
                  ✓ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center font-medium text-sm sm:text-base">
                  ✗ Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Note Section */}
        <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 mx-3 sm:mx-5 lg:mx-10">
          <div
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 
                        bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4"
          >
            <h4 className="text-red-500 font-bold text-sm sm:text-base lg:text-lg shrink-0">
              NOTE:
            </h4>
            <h4 className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
              Online forms are only for general inquiries. Please do not submit
              any medical history or personal health information.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
