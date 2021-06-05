import React from "react";
import { useState } from "react";
import "./Banner.css";

function Banner() {
  const customMovies = [
    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PanicS1Launch/c460f962-b788-44dc-ac60-7daef9f2b45b._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TandavLaunch/6d7fb490-13ab-425a-b866-b90696c0c093._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_SKTKS_v3/e2f8b135-7bf0-4744-8169-f3e0073372db._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WonderWomen84Launch/2a4fd577-c5a6-483c-a910-23afbc2ba9f7._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheFlashLaunch/8a5a9910-6224-4339-9242-7dd0a3254ecb._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_DOMS1Trailer/0cd7316e-f275-4232-aeb0-a4d0b9d4d1fa._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheFamilyManS2Launch/8ff2496b-03bd-43a3-ad57-a2e64633193f._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SandeepAurPinkyFaraarLaunchV2/7b09599a-4d91-4e57-b322-fd1797aae175._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_YoungSheldonNewSeason4WatchNow/203ed7b6-6f53-4b1c-99ba-2f7e80f7199d._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_TheBigBangTheory/e365228b-6685-45c5-84e0-a0bc77547455._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TenetReviews/7f2b6c50-484f-4b7c-a9fd-1bef190854f6._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_Dearcomrade/24a371ad-2f59-4bf8-93b4-9d72d7c737dd._UR3000,600_SX1500_FMjpg_.jpg",
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

export default Banner;
