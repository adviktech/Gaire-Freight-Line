// // //app/become-a-driver/page.tsx
// // "use client";

// // import React, { useState } from "react";
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";

// // type FormData = {
// //   firstName: string;
// //   middleName: string;
// //   lastName: string;
// //   dob: Date | null;
// //   sex: string;
// //   email: string;
// //   phoneNumber: string;
// //   currentAddress: string;
// //   mailingAddress: string;
// //   ssn: string;
// //   education: string;
// //   earning: string;
// //   hasDriverLicense: boolean;
// //   previouslyEmployed: boolean;
// //   workInChallengingEnvironment: boolean;
// //   workToWorkExtraHours: boolean;
// //   workLocationChange: boolean;
// //   agree: boolean;
// //   agree1: boolean;
// //   smsConsent: boolean;
// // };

// // const CareerInfoFormStatic = () => {
// //   const [formData, setFormData] = useState<FormData>({
// //     firstName: "",
// //     middleName: "",
// //     lastName: "",
// //     dob: null,
// //     sex: "",
// //     email: "",
// //     phoneNumber: "",
// //     currentAddress: "",
// //     mailingAddress: "",
// //     ssn: "",
// //     education: "",
// //     earning: "",
// //     hasDriverLicense: false,
// //     previouslyEmployed: false,
// //     workInChallengingEnvironment: false,
// //     workToWorkExtraHours: false,
// //     workLocationChange: false,
// //     agree: false,
// //     agree1: false,
// //     smsConsent: false,
// //   });

// //   const [submitted, setSubmitted] = useState(false);

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// //   ) => {
// //     const target = e.target as HTMLInputElement | HTMLSelectElement;
// //     const { name, value, type } = target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]:
// //         type === "checkbox" ? (target as HTMLInputElement).checked : value,
// //     }));
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     console.log("Form Data:", formData);
// //     setSubmitted(true);
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto py-10">
// //       <h2 className="text-3xl font-bold mb-6">Trucking Career Application</h2>

// //       {submitted && (
// //         <div className="p-4 mb-6 text-green-700 bg-green-100 rounded">
// //           ✅ Form submitted successfully (check console for values).
// //         </div>
// //       )}

// //       <form onSubmit={handleSubmit} className="space-y-8">
// //         {/* Personal Details */}
// //         <section>
// //           <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //             <input
// //               type="text"
// //               name="firstName"
// //               placeholder="First Name"
// //               value={formData.firstName}
// //               onChange={handleChange}
// //               className="p-2 border rounded"
// //             />
// //             <input
// //               type="text"
// //               name="middleName"
// //               placeholder="Middle Name"
// //               value={formData.middleName}
// //               onChange={handleChange}
// //               className="p-2 border rounded"
// //             />
// //             <input
// //               type="text"
// //               name="lastName"
// //               placeholder="Last Name"
// //               value={formData.lastName}
// //               onChange={handleChange}
// //               className="p-2 border rounded"
// //             />
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
// //             <div>
// //               <label className="block text-sm mb-1">Date of Birth</label>
// //               <DatePicker
// //                 selected={formData.dob}
// //                 onChange={(date) =>
// //                   setFormData((prev) => ({ ...prev, dob: date }))
// //                 }
// //                 dateFormat="MM/dd/yyyy"
// //                 placeholderText="Select your date of birth"
// //                 className="p-2 border rounded w-full"
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm mb-1">Gender</label>
// //               <select
// //                 name="sex"
// //                 value={formData.sex}
// //                 onChange={handleChange}
// //                 className="p-2 border rounded w-full"
// //               >
// //                 <option value="">Select</option>
// //                 <option value="male">Male</option>
// //                 <option value="female">Female</option>
// //                 <option value="others">Others</option>
// //               </select>
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email Address"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="p-2 border rounded"
// //             />
// //             <input
// //               type="tel"
// //               name="phoneNumber"
// //               placeholder="Phone Number"
// //               value={formData.phoneNumber}
// //               onChange={handleChange}
// //               className="p-2 border rounded"
// //             />
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
// //             <input
// //               type="text"
// //               name="currentAddress"
// //               placeholder="Current Address"
// //               value={formData.currentAddress}
// //               onChange={handleChange}
// //               className="p-2 border rounded"
// //             />
// //             <input
// //               type="text"
// //               name="mailingAddress"
// //               placeholder="Mailing Address"
// //               value={formData.mailingAddress}
// //               onChange={handleChange}
// //               className="p-2 border rounded"
// //             />
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
// //             <input
// //               type="text"
// //               name="ssn"
// //               placeholder="Social Security Number"
// //               value={formData.ssn}
// //               onChange={handleChange}
// //               className="p-2 border rounded"
// //             />
// //             <input
// //               type="text"
// //               name="education"
// //               placeholder="Education Qualification"
// //               value={formData.education}
// //               onChange={handleChange}
// //               className="p-2 border rounded"
// //             />
// //           </div>
// //         </section>

// //         {/* About You */}
// //         <section>
// //           <h3 className="text-xl font-semibold mb-4">About You</h3>
// //           <label className="block mb-2">
// //             <input
// //               type="checkbox"
// //               name="hasDriverLicense"
// //               checked={formData.hasDriverLicense}
// //               onChange={handleChange}
// //               className="mr-2"
// //             />
// //             Do you have a US driver’s license?
// //           </label>
// //           <label className="block mb-2">
// //             <input
// //               type="checkbox"
// //               name="previouslyEmployed"
// //               checked={formData.previouslyEmployed}
// //               onChange={handleChange}
// //               className="mr-2"
// //             />
// //             Are you previously employed?
// //           </label>
// //           <input
// //             type="text"
// //             name="earning"
// //             placeholder="Gross earning per year"
// //             value={formData.earning}
// //             onChange={handleChange}
// //             className="p-2 border rounded w-full"
// //           />
// //         </section>

// //         {/* Work Preferences */}
// //         <section>
// //           <h3 className="text-xl font-semibold mb-4">Work Preferences</h3>
// //           <label className="block mb-2">
// //             <input
// //               type="checkbox"
// //               name="workInChallengingEnvironment"
// //               checked={formData.workInChallengingEnvironment}
// //               onChange={handleChange}
// //               className="mr-2"
// //             />
// //             Willing to work in challenging environment?
// //           </label>
// //           <label className="block mb-2">
// //             <input
// //               type="checkbox"
// //               name="workToWorkExtraHours"
// //               checked={formData.workToWorkExtraHours}
// //               onChange={handleChange}
// //               className="mr-2"
// //             />
// //             Willing to work extra hours?
// //           </label>
// //           <label className="block mb-2">
// //             <input
// //               type="checkbox"
// //               name="workLocationChange"
// //               checked={formData.workLocationChange}
// //               onChange={handleChange}
// //               className="mr-2"
// //             />
// //             Willing to change work location?
// //           </label>
// //         </section>

// //         {/* Agreements */}
// //         <section className="space-y-3">
// //           <label className="flex gap-2">
// //             <input
// //               type="checkbox"
// //               name="agree"
// //               checked={formData.agree}
// //               onChange={handleChange}
// //             />
// //             I declare that I am fit for trucking and agree to background checks.
// //           </label>
// //           <label className="flex gap-2">
// //             <input
// //               type="checkbox"
// //               name="agree1"
// //               checked={formData.agree1}
// //               onChange={handleChange}
// //             />
// //             I agree to Privacy Policy & Terms.
// //           </label>
// //           <label className="flex gap-2">
// //             <input
// //               type="checkbox"
// //               name="smsConsent"
// //               checked={formData.smsConsent}
// //               onChange={handleChange}
// //             />
// //             I agree to receive SMS updates.
// //           </label>
// //         </section>

// //         {/* Submit */}
// //         <button
// //           type="submit"
// //           className="px-6 py-2 bg-blue-600 text-white rounded"
// //         >
// //           Submit
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default CareerInfoFormStatic;

// "use client";

// import type React from "react";
// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import GaireNavbar from "@/components/Navbar";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Truck, Users, Award, CheckCircle } from "lucide-react";

// type FormData = {
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   dob: Date | null;
//   sex: string;
//   email: string;
//   phoneNumber: string;
//   currentAddress: string;
//   mailingAddress: string;
//   ssn: string;
//   education: string;
//   earning: string;
//   hasDriverLicense: boolean;
//   previouslyEmployed: boolean;
//   workInChallengingEnvironment: boolean;
//   workToWorkExtraHours: boolean;
//   workLocationChange: boolean;
//   agree: boolean;
//   agree1: boolean;
//   smsConsent: boolean;
// };

// const CareerInfoFormStatic = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     dob: null,
//     sex: "",
//     email: "",
//     phoneNumber: "",
//     currentAddress: "",
//     mailingAddress: "",
//     ssn: "",
//     education: "",
//     earning: "",
//     hasDriverLicense: false,
//     previouslyEmployed: false,
//     workInChallengingEnvironment: false,
//     workToWorkExtraHours: false,
//     workLocationChange: false,
//     agree: false,
//     agree1: false,
//     smsConsent: false,
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const target = e.target as HTMLInputElement | HTMLSelectElement;
//     const { name, value, type } = target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]:
//         type === "checkbox" ? (target as HTMLInputElement).checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     setSubmitted(true);
//   };

//   const benefits = [
//     {
//       icon: <Truck className="w-8 h-8 text-[#459c6d]" />,
//       title: "Modern Fleet",
//       description: "Drive the latest trucks with advanced safety features",
//     },
//     {
//       icon: <Users className="w-8 h-8 text-[#459c6d]" />,
//       title: "Great Team",
//       description: "Join a supportive community of professional drivers",
//     },
//     {
//       icon: <Award className="w-8 h-8 text-[#459c6d]" />,
//       title: "Competitive Pay",
//       description: "Earn top dollar with performance bonuses",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <GaireNavbar />

//       <section className="px-4 py-16 bg-gradient-to-r from-green-50 to-[#459c6d]/10">
//         <div className="container mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             Join Our <span className="text-[#459c6d]">Team</span>
//           </h1>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
//             Start your career with Gaire Freight Line. We offer competitive pay,
//             modern equipment, and a supportive work environment for professional
//             drivers.
//           </p>
//         </div>
//       </section>

//       <section className="px-4 py-16 bg-gray-50">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Why Choose Us?
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             {benefits.map((benefit, index) => (
//               <Card
//                 key={index}
//                 className="p-6 text-center hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex justify-center mb-4">{benefit.icon}</div>
//                 <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="container mx-auto px-4 py-16">
//         <div className="max-w-4xl mx-auto">
//           <Card className="p-8">
//             <h2 className="text-3xl font-bold mb-6 text-center">
//               Driver Application Form
//             </h2>

//             {submitted && (
//               <div className="p-4 mb-6 text-green-700 bg-green-100 rounded-lg flex items-center gap-2">
//                 <CheckCircle className="w-5 h-5" />
//                 Form submitted successfully! We'll review your application and
//                 get back to you soon.
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* Personal Details */}
//               <section>
//                 <h3 className="text-xl font-semibold mb-6 text-[#459c6d] border-b border-gray-200 pb-2">
//                   Personal Details
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div>
//                     <Label htmlFor="firstName">First Name *</Label>
//                     <Input
//                       id="firstName"
//                       name="firstName"
//                       placeholder="First Name"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className="mt-1"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="middleName">Middle Name</Label>
//                     <Input
//                       id="middleName"
//                       name="middleName"
//                       placeholder="Middle Name"
//                       value={formData.middleName}
//                       onChange={handleChange}
//                       className="mt-1"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="lastName">Last Name *</Label>
//                     <Input
//                       id="lastName"
//                       name="lastName"
//                       placeholder="Last Name"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className="mt-1"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <Label className="block text-sm mb-1">
//                       Date of Birth *
//                     </Label>
//                     <DatePicker
//                       selected={formData.dob}
//                       onChange={(date) =>
//                         setFormData((prev) => ({ ...prev, dob: date }))
//                       }
//                       dateFormat="MM/dd/yyyy"
//                       placeholderText="Select your date of birth"
//                       className="p-2 border rounded w-full"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="sex">Gender *</Label>
//                     <select
//                       name="sex"
//                       value={formData.sex}
//                       onChange={handleChange}
//                       className="p-2 border rounded w-full mt-1"
//                       required
//                     >
//                       <option value="">Select Gender</option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                       <option value="others">Others</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <Label htmlFor="email">Email Address *</Label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       placeholder="your@email.com"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="mt-1"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="phoneNumber">Phone Number *</Label>
//                     <Input
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       type="tel"
//                       placeholder="(555) 123-4567"
//                       value={formData.phoneNumber}
//                       onChange={handleChange}
//                       className="mt-1"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <Label htmlFor="currentAddress">Current Address *</Label>
//                     <Input
//                       id="currentAddress"
//                       name="currentAddress"
//                       placeholder="123 Main St, City, State, ZIP"
//                       value={formData.currentAddress}
//                       onChange={handleChange}
//                       className="mt-1"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="mailingAddress">Mailing Address</Label>
//                     <Input
//                       id="mailingAddress"
//                       name="mailingAddress"
//                       placeholder="Same as current address"
//                       value={formData.mailingAddress}
//                       onChange={handleChange}
//                       className="mt-1"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <Label htmlFor="ssn">Social Security Number *</Label>
//                     <Input
//                       id="ssn"
//                       name="ssn"
//                       placeholder="XXX-XX-XXXX"
//                       value={formData.ssn}
//                       onChange={handleChange}
//                       className="mt-1"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="education">Education Qualification</Label>
//                     <Input
//                       id="education"
//                       name="education"
//                       placeholder="High School, College, etc."
//                       value={formData.education}
//                       onChange={handleChange}
//                       className="mt-1"
//                     />
//                   </div>
//                 </div>
//               </section>

//               {/* About You */}
//               <section>
//                 <h3 className="text-xl font-semibold mb-6 text-[#459c6d] border-b border-gray-200 pb-2">
//                   About You
//                 </h3>
//                 <div className="space-y-4">
//                   <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
//                     <input
//                       type="checkbox"
//                       name="hasDriverLicense"
//                       checked={formData.hasDriverLicense}
//                       onChange={handleChange}
//                       className="w-4 h-4 text-[#459c6d] rounded"
//                     />
//                     <span>Do you have a US driver's license?</span>
//                   </label>
//                   <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
//                     <input
//                       type="checkbox"
//                       name="previouslyEmployed"
//                       checked={formData.previouslyEmployed}
//                       onChange={handleChange}
//                       className="w-4 h-4 text-[#459c6d] rounded"
//                     />
//                     <span>Are you previously employed in trucking?</span>
//                   </label>
//                 </div>
//                 <div className="mt-4">
//                   <Label htmlFor="earning">Gross Earning Per Year</Label>
//                   <Input
//                     id="earning"
//                     name="earning"
//                     placeholder="$50,000"
//                     value={formData.earning}
//                     onChange={handleChange}
//                     className="mt-1"
//                   />
//                 </div>
//               </section>

//               {/* Work Preferences */}
//               <section>
//                 <h3 className="text-xl font-semibold mb-6 text-[#459c6d] border-b border-gray-200 pb-2">
//                   Work Preferences
//                 </h3>
//                 <div className="space-y-4">
//                   <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
//                     <input
//                       type="checkbox"
//                       name="workInChallengingEnvironment"
//                       checked={formData.workInChallengingEnvironment}
//                       onChange={handleChange}
//                       className="w-4 h-4 text-[#459c6d] rounded"
//                     />
//                     <span>Willing to work in challenging environments?</span>
//                   </label>
//                   <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
//                     <input
//                       type="checkbox"
//                       name="workToWorkExtraHours"
//                       checked={formData.workToWorkExtraHours}
//                       onChange={handleChange}
//                       className="w-4 h-4 text-[#459c6d] rounded"
//                     />
//                     <span>Willing to work extra hours when needed?</span>
//                   </label>
//                   <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
//                     <input
//                       type="checkbox"
//                       name="workLocationChange"
//                       checked={formData.workLocationChange}
//                       onChange={handleChange}
//                       className="w-4 h-4 text-[#459c6d] rounded"
//                     />
//                     <span>Willing to change work locations?</span>
//                   </label>
//                 </div>
//               </section>

//               {/* Agreements */}
//               <section>
//                 <h3 className="text-xl font-semibold mb-6 text-[#459c6d] border-b border-gray-200 pb-2">
//                   Agreements
//                 </h3>
//                 <div className="space-y-4">
//                   <label className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50">
//                     <input
//                       type="checkbox"
//                       name="agree"
//                       checked={formData.agree}
//                       onChange={handleChange}
//                       className="w-4 h-4 text-[#459c6d] rounded mt-1"
//                       required
//                     />
//                     <span>
//                       I declare that I am fit for trucking and agree to
//                       background checks. *
//                     </span>
//                   </label>
//                   <label className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50">
//                     <input
//                       type="checkbox"
//                       name="agree1"
//                       checked={formData.agree1}
//                       onChange={handleChange}
//                       className="w-4 h-4 text-[#459c6d] rounded mt-1"
//                       required
//                     />
//                     <span>I agree to Privacy Policy & Terms of Service. *</span>
//                   </label>
//                   <label className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50">
//                     <input
//                       type="checkbox"
//                       name="smsConsent"
//                       checked={formData.smsConsent}
//                       onChange={handleChange}
//                       className="w-4 h-4 text-[#459c6d] rounded mt-1"
//                     />
//                     <span>
//                       I agree to receive SMS updates about my application.
//                     </span>
//                   </label>
//                 </div>
//               </section>

//               {/* Submit */}
//               <div className="text-center pt-6">
//                 <Button
//                   type="submit"
//                   className="bg-[#459c6d] hover:bg-[#3a8359] text-white px-8 py-3 text-lg"
//                   size="lg"
//                 >
//                   Submit Application
//                 </Button>
//               </div>
//             </form>
//           </Card>
//         </div>
//       </div>

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
//           <p className="text-gray-500 text-sm mt-4">
//             © 2025 Gaire Freight Line. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CareerInfoFormStatic;

"use client";

import type React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GaireNavbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Truck, Users, Award, CheckCircle } from "lucide-react";

type FormData = {
  firstName: string;
  middleName: string;
  lastName: string;
  dob: Date | null;
  sex: string;
  email: string;
  phoneNumber: string;
  currentAddress: string;
  mailingAddress: string;
  ssn: string;
  education: string;
  earning: string;
  hasDriverLicense: boolean;
  previouslyEmployed: boolean;
  workInChallengingEnvironment: boolean;
  workToWorkExtraHours: boolean;
  workLocationChange: boolean;
  agree: boolean;
  agree1: boolean;
  smsConsent: boolean;
};

const CareerInfoFormStatic = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: null,
    sex: "",
    email: "",
    phoneNumber: "",
    currentAddress: "",
    mailingAddress: "",
    ssn: "",
    education: "",
    earning: "",
    hasDriverLicense: false,
    previouslyEmployed: false,
    workInChallengingEnvironment: false,
    workToWorkExtraHours: false,
    workLocationChange: false,
    agree: false,
    agree1: false,
    smsConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: <Truck className="w-8 h-8 text-[#459c6d]" />,
      title: "Modern Fleet",
      description: "Drive the latest trucks with advanced safety features",
    },
    {
      icon: <Users className="w-8 h-8 text-[#459c6d]" />,
      title: "Great Team",
      description: "Join a supportive community of professional drivers",
    },
    {
      icon: <Award className="w-8 h-8 text-[#459c6d]" />,
      title: "Competitive Pay",
      description: "Earn top dollar with performance bonuses",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#545454]">
      <GaireNavbar />

      <section className="px-4 py-16 bg-gradient-to-r from-green-50 to-[#459c6d]/10 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Join Our <span className="text-[#459c6d]">Team</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Start your career with Gaire Freight Line. We offer competitive pay,
            modern equipment, and a supportive work environment for professional
            drivers.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-700"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white dark:bg-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Driver Application Form
            </h2>

            {submitted && (
              <div className="p-4 mb-6 text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Form submitted successfully! We'll review your application and
                get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Details */}
              <section>
                <h3 className="text-xl font-semibold mb-6 text-[#459c6d] border-b border-gray-200 dark:border-gray-600 pb-2">
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-gray-900 dark:text-white"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 bg-white dark:bg-gray-600 text-gray-900 dark:text-white border-gray-300 dark:border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="middleName"
                      className="text-gray-900 dark:text-white"
                    >
                      Middle Name
                    </Label>
                    <Input
                      id="middleName"
                      name="middleName"
                      placeholder="Middle Name"
                      value={formData.middleName}
                      onChange={handleChange}
                      className="mt-1 bg-white dark:bg-gray-600 text-gray-900 dark:text-white border-gray-300 dark:border-gray-500"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="lastName"
                      className="text-gray-900 dark:text-white"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 bg-white dark:bg-gray-600 text-gray-900 dark:text-white border-gray-300 dark:border-gray-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label className="block text-sm mb-1 text-gray-900 dark:text-white">
                      Date of Birth *
                    </Label>
                    <DatePicker
                      selected={formData.dob}
                      onChange={(date) =>
                        setFormData((prev) => ({ ...prev, dob: date }))
                      }
                      dateFormat="MM/dd/yyyy"
                      placeholderText="Select your date of birth"
                      className="p-2 border rounded w-full bg-white dark:bg-gray-600 text-gray-900 dark:text-white border-gray-300 dark:border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="sex"
                      className="text-gray-900 dark:text-white"
                    >
                      Gender *
                    </Label>
                    <select
                      name="sex"
                      value={formData.sex}
                      onChange={handleChange}
                      className="p-2 border rounded w-full mt-1 bg-white dark:bg-gray-600 text-gray-900 dark:text-white border-gray-300 dark:border-gray-500"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-gray-900 dark:text-white"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 bg-white dark:bg-gray-600 text-gray-900 dark:text-white border-gray-300 dark:border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phoneNumber"
                      className="text-gray-900 dark:text-white"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="mt-1 bg-white dark:bg-gray-600 text-gray-900 dark:text-white border-gray-300 dark:border-gray-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label
                      htmlFor="currentAddress"
                      className="text-gray-900 dark:text-white"
                    >
                      Current Address *
                    </Label>
                    <Input
                      id="currentAddress"
                      name="currentAddress"
                      placeholder="123 Main St, City, State, ZIP"
                      value={formData.currentAddress}
                      onChange={handleChange}
                      className="mt-1 bg-white dark:bg-gray-600 text-gray-900 dark:text-white border-gray-300 dark:border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="mailingAddress"
                      className="text-gray-900 dark:text-white"
                    >
                      Mailing Address
                    </Label>
                    <Input
                      id="mailingAddress"
                      name="mailingAddress"
                      placeholder="Same as current address"
                      value={formData.mailingAddress}
                      onChange={handleChange}
                      className="mt-1 bg-white dark:bg-gray-600 text-gray-900 dark:text-white border-gray-300 dark:border-gray-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label
                      htmlFor="ssn"
                      className="text-gray-900 dark:text-white"
                    >
                      Social Security Number *
                    </Label>
                    <Input
                      id="ssn"
                      name="ssn"
                      placeholder="XXX-XX-XXXX"
                      value={formData.ssn}
                      onChange={handleChange}
                      className="mt-1 bg-white dark:bg-gray-600 text-gray-900 dark:text-white border-gray-300 dark:border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="education"
                      className="text-gray-900 dark:text-white"
                    >
                      Education Qualification
                    </Label>
                    <Input
                      id="education"
                      name="education"
                      placeholder="High School, College, etc."
                      value={formData.education}
                      onChange={handleChange}
                      className="mt-1 bg-white dark:bg-gray-600 text-gray-900 dark:text-white border-gray-300 dark:border-gray-500"
                    />
                  </div>
                </div>
              </section>

              {/* About You */}
              <section>
                <h3 className="text-xl font-semibold mb-6 text-[#459c6d] border-b border-gray-200 dark:border-gray-600 pb-2">
                  About You
                </h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500">
                    <input
                      type="checkbox"
                      name="hasDriverLicense"
                      checked={formData.hasDriverLicense}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#459c6d] rounded"
                    />
                    <span className="text-gray-900 dark:text-white">
                      Do you have a US driver's license?
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500">
                    <input
                      type="checkbox"
                      name="previouslyEmployed"
                      checked={formData.previouslyEmployed}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#459c6d] rounded"
                    />
                    <span className="text-gray-900 dark:text-white">
                      Are you previously employed in trucking?
                    </span>
                  </label>
                </div>
                <div className="mt-4">
                  <Label
                    htmlFor="earning"
                    className="text-gray-900 dark:text-white"
                  >
                    Gross Earning Per Year
                  </Label>
                  <Input
                    id="earning"
                    name="earning"
                    placeholder="$50,000"
                    value={formData.earning}
                    onChange={handleChange}
                    className="mt-1 bg-white dark:bg-gray-600 text-gray-900 dark:text-white border-gray-300 dark:border-gray-500"
                  />
                </div>
              </section>

              {/* Work Preferences */}
              <section>
                <h3 className="text-xl font-semibold mb-6 text-[#459c6d] border-b border-gray-200 dark:border-gray-600 pb-2">
                  Work Preferences
                </h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500">
                    <input
                      type="checkbox"
                      name="workInChallengingEnvironment"
                      checked={formData.workInChallengingEnvironment}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#459c6d] rounded"
                    />
                    <span className="text-gray-900 dark:text-white">
                      Willing to work in challenging environments?
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500">
                    <input
                      type="checkbox"
                      name="workToWorkExtraHours"
                      checked={formData.workToWorkExtraHours}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#459c6d] rounded"
                    />
                    <span className="text-gray-900 dark:text-white">
                      Willing to work extra hours when needed?
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500">
                    <input
                      type="checkbox"
                      name="workLocationChange"
                      checked={formData.workLocationChange}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#459c6d] rounded"
                    />
                    <span className="text-gray-900 dark:text-white">
                      Willing to change work locations?
                    </span>
                  </label>
                </div>
              </section>

              {/* Agreements */}
              <section>
                <h3 className="text-xl font-semibold mb-6 text-[#459c6d] border-b border-gray-200 dark:border-gray-600 pb-2">
                  Agreements
                </h3>
                <div className="space-y-4">
                  <label className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#459c6d] rounded mt-1"
                      required
                    />
                    <span className="text-gray-900 dark:text-white">
                      I declare that I am fit for trucking and agree to
                      background checks. *
                    </span>
                  </label>
                  <label className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500">
                    <input
                      type="checkbox"
                      name="agree1"
                      checked={formData.agree1}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#459c6d] rounded mt-1"
                      required
                    />
                    <span className="text-gray-900 dark:text-white">
                      I agree to Privacy Policy & Terms of Service. *
                    </span>
                  </label>
                  <label className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500">
                    <input
                      type="checkbox"
                      name="smsConsent"
                      checked={formData.smsConsent}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#459c6d] rounded mt-1"
                    />
                    <span className="text-gray-900 dark:text-white">
                      I agree to receive SMS updates about my application.
                    </span>
                  </label>
                </div>
              </section>

              {/* Submit */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  className="bg-[#459c6d] hover:bg-[#3a8359] text-white px-8 py-3 text-lg"
                  size="lg"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>

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
          <p className="text-gray-500 text-sm mt-4">
            © 2025 Gaire Freight Line. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CareerInfoFormStatic;
