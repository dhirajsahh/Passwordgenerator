import { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const passwordRef = useRef(null);
  const [password, setPassword] = useState();
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += 12345678;
    }
    if (characterAllowed) {
      str += "!@#$%^&*()[]{}";
    }
    for (let i = 1; i <= length; i++) {
      console.log(str.length);
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          ref={passwordRef}
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigator.clipboard.writeText(password);
            passwordRef.current?.select();
          }}
        >
          Copy
        </button>
      </div>
      <div className="flex gap-2 flex-wrap">
        <input
          className="cursor-pointer"
          type="range"
          min="8"
          max="100"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="" className="mx-2">
          Length:{length}
        </label>
        <input
          type="checkbox"
          onClick={() => setNumberAllowed(!numberAllowed)}
        />
        <label>Number</label>
        <input
          type="checkbox"
          onClick={() => setCharacterAllowed(!characterAllowed)}
        />
        <label>Character</label>
      </div>
    </div>
  );
};

export default PasswordGenerator;
