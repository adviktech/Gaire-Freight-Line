// // //app/components/Navbar.tsx
// // "use client";

// // import { useEffect, useState } from "react";
// // import { Menu } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Sheet,
// //   SheetContent,
// //   SheetTitle,
// //   SheetTrigger,
// // } from "@/components/ui/sheet";

// // const navigation = [
// //   { name: "Home", href: "/#" },
// //   { name: "About", href: "/about-us" },
// //   { name: "Contact Us", href: "/contact-us" },
// //   { name: "Blogs", href: "/blogs" },
// //   { name: "Become-a-Driver", href: "/become-a-driver" },
// //   // { name: "Get a Quote", href: "/get-a-quote" },
// //   // { name: "Contact", href: "#" },
// // ];

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [showBanner, setShowBanner] = useState(true);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       // Fade out banner after scrolling down 50px
// //       if (window.scrollY > 50) {
// //         setShowBanner(false);
// //       } else {
// //         setShowBanner(true);
// //       }
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       <div
// //         className={`fixed top-0 left-0 w-full h-8 bg-green-500 text-white flex items-center justify-center transition-opacity duration-300 z-50 ${
// //           showBanner ? "opacity-100" : "opacity-0 pointer-events-none"
// //         }`}
// //       >
// //         <span className="text-sm">
// //           MC: 1311697 | DOT: 3723689 | gairefreightline@gmail.com
// //         </span>
// //       </div>
// //       <nav
// //         className="bg-white border-b border-gray-200 sticky top-0 z-50 transition-all ease-in-out duration-500"
// //         style={{ top: showBanner ? "2rem" : "0" }}
// //       >
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-between items-center h-16">
// //             {/* Logo */}
// //             <div className="flex items-center gap-1 flex-shrink-0">
// //               <img src="/logo.jpg" alt="" width={50} height={50} />
// //               <a href="#" className="text-2xl font-bold text-gray-900">
// //                 Gaire Freight Line
// //               </a>
// //             </div>

// //             {/* Desktop Navigation */}
// //             <div className="hidden md:block">
// //               <div className="ml-10 flex items-baseline space-x-4">
// //                 {navigation.map((item) => (
// //                   <a
// //                     key={item.name}
// //                     href={item.href}
// //                     className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
// //                   >
// //                     {item.name}
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Desktop CTA Button */}
// //             <div className="hidden md:block">
// //               <a href="/get-a-quote">
// //                 <Button>Get a Quote</Button>
// //               </a>
// //             </div>

// //             {/* Mobile menu button */}
// //             <div className="md:hidden">
// //               <Sheet open={isOpen} onOpenChange={setIsOpen}>
// //                 <SheetTrigger asChild>
// //                   <Button variant="ghost" size="icon">
// //                     <Menu className="h-6 w-6" />
// //                     <span className="sr-only">Open main menu</span>
// //                   </Button>
// //                 </SheetTrigger>
// //                 <SheetContent side="right" className="w-[300px] sm:w-[400px]">
// //                   <SheetTitle className="text-xl font-bold text-gray-900 mb-2">
// //                     Menu
// //                   </SheetTitle>
// //                   <div className="flex flex-col space-y-4 mt-4">
// //                     <div className="flex items-center justify-between">
// //                       <span className="text-2xl font-bold text-gray-900">
// //                         {/* Logo */}
// //                       </span>
// //                     </div>
// //                     <div className="flex flex-col space-y-3">
// //                       {navigation.map((item) => (
// //                         <a
// //                           key={item.name}
// //                           href={item.href}
// //                           className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
// //                           onClick={() => setIsOpen(false)}
// //                         >
// //                           {item.name}
// //                         </a>
// //                       ))}
// //                     </div>
// //                     <div className="pt-4">
// //                       <a href="/get-a-quote" onClick={() => setIsOpen(false)}>
// //                         <Button className="w-full">Get a Quote</Button>
// //                       </a>
// //                     </div>
// //                   </div>
// //                 </SheetContent>
// //               </Sheet>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import { Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const navigation = [
//   { name: "Home", href: "/#" },
//   { name: "About", href: "/about-us" },
//   { name: "Contact Us", href: "/contact-us" },
//   { name: "Blogs", href: "/blogs" },
//   { name: "Become-a-Driver", href: "/become-a-driver" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showBanner, setShowBanner] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Fade out banner after scrolling down 50px
//       if (window.scrollY > 50) {
//         setShowBanner(false);
//       } else {
//         setShowBanner(true);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div
//         className={`fixed top-0 left-0 w-full h-8 bg-[#459c6d] text-white flex items-center justify-center transition-opacity duration-300 z-50 ${
//           showBanner ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <span className="text-sm">
//           MC: 1311697 | DOT: 3723689 | gairefreightline@gmail.com
//         </span>
//       </div>
//       <nav
//         className="bg-white border-b border-gray-200 sticky top-0 z-50 transition-all ease-in-out duration-500 shadow-sm"
//         style={{ top: showBanner ? "2rem" : "0" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex items-center gap-3 flex-shrink-0">
//               <div className="w-12 h-12 bg-[#459c6d] rounded-lg flex items-center justify-center text-white font-bold text-xl">
//                 GF
//               </div>
//               <a href="#" className="text-2xl font-bold text-gray-900">
//                 Gaire Freight Line
//               </a>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-6">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="text-gray-600 hover:text-[#459c6d] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-green-50"
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Desktop CTA Button */}
//             <div className="hidden md:block">
//               <a href="/get-a-quote">
//                 <Button className="bg-[#459c6d] hover:bg-[#3a8359] text-white shadow-md">
//                   Get a Quote
//                 </Button>
//               </a>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                 <SheetTrigger asChild>
//                   <Button variant="ghost" size="icon">
//                     <Menu className="h-6 w-6" />
//                     <span className="sr-only">Open main menu</span>
//                   </Button>
//                 </SheetTrigger>
//                 <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//                   <SheetTitle className="text-xl font-bold text-gray-900 mb-2">
//                     Menu
//                   </SheetTitle>
//                   <div className="flex flex-col space-y-4 mt-4">
//                     <div className="flex items-center justify-between">
//                       <span className="text-2xl font-bold text-gray-900">
//                         {/* Logo */}
//                       </span>
//                     </div>
//                     <div className="flex flex-col space-y-3">
//                       {navigation.map((item) => (
//                         <a
//                           key={item.name}
//                           href={item.href}
//                           className="text-gray-600 hover:text-[#459c6d] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {item.name}
//                         </a>
//                       ))}
//                     </div>
//                     <div className="pt-4">
//                       <a href="/get-a-quote" onClick={() => setIsOpen(false)}>
//                         <Button className="w-full bg-[#459c6d] hover:bg-[#3a8359] text-white">
//                           Get a Quote
//                         </Button>
//                       </a>
//                     </div>
//                   </div>
//                 </SheetContent>
//               </Sheet>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "Home", href: "/#" },
  { name: "About", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Blogs", href: "/blogs" },
  { name: "Become-a-Driver", href: "/become-a-driver" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out banner after scrolling down 50px
      if (window.scrollY > 50) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-8 bg-[#459c6d] text-white flex items-center justify-center transition-opacity duration-300 z-50 ${
          showBanner ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="text-sm">
          MC: 1311697 | DOT: 3723689 | gairefreightline@gmail.com
        </span>
      </div>
      <nav
        className="bg-background border-b border-border sticky top-0 z-50 transition-all ease-in-out duration-500 shadow-sm"
        style={{ top: showBanner ? "2rem" : "0" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                <img
                  className="rounded-full"
                  src="/logo.png"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <a href="/" className="text-2xl font-bold text-foreground">
                Gaire Freight Line
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-[#459c6d] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA Button and Theme Toggle */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <a href="/get-a-quote">
                <Button className="bg-[#459c6d] hover:bg-[#3a8359] text-white shadow-md">
                  Get a Quote
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open main menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle className="text-xl font-bold text-foreground mb-2">
                    Menu
                  </SheetTitle>
                  <div className="flex flex-col space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground">
                        {/* Logo */}
                      </span>
                    </div>
                    <div className="flex flex-col space-y-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-muted-foreground hover:text-[#459c6d] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="pt-4">
                      <a href="/get-a-quote" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-[#459c6d] hover:bg-[#3a8359] text-white">
                          Get a Quote
                        </Button>
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
