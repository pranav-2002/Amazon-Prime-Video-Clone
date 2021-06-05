import React from "react";
import "./Banner.css";
import { useState } from "react";

function KidsBanner() {
  const customMovies = [
    "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_BugDiariesHalloween/485bade3-e38d-4aae-8a6a-2018975a16ba._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_Chota_Bheem_v2/7afa4b06-375a-4a18-bf02-b942a41df4fa._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_justaddmagic_v1/6124cab8-678c-42b8-b061-e90c47f87e68._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ScoobRevisedCreatives/d351fd1f-d378-4c3b-8e83-b5ebb668e354._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_JustAddMagicMysteryCity/079016c7-9cee-465b-83c3-bb272163d115._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SonicHedgehog/8ff7e113-e04c-4881-84da-d3078b73db2f._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_tintin/52292db3-dc9c-44b8-a025-76289b9dd366._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Superbheem/en_us-hero_in_superbheem-3000-600._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_DoraLaunch/b17ea838-6605-4aed-a5fe-4652107fb116._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_ChhottaBheemKungFuDhamakaSeason1/ddf7bd43-e38f-487f-9ee6-cb415a82b1ad._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_kungfupanda/b4149e59-e6e8-4104-801a-665222a09cb1._UR3000,600_SX1500_FMjpg_.jpg",
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

export default KidsBanner;
