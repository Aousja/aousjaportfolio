const Navigation = () => {
  const navItems = [
    { name: "Aousja", href: "#hero", isLogo: true },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 max-w-full">
      <div className="glass-nav px-4 py-3 rounded-full overflow-x-auto whitespace-nowrap no-scrollbar">
        <div className="flex items-center gap-3 sm:gap-6">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`font-heading transition-all duration-300 text-xs sm:text-sm ${
                item.isLogo
                  ? "text-sm sm:text-lg font-bold gradient-text"
                  : "text-foreground hover:text-secondary hover:drop-shadow-[0_0_6px_#14FFEC]"
              } ${
                index < navItems.length - 1 && !item.isLogo
                  ? "border-r border-white/20 pr-3 sm:pr-6"
                  : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
