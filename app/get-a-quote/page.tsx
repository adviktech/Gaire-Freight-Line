"use client";

import { JSX, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import GaireNavbar from "@/components/Navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Truck,
  Calculator,
  CheckCircle,
  AlertCircle,
  Send,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  fleetSize: string;
  serviceType: string;
  operatingRegion: string;
  currentChallenges: string;
  additionalServices: string[];
  preferredContactMethod: string;
  specialRequirements: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

type SubmitStatus = "success" | "error" | null;

export default function GetQuotePage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    fleetSize: "",
    serviceType: "",
    operatingRegion: "",
    currentChallenges: "",
    additionalServices: [],
    preferredContactMethod: "",
    specialRequirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: keyof FormData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (service: string, checked: boolean): void => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, service]
        : prev.additionalServices.filter((s) => s !== service),
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create mailto link with all form data
      const subject = encodeURIComponent("Quote Request - Gaire Freight Line");
      const body = encodeURIComponent(
        `QUOTE REQUEST DETAILS:

Company Information:
- Company Name: ${formData.companyName}
- Contact Name: ${formData.contactName}
- Email: ${formData.email}
- Phone: ${formData.phone}

Service Details:
- Fleet Size: ${formData.fleetSize}
- Service Type: ${formData.serviceType}
- Operating Region: ${formData.operatingRegion}
- Preferred Contact Method: ${formData.preferredContactMethod}

Current Challenges:
${formData.currentChallenges}

Additional Services Requested:
${
  formData.additionalServices.length > 0
    ? formData.additionalServices.join(", ")
    : "None"
}

Special Requirements:
${formData.specialRequirements || "None"}

---
This quote request was submitted through the Gaire Freight Line website.
Please respond to: ${formData.email}`
      );

      const mailtoLink = `mailto:gairefreightline@gmail.com?subject=${subject}&body=${body}`;

      // Open default email client
      window.location.href = mailtoLink;

      // Reset form
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        fleetSize: "",
        serviceType: "",
        operatingRegion: "",
        currentChallenges: "",
        additionalServices: [],
        preferredContactMethod: "",
        specialRequirements: "",
      });

      setSubmitStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features: Feature[] = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Dispatching",
      description: "Get matched with the most profitable loads instantly",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance when you need it most",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Bank-level security with 99.9% uptime guarantee",
    },
  ];

  const additionalServices: string[] = [
    "Load Optimization",
    "Route Planning",
    "Fuel Management",
    "Maintenance Scheduling",
    "Driver Management",
    "Compliance Tracking",
    "Financial Reporting",
    "Mobile App Access",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <GaireNavbar />

      {/* Hero Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get Your Custom <span className="text-green-500">Quote</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Ready to revolutionize your freight operations? Get a personalized
            quote tailored to your specific needs and start saving money today.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Custom pricing</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>24-hour response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4 text-green-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <Calculator className="inline w-10 h-10 mr-3 text-green-500" />
              Request Your Quote
            </h2>
            <p className="text-gray-600">
              Fill out the form below and our team will create a custom quote
              for your business
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Truck className="w-6 h-6 mr-2 text-green-500" />
                  Company Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="companyName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="contactName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Contact Name *
                    </Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      type="text"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
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
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Service Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="fleetSize"
                      className="text-sm font-medium text-gray-700"
                    >
                      Fleet Size *
                    </Label>
                    <Select
                      onValueChange={(value: string) =>
                        handleSelectChange("fleetSize", value)
                      }
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select fleet size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 trucks</SelectItem>
                        <SelectItem value="6-20">6-20 trucks</SelectItem>
                        <SelectItem value="21-50">21-50 trucks</SelectItem>
                        <SelectItem value="51-100">51-100 trucks</SelectItem>
                        <SelectItem value="100+">100+ trucks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label
                      htmlFor="serviceType"
                      className="text-sm font-medium text-gray-700"
                    >
                      Service Type *
                    </Label>
                    <Select
                      onValueChange={(value: string) =>
                        handleSelectChange("serviceType", value)
                      }
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dispatch">
                          Dispatch Services
                        </SelectItem>
                        <SelectItem value="full-service">
                          Full Service Management
                        </SelectItem>
                        <SelectItem value="consulting">
                          Consulting Only
                        </SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label
                      htmlFor="operatingRegion"
                      className="text-sm font-medium text-gray-700"
                    >
                      Operating Region *
                    </Label>
                    <Select
                      onValueChange={(value: string) =>
                        handleSelectChange("operatingRegion", value)
                      }
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select operating region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">
                          Local (within state)
                        </SelectItem>
                        <SelectItem value="regional">
                          Regional (multi-state)
                        </SelectItem>
                        <SelectItem value="national">National</SelectItem>
                        <SelectItem value="international">
                          International
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label
                      htmlFor="preferredContactMethod"
                      className="text-sm font-medium text-gray-700"
                    >
                      Preferred Contact Method *
                    </Label>
                    <Select
                      onValueChange={(value: string) =>
                        handleSelectChange("preferredContactMethod", value)
                      }
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="both">Both Email & Phone</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Additional Services */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Additional Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox
                        id={`service-${index}`}
                        checked={formData.additionalServices.includes(service)}
                        onCheckedChange={(checked: boolean) =>
                          handleCheckboxChange(service, checked as boolean)
                        }
                      />
                      <Label htmlFor={`service-${index}`} className="text-sm">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Challenges */}
              <div>
                <Label
                  htmlFor="currentChallenges"
                  className="text-sm font-medium text-gray-700"
                >
                  Current Challenges *
                </Label>
                <Textarea
                  id="currentChallenges"
                  name="currentChallenges"
                  value={formData.currentChallenges}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="mt-1"
                  placeholder="Tell us about your current challenges with freight dispatching..."
                />
              </div>

              {/* Special Requirements */}
              <div>
                <Label
                  htmlFor="specialRequirements"
                  className="text-sm font-medium text-gray-700"
                >
                  Special Requirements
                </Label>
                <Textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={3}
                  className="mt-1"
                  placeholder="Any special requirements or additional information..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center space-y-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-12 py-3 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Quote Request
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">
                      Your quote request has been submitted! We'll get back to
                      you within 24 hours.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">
                      There was an error submitting your request. Please try
                      again or contact us directly.
                    </span>
                  </div>
                )}
              </div>
            </form>
          </Card>
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
