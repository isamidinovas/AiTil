
import { ExternalLink, BookOpen, Image, Settings } from "lucide-react";

const links = [
  {
    url: "https://dribbble.com/",
    title: "Dribbble",
    description: "Сообщество дизайнеров и вдохновения",
    icon: BookOpen,
  },
  {
    url: "https://unsplash.com/",
    title: "Unsplash",
    description: "Лучшие бесплатные фото",
    icon: Image,
  },
  {
    url: "https://www.figma.com/",
    title: "Figma",
    description: "Онлайн редактор для интерфейсов",
    icon: Settings,
  },
  {
    url: "https://lovable.dev/",
    title: "Lovable",
    description: "Создание приложений с помощью AI",
    icon: ExternalLink,
  },
];

export default function LinksList() {
  return (
    <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-4xl mx-auto">
      {links.map((item) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-2xl bg-white/30 backdrop-blur-md border border-primary/10 shadow-lg p-6 flex flex-col gap-3 transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-primary/10 animate-fade-in"
        >
          <div className="flex items-center gap-2">
            <item.icon size={28} className="text-primary" />
            <span className="font-inter font-semibold text-lg">{item.title}</span>
            <ExternalLink size={20} className="ml-auto text-accent opacity-70 group-hover:opacity-100 transition" />
          </div>
          <span className="block text-gray-700 font-inter">{item.description}</span>
        </a>
      ))}
    </div>
  );
}
