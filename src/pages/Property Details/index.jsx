import React from "react";
import PropDetBg from "../../components/PropDetBg";
import PropDet from "../../components/PropDet";
import PropSoz from "../../components/PropSoz";
import Accor from "../../components/Accor";
import Qasos from "../../components/Filtr";

function PropertyDetails() {
  return (
    <div>
      <PropDetBg />
      <PropDet />
      <PropSoz />
      <div className="w-[85%] m-auto">
        <Accor />
      </div>
      <div className="mt-[200px]">
        <Qasos />
      </div>
    </div>
  );
}

export default PropertyDetails;
