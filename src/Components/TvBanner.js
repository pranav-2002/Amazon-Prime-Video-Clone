import React from "react";
import "./Banner.css";
import { useState } from "react";

function TvBanner() {
  const customMovies = [
    "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_PanchayatLaunch/0c389a69-4cc1-42f3-9f55-6a0cee76012f._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SuperGirlLaunch/e3069c19-bcf4-4c1e-9adb-859b44740dff._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_TheBigBangTheory/e365228b-6685-45c5-84e0-a0bc77547455._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PanicS1Launch/c460f962-b788-44dc-ac60-7daef9f2b45b._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Office_v1/2efa5ef6-b2f4-4c6f-ab0f-a120fa7d934a._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheFamilyManS2Launch/8ff2496b-03bd-43a3-ad57-a2e64633193f._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheGoodDoctorS3/8e35e161-29aa-4026-a720-186cecc58d07._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_LegaciesS3/7f6b9566-a72b-4616-91b7-b0037cad1552._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheLastHourRevisedLaunchV3/201a66d1-e430-42cc-bfa2-7bc4fda315eb._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_SuitsS9/abc927ec-9d6d-4d1c-89c7-b364f5c730ed._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Joey/2171ab7b-b6f1-4dbe-ad69-bd3f5c1d1185._UR3000,600_SX3000_FMjpg_.jpg",
  ];

  const [movie, setMovie] = useState([]);

  useState(() => {
    setMovie(customMovies[Math.floor(Math.random() * customMovies.length)]);
    return movie;
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    ></div>
  );
}

export default TvBanner;
