import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useScrrolltoTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.key]); //ketika ada perubahaan di key
}
