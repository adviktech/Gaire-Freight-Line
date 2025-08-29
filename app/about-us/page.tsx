// // //app/about-us/page.tsx
// // "use client";

// // import Image from "next/image";
// // import { Button } from "@/components/ui/button";
// // import { Card } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Star, Users, Target, Award, TrendingUp } from "lucide-react";
// // import GaireNavbar from "@/components/Navbar";
// // export default function AboutUsPage() {
// //   const teamMembers = [
// //     {
// //       name: "Rajesh Gaire",
// //       position: "CEO & Founder",
// //       image: "/placeholder.svg?height=200&width=200",
// //       bio: "With over 15 years in the transportation industry, Rajesh founded Gaire Freight Line to revolutionize freight dispatching with AI technology.",
// //       experience: "15+ years",
// //     },
// //     {
// //       name: "Priya Sharma",
// //       position: "CTO",
// //       image: "/placeholder.svg?height=200&width=200",
// //       bio: "Tech visionary with expertise in AI and logistics optimization. Priya leads our technology development and innovation initiatives.",
// //       experience: "12+ years",
// //     },
// //     {
// //       name: "Michael Johnson",
// //       position: "Head of Operations",
// //       image: "/placeholder.svg?height=200&width=200",
// //       bio: "Former truck driver turned operations expert. Michael ensures our platform meets real-world needs of drivers and fleet owners.",
// //       experience: "18+ years",
// //     },
// //     {
// //       name: "Sarah Chen",
// //       position: "Customer Success Manager",
// //       image: "/placeholder.svg?height=200&width=200",
// //       bio: "Dedicated to ensuring every customer achieves success with our platform. Sarah leads our support and training initiatives.",
// //       experience: "8+ years",
// //     },
// //     {
// //       name: "David Rodriguez",
// //       position: "Head of Sales",
// //       image: "/placeholder.svg?height=200&width=200",
// //       bio: "Results-driven sales leader helping trucking companies discover the power of AI-enabled freight dispatching.",
// //       experience: "10+ years",
// //     },
// //     {
// //       name: "Lisa Thompson",
// //       position: "Marketing Director",
// //       image: "/placeholder.svg?height=200&width=200",
// //       bio: "Creative marketing strategist focused on building meaningful connections with the trucking community.",
// //       experience: "9+ years",
// //     },
// //   ];

// //   const companyStats = [
// //     { number: "5000+", label: "Active Drivers" },
// //     { number: "500+", label: "Fleet Partners" },
// //     { number: "1M+", label: "Loads Dispatched" },
// //     { number: "98%", label: "Customer Satisfaction" },
// //   ];

// //   const values = [
// //     {
// //       icon: <Target className="w-8 h-8 text-green-500" />,
// //       title: "Innovation",
// //       description:
// //         "We continuously innovate to provide cutting-edge solutions for the trucking industry.",
// //     },
// //     {
// //       icon: <Users className="w-8 h-8 text-blue-500" />,
// //       title: "Community",
// //       description:
// //         "Building strong relationships with drivers, fleet owners, and logistics professionals.",
// //     },
// //     {
// //       icon: <Award className="w-8 h-8 text-yellow-500" />,
// //       title: "Excellence",
// //       description:
// //         "We strive for excellence in every aspect of our service delivery.",
// //     },
// //     {
// //       icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
// //       title: "Growth",
// //       description:
// //         "Helping our clients grow their businesses through efficient freight management.",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-white">
// //       {/* Header */}
// //       <GaireNavbar />

// //       {/* Hero Section */}
// //       <section className="px-4 py-16 bg-gradient-to-r from-green-50 to-blue-50">
// //         <div className="container mx-auto text-center">
// //           <h1 className="text-5xl md:text-6xl font-bold mb-6">
// //             About <span className="text-green-500">Gaire Freight Line</span>
// //           </h1>
// //           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
// //             We're revolutionizing the freight industry with AI-powered
// //             dispatching solutions, making it easier for truckers and fleet
// //             owners to find profitable loads and optimize their operations.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Company Story */}
// //       <section className="px-4 py-16">
// //         <div className="container mx-auto">
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <h2 className="text-4xl font-bold mb-6">Our Story</h2>
// //               <p className="text-gray-600 mb-6">
// //                 Founded in 2020 by industry veteran Rajesh Gaire, Gaire Freight
// //                 Line was born out of frustration with traditional freight
// //                 dispatching methods. Having spent years in the trucking
// //                 industry, Rajesh witnessed firsthand the inefficiencies that
// //                 cost drivers time and money.
// //               </p>
// //               <p className="text-gray-600 mb-6">
// //                 Our mission is simple: leverage artificial intelligence to
// //                 create a more efficient, transparent, and profitable freight
// //                 ecosystem for everyone involved. From independent
// //                 owner-operators to large fleet owners, we're committed to
// //                 helping our clients succeed.
// //               </p>
// //               <p className="text-gray-600">
// //                 Today, we're proud to serve thousands of drivers and fleet
// //                 owners across the country, having dispatched over 1 million
// //                 loads and saved our clients millions in operational costs.
// //               </p>
// //             </div>
// //             <div>
// //               <Image
// //                 src="/placeholder.svg?height=400&width=500"
// //                 alt="Company story"
// //                 width={500}
// //                 height={400}
// //                 className="rounded-lg shadow-lg"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Company Stats */}
// //       <section className="px-4 py-16 bg-gray-50">
// //         <div className="container mx-auto">
// //           <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
// //           <div className="grid md:grid-cols-4 gap-8">
// //             {companyStats.map((stat, index) => (
// //               <Card key={index} className="p-6 text-center">
// //                 <h3 className="text-4xl font-bold text-green-500 mb-2">
// //                   {stat.number}
// //                 </h3>
// //                 <p className="text-gray-600">{stat.label}</p>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Company Values */}
// //       <section className="px-4 py-16">
// //         <div className="container mx-auto">
// //           <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {values.map((value, index) => (
// //               <Card key={index} className="p-6 text-center">
// //                 <div className="flex justify-center mb-4">{value.icon}</div>
// //                 <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
// //                 <p className="text-gray-600 text-sm">{value.description}</p>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Team Section */}
// //       <section className="px-4 py-16 bg-gray-50">
// //         <div className="container mx-auto">
// //           <h2 className="text-4xl font-bold text-center mb-12">
// //             Meet Our Team
// //           </h2>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {teamMembers.map((member, index) => (
// //               <Card key={index} className="p-6 text-center">
// //                 <Image
// //                   src={member.image}
// //                   alt={member.name}
// //                   width={150}
// //                   height={150}
// //                   className="rounded-full mx-auto mb-4"
// //                 />
// //                 <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
// //                 <p className="text-green-500 font-medium mb-2">
// //                   {member.position}
// //                 </p>
// //                 <Badge variant="secondary" className="mb-4">
// //                   {member.experience}
// //                 </Badge>
// //                 <p className="text-gray-600 text-sm">{member.bio}</p>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Mission & Vision */}
// //       <section className="px-4 py-16">
// //         <div className="container mx-auto">
// //           <div className="grid md:grid-cols-2 gap-12">
// //             <Card className="p-8">
// //               <h3 className="text-3xl font-bold mb-6 text-green-500">
// //                 Our Mission
// //               </h3>
// //               <p className="text-gray-600 text-lg">
// //                 To empower truckers and fleet owners with AI-driven technology
// //                 that maximizes profitability, reduces operational overhead, and
// //                 creates a more efficient freight ecosystem for all stakeholders.
// //               </p>
// //             </Card>
// //             <Card className="p-8">
// //               <h3 className="text-3xl font-bold mb-6 text-blue-500">
// //                 Our Vision
// //               </h3>
// //               <p className="text-gray-600 text-lg">
// //                 To become the leading AI-powered freight dispatching platform,
// //                 setting new standards for efficiency, transparency, and
// //                 profitability in the transportation industry while fostering a
// //                 thriving community of logistics professionals.
// //               </p>
// //             </Card>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="px-4 py-16 bg-green-500 text-white">
// //         <div className="container mx-auto text-center">
// //           <h2 className="text-4xl font-bold mb-6">
// //             Ready to Join Our Success Story?
// //           </h2>
// //           <p className="text-green-100 mb-8 max-w-2xl mx-auto">
// //             Become part of the Gaire Freight Line family and experience the
// //             future of freight dispatching today.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <Button
// //               className="bg-white text-green-500 hover:bg-gray-100"
// //               size="lg"
// //             >
// //               <a href="/get-a-quote">Get Started Today</a>
// //             </Button>
// //             <Button
// //               variant="outline"
// //               className="border-white text-white hover:bg-white hover:text-green-500"
// //               size="lg"
// //             >
// //               <a href="/contact">Contact Our Team</a>
// //             </Button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-gray-900 text-white px-4 py-12">
// //         <div className="container mx-auto text-center">
// //           <div className="flex items-center justify-center space-x-2 mb-4">
// //             <div className="h-8 w-8 rounded-full bg-purple-500"></div>
// //             <span className="text-xl font-bold">Gaire Freight Line</span>
// //           </div>
// //           <p className="text-gray-400 mb-4">
// //             Revolutionizing freight operations with AI-powered dispatching
// //             solutions
// //           </p>
// //           <div className="flex justify-center space-x-6 text-sm">
// //             <a href="/privacy" className="text-gray-400 hover:text-white">
// //               Privacy Policy
// //             </a>
// //             <a href="/terms" className="text-gray-400 hover:text-white">
// //               Terms of Service
// //             </a>
// //             <a href="/contact-us" className="text-gray-400 hover:text-white">
// //               Contact Us
// //             </a>
// //           </div>
// //           <p className="text-gray-500 text-sm mt-4">
// //             © 2025 Gaire Freight Line. All rights reserved.
// //           </p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Users, Target, Award, TrendingUp } from "lucide-react";
// import GaireNavbar from "@/components/Navbar";
// export default function AboutUsPage() {
//   const teamMembers = [
//     {
//       name: "Rajesh Gaire",
//       position: "CEO & Founder",
//       image: "/professional-ceo-portrait.png",
//       bio: "With over 15 years in the transportation industry, Rajesh founded Gaire Freight Line to revolutionize freight dispatching with AI technology.",
//       experience: "15+ years",
//     },
//     {
//       name: "Bipin Gaire",
//       position: "CTO",
//       image: "/professional-cto-portrait.png",
//       bio: "Tech visionary with expertise in AI and logistics optimization. Priya leads our technology development and innovation initiatives.",
//       experience: "12+ years",
//     },
//     {
//       name: "Prajwol Koirala",
//       position: "Head of Operations",
//       image: "/placeholder-s3gj9.png",
//       bio: "Former truck driver turned operations expert. Michael ensures our platform meets real-world needs of drivers and fleet owners.",
//       experience: "18+ years",
//     },
//     {
//       name: "Damodar Aryal",
//       position: "Customer Success Manager",
//       image: "/customer-success-manager.png",
//       bio: "Dedicated to ensuring every customer achieves success with our platform. Sarah leads our support and training initiatives.",
//       experience: "8+ years",
//     },
//     {
//       name: "Ayush Ghimire",
//       position: "Head of Sales",
//       image: "/professional-sales-manager.png",
//       bio: "Results-driven sales leader helping trucking companies discover the power of AI-enabled freight dispatching.",
//       experience: "10+ years",
//     },
//     {
//       name: "Basant Rai",
//       position: "Marketing Director",
//       image: "/placeholder-f9e5d.png",
//       bio: "Creative marketing strategist focused on building meaningful connections with the trucking community.",
//       experience: "9+ years",
//     },
//   ];

//   const companyStats = [
//     { number: "5000+", label: "Active Drivers" },
//     { number: "500+", label: "Fleet Partners" },
//     { number: "1M+", label: "Loads Dispatched" },
//     { number: "98%", label: "Customer Satisfaction" },
//   ];

//   const values = [
//     {
//       icon: <Target className="w-8 h-8 text-green-500" />,
//       title: "Innovation",
//       description:
//         "We continuously innovate to provide cutting-edge solutions for the trucking industry.",
//     },
//     {
//       icon: <Users className="w-8 h-8 text-blue-500" />,
//       title: "Community",
//       description:
//         "Building strong relationships with drivers, fleet owners, and logistics professionals.",
//     },
//     {
//       icon: <Award className="w-8 h-8 text-yellow-500" />,
//       title: "Excellence",
//       description:
//         "We strive for excellence in every aspect of our service delivery.",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
//       title: "Growth",
//       description:
//         "Helping our clients grow their businesses through efficient freight management.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <GaireNavbar />

//       {/* Hero Section */}
//       <section className="px-4 py-16 bg-gradient-to-r from-green-50 to-[#459c6d]/10">
//         <div className="container mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             About <span className="text-[#459c6d]">Gaire Freight Line</span>
//           </h1>
//           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//             We're revolutionizing the freight industry with AI-powered
//             dispatching solutions, making it easier for truckers and fleet
//             owners to find profitable loads and optimize their operations.
//           </p>
//         </div>
//       </section>

//       {/* Company Story */}
//       <section className="px-4 py-16">
//         <div className="container mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold mb-6">Our Story</h2>
//               <p className="text-gray-600 mb-6">
//                 Founded in 2020 by industry veteran Rajesh Gaire, Gaire Freight
//                 Line was born out of frustration with traditional freight
//                 dispatching methods. Having spent years in the trucking
//                 industry, Rajesh witnessed firsthand the inefficiencies that
//                 cost drivers time and money.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 Our mission is simple: leverage artificial intelligence to
//                 create a more efficient, transparent, and profitable freight
//                 ecosystem for everyone involved. From independent
//                 owner-operators to large fleet owners, we're committed to
//                 helping our clients succeed.
//               </p>
//               <p className="text-gray-600">
//                 Today, we're proud to serve thousands of drivers and fleet
//                 owners across the country, having dispatched over 1 million
//                 loads and saved our clients millions in operational costs.
//               </p>
//             </div>
//             <div>
//               <Image
//                 src="/freight-company-office-and-team.png"
//                 alt="Company story"
//                 width={500}
//                 height={400}
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Company Stats */}
//       <section className="px-4 py-16 bg-gray-50">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {companyStats.map((stat, index) => (
//               <Card
//                 key={index}
//                 className="p-6 text-center hover:shadow-lg transition-shadow"
//               >
//                 <h3 className="text-4xl font-bold text-[#459c6d] mb-2">
//                   {stat.number}
//                 </h3>
//                 <p className="text-gray-600">{stat.label}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Company Values */}
//       <section className="px-4 py-16">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <Card
//                 key={index}
//                 className="p-6 text-center hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex justify-center mb-4">{value.icon}</div>
//                 <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
//                 <p className="text-gray-600 text-sm">{value.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="px-4 py-16 bg-gray-50">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-12">
//             Meet Our Team
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <Card
//                 key={index}
//                 className="p-6 text-center hover:shadow-lg transition-shadow"
//               >
//                 <Image
//                   src={member.image || "/placeholder.svg"}
//                   alt={member.name}
//                   width={150}
//                   height={150}
//                   className="rounded-full mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
//                 <p className="text-[#459c6d] font-medium mb-2">
//                   {member.position}
//                 </p>
//                 <Badge variant="secondary" className="mb-4">
//                   {member.experience}
//                 </Badge>
//                 <p className="text-gray-600 text-sm">{member.bio}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="px-4 py-16">
//         <div className="container mx-auto">
//           <div className="grid md:grid-cols-2 gap-12">
//             <Card className="p-8 hover:shadow-lg transition-shadow">
//               <h3 className="text-3xl font-bold mb-6 text-[#459c6d]">
//                 Our Mission
//               </h3>
//               <p className="text-gray-600 text-lg">
//                 To empower truckers and fleet owners with AI-driven technology
//                 that maximizes profitability, reduces operational overhead, and
//                 creates a more efficient freight ecosystem for all stakeholders.
//               </p>
//             </Card>
//             <Card className="p-8 hover:shadow-lg transition-shadow">
//               <h3 className="text-3xl font-bold mb-6 text-blue-500">
//                 Our Vision
//               </h3>
//               <p className="text-gray-600 text-lg">
//                 To become the leading AI-powered freight dispatching platform,
//                 setting new standards for efficiency, transparency, and
//                 profitability in the transportation industry while fostering a
//                 thriving community of logistics professionals.
//               </p>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="px-4 py-16 bg-[#459c6d] text-white">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-6">
//             Ready to Join Our Success Story?
//           </h2>
//           <p className="text-green-100 mb-8 max-w-2xl mx-auto">
//             Become part of the Gaire Freight Line family and experience the
//             future of freight dispatching today.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               className="bg-white text-[#459c6d] hover:bg-gray-100"
//               size="lg"
//             >
//               <a href="/get-a-quote">Get Started Today</a>
//             </Button>
//             <Button
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-[#459c6d] bg-transparent"
//               size="lg"
//             >
//               <a href="/contact-us">Contact Our Team</a>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white px-4 py-12">
//         <div className="container mx-auto text-center">
//           <div className="flex items-center justify-center space-x-2 mb-4">
//             <div className="h-8 w-8 rounded-full bg-[#459c6d]"></div>
//             <span className="text-xl font-bold">Gaire Freight Line</span>
//           </div>
//           <p className="text-gray-400 mb-4">
//             Revolutionizing freight operations with AI-powered dispatching
//             solutions
//           </p>
//           <div className="flex justify-center space-x-6 text-sm">
//             <a href="/privacy" className="text-gray-400 hover:text-white">
//               Privacy Policy
//             </a>
//             <a href="/terms" className="text-gray-400 hover:text-white">
//               Terms of Service
//             </a>
//             <a href="/contact-us" className="text-gray-400 hover:text-white">
//               Contact Us
//             </a>
//           </div>
//           <p className="text-gray-500 text-sm mt-4">
//             © 2025 Gaire Freight Line. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import GaireNavbar from "@/components/Navbar";
export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Rajesh Gaire",
      position: "CEO & Founder",
      image: "/ceo.png",
      bio: "With over 15 years in the transportation industry, Rajesh founded Gaire Freight Line to revolutionize freight dispatching with AI technology.",
      experience: "15+ years",
    },
    {
      name: "Bipin Gaire",
      position: "CTO",
      image: "/cto.avif",
      bio: "Tech visionary with expertise in AI and logistics optimization. Bipin leads our technology development and innovation initiatives.",
      experience: "12+ years",
    },
    {
      name: "Prajwol Koirala",
      position: "Head of Operations",
      image: "/team.png",
      bio: "Former truck driver turned operations expert. Prajwol ensures our platform meets real-world needs of drivers and fleet owners.",
      experience: "8+ years",
    },
    {
      name: "Damodar Aryal",
      position: "Customer Success Manager",
      image: "/team.png",
      bio: "Dedicated to ensuring every customer achieves success with our platform. Damodar leads our support and training initiatives.",
      experience: "8+ years",
    },
    {
      name: "Ayush Ghimire",
      position: "Head of Sales",
      image: "/team.png",
      bio: "Results-driven sales leader helping trucking companies discover the power of AI-enabled freight dispatching.",
      experience: "10+ years",
    },
    {
      name: "Basant Rai",
      position: "Marketing Director",
      image: "/team.png",
      bio: "Creative marketing strategist focused on building meaningful connections with the trucking community.",
      experience: "9+ years",
    },
  ];

  const companyStats = [
    { number: "5000+", label: "Active Drivers" },
    { number: "500+", label: "Fleet Partners" },
    { number: "1M+", label: "Loads Dispatched" },
    { number: "98%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Innovation",
      description:
        "We continuously innovate to provide cutting-edge solutions for the trucking industry.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community",
      description:
        "Building strong relationships with drivers, fleet owners, and logistics professionals.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service delivery.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Growth",
      description:
        "Helping our clients grow their businesses through efficient freight management.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#545454]">
      {/* Header */}
      <GaireNavbar />

      {/* Hero Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-green-50 to-[#459c6d]/10 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="text-[#459c6d]">Gaire Freight Line</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            We're revolutionizing the freight industry with AI-powered
            dispatching solutions, making it easier for truckers and fleet
            owners to find profitable loads and optimize their operations.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2020 by industry veteran Rajesh Gaire, Gaire Freight
                Line was born out of frustration with traditional freight
                dispatching methods. Having spent years in the trucking
                industry, Rajesh witnessed firsthand the inefficiencies that
                cost drivers time and money.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our mission is simple: leverage artificial intelligence to
                create a more efficient, transparent, and profitable freight
                ecosystem for everyone involved. From independent
                owner-operators to large fleet owners, we're committed to
                helping our clients succeed.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, we're proud to serve thousands of drivers and fleet
                owners across the country, having dispatched over 1 million
                loads and saved our clients millions in operational costs.
              </p>
            </div>
            <div>
              <Image
                src="/freight-company-office-and-team.png"
                alt="Company story"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="px-4 py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-700"
              >
                <h3 className="text-4xl font-bold text-[#459c6d] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-700"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-700"
              >
                <Image
                  src={
                    member.image ||
                    "/placeholder.svg?height=150&width=150&query=professional headshot"
                  }
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-[#459c6d] font-medium mb-2">
                  {member.position}
                </p>
                <Badge
                  variant="secondary"
                  className="mb-4 dark:bg-gray-600 dark:text-gray-200"
                >
                  {member.experience}
                </Badge>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white dark:bg-gray-700">
              <h3 className="text-3xl font-bold mb-6 text-[#459c6d]">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                To empower truckers and fleet owners with AI-driven technology
                that maximizes profitability, reduces operational overhead, and
                creates a more efficient freight ecosystem for all stakeholders.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white dark:bg-gray-700">
              <h3 className="text-3xl font-bold mb-6 text-blue-500">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                To become the leading AI-powered freight dispatching platform,
                setting new standards for efficiency, transparency, and
                profitability in the transportation industry while fostering a
                thriving community of logistics professionals.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-[#459c6d] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Become part of the Gaire Freight Line family and experience the
            future of freight dispatching today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-[#459c6d] hover:bg-gray-100"
              size="lg"
            >
              <a href="/get-a-quote">Get Started Today</a>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#459c6d] bg-transparent"
              size="lg"
            >
              <a href="/contact-us">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-[#459c6d]"></div>
            <span className="text-xl font-bold">Gaire Freight Line</span>
          </div>
          <p className="text-gray-400 mb-4">
            Revolutionizing freight operations with AI-powered dispatching
            solutions
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="/contact-us" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            © 2025 Gaire Freight Line. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
