"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Check,
  ArrowRight,
  Truck,
  Shield,
  Clock,
  Users,
  Award,
  Globe,
} from "lucide-react";
// Update if using a different Card component
import { Bar, Line } from "react-chartjs-2";
import Geometry from "@/public/geometry.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import GaireNavbar from "@/components/Navbar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const performanceData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Performance",
      data: [38, 52, 61, 45, 48, 63],
      backgroundColor: "#4F46E5",
      borderRadius: 6,
    },
  ],
};

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We deliver on our promises with consistent, dependable service that our clients can count on, every single time.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    description:
      "Time is money in logistics. We optimize every route and process to ensure maximum efficiency and cost-effectiveness.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Our clients' success is our success. We go above and beyond to understand and meet their unique shipping needs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do, from cargo handling to customer service delivery.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description:
      "We embrace cutting-edge technology and innovative solutions to stay ahead in the rapidly evolving logistics industry.",
  },
  {
    icon: Truck,
    title: "Sustainability",
    description:
      "We're committed to environmentally responsible practices that reduce our carbon footprint while maintaining service quality.",
  },
];

const salesData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Sales",
      data: [1200, 1800, 1500, 2000],
      fill: false,
      borderColor: "#22C55E",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 500 },
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="border-b border-gray-100 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-purple-500"></div>
            <span className="text-xl font-bold">Gaire Freight Line</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/about-us" className="text-gray-600 hover:text-gray-900">
              About Us
            </a>
            <a href="/contact-us" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </a>
            <a href="/blogs" className="text-gray-600 hover:text-gray-900">
              Blogs
            </a>
            <a
              href="/get-a-quote"
              className="text-gray-600 hover:text-gray-900"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </header> */}
      <GaireNavbar />

      {/* Hero Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              "Stay ahead with{" "}
              <span className="text-green-500">AI-dispatched</span>,<br />
              <span className="text-green-500">priority-booked</span> loads."
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="relative">
            <video
              src="/landing.mp4"
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/driver.jpg"
                alt="Mobile app interface"
                width={300}
                height={1000}
                className="mx-auto rounded-lg shadow-lg max-w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Make it dead easy for your customers to buy from you.
              </h2>
              <p className="text-gray-600 mb-8">
                Gaire Freight Line makes it dead easy for your customers to buy
                from you with our mobile app. Our mobile app makes it easy for
                your customers to book loads, track shipments, and manage their
                account all from their mobile device.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>Easy load booking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Real-time tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-yellow-600" />
                  </div>
                  <span>Pay on the mobile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Exclusively Section */}
      {/* <section className="px-4 py-16 bg-green-500 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-600 text-white mb-4">
                PERFORMANCE
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Build
                <br />
                Exclusively
              </h2>
              <p className="text-green-100 mb-8">
                Gaire Freight Line makes it easy to track shipments, manage
                loads, and optimize routes. Our platform provides real-time
                visibility into your operations, helping you make better
                decisions and improve efficiency.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="bg-white p-6">
                <h3 className="font-semibold mb-4 text-gray-900">
                  Performance
                </h3>
                <Bar data={performanceData} options={options} height={200} />
              </Card>

              <Card className="bg-white p-6">
                <h3 className="font-semibold mb-4 text-gray-900">
                  Sales Analytics
                </h3>
                <Line data={salesData} options={options} height={200} />
              </Card>
            </div>
          </div>
        </div>
      </section> */}
      <section className="px-4 py-16 bg-green-500 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-600 text-white mb-4">OUR VALUES</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <br /> Values
              </h2>
              <p className="text-green-100 mb-8 text-lg leading-relaxed">
                At Gaire Freight Line, our values aren't just words—they're the
                foundation of everything we do. These principles guide our
                decisions, shape our culture, and drive our commitment to
                excellence in freight transportation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-semibold text-gray-900 ml-4">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="text-green-500">Gaire Freight Line</span>?
            </h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6">
                  <Image
                    src={Geometry}
                    alt="Customer"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <h3 className="font-semibold mb-2">AI-Enabled</h3>
              <p className="text-gray-600 text-sm">
                Our AI-powered platform helps you find the best loads and
                optimize your routes.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6">
                  <Image
                    src={Geometry}
                    alt="Customer"
                    width={100}
                    height={100}
                  />
                </div>{" "}
              </div>
              <h3 className="font-semibold mb-2">One-Click Process</h3>
              <p className="text-gray-600 text-sm">
                Book loads with just one click and get instant confirmation.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6">
                  <Image
                    src={Geometry}
                    alt="Customer"
                    width={100}
                    height={100}
                  />
                </div>{" "}
              </div>
              <h3 className="font-semibold mb-2">Lowest Dispatching Fees</h3>
              <p className="text-gray-600 text-sm">
                We offer the lowest dispatching fees in the industry.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6">
                  <Image
                    src={Geometry}
                    alt="Customer"
                    width={100}
                    height={100}
                  />
                </div>{" "}
              </div>
              <h3 className="font-semibold mb-2">Hassle Free Miles</h3>
              <p className="text-gray-600 text-sm">
                Get hassle-free miles with our optimized routing system.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}

      {/* Testimonials Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Customer said about
              <br />
              Gaire Freight Line
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold">Courtney Henry</h4>
                  <p className="text-gray-600 text-sm">Truck Driver</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                "Gaire Freight Line has revolutionized how I manage my loads.
                The AI dispatching feature is incredible!"
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold">Dianne Russell</h4>
                  <p className="text-gray-600 text-sm">Fleet Owner</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                "The platform is intuitive and has helped us reduce costs
                significantly."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold">Jenny Wilson</h4>
                  <p className="text-gray-600 text-sm">Logistics Manager</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                "Outstanding service and support. Highly recommend to anyone in
                trucking."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold">Ronald Richards</h4>
                  <p className="text-gray-600 text-sm">Independent Driver</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                "Game-changer for my business. The one-click booking saves me
                hours every week."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold">Marvin McKinney</h4>
                  <p className="text-gray-600 text-sm">Dispatcher</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                "The analytics and reporting features help me make better
                decisions daily."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold">Jerome Bell</h4>
                  <p className="text-gray-600 text-sm">Freight Broker</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                "Excellent platform with great customer service. Couldn't be
                happier."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-green-500 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Ready to get
                <br />
                started ?
              </h2>
              <p className="text-green-100 mb-8">
                Join thousands of truckers who trust Gaire Freight Line for
                their dispatching needs.
              </p>
              <Button className="bg-white text-green-500 hover:bg-gray-100">
                Get Started
              </Button>
            </div>
            <div className="text-right">
              <h3 className="text-2xl font-bold mb-4">
                Why let your operations in hand,
                <br />
                it's time to go digital.
              </h3>
              <div className="space-y-2">
                <p className="text-green-100">Start a Gaire Freight Line</p>
                <p className="text-green-100 flex items-center justify-end">
                  Get your questions answered, book a call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-green-500"></div>
                <span className="text-xl font-bold">Gaire Freight Line</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Gaire Freight Line. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
