import Logo from "@/components/Logo";
import LinksList from "@/components/LinksList";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br bg-zinc-100 px-4 py-10">
      <Logo />
      <h2 className="w-[900px] text-center text-xl md:text-xl font-inter font-medium text-gray-700 bg-opacity-10 px-6 py-3 rounded-xl shadow backdrop-blur-sm mb-9 animate-fade-in">
        Кыргыз Республикасынын Президентине караштуу Мамлекеттик тил жана тил
        саясаты боюнча улуттук комиссия
      </h2>
      <LinksList />
      <footer className="mt-16 text-gray-700 font-inter text-sm">
        © {new Date().getFullYear()} Кыргыз Республикасынын Президентине
        караштуу Мамлекеттик тил жана тил саясаты боюнча улуттук комиссия
      </footer>
    </div>
  );
};

export default Index;
