import React, { useState } from "react";
import "./App.css";
import gambar from "./assets/cuaca.png";
import Status from "./components/Status";
import axios from "axios";
import background from "./assets/background.jpg";

function App() {
  const [getData, setGetData] = useState([]);
  const [cariKota, setCariKota] = useState("");

  const HandleCari = (e) => {
    e.preventDefault();
    const apiKey = "78830131c9240bfe0f4eeb8b7c3018ac";
    const urlKey = `https://api.openweathermap.org/data/2.5/weather?q=${cariKota}&appid=${apiKey}`;
    axios
      .get(urlKey)
      .then((response) => {
        setGetData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));

    // Membersihkan nilai input setelah pencarian
    setCariKota("");
  };

  const ClickEnter = (event) => {
    if (event.key === "Enter") {
      HandleCari(event);
    }
  };

  return (
    <div className=" min-h-screen flex justify-center items-center bg-cover bg-no-repeat" style={{ background:`url(${background}) `, backgroundSize: 'cover' }}>
      <div className="w-[500px] h-[500px] bg-green-600 rounded-md opacity-85">
        <div className="flex justify-center pt-5 gap-3">
          <input className="rounded-md p-1 outline-none" type="text" placeholder="Cari Kota Atau Negara" value={cariKota} onChange={(e) => setCariKota(e.target.value)} onKeyDown={ClickEnter} />
          <button className="bg-purple-600 text-white py-1 px-10 rounded-md" onClick={HandleCari}>
            Cari
          </button>
        </div>
        <div className="flex justify-center flex-col items-center mt-8">
          <img src={gambar} alt="" width={100} height={100} />
          <h1 className="text-3xl text-white mb-3">{getData.weather?.[0]?.main ? getData.weather?.[0]?.main : "Tidak ada Data"}</h1>
          <h1 className="text-3xl text-white font-bold">{getData.name ? getData.name : "Tidak ada Data"}</h1>
        </div>

        <Status scuaca={getData} />
      </div>
    </div>
  );
}

export default App;
