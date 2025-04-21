
import Logo from "@/components/Logo";
import LinksList from "@/components/LinksList";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 px-4 py-10">
      <Logo />
      <h2 className="text-xl md:text-2xl font-inter font-medium text-gray-300 bg-white bg-opacity-10 px-6 py-3 rounded-xl shadow backdrop-blur-sm mb-9 animate-fade-in">
        Сборник стильных и полезных сайтов для вашего вдохновения
      </h2>
      <LinksList />
      <footer className="mt-16 text-gray-400 font-inter text-sm">
        © {new Date().getFullYear()} Link Splash • by Lovable
      </footer>
    </div>
  );
};

export default Index;
