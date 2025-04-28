import {
  ExternalLink,
  Mic,
  FileAudio,
  Languages,
  MessageCircleQuestion,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    url: "https://tts.mamtil.gov.kg/",
    title: (
      <span className="flex items-center gap-1">
        Текст <ArrowRight className="inline-block w-4 h-4 mx-1" /> Үн
      </span>
    ),
    description: "Текстти үнгө айландыруу",
    icon: Mic,
    isSplitText: false,
  },
  {
    url: "https://translate.mamtil.gov.kg",
    title: "Айтил котормо",
    description: "Текст которуу кызматы ",
    icon: Languages,
    isSplitText: false,
  },
  {
    url: "https://asr.mamtil.gov.kg/",
    title: (
      <span className="flex items-center gap-1">
        Үн <ArrowRight className="inline-block w-4 h-4 mx-1" /> Текст
      </span>
    ),
    description: "Үндү текстке айландыруу",
    icon: FileAudio,
    isSplitText: false,
  },
  {
    url: "https://answer.mamtil.gov.kg/",
    title: "Айтил Чат",
    description:
      "Акылдуу жардамчы\nЭскертүү: ЖИ принцибинде жасалган программалык продуктулар өзүн-өзү өнүктүрүү этабында экендигин, ошондуктан маалыматтарды дайыма эле так бере албашы жана каталар кетиши мүмкүн экенин эскертебиз.",
    icon: MessageCircleQuestion,
    isSplitText: true,
  },
];

export default function LinksList() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-white/40 backdrop-blur-xl border border-primary/10 rounded-3xl shadow-lg p-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((item, index) => (
            <NavLink
              key={item.url}
              to={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl bg-white/30 border border-primary/10 
                       p-4 flex flex-col gap-2 transition-all duration-300 
                       hover:scale-[1.02] hover:shadow-lg hover:bg-primary/5 
                       hover:border-primary/20 animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <item.icon size={20} className="text-blue-800" />
                </div>
                <span className="font-inter font-semibold text-base tracking-tight text-gray-700">
                  {item.title}
                </span>
                <ExternalLink
                  size={16}
                  className="ml-auto text-gray-700/60 group-hover:text-gray-700 
                           group-hover:translate-x-0.5 group-hover:-translate-y-0.5 
                           transition-all duration-300"
                />
              </div>
              <span className="block text-gray-700 font-inter text-xs leading-relaxed">
                {item.isSplitText
                  ? item.description.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))
                  : item.description}
              </span>
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300"
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
