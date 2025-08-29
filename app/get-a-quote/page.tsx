"use client";

import type React from "react";
import { type JSX, useState } from "react";
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
import { Send, Clock, CheckCircle, AlertCircle } from "lucide-react";

type SubmitStatus = "success" | "error" | null;

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  freightType: string;
  industry: string;
  tellUsMore: string;
}

export default function SimpleQuoteForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    freightType: "",
    industry: "",
    tellUsMore: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      freightType: "",
      industry: "",
      tellUsMore: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const subject = encodeURIComponent("Quote Request - Gaire Freight Line");
      const body = encodeURIComponent(
        `QUOTE REQUEST\n\nFull name: ${formData.fullName}\nCompany: ${
          formData.companyName
        }\nEmail: ${formData.email}\nPhone: ${formData.phone}\nFreight type: ${
          formData.freightType
        }\nIndustry: ${formData.industry}\n\nTell us more:\n${
          formData.tellUsMore || "(none)"
        }\n\n-- Sent from website`
      );

      const mailto = `mailto:gairefreightline@gmail.com?subject=${subject}&body=${body}`;

      // Open user's default mail client with prefilled message
      window.location.href = mailto;

      resetForm();
      setSubmitStatus("success");
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#545454]">
      <GaireNavbar />

      <section className="px-4 py-16 bg-gradient-to-r from-green-50 to-[#459c6d]/10 dark:from-gray-800 dark:to-[#459c6d]/20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 dark:text-white">
            Get Your <span className="text-[#459c6d]">Quote</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Quick and easy quote request. Fill out the form below and we'll get
            back to you with a competitive freight quote within 24 hours.
          </p>
        </div>
      </section>

      <main className="container mx-auto p-6 max-w-2xl">
        <Card className="p-8 shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label
                htmlFor="fullName"
                className="text-sm font-medium dark:text-gray-300"
              >
                Full name *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
                className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <Label
                htmlFor="companyName"
                className="text-sm font-medium dark:text-gray-300"
              >
                Company name
              </Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="ACME Logistics"
                className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium dark:text-gray-300"
                >
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="you@example.com"
                  className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium dark:text-gray-300"
                >
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="freightType"
                  className="text-sm font-medium dark:text-gray-300"
                >
                  Freight type
                </Label>
                <Select
                  onValueChange={(v: string) =>
                    handleSelectChange("freightType", v)
                  }
                >
                  <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="Select freight type" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                    <SelectItem
                      value="FTL"
                      className="dark:text-white dark:hover:bg-gray-600"
                    >
                      FTL (Full Truckload)
                    </SelectItem>
                    <SelectItem
                      value="LTL"
                      className="dark:text-white dark:hover:bg-gray-600"
                    >
                      LTL (Less-than-truckload)
                    </SelectItem>
                    <SelectItem
                      value="Air"
                      className="dark:text-white dark:hover:bg-gray-600"
                    >
                      Air freight
                    </SelectItem>
                    <SelectItem
                      value="Ocean"
                      className="dark:text-white dark:hover:bg-gray-600"
                    >
                      Ocean freight
                    </SelectItem>
                    <SelectItem
                      value="Intermodal"
                      className="dark:text-white dark:hover:bg-gray-600"
                    >
                      Intermodal
                    </SelectItem>
                    <SelectItem
                      value="Other"
                      className="dark:text-white dark:hover:bg-gray-600"
                    >
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="industry"
                  className="text-sm font-medium dark:text-gray-300"
                >
                  Industry
                </Label>
                <Select
                  onValueChange={(v: string) =>
                    handleSelectChange("industry", v)
                  }
                >
                  <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                    <SelectItem
                      value="manufacturing"
                      className="dark:text-white dark:hover:bg-gray-600"
                    >
                      Manufacturing
                    </SelectItem>
                    <SelectItem
                      value="retail"
                      className="dark:text-white dark:hover:bg-gray-600"
                    >
                      Retail
                    </SelectItem>
                    <SelectItem
                      value="ecommerce"
                      className="dark:text-white dark:hover:bg-gray-600"
                    >
                      E‑commerce
                    </SelectItem>
                    <SelectItem
                      value="automotive"
                      className="dark:text-white dark:hover:bg-gray-600"
                    >
                      Automotive
                    </SelectItem>
                    <SelectItem
                      value="agriculture"
                      className="dark:text-white dark:hover:bg-gray-600"
                    >
                      Agriculture
                    </SelectItem>
                    <SelectItem
                      value="other"
                      className="dark:text-white dark:hover:bg-gray-600"
                    >
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label
                htmlFor="tellUsMore"
                className="text-sm font-medium dark:text-gray-300"
              >
                Tell us more
              </Label>
              <Textarea
                id="tellUsMore"
                name="tellUsMore"
                value={formData.tellUsMore}
                onChange={handleInputChange}
                rows={4}
                placeholder="Pickup/delivery locations, special handling, frequency, timelines, etc."
                className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-[#459c6d] hover:bg-[#3a8359] text-white px-8 py-2"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="w-4 h-4 mr-2 animate-spin inline" />{" "}
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 inline" /> Send Request
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">
                    Mail client opened — form data populated.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">
                    Error preparing email. Try again or contact us.
                  </span>
                </div>
              )}
            </div>
          </form>
        </Card>
      </main>

      <footer className="bg-gray-900 text-white px-4 py-8 mt-12">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-[#459c6d]"></div>
            <span className="text-xl font-bold">Gaire Freight Line</span>
          </div>
          <p className="text-gray-400 text-sm">© 2025 Gaire Freight Line</p>
        </div>
      </footer>
    </div>
  );
}
