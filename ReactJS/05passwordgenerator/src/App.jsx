import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAXCZVBNM";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "@#$%&!*-+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-baseline bg-slate-700">
        <div className="p-6 w-lg h-auto shadow-2xl bg-slate-400 mt-10 rounded-2xl">
          <div className="flex items-center justify-between border border-transparent overflow-hidden rounded-2xl">
            <input
              type="text"
              readOnly
              className="w-full bg-gray-200  p-2 outline-none"
              value={password}
              ref={passRef}
            />
            <button
              onClick={copyPassword}
              className="px-5 py-2 bg-blue-700 text-white cursor-pointer hover:bg-blue-900"
            >
              Copy
            </button>
          </div>
          <div className="flex items-center mt-4 gap-x-2 text-orange-700">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
            <p>Length ({length})</p>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            Number
            <input
              type="checkbox"
              value={charAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            Characters
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
