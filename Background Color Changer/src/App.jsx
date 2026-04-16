import { useState } from "react"

function App() {
  const [color, setColor] = useState("skyblue") 

  return (
    <>
      <div className="w-full h-screen duration-200 relative"
        style={{ backgroundColor: color }}
      >

        <div className="fixed top-12 w-full flex justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-xl bg-black/30 px-8 py-4 rounded-3xl backdrop-blur-sm border border-white/20 text-center">
            BACKGROUND COLOR CHANGER
          </h1>
        </div>

        <div className="fixed flex flex-col items-center bottom-12 inset-x-0 px-2">

          <div className="text-white font-bold text-xl md:text-2xl text-center mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            CLICK ON ANY COLOR TO GET THE BACKGROUND COLOR
          </div>

          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-4 py-3 rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium" style={{ backgroundColor: "red", color: "white" }}>Red</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium" style={{ backgroundColor: "green", color: "white" }}>Green</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium text-black" style={{ backgroundColor: "yellow" }}>Yellow</button>
            <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium" style={{ backgroundColor: "orange", color: "white" }}>Orange</button>
            <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium text-black" style={{ backgroundColor: "pink" }}>Pink</button>
            <button onClick={() => setColor("blueviolet")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium text-white" style={{ backgroundColor: "blueviolet" }}>BlueViolet</button>
            <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium text-white" style={{ backgroundColor: "purple" }}>Purple</button>
            <button onClick={() => setColor("fuchsia")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium text-white" style={{ backgroundColor: "fuchsia" }}>Fuchsia</button>
            <button onClick={() => setColor("tan")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium text-black" style={{ backgroundColor: "tan" }}>Tan</button>
            <button onClick={() => setColor("skyblue")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium text-black" style={{ backgroundColor: "skyblue" }}>SkyBlue</button>
            <button onClick={() => setColor("coral")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium text-black" style={{ backgroundColor: "coral" }}>Coral</button>
            <button onClick={() => setColor("gold")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium text-black" style={{ backgroundColor: "gold" }}>Gold</button>
            <button onClick={() => setColor("orchid")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium text-black" style={{ backgroundColor: "orchid" }}>Orchid</button>
            <button onClick={() => setColor("salmon")} className="outline-none px-4 py-1 rounded-xl shadow-lg font-medium text-black" style={{ backgroundColor: "salmon" }}>Salmon</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App