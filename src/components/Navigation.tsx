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
      <div className="glass-nav px-4 py-2 sm:px-6 sm:py-2 rounded-full overflow-x-auto whitespace-nowrap no-scrollbar shadow-md">
        <div className="flex items-center gap-4 sm:gap-5">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`font-heading transition-all duration-300 text-xs sm:text-sm ${
                item.isLogo
                  ? "text-base sm:text-lg font-bold gradient-text"
                  : "text-foreground hover:text-secondary hover:drop-shadow-[0_0_6px_#14FFEC]"
              } ${
                index < navItems.length - 1 && !item.isLogo
                  ? "border-r border-white/15 pr-3 sm:pr-5"
                  : ""
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* Theme toggle button */}
          <div className="pl-2 sm:pl-3">
            <Theme />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
