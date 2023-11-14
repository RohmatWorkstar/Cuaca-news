import wind from "../assets/wind.png";
import suhu from "../assets/suhu.png";
import time from "../assets/time.png";

const Status = ({scuaca}) => {

    const fahrenheit = scuaca.main?.temp ;
    const celcius = ((fahrenheit - 32) / 18) + 12 ;
    const jam = scuaca.timezone; 
    const waktu = jam / 3600 ;

  return (
    <div className="mt-16 flex justify-around items-center ">
      <div className=" flex items-center flex-col gap-5">
        <img src={wind} alt="" width={68} height={68} />
        <h1 className="text-xl text-white">{scuaca.wind?.speed ? scuaca.wind?.speed : 0} km/h</h1>
      </div>
      <div className=" flex items-center flex-col gap-5">
        <img src={suhu} alt="" width={68} height={68} />
        <h1 className="text-xl text-white">{celcius.toFixed(2) ? celcius.toFixed(2) : 0} Celcius</h1>
      </div>
      <div className=" flex items-center flex-col gap-5">
        <img src={time} alt="" width={68} height={68} />
        <h1 className="text-xl text-white">GMT +{waktu ? waktu : 0} </h1>
      </div>
    </div>
  );
};

export default Status;
