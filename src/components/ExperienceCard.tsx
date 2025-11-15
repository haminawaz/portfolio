import { Card, CardContent } from "./ui/card";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card backdrop-blur-sm relative overflow-hidden py-5">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-emerald-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
      <CardContent className="p-6 pl-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 flex-shrink-0 mt-1">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-600 transition-colors">
                {title}
              </h3>
              <p className="text-emerald-600 font-medium flex items-center gap-2 mt-1">
                {company}
              </p>
            </div>
          </div>
          <span className="text-sm text-muted-foreground font-medium flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            {period}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
