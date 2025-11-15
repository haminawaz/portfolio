import {
  LinkedinIcon,
  GithubIcon,
  Code2,
  Database,
  Server,
  GitBranch,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import portfolioData from "../../portfolio-data.json";
import Navbar from "../components/Navbar";
import SkillBar from "../components/SkillBar";
import ExperienceCard from "../components/ExperienceCard";

const iconMap: Record<string, any> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

export default function Home() {
  const { name, title, summary, skills, experience, projects, socialLinks } =
    portfolioData;

  return (
    <div className="w-full min-h-screen bg-background pt-10">
      <Navbar />

      <section
        id="hero"
        className="container mx-auto px-4 pt-32 pb-20 relative"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <p className="text-emerald-500 font-medium mb-4">
              Hi, I am
              <br />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{name}</h1>
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-muted-foreground mb-8 max-w-md text-lg">
              I handle the full development lifecycle from
              <span className="text-emerald-500 font-semibold">
                {" "}
                UI and server logic to data storage and handling deployments{" "}
              </span>
            </p>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="w-full max-w-md mx-auto">
              <div className="relative bg-emerald-500 rounded-lg overflow-hidden aspect-square">
                <img
                  src="/profile-photo.jpg"
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

      <section id="skills" className="container mx-auto px-4 py-20">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">
            My <span className="text-emerald-500">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Expertise across modern web technologies and cloud infrastructure
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-500">Frontend</h3>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
              {skills.frontend.map((skill: any, index: number) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-500">Backend</h3>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
              {skills.backend.map((skill: any, index: number) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-500">Database</h3>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
              {skills.database.map((skill: any, index: number) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-500">DevOps</h3>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
              {skills.devops.map((skill: any, index: number) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="container mx-auto px-4 py-20 bg-muted/30"
      >
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">
            Professional <span className="text-emerald-500">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A timeline of impactful roles and achievements in software
            development
          </p>
        </div>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <ExperienceCard
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
              />
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="container mx-auto px-4 py-20">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">
            Featured <span className="text-emerald-500">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A collection of full-stack applications showcasing expertise in
            modern web technologies and scalable architecture.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="bg-gray-100 aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center" data-aos="fade-up">
          <Button className="bg-emerald-500 hover:bg-emerald-600 h-auto px-6 py-3">
            View More Projects
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">
            Let's Discuss Your <span className="text-emerald-500">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's make something new, different and more meaningful or make
            thing more visual or conceptual
          </p>
        </div>
        <Card
          className="max-w-2xl mx-auto border-0 shadow-lg"
          data-aos="zoom-in"
        >
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

      <footer
        className="container mx-auto px-4 py-8 border-t"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024. All Rights Reserved.
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
