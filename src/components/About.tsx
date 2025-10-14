import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses worldwide with innovative technology solutions that drive growth and efficiency.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the most trusted technology partner, recognized globally for excellence and innovation.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their success is our success.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emma Williams',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'David Kumar',
      role: 'Director of Engineering',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-50 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over a decade of experience, we've established ourselves as a leading force in global software development, delivering exceptional results for clients across 50+ countries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl mb-4 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300">
                  <Icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '200+', label: 'Team Members' },
              { number: '50+', label: 'Countries' },
              { number: '500+', label: 'Success Stories' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
