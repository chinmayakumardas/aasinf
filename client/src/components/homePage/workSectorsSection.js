


'use client';
import { motion } from "framer-motion";
import { FaIndustry, FaHospital, FaGraduationCap, FaShoppingBag, FaPlane, FaLaptopCode } from 'react-icons/fa';
import { MdEngineering, MdBiotech } from 'react-icons/md';

const industries = [
  {
    icon: FaIndustry,
    title: "Manufacturing",
    description: "Smart manufacturing solutions with IoT integration and automation",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: FaHospital,
    title: "Healthcare",
    description: "Digital health solutions and medical technology integration",
    color: "from-green-500 to-green-600"
  },
  {
    icon: FaGraduationCap,
    title: "Education",
    description: "E-learning platforms and educational technology solutions",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: FaShoppingBag,
    title: "Retail",
    description: "E-commerce and omnichannel retail solutions",
    color: "from-red-500 to-red-600"
  },
  {
    icon: FaPlane,
    title: "Aviation",
    description: "Aviation software and logistics management systems",
    color: "from-sky-500 to-sky-600"
  },
  {
    icon: MdEngineering,
    title: "Engineering",
    description: "CAD/CAM solutions and engineering software",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: MdBiotech,
    title: "Biotech",
    description: "Biotechnology and research management systems",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: FaLaptopCode,
    title: "Technology",
    description: "Custom software solutions and digital transformation",
    color: "from-indigo-500 to-indigo-600"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function IndustriesSection() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-left">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600  mx-auto text-left">
            Delivering innovative solutions across diverse sectors with expertise and precision
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600">
                  {industry.description}
                </p>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
