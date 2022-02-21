/** @format */

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export const AosInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
};
