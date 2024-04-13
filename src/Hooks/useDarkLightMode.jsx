import { useState, useEffect } from "react";

export default function useDarkLightMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isSystemMode, setIsSystemMode] = useState(true);

  const onDarkMode = () => {
    setIsDarkMode(true);
    setIsLightMode(false);
    setIsSystemMode(false);
    document.querySelector("body").classList.add("dark");
  };

  const onLightMode = () => {
    setIsDarkMode(false);
    setIsLightMode(true);
    setIsSystemMode(false);
    document.querySelector("body").classList.remove("dark");
  };

  const onSystemMode = () => {
    setIsDarkMode(false);
    setIsLightMode(false);
    setIsSystemMode(true);
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      var sections = document.querySelectorAll(".section");
      var navItems = document.querySelectorAll(".item");
      sections.forEach(function (section, index) {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
        if (window.scrollY + 128 >= top && window.scrollY < bottom) {
          navItems.forEach(function (item) {
            item.classList.remove("lightMode");
          });
          if (isDarkMode || isSystemMode || isLightMode) {
            navItems[index].classList.add("lightMode");
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  useEffect(() => {
    if (isSystemMode) {
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDarkMode) {
        document.querySelector("body").classList.add("dark");
      } else {
        document.querySelector("body").classList.remove("dark");
      }
    }
  }, [isSystemMode]);

  return {
    isDarkMode,
    isLightMode,
    isSystemMode,
    onDarkMode,
    onLightMode,
    onSystemMode,
  };
}
