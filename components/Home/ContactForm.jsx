"use client";
import { Poppins } from "next/font/google";
import React, { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
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
    <div className="w-full p-5 border-b border-b-black/10">
      <div className="min-h-[90vh] background-primary rounded-2xl py-6">
        <div className="grid grid-cols-2">
          <div className="w-full rounded-r-full h-[50vh] bg-gray-200 place-self-center"></div>

          <form
            onSubmit={handleSubmit}
            className="min-w-[80%] min-h-[80%] p-10 bg-white rounded-4xl place-self-center flex flex-col items-center justify-center"
          >
            <h3 className="text-3xl text-black mb-5">GET IN TOUCH!</h3>

            <div className="flex flex-col gap-1 w-full">
              <label className="text-lg font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Please Enter Your Name"
                required
                className="w-full px-5 py-3 rounded-full border border-[#0d2f5c] bg-transparent outline-none text-gray-600"
              />
            </div>

            <div className="flex flex-col gap-1 w-full mt-5">
              <label className="text-lg font-medium">E-Mail Address</label>
              <input
                type="email"
                name="email"
                placeholder="Please Enter Your Mail Address"
                required
                className="w-full px-5 py-3 rounded-full border border-[#0d2f5c] bg-transparent outline-none text-gray-600"
              />
            </div>

            <div className="flex flex-col gap-1 w-full mt-5">
              <label className="text-lg font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Please Enter Your Message"
                rows={5}
                required
                className="w-full px-5 py-3 rounded-2xl border border-[#0d2f5c] bg-transparent outline-none text-gray-600"
              ></textarea>

              <button
                type="submit"
                className={`${poppins.className} w-full rounded-full my-5 py-2 text-white background-secondary`}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {/* Dynamic status message */}
              {status === "success" && (
                <p className="text-green-600 text-center">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="px-5 pt-5 flex gap-3">
          <h4 className={`${poppins.className} text-red-600 font-bold`}>
            NOTE:
          </h4>
          <h4 className={`${poppins.className} text-black`}>
            Online forms are only for general inquiries. Please do not submit
            any medical history or personal health information.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
