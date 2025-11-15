import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  StarIcon,
  TwitterIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import portfolioData from "../../portfolio-data.json";

const iconMap: Record<string, any> = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};

export default function Home() {
  const { name, title, tagline, summary, stats, skills, experience, projects, testimonials, socialLinks } = portfolioData;

  return (
    <div className="w-full min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="font-bold text-xl">Developer</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-emerald-500">
            Home
          </a>
          <a href="#portfolio" className="text-sm font-medium hover:text-emerald-500">
            Portfolio
          </a>
          <a href="#testimonial" className="text-sm font-medium hover:text-emerald-500">
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
            <p className="text-emerald-500 font-medium mb-4">Hi, I am {name}</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-gray-600 mb-8 max-w-md text-lg">
              {summary}
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
          {socialLinks.map((social, index) => {
            const Icon = iconMap[social.platform];
            return (
              <a
                key={index}
                href={social.url}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
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
        <div className="mb-12">
          <p className="text-emerald-500 font-medium mb-4">Technical Skills</p>
          <h2 className="text-4xl font-bold mb-6">
            My <span className="text-emerald-500">Tech Stack</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-emerald-500">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-emerald-500">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-emerald-500">Database</h3>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-emerald-500">DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {skills.devops.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-gray-50">
        <div className="mb-12">
          <p className="text-emerald-500 font-medium mb-4">Experience</p>
          <h2 className="text-4xl font-bold mb-6">
            Professional <span className="text-emerald-500">Journey</span>
          </h2>
        </div>
        <div className="grid gap-6">
          {experience.map((exp, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                </div>
                <p className="text-emerald-600 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="portfolio" className="container mx-auto px-4 py-20">
        <div className="mb-12">
          <p className="text-emerald-500 font-medium mb-4">My Portfolio</p>
          <h2 className="text-4xl font-bold mb-6">
            Featured <span className="text-emerald-500">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            A collection of full-stack applications showcasing expertise in modern web technologies and scalable architecture.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gray-100 aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-emerald-500 hover:bg-emerald-600 h-auto px-6 py-3">
            View More Projects
          </Button>
        </div>
      </section>

      <section id="testimonial" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-emerald-500 font-medium mb-4">Testimonial</p>
          <h2 className="text-4xl font-bold mb-6">
            What Clients <span className="text-emerald-500">Say</span>
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
            Designed by <span className="font-medium">Developer Portfolio</span>
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = iconMap[social.platform];
              return (
                <a
                  key={index}
                  href={social.url}
                  className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
