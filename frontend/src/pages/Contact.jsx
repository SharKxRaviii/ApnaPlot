import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Submission Failed",
          description: data.message || "Something went wrong.",
          className: "bg-red-600 text-white border-none",
        });
        return;
      }

      toast({
        title: "Inquiry Received",
        description: "Our agent will call you within 2 hours.",
        className: "bg-green-600 text-white border-none",
      });

      // Reset form after success
      setFormData({ name: "", email: "", phone: "", message: "" });

    } catch (error) {
      toast({
        title: "Network Error",
        description: "Unable to send inquiry. Try again later.",
        className: "bg-red-600 text-white border-none",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Discuss Your Land
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Ready to buy or sell? Our team of local experts is here to guide
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-gray-900 text-white border-none shadow-2xl relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

              <h2 className="text-2xl font-bold mb-8 relative z-10">
                Contact Information
              </h2>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100">
                      Phone Support
                    </h3>
                    <p className="text-gray-400 mt-1">+91 79783 00902</p>
                    <p className="text-green-400 text-xs mt-1">
                      Available 9am - 8pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100">
                      Email Us
                    </h3>
                    <p className="text-gray-400 mt-1">sales@apnaplot.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100">
                      Head Office
                    </h3>
                    <p className="text-gray-400 mt-1 leading-relaxed">
                      Rourkela, Odisha,
                      <br />
                      Sundargarh District, 769042
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <a href="https://wa.me/917978300902" target="_blank">
                  <Button className="w-full bg-green-600 hover:bg-green-500 text-white h-12 text-lg font-medium">
                    <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </Card>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">
                Looking to sell your plot?
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                We have a database of 5000+ verified buyers.
              </p>
              <Link
                to="/listings"
                className="text-green-700 font-semibold text-sm hover:underline"
              >
                Check current market rates →
              </Link>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ravi Kumar"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 h-11 focus:ring-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+91..."
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 h-11 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ravi@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 h-11 focus:ring-green-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="I'm interested in Plot #102 in Rourkela..."
                  className="min-h-[150px] bg-gray-50 border-gray-200 focus:ring-green-500"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12 text-lg shadow-xl transition-transform hover:-translate-y-1"
              >
                <Send className="w-4 h-4 mr-2" /> Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
