
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-tyrano-dark to-tyrano-dark/90 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about working with TyranoSoftwares.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="TyranoSoftwares transformed our business operations with their custom software solution. Their team's expertise and dedication to our success was evident at every stage of the project."
            name="Sarah Johnson"
            title="CTO, InnovateX"
            avatar="https://randomuser.me/api/portraits/women/32.jpg"
          />
          
          <TestimonialCard
            quote="The analytics platform developed by TyranoSoftwares gave us unprecedented insights into our customer behavior, helping us make data-driven decisions that significantly increased our revenue."
            name="Michael Chen"
            title="CEO, DataDrive Inc."
            avatar="https://randomuser.me/api/portraits/men/22.jpg"
          />
          
          <TestimonialCard
            quote="Working with TyranoSoftwares has been a game-changer for our company. Their cloud migration expertise helped us scale our infrastructure while reducing operational costs by 40%."
            name="Emily Rodriguez"
            title="VP of Technology, CloudScale"
            avatar="https://randomuser.me/api/portraits/women/45.jpg"
          />
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

function TestimonialCard({ quote, name, title, avatar }: TestimonialCardProps) {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
      <CardContent className="p-6">
        <div className="mb-6">
          <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4286 0L20 11.25H14.2857C14.2857 17.5 16.4286 22.5 20 22.5V30C14.2857 30 8.57143 23.75 8.57143 11.25H2.85714L11.4286 0Z" fill="#33C3F0" fillOpacity="0.5"/>
            <path d="M31.4286 0L40 11.25H34.2857C34.2857 17.5 36.4286 22.5 40 22.5V30C34.2857 30 28.5714 23.75 28.5714 11.25H22.8571L31.4286 0Z" fill="#33C3F0" fillOpacity="0.5"/>
          </svg>
        </div>
        
        <p className="text-white/90 mb-6">{quote}</p>
        
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium text-white">{name}</h4>
            <p className="text-sm text-white/60">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
