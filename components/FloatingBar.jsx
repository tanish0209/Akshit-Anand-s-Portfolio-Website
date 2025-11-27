"use client";

import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function FloatingSocialBar() {
  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 z-50 gap-2 flex flex-col">
      {/* INSTAGRAM */}
      <a
        href="https://www.instagram.com/spee.chster/?hl=en"
        target="_blank"
        className="p-3 bg-[#E4405F] flex  rounded-full justify-center items-center"
      >
        <Instagram className="text-white" size={26} />
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/akshit-anand-2b851322b/"
        target="_blank"
        className="p-3 bg-[#3cbbff] flex  rounded-full justify-center items-center"
      >
        <Linkedin className="text-white" size={26} />
      </a>

      {/* FACEBOOK */}
      <a
        href="https://facebook.com"
        target="_blank"
        className="p-3 bg-[#1877F2] flex rounded-full justify-center items-center"
      >
        <Facebook className="text-white" size={26} />
      </a>

      {/* GMAIL */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=akshitanand97@gmail.com"
        className="p-3 bg-[#D44638] flex rounded-full justify-center items-center"
      >
        <Mail className="text-white" size={26} />
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919980216451"
        target="_blank"
        className="p-3 bg-[#25D366] rounded-full flex justify-center items-center"
      >
        <MessageCircle className="text-white" size={26} />
      </a>
    </div>
  );
}
