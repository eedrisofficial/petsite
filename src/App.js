import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import AboutUs from "./Components/navbarComponents/AboutUs";
import Adopt from "./Components/navbarComponents/Adopt";
import Contact from "./Components/navbarComponents/Contact";
import Blog from "./Components/navbarComponents/Blog";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Donate from "./Components/navbarComponents/Donate";
import Event from "./Components/navbarComponents/Event";
import Mascaw from "./category/bird/Macaw parrot/Mascaw";
import { useContext, useEffect } from "react";
import { PetContext } from "./context/PetState";

function App() {
  const { dispatch, state } = useContext(PetContext);

  useEffect(() => {
    const savedItems = localStorage.getItem("pets");
    if (savedItems) {
      const cartItems = JSON.parse(savedItems);
      cartItems.map((item) => dispatch({ type: "AddToAdopt", payload: item }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(state.cart));
  }, [state]);
  return (
    <div className="bg-[#FFFFFF] ">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/mascaw" element={<Mascaw />} />
      </Routes>
    </div>
  );
}

export default App;
