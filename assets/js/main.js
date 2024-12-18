document.addEventListener("alpine:init", () => {
  // dynamic menu
  Alpine.data("heroSection", () => ({
    scrolled: false,
    activeSection: "hero",
    isMenuOpen: false,
    navItems: [
      { section: "hero", label: "Home" },
      { section: "about", label: "About" },
      { section: "explore", label: "Explore" },
      { section: "blog", label: "Blog" },
      { section: "priceing", label: "Priceing" },
      { section: "contact", label: "Contact" },
    ],
    init() {
      this.checkScroll();
    },
    checkScroll() {
      this.scrolled = window.scrollY > 50;
      this.updateActiveSection();
    },
    updateActiveSection() {
      const sections = this.navItems.map((item) => item.section);
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            this.activeSection = section;
            break;
          }
        }
      }
    },
  }));

  //   animasi tyiping
  Alpine.data("typingText", (text, speed = 150) => ({
    fullText: text,
    displayText: "",
    isTyping: true,
    startTyping() {
      const chars = this.fullText.split("");
      let index = 0;
      const typeNext = () => {
        if (index < chars.length) {
          this.displayText += chars[index];
          index++;
          setTimeout(typeNext, speed);
        } else {
          this.isTyping = false;
        }
      };
      typeNext();
    },
  }));
});
