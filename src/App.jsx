import Navbar from "./components/Navbar";
import Home from "./page/Home";

export default function App() {
  return (
    <div className='font-open min-w-[370px] overflow-auto'>
      <Navbar />
      <Home />
    </div>
  );
}
