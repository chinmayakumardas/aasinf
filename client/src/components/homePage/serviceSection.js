
// import { Button } from "@/components/ui/button";
// import { HoverEffect } from "@/components/ui/card-hover-effect";
// import { useRouter } from "next/navigation";

// export default function ServiceSection() {
//   const router=useRouter()
//   return (
//     (<div className="max-w-7xl mx-auto p-8 flex flex-col items-center">

//      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
//         Our Services
//       </h1>
//       <div className="flex flex-col">
//       <HoverEffect items={projects} />
//       <span className="flex justify-center w-full">
//       <Button variant="more" className="rounded-3xl" onClick={() => router.push('/services')}>
//         Related Services
//       </Button>
//       </span>
//       </div>

//     </div>)
//   );
// }
// export const projects = [
//   {
//     title: "AR/VR",
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     link: "https://stripe.com",
//   },
//   {
//     title: "ERP System",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     link: "https://netflix.com",
//   },
//   {
//     title: "Whatsapp Bot",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     link: "https://google.com",
//   },
//   {
//     title: "Headless CMS",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "https://meta.com",
//   },
//   {
//     title: "Website Development",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "CRM",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
// ];




"use client";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HeroHighlight } from "../ui/hero-highlight";


// Project data
export const projects = [
    {
      title: "AR/VR",
      icon: "🕶️", // AR/VR Icon
      category: "Technology",
      status: "Active",
      createdAt: "2024-01-01",
      description:
        "Immersive AR/VR experiences for education, entertainment, and training simulations.",
      link: "/services/ar-vr",
    },
    {
      title: "ERP System",
      icon: "📊", // ERP Icon
      category: "Business Software",
      status: "Active",
      createdAt: "2024-02-10",
      description:
        "Comprehensive enterprise resource planning to streamline operations and management.",
      link: "/services/data-analytics",
    },
    {
      title: "WhatsApp Bot",
      icon: "🤖", // WhatsApp Bot Icon
      category: "Automation",
      status: "Beta",
      createdAt: "2024-01-15",
      description:
        "Automated WhatsApp communication for customer support, notifications, and marketing.",
      link: "/services/cloud-services",
    },
    {
      title: "Headless CMS",
      icon: "📚", // CMS Icon
      category: "Content Management",
      status: "Active",
      createdAt: "2024-01-20",
      description:
        "Flexible content management system for modern websites and applications.",
      link: "/services/ui-ux",
    },
    {
      title: "Website Development",
      icon: "🌐", // Website Icon
      category: "Web Development",
      status: "In Progress",
      createdAt: "2024-02-05",
      description:
        "Custom website development with modern UI/UX and seamless performance.",
      link: "/services/web-development",
    },
    {
      title: "CRM",
      icon: "💼", // CRM Icon
      category: "Business Software",
      status: "Active",
      createdAt: "2024-01-28",
      description:
        "Customer Relationship Management system for sales, marketing, and support.",
      link: "/services/mobile-development",
    },
  
  
];

export default function ServiceSection() {
  const router = useRouter();

  return (

    <HeroHighlight className='h-full py-1'>
  <motion.div
    className=" inset-0 z-0  to-red-500 opacity-30"
    initial={{
      opacity: 0,
      scale: 1.1,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 1.5,
      ease: [0.4, 0.0, 0.2, 1],
    }}
  >
    <div className="flex flex-col z-10 min-h-[100vh] py-8 justify-around ">
        <div className="container flex flex-col gap-10  text-left ">
          {/* Section Title */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="scroll-m-20  font-extrabold   tracking-tight text-4xl lg:text-5xl z-10 "
          >
            Our Experties
          </motion.h1>

          {/* Hover Effect for Projects */}
          <div className="flex flex-col z-10">
            <HoverEffect items={projects} />

            {/* Related Services Button */}
            <span className="flex justify-center w-full">
              {/* <Button
                variant="more"
                className="rounded-3xl"
                onClick={() => router.push('/services')}
              >
                Related Services
              </Button> */}
              <button onClick={() => router.push('/services')} className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
              Related Services
          </button>
            </span>
          </div>
        </div>
    </div>
  </motion.div>
</HeroHighlight>

   
  );
}
