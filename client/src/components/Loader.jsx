import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Thoda delay taaki loader abruptly disappear na ho
      setTimeout(() => {
        setHide(true);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        bg-[#071A33]
        transition-opacity
        duration-500
        ${
          hide
            ? "pointer-events-none opacity-0"
            : "opacity-100"
        }
      `}
    >
      <div className="flex flex-col items-center justify-center px-6 text-center">
        {/* Logo / Brand */}

        <div
          className="
            font-serif
            text-3xl
            font-semibold
            tracking-wide
            text-white
            sm:text-4xl
          "
        >
          Millions
          <span className="text-[#E7B65A]"> Rise</span>
        </div>

        {/* Gold line */}

        <div className="mt-4 h-[2px] w-16 overflow-hidden rounded-full bg-[#29466D]">
          <div
            className="
              h-full
              w-1/2
              animate-[loaderLine_1.2s_ease-in-out_infinite]
              bg-[#E7B65A]
            "
          />
        </div>

        {/* Loading text */}

        <p className="mt-4 text-xs font-medium tracking-[0.2em] text-[#B8C7D9]">
          LOADING
        </p>
      </div>

      <style>{`
        @keyframes loaderLine {
          0% {
            transform: translateX(-100%);
          }

          50% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </div>
  );
}