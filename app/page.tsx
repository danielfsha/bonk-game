import Image from "next/image";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="world" data-world>
      <Nav />

      <div className="start-screen" data-start-screen>
        <p>Press Any Key To Start</p>

        <button className="btn btn-start-game" id="btn-start-game">
          start game
        </button>
      </div>

      <img src="/ground.png" className="ground" data-ground />
      <img src="/ground.png" className="ground" data-ground />
      <img src="/dino-stationary.png" className="dino" data-dino />
    </div>
  );
}
