// import LinksList from "@/components/LinksList";
// import LogoImg from "../../public/logo4.png";
// import { NavLink } from "react-router-dom";

// const Index = () => {
//   return (
//     <div className="h-screen  flex flex-col items-center justify-between bg-gradient-to-br bg-zinc-100 ">
//       <div className="flex-1 flex  items-center justify-between w-full max-w-4xl ">
//         <div className="flex items-center gap-6">
//           <img src={LogoImg} />
//           <span className="text-5xl text-gray-900 font-bold font-manrope ">
//             AiTil
//           </span>
//         </div>
//         <p className="text-2xl text-gray-900  font-semibold">
//           Долбоор тууралуу
//         </p>
//       </div>
//       <LinksList />
//       <p className="text-gray-900 w-[600px] mt-7 mb-7 text-sm">
//         <span className="text-red-500 font-bold">Эскертүү:</span> ЖИ принцибинде
//         жасалган программалык продуктулар өзүн-өзү өнүктүрүү этабында экендигин
//         баса белгилеп эскертебиз.
//       </p>

//       <footer className="bg-[rgba(139,92,246,0.1)]   text-gray-700 font-inter text-sm py-2 h-[70px]  w-full">
//         {/* © {new Date().getFullYear()} Кыргыз Республикасынын Президентине
//         караштуу Мамлекеттик тил жана тил саясаты боюнча улуттук комиссия */}
//         <div className="w-[840px] flex justify-between m-auto items-center p-2 font-bold text-md ">
//           <p>Кызматташуу жана сунуш пикирлер үчүн контакты:</p>
//           <div className="text-center flex flex-col ">
//             <NavLink to="/https://mamtil.gov.kg">Мамтил 2025</NavLink>
//             <NavLink to="/https://ulut.kg">UlutSoft</NavLink>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Index;
import LinksList from "@/components/LinksList";
import LogoImg from "../../public/logo4.png";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-zinc-100 to-zinc-200 font-semibold">
      <div className="flex-1 w-full max-w-screen-xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img src={LogoImg} className="w-26 h-auto" alt="AiTil Logo" />
          <span className="text-4xl md:text-5xl text-gray-900 font-bold font-sans">
            AiTil
          </span>
        </div>
        <p className="text-xl md:text-2xl text-gray-900 font-semibold text-center md:text-right">
          Долбоор тууралуу
        </p>
      </div>

      <div className="w-full max-w-screen-md px-4">
        <LinksList />
      </div>

      <p className="text-gray-900 text-sm px-4 text-center max-w-xl mt-8 mb-6">
        <span className="text-red-500 font-bold">Эскертүү:</span> ЖИ принцибинде
        жасалган программалык продуктулар өзүн-өзү өнүктүрүү этабында экендигин,
        ошондуктан маалыматтарды дайыма эле так бере албашы жана каталар кетиши
        мүмкүн экенин эскертебиз.
      </p>

      <footer className="bg-[rgba(139,92,246,0.1)] w-full py-4">
        <div className="max-w-screen-lg mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-gray-700 font-inter text-sm font-bold gap-2 text-center sm:text-left">
          <p>Кызматташуу жана сунуш пикирлер үчүн контакты:</p>
          <div className=" flex flex-col sm:items-center">
            <NavLink to="/https://mamtil.gov.kg">Мамтил 2025</NavLink>
            <NavLink to="/https://ulut.kg">UlutSoft</NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
