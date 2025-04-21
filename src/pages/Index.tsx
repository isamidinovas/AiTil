import Logo from "@/components/Logo";
import LinksList from "@/components/LinksList";

const Index = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-between bg-gradient-to-br bg-zinc-100 p-4">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
        <Logo />

        <LinksList />
      </div>
      <footer className="text-gray-700 font-inter text-sm text-center py-2">
        © {new Date().getFullYear()} Кыргыз Республикасынын Президентине
        караштуу Мамлекеттик тил жана тил саясаты боюнча улуттук комиссия
      </footer>
    </div>
  );
};

export default Index;
