import { useState } from "react";

function App() {
  const [color, setColor] = useState("#56722A");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [maleList, setMaleList] = useState([]);
  const [femaleList, setFemaleList] = useState([]);

  const addNameToList = () => {
    if (gender === "male") {
      setMaleList([...maleList, name]);
    } else {
      setFemaleList([...femaleList, name]);
    }
    setName("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert("Kopirovano: " + color);
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white shadow-md rounded-md p-8 flex flex-col gap-6 w-full max-w-md">
        {/* Rang tanlash bo'limi */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Rangni tanlang</h2>
          <div className="flex gap-4 items-center">
            <label
              htmlFor="colorPicker"
              className="block text-gray-700 text-sm font-bold"
            >
              Rang:
            </label>
            <input
              type="color"
              id="colorPicker"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-10 h-10 border-none"
            />
            <input
              type="text"
              value={color}
              readOnly
              className="border px-3 py-2 rounded w-32 text-center text-gray-700"
            />
            <button
              onClick={copyToClipboard}
              className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-semibold"
            >
              Nusxalash
            </button>
          </div>
        </div>

        {/* Ism kiritish bo'limi */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Ism qo'shish</h2>
          <div className="flex gap-4 items-center">
            <label
              htmlFor="nameInput"
              className="block text-gray-700 text-sm font-bold"
            >
              Ism:
            </label>
            <input
              type="text"
              id="nameInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ism kiriting"
              className="border px-3 py-2 rounded w-32 text-gray-700 text-sm"
            />
            <label
              htmlFor="genderSelect"
              className="block text-gray-700 text-sm font-bold"
            >
              Jinsi:
            </label>
            <select
              id="genderSelect"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border px-3 py-2 rounded text-gray-700 text-sm"
            >
              <option value="male">Erkak</option>
              <option value="female">Ayol</option>
            </select>
            <button
              onClick={addNameToList}
              className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded text-sm font-semibold"
            >
              Qo'shish
            </button>
          </div>
        </div>

        {/* Erkaklar va Ayollar ro'yxati */}
        <div>
          <h2 className="text-xl font-bold mb-3 border-b pb-2">
            Erkaklar ro'yxati
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            {maleList.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 border-b pb-2">
            Ayollar ro'yxati
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            {femaleList.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
