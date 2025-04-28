import LinksList from "@/components/LinksList";
import LogoImg from "../../public/лого.jfif";
import { NavLink } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-zinc-50 to-zinc-200 font-semibold">
      <div className="flex items-center gap-4 justify-center p-9">
        <img src={LogoImg} className="w-20 md:w-28 h-auto" alt="AiTil Logo" />
        <span className="text-2xl md:text-5xl text-gray-900 font-bold font-sans">
          АЙТИЛ-акыл ачкычы
        </span>
      </div>

      <div className="w-full max-w-screen-md px-4">
        <LinksList />
      </div>

      <p className="text-gray-900 text-sm px-4 text-center max-w-xl mt-8 mb-6">
        <span className="text-red-500 font-bold">Эскертүү:</span> Жасалма
        интеллект принцибинде жасалган программалык продуктулар өзүн-өзү
        өнүктүрүү этабында, ошондуктан маалыматтарды дайыма эле так бере албашы
        жана каталар кетиши мүмкүн
      </p>

      <footer className="bg-[rgba(216,209,233,0.1)] w-full py-4 sm:py-6 p-2">
        <div className="max-w-screen-md mx-auto px-4 flex flex-col sm:flex-row justify-between  text-gray-700 font-inter text-sm font-bold gap-4 sm:gap-2 text-center sm:text-left">
          <NavLink
            to="#"
            target="_blank"
            className="font-bold md:text-right font-montserrat"
          >
            Долбоор тууралуу
          </NavLink>
          <div className="flex flex-col gap-2 items-center sm:items-start md:items-center">
            <p className="whitespace-nowrap">
              Кызматташуу жана сунуш пикирлер үчүн байланыш:
            </p>
            <p className="whitespace-nowrap  flex items-center ">
              <Phone className="size-4" /> Телефон номер: +996(777) 77-77-77
            </p>
            <p className="whitespace-nowrap flex items-center gap-1">
              <Mail className="size-4" /> Email: test@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-4 sm:mt-5 flex flex-col items-center text-gray-700 text-xs sm:text-sm opacity-60">
          <NavLink
            target="_blank"
            to="https://mamtil.gov.kg"
            className="text-center"
          >
            Кыргыз Республикасынын Президентине караштуу Мамлекеттик тил жана
            тил саясаты боюнча улуттук комиссия
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Index;
