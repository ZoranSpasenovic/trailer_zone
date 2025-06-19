import { Github, Linkedin, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a0011] text-[#FFD700] py-6 text-center">
      <p className="mb-4 text-lg">Made by Zoran Spasenović</p>

      <div className="flex justify-center gap-6">
        <a
          href="https://zoranspasenovic.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FF8C00] transition-colors"
        >
          <Globe />
        </a>
        <a
          href="https://github.com/ZoranSpasenovic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FF8C00] transition-colors"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/zoran-spasenovic-4b0428271/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FF8C00] transition-colors"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:spalespasenovic@gmail.com"
          className="hover:text-[#FF8C00] transition-colors"
        >
          <Mail />
        </a>
      </div>

      <p className="mt-4 text-sm text-[#BFAF60]">
        This is a demo project using the TMDB API
      </p>
    </footer>
  );
};

export default Footer;
