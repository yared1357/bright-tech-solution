import { Github, Linkedin, Twitter, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              BrightTech Solutions
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transforming businesses worldwide with innovative technology solutions since 2010.
            </p>
            <br></br>
            <p className="text-sm text-gray-400 leading-relaxed">
              We are known for the quality and timely delivery of our customers' projects.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">SW Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Data Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>Copyrights &copy; {currentYear} GlobalTech Solutions | Developed by <a href="https://yared.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Y-Global System Solution
           {''} </a>
            | All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}