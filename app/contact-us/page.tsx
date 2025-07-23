"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import GaireNavbar from "@/components/Navbar";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create mailto link
      const subject = encodeURIComponent(
        formData.subject || "Contact Form Submission"
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:gairefreightline@gmail.com?subject=${subject}&body=${body}`;

      // Open default email client
      window.location.href = mailtoLink;

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "text-blue-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["gairefreightline@gmail.com", "support@gairefreightline.com"],
      color: "text-green-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["123 Freight Avenue", "Logistics City, LC 12345"],
      color: "text-red-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: [
        "Mon - Fri: 6:00 AM - 10:00 PM",
        "Sat - Sun: 8:00 AM - 6:00 PM",
      ],
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <GaireNavbar />

      {/* Hero Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-green-500">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about our services? Need support with your account?
            Our team is here to help you succeed. Reach out to us today!
          </p>
        </div>
      </section>
      {/* Contact Information */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center">
                <div className={`flex justify-center mb-4 ${info.color}`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24
                hours. Whether you have questions about our services, need
                technical support, or want to discuss a partnership opportunity,
                we're here to help.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Quick response time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Expert support team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Personalized solutions</span>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="mt-1"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">
                      Your default email client should open now. Please send the
                      email to complete your message.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">
                      There was an error opening your email client. Please try
                      again.
                    </span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  {isSubmitting ? (
                    "Opening Email Client..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">
                How quickly can I get started?
              </h3>
              <p className="text-gray-600 text-sm">
                Most customers can be onboarded within 24-48 hours. Our team
                will guide you through the setup process and provide training.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">
                What support do you offer?
              </h3>
              <p className="text-gray-600 text-sm">
                We provide 24/7 phone and email support, plus live chat during
                business hours. Our support team has extensive trucking industry
                experience.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">
                Do you offer training?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! We provide comprehensive training sessions, video
                tutorials, and ongoing support to ensure you get the most out of
                our platform.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600 text-sm">
                Absolutely. We offer month-to-month plans with no long-term
                contracts. You can cancel or modify your subscription at any
                time.
              </p>
            </Card>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-purple-500"></div>
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
