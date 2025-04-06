import { useState } from "react";

function App() {
  const [color, setColor] = useState("#56722A");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [maleList, setMaleList] = useState([]);
  const [femaleList, setFemaleList] = useState([]);

  const addNameToList = () => {
    if (!name.trim()) return;

    if (gender === "male") {
      setMaleList([...maleList, name]);
    } else {
      setFemaleList([...femaleList, name]);
    }
    setName("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">

      <h2 className="text-xl font-bold mb-3">Rangni tanlang</h2>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="colorPicker" className="mr-2 font-medium">
            Rang:
          </label>
          <input
            type="color"
            id="colorPicker"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border border-gray-300 rounded"
          />
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            value={color}
            readOnly
            className="border border-gray-300 px-3 py-2 rounded-l w-full"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r font-medium"
          >
            Nusxalash
          </button>
        </div>
      </div>


      <h2 className="text-xl font-bold mb-3">Ism qo'shish</h2>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="nameInput" className="mr-2 font-medium">
            Ism:
          </label>
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ism kiriting"
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="genderSelect" className="mr-2 font-medium">
            Jinsi:
          </label>
          <select
            id="genderSelect"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded"
          >
            <option value="male">Erkak</option>
            <option value="female">Ayol</option>
          </select>
        </div>
        <button
          onClick={addNameToList}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium"
        >
          Qo'shish
        </button>
      </div>

 
      <h2 className="text-xl font-bold mb-3">Erkaklar ro'yxati:</h2>
      {maleList.length === 0 ? (
        <p className="mb-6 text-gray-500">Bo'sh</p>
      ) : (
        <ul className="mb-6 list-disc pl-5">
          {maleList.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      )}


      <h2 className="text-xl font-bold mb-3">Ayollar ro'yxati:</h2>
      {femaleList.length === 0 ? (
        <p className="mb-6 text-gray-500">Bo'sh</p>
      ) : (
        <ul className="mb-6 list-disc pl-5">
          {femaleList.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
