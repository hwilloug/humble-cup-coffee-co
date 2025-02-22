import { useEffect, useState } from "react";

export const useMediaQuery = (query: number) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMatch(window.innerWidth < query);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMatch;
};
