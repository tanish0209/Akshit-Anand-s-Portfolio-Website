import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function FloatingSocialBar() {
  return (
    <div
      className="fixed 
                    right-2 sm:right-3 md:right-4
                    bottom-4 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2
                    z-100
                    flex flex-row sm:flex-col gap-2 sm:gap-3
                    bg-white/90 sm:bg-transparent text-white
                    
                    p-2 sm:p-0 rounded-full "
    >
      {/* INSTAGRAM */}
      <a
        href="https://www.instagram.com/spee.chster/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-[#F58529] via-[#E4405F] to-[#833AB4] 
                   flex rounded-full justify-center items-center
                   hover:scale-110 transition-transform duration-200 shadow-md"
        aria-label="Follow us on Instagram"
      >
        <Instagram />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/akshit-anand-2b851322b/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 sm:p-2.5 md:p-3 bg-[#0A66C2] flex rounded-full justify-center items-center
                   hover:scale-110 transition-transform duration-200 shadow-md"
        aria-label="Connect on LinkedIn"
      >
        <Linkedin />
      </a>

      {/* FACEBOOK */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 sm:p-2.5 md:p-3 bg-[#1877F2] flex rounded-full justify-center items-center
                   hover:scale-110 transition-transform duration-200 shadow-md"
        aria-label="Follow us on Facebook"
      >
        <Facebook />
      </a>

      {/* GMAIL */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=akshitanand97@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 sm:p-2.5 md:p-3 bg-[#EA4335] flex rounded-full justify-center items-center
                   hover:scale-110 transition-transform duration-200 shadow-md"
        aria-label="Send us an email"
      >
        <Mail />
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919980216451"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 sm:p-2.5 md:p-3 bg-[#25D366] rounded-full flex justify-center items-center
                   hover:scale-110 transition-transform duration-200 shadow-md"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle />
      </a>
    </div>
  );
}
