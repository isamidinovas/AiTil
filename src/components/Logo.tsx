
import { Link } from "lucide-react";

const Logo = () => (
  <div className="flex items-center justify-center gap-3 mb-8 select-none">
    <span className="bg-gradient-to-br from-primary to-accent p-3 rounded-full shadow-lg">
      <Link size={36} color="#fff" />
    </span>
    <span className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-br from-primary via-accent to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
      Link Splash
    </span>
  </div>
);

export default Logo;
