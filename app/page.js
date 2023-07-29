import About from "./components/About";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Services />
    </div>
  );
}
