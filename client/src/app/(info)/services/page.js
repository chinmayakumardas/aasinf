


// 'use client'
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faCode, 
//   faRobot, 
//   faMobileScreen, 
//   faArrowRight,
//   faShieldAlt,
//   faDatabase
// } from '@fortawesome/free-solid-svg-icons';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// const Services = () => {
//   const router = useRouter();
//   const services = [
//     {
//       id: 'web-development',
//       icon: faCode,
//       title: "Web Development",
//       description: "Custom web applications built with cutting-edge technologies to deliver exceptional user experiences.",
//       features: [
//         "Responsive Design",
//         "Frontend Development",
//         "Backend Integration",
//         "Performance Optimization"
//       ],
//       image: '/assets/web-dev.jpg',
//     },
//     {
//       id: 'mobile-development',
//       icon: faMobileScreen,
//       title: "Mobile Development",
//       description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
//       features: [
//         "iOS Development",
//         "Android Development",
//         "Cross-Platform Solutions",
//         "Mobile UI/UX Design"
//       ],
//       image: '/assets/mobile-dev.jpg'
//     },
//     {
//       id: 'ui-ux',
//       icon: faRobot,
//       title: "UI/UX Design",
//       description: "Creating intuitive and engaging user interfaces that enhance user experience and drive engagement.",
//       features: [
//         "User Research",
//         "Wireframing & Prototyping",
//         "Visual Design",
//         "Usability Testing"
//       ],
//       image: '/assets/ui-ux.jpg'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Banner Section */}
//       <section className="relative h-[60vh] min-h-[400px] bg-gray-900">
//         {/* <Image
//           src="/images/services-banner.jpg"
//           alt="Our Services"
//           fill
//           className="object-cover opacity-40"
//           priority
//         /> */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center text-white">
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl md:text-5xl font-bold mb-4"
//             >
//               Our Services
//             </motion.h1>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-xl md:text-2xl max-w-2xl mx-auto px-4"
//             >
//               Transforming businesses through innovative technology solutions
//             </motion.p>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden"
//               >
//                 <div className="relative h-48">
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <FontAwesomeIcon icon={service.icon} className="text-2xl text-gray-700 mr-3" />
//                     <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
//                   </div>
//                   <p className="text-gray-600 mb-4">{service.description}</p>
//                   <ul className="space-y-2 mb-6">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center text-gray-700">
//                         <FontAwesomeIcon icon={faArrowRight} className="text-sm mr-2 text-gray-500" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <Link href={`/services/${service.id}`}>
//                     <button className="w-full px-6 py-2 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white transition-colors duration-300">
//                       Learn More
//                     </button>
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
//             <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help you achieve your goals</p>
//             <button 
//               onClick={() => router.push('/contact')}
//               className="px-8 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-300"
//             >
//               Contact Us Today
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-center p-6"
//             >
//               <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
//                 <FontAwesomeIcon icon={faShieldAlt} className="text-2xl text-gray-700" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Reliable & Secure</h3>
//               <p className="text-gray-600">Your data and systems are safe with our enterprise-grade security measures.</p>
//             </motion.div>
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-center p-6"
//             >
//               <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
//                 <FontAwesomeIcon icon={faMobileScreen} className="text-2xl text-gray-700" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Modern Technology</h3>
//               <p className="text-gray-600">We use the latest technologies to build scalable and efficient solutions.</p>
//             </motion.div>
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="text-center p-6"
//             >
//               <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
//                 <FontAwesomeIcon icon={faDatabase} className="text-2xl text-gray-700" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Scalable Solutions</h3>
//               <p className="text-gray-600">Our solutions grow with your business, ensuring long-term success.</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;




'use client'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faRobot, 
  faMobileScreen, 
  faArrowRight,
  faShieldAlt,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Services = () => {
  const router = useRouter();
  const services = [
    {
      id: 'web-development',
      icon: faCode,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies to deliver exceptional user experiences.",
      features: [
        "Responsive Design",
        "Frontend Development",
        "Backend Integration",
        "Performance Optimization"
      ],
      image: '/assets/web-dev.jpg',
    },
    {
      id: 'mobile-development',
      icon: faMobileScreen,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Solutions",
        "Mobile UI/UX Design"
      ],
      image: '/assets/mobile-dev.jpg'
    },
    {
      id: 'ui-ux',
      icon: faRobot,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces that enhance user experience and drive engagement.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing"
      ],
      image: '/assets/ui-ux.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/assets/about04.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#AF9B5C]/10 to-[#AF9B5C]/5" />
        <div className="relative max-w-6xl mx-auto px-8 py-24">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#AF9B5C] font-medium block mb-4"
            >
              What We Offer
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl font-bold mb-6 bg-gradient-to-r from-[#AF9B5C] to-[#AF9B5C]/80 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Transforming businesses through innovative technology solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={service.icon} className="text-2xl text-gray-700 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm mr-2 text-gray-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.id}`}>
                    <button className="w-full px-6 py-2 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white transition-colors duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help you achieve your goals</p>
            <button 
              onClick={() => router.push('/contact')}
              className="px-8 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-300"
            >
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Reliable & Secure</h3>
              <p className="text-gray-600">Your data and systems are safe with our enterprise-grade security measures.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faMobileScreen} className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Modern Technology</h3>
              <p className="text-gray-600">We use the latest technologies to build scalable and efficient solutions.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faDatabase} className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Scalable Solutions</h3>
              <p className="text-gray-600">Our solutions grow with your business, ensuring long-term success.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;