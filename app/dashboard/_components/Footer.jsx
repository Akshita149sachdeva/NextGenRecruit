import { ArrowRight, CopyrightIcon, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright Section */}
        <div className="flex items-center text-sm">
          <CopyrightIcon className="mr-2 h-5 w-5 text-gray-400" />
          <span>{new Date().getFullYear()} Vellore Institute of Technology.</span>
        </div>

       

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://vtop.vit.ac.in/vtop/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
            aria-label="Website"
          >
            <ArrowRight className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/school/vellore-institute-of-technology/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/VIT_univ?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
