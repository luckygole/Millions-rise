



// import { useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";

// import Ticker from "./components/Ticker";
// import Header from "./components/Header";
// import CtaBand from "./components/CtaBand";
// import Footer from "./components/Footer";
// import RequireAdmin from "./components/RequireAdmin";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Ipo from "./pages/Ipo";
// import Calculators from "./pages/Calculators";
// import Compare from "./pages/Compare";
// import Risk from "./pages/Risk";
// import Blogs from "./pages/Blogs";
// import Faq from "./pages/Faq";
// import Contact from "./pages/Contact";
// import Disclaimer from "./pages/Disclaimer";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Admin from "./pages/Admin";


// export default function App() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <>
//       <Ticker />

//       <Header />

//       <main className="min-h-[60vh]">
//         <Routes>
//           <Route path="/" element={<Home />} />

//           <Route path="/about" element={<About />} />

//           <Route path="/services" element={<Services />} />

//           <Route path="/ipo" element={<Ipo />} />

//           <Route
//             path="/calculators/:id"
//             element={<Calculators />}
//           />

//           <Route
//             path="/calculators"
//             element={<Calculators />}
//           />

//           <Route path="/compare" element={<Compare />} />

//           <Route path="/risk" element={<Risk />} />

//           <Route path="/blogs" element={<Blogs />} />

//           <Route path="/faq" element={<Faq />} />

//           <Route path="/contact" element={<Contact />} />

//           <Route path="/disclaimer" element={<Disclaimer />} />

//           <Route path="/login" element={<Login />} />

//           <Route path="/signup" element={<Signup />} />

//           <Route
//             path="/admin"
//             element={
//               <RequireAdmin>
//                 <Admin />
//               </RequireAdmin>
//             }
//           />

//           <Route path="*" element={<Home />} />
//         </Routes>
//       </main>

//       <CtaBand />

//       <Footer />
//     </>
//   );
// }









import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Ticker from "./components/Ticker";
import Header from "./components/Header";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import RequireAdmin from "./components/RequireAdmin";
import Loader from "./components/Loader"

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Ipo from "./pages/Ipo";
import Calculators from "./pages/Calculators";
import Compare from "./pages/Compare";
import Risk from "./pages/Risk";
import Blogs from "./pages/Blogs";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";


export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>

      <Loader />
      <Ticker />

      <Header />

      <main className="min-h-[60vh]">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/ipo" element={<Ipo />} />

          <Route
            path="/calculators/:id"
            element={<Calculators />}
          />

          <Route
            path="/calculators"
            element={<Calculators />}
          />

          <Route path="/compare" element={<Compare />} />

          <Route path="/risk" element={<Risk />} />

          <Route path="/blogs" element={<Blogs />} />

          <Route path="/faq" element={<Faq />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/disclaimer" element={<Disclaimer />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <Admin />
              </RequireAdmin>
            }
          />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <CtaBand />

      <Footer />
    </>
  );
}