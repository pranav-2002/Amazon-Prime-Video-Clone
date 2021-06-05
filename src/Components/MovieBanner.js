import React from "react";
import "./Banner.css";
import { useState } from "react";

function MovieBanner() {
  const customMovies = [
    "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_Parasite/e8ecb5db-1b56-4f5a-b9da-378844d164f9._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WonderWomen84Launch/2a4fd577-c5a6-483c-a910-23afbc2ba9f7._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_Maharshi_v3/ca083a3b-66cd-4346-bb89-a6ed0f640c30._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SherniTrailer/076d7517-cfae-42ea-b57b-d03089015155._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_raazi_v1/c247f55b-349d-435f-bf9e-1ca476a63215._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_KoiJaaneNaLaunch/e044837d-a9d5-4e6a-9c0d-89f87e7dd766._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_SKTKS_v3/e2f8b135-7bf0-4744-8169-f3e0073372db._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Badrinath/e82d93f8-6e77-4062-a5a4-c0e1248b6f7a._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_CrazyRichAsians/a3a57fba-d7df-4e59-9b5b-f114ad8d28cf._UR3000,600_SX1500_FMjpg_.jpg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheMauritanianLaunch/a1845274-c774-457d-bddf-f32cee5e19f3._UR3000,600_SX1500_FMjpg_.jpeg",

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_MumbaiSagaReview/3ddae7f6-9b53-450c-a784-9d209b7961cb._UR3000,600_SX1500_FMjpg_.jpeg",
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

export default MovieBanner;
