import { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState();
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Copy
        </button>
      </div>
      <div className="flex gap-2 flex-wrap">
        <input
          className="cursor-pointer"
          type="range"
          min="6"
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
