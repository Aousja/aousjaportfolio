import Theme from "@/components/Theme";

const Navigation = () => {
  const navItems = [
    { name: "Aousja", href: "#hero", isLogo: true },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-full">
      <div className="glass-nav px-3 py-1 sm:px-6 sm:py-2 rounded-full shadow-md overflow-x-auto whitespace-nowrap no-scrollbar">
        <div className="flex items-center gap-3 sm:gap-5 text-[10px] xs:text-xs sm:text-sm">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`font-heading transition-all duration-300 ${
                item.isLogo
                  ? "text-xs xs:text-sm sm:text-lg font-bold gradient-text"
                  : "text-foreground hover:text-secondary hover:drop-shadow-[0_0_6px_#14FFEC]"
              } ${
                index < navItems.length - 1 && !item.isLogo
                  ? "border-r border-white/15 pr-2 xs:pr-3 sm:pr-5"
                  : ""
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* Theme toggle button */}
          <div className="pl-2 xs:pl-3">
            <Theme />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
