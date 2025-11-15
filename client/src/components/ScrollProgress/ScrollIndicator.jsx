import { useEffect, useState } from "react";
import "./ScrollIndicator.css";

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY =
        window.scrollY || document.documentElement.scrollTop;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = (scrollY / docHeight) * 100;
      setProgress(percent);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      <div
        className="scroll-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
