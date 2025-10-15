import { Building2, ShoppingCart, Heart, GraduationCap, Plane, Landmark } from 'lucide-react';

export default function Solutions() {
  const industries = [
    {
      icon: Building2,
      name: 'Enterprise',
      description: 'Scalable solutions for large organizations',
    },
    {
      icon: ShoppingCart,
      name: 'E-Commerce',
      description: 'Modern platforms for online retail',
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'Secure and compliant medical systems',
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Innovative learning management systems',
    },
    {
      icon: Plane,
      name: 'Travel & Hospitality',
      description: 'Seamless booking and management',
    },
    {
      icon: Landmark,
      name: 'Financial Services',
      description: 'Robust fintech and banking solutions',
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-blue-100 via-blue-400 via-green-200 to-blue-100">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Specialized expertise across multiple sectors to deliver targeted results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Industry?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our solutions can give you a competitive edge
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
