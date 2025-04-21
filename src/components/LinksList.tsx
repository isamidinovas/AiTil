import {
  ExternalLink,
  Mic,
  FileAudio,
  Languages,
  MessageCircleQuestion,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    url: "https://translate.mamtil.gov.kg",
    title: "Translate Mamtil",
    icon: Languages,
  },
  {
    url: "https://tts.mamtil.gov.kg/",
    title: "TTS Mamtil",
    icon: Mic,
  },
  {
    url: "https://asr.mamtil.gov.kg/",
    title: "ASR Mamtil",
    icon: FileAudio,
  },
  {
    url: "https://answer.mamtil.gov.kg/",
    title: "Answer Mamtil",
    icon: MessageCircleQuestion,
  },
];

export default function LinksList() {
  return (
    <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
      {links.map((item, index) => (
        <NavLink
          key={item.url}
          to={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-2xl bg-white/40 backdrop-blur-xl border border-primary/10 
                   shadow-lg p-6 flex flex-col gap-3 transition-all duration-300 
                   hover:scale-[1.02] hover:shadow-2xl hover:bg-primary/5 
                   hover:border-primary/20 animate-fade-in"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
              <item.icon size={24} className="text-gray-700" />
            </div>
            <span className="font-inter font-semibold text-lg tracking-tight text-gray-700">
              {item.title}
            </span>
            <ExternalLink
              size={18}
              className="ml-auto text-gray-700/60 group-hover:text-gray-700 
                       group-hover:translate-x-0.5 group-hover:-translate-y-0.5 
                       transition-all duration-300"
            />
          </div>
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"
          />
        </NavLink>
      ))}
    </div>
  );
}
