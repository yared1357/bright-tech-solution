import { Code, Smartphone, Cloud, Database, Shield, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored solutions built with cutting-edge technologies to meet your unique business requirements.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations.',
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: Database,
      title: 'Data Analytics & AI',
      description: 'Harness the power of your data with advanced analytics and artificial intelligence solutions.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      color: 'from-blue-600 to-sky-600',
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end transformation services to modernize your business and drive innovation.',
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
