import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pas, setPas] = useState("")

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*()_{}[]~`/?<>,"
    
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex) 
    }
    
    setPas(pass)
  }, [length, num, char, setPas])
  
  useEffect(() => {
    generatePassword()
  }, [length, num, char, generatePassword])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center font-sans px-4 relative overflow-hidden">
     
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>

      <div className="relative w-full max-w-md mx-auto rounded-3xl p-8 my-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] z-10">
        <h1 className="text-center text-3xl font-extrabold mb-8 tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
          Password Generator
        </h1>
        <div className="flex bg-slate-950/50 rounded-2xl overflow-hidden mb-8 border border-white/5 focus-within:border-cyan-400/50 focus-within:ring-2 focus-within:ring-cyan-400/20 transition-all shadow-inner">
          <input 
            type="text" 
            value={pas} 
            className="w-full bg-transparent outline-none py-4 px-5 text-cyan-300 font-mono font-medium text-lg placeholder-slate-600 tracking-wider" 
            placeholder="P@$$w0rd..." 
            readOnly 
          />
          <button 
            className="bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 active:scale-95 text-white px-7 py-4 shrink-0 font-bold tracking-wide transition-all duration-200 shadow-lg"
            onClick={() => {
              window.navigator.clipboard.writeText(pas);
              alert("Password copied!");
            }}
          >
            COPY
          </button>
        </div>
        
        <div className="flex flex-col gap-y-5 text-sm font-medium">
          
        
          <div className="flex items-center gap-x-4 bg-white/5 p-4 rounded-2xl border border-white/5 transition-colors hover:bg-white/10">
            <label className="text-slate-300 font-medium text-sm whitespace-nowrap">
              Length: <span className="text-cyan-400 font-mono text-lg ml-1">{length}</span>
            </label>
            <input 
              type="range" 
              min={6} 
              max={50} 
              value={length} 
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400 hover:accent-cyan-300 transition-all"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center justify-around bg-white/5 p-5 rounded-2xl border border-white/5">
            
           
            <label className="flex items-center gap-x-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={num}
                  className="peer sr-only"
                  onChange={() => setNum((prev) => !prev)}
                />
                <div className="w-6 h-6 bg-slate-800 border-2 border-slate-600 rounded-md peer-checked:bg-cyan-500 peer-checked:border-cyan-500 transition-all flex items-center justify-center group-hover:border-cyan-400">
                  <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <span className="text-slate-300 group-hover:text-cyan-400 transition-colors text-base select-none font-semibold">Numbers</span>
            </label>
            <label className="flex items-center gap-x-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={char}
                  className="peer sr-only"
                  onChange={() => setChar((prev) => !prev)}
                />
                <div className="w-6 h-6 bg-slate-800 border-2 border-slate-600 rounded-md peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-all flex items-center justify-center group-hover:border-indigo-400">
                  <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <span className="text-slate-300 group-hover:text-indigo-400 transition-colors text-base select-none font-semibold">Symbols</span>
            </label>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App