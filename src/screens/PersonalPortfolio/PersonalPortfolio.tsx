import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  StarIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

const stats = [
  { number: "80+", label: "Satisfied clients" },
  { number: "200+", label: "Projects completed" },
  { number: "99+", label: "Reviews given" },
];

const services = [
  {
    title: "Visual Design",
    description: "Create user interface design with unique & modern ideas.",
  },
  {
    title: "Design Prototype",
    description: "Create advance design prototype with Figma apps.",
  },
  {
    title: "UX Research",
    description: "Create digital user products with updated ideas.",
  },
];

const testimonials = [
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    role: "CEO, Company",
    avatar: "/avatar1.png",
  },
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jane Smith",
    role: "Designer",
    avatar: "/avatar2.png",
  },
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Mike Johnson",
    role: "Developer",
    avatar: "/avatar3.png",
  },
];

const socialLinks = [
  { icon: FacebookIcon, href: "#" },
  { icon: TwitterIcon, href: "#" },
  { icon: LinkedinIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
];

export const PersonalPortfolio = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="font-bold text-xl">Agency</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-emerald-500">
            Home
          </a>
          <a href="#" className="text-sm font-medium hover:text-emerald-500">
            Portfolio
          </a>
          <a href="#" className="text-sm font-medium hover:text-emerald-500">
            Testimonial
          </a>
        </nav>
        <Button variant="outline" className="h-auto px-6 py-2">
          Contact us
        </Button>
      </header>

      <section className="container mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-emerald-500 font-medium mb-4">Hi, I am</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              I have <span className="text-emerald-500">Creative</span>
              <br />
              <span className="text-emerald-500">Design</span> Experience
            </h1>
            <p className="text-gray-600 mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center gap-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600 h-auto px-6 py-3">
                Get Started
              </Button>
              <button className="flex items-center gap-2 text-sm font-medium hover:text-emerald-500">
                View Portfolio
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="relative bg-emerald-500 rounded-lg overflow-hidden aspect-square">
                <img
                  src="/profile-photo.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-gray-900 rounded-lg"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-10 right-10 flex flex-col gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-4xl font-bold text-emerald-500 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-emerald-500 font-medium mb-4">My Intro</p>
            <h2 className="text-4xl font-bold mb-6">
              Why Hire Me For Your
              <br />
              Next <span className="text-emerald-500">Project?</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <Button className="bg-emerald-500 hover:bg-emerald-600 h-auto px-6 py-3">
              Hire me
            </Button>
          </div>
          <div className="grid gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="mb-12">
          <p className="text-emerald-500 font-medium mb-4">My Portfolio</p>
          <h2 className="text-4xl font-bold mb-6">
            My Creative Works
            <br />
            Latest <span className="text-emerald-500">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 row-span-2 bg-gray-100 rounded-lg overflow-hidden aspect-video">
            <img
              src="/project1.png"
              alt="Project 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
            <img
              src="/project2.png"
              alt="Project 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
            <img
              src="/project3.png"
              alt="Project 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
            <img
              src="/project4.png"
              alt="Project 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
            <img
              src="/project5.png"
              alt="Project 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
            <img
              src="/project6.png"
              alt="Project 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center">
          <Button className="bg-emerald-500 hover:bg-emerald-600 h-auto px-6 py-3">
            View Portfolio
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-emerald-500 font-medium mb-4">Testimonial</p>
          <h2 className="text-4xl font-bold mb-6">
            Our Customer Say
            <br />
            Something <span className="text-emerald-500">About Us</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Let's Discuss Your <span className="text-emerald-500">Project</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let's make something new, different and more meaningful or make
            thing more visual or conceptual
          </p>
        </div>
        <Card className="max-w-2xl mx-auto border-0 shadow-lg">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Website
                  </label>
                  <Input placeholder="Your website" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Budget
                  </label>
                  <Input placeholder="Your budget" className="w-full" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Your message"
                  rows={5}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 h-auto px-8 py-3"
                >
                  Send message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© 2024. All Rights Reserved.</p>
          <p className="text-sm text-gray-600">
            Designed by <span className="font-medium">Anima Agency</span>
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
