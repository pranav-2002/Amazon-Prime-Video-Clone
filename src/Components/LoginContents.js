import React from "react";
import "./LoginContents.css";
import { Link } from "react-router-dom";

function LoginContents() {
  return (
    <div className="LoginContents">
      <div className="login__banner">
        <div className="banner__contents">
          <h1 className="welcome">Welcome to Prime Video</h1>
          <p className="description">
            Join Prime to watch the latest movies, TV shows and award- <br />{" "}
            winning Amazon Originals
          </p>
          <span className="join">
            <Link to="https://www.primevideo.com/region/eu/auth-redirect/ref_=dvm_mlp_in_ai_s_g_unrec_lego/ref=atv_mlp_default_ft/257-7930259-5978924?_encoding=UTF8&amp%3BreturnUrl=%2Fregion%2Ffr%2F&deviceTypeId=A13Q6A55DBZB7M&signin=1">
              Login to join Prime
            </Link>
          </span>
        </div>
      </div>
      <div className="entertainment">
        <div className="content">
          <h1 className="content__heading">Great Entertainment</h1>
          <p className="content__para">
            With your Prime membership, you have access to exclusive <br />{" "}
            Amazon Originals, blockbuster Bollywood movies, regional <br />{" "}
            movies and more.
          </p>
          <span className="join">
            <Link to="https://www.primevideo.com/region/eu/auth-redirect/ref_=dvm_mlp_in_ai_s_g_unrec_lego/ref=atv_mlp_default_ft/257-7930259-5978924?_encoding=UTF8&amp%3BreturnUrl=%2Fregion%2Ffr%2F&deviceTypeId=A13Q6A55DBZB7M&signin=1">
              Get started
            </Link>
          </span>
        </div>
      </div>
      <div className="membership">
        <div className="content--left">
          <h1 className="content__heading">
            One membership, many <br /> benefits
          </h1>
          <p className="content__para">
            Your Prime membership now also includes ad-free music <br /> along
            with unlimited free, fast delivery on eligible items, <br />{" "}
            exclusive access to deals & more.
          </p>
          <span className="join">
            <Link to="https://www.primevideo.com/region/eu/auth-redirect/ref_=dvm_mlp_in_ai_s_g_unrec_lego/ref=atv_mlp_default_ft/257-7930259-5978924?_encoding=UTF8&amp%3BreturnUrl=%2Fregion%2Ffr%2F&deviceTypeId=A13Q6A55DBZB7M&signin=1">
              Get started
            </Link>
          </span>
        </div>
      </div>
      <div className="FireStick">
        <div className="content">
          <h1 className="content__heading">Even better with Fire TV Stick</h1>
          <p className="content__para">
            The biggest movies and TV shows are always better on a big <br />{" "}
            screen. Simply plug in your Amazon Fire TV Stick and stream <br />{" "}
            on any HDTV. Press the voice button on the remote and say <br /> the
            name of the title you want to watch to find it in seconds.
          </p>
          <span className="join">
            <Link to="https://www.primevideo.com/region/eu/auth-redirect/ref_=dvm_mlp_in_ai_s_g_unrec_lego/ref=atv_mlp_default_ft/257-7930259-5978924?_encoding=UTF8&amp%3BreturnUrl=%2Fregion%2Ffr%2F&deviceTypeId=A13Q6A55DBZB7M&signin=1">
              Get started
            </Link>
          </span>
        </div>
      </div>
      <div className="features">
        <div className="features__img">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices.jpg"
            alt="first"
          />
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Download_IN.jpg"
            alt="second"
          />
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/300x300_Tile_1.png"
            alt="third"
          />
        </div>
        <div className="features__headings">
          <h1 className="content__heading">Watch anywhere</h1>
          <h1 className="content__heading">Download and go</h1>
          <h1 className="content__heading">Data saver</h1>
        </div>
        <div className="features__paras">
          <p className="content__para">
            Enjoy from the web or with the Prime Video <br /> app on your phone,
            tablet, or select Smart <br /> TVs — on up to 3 devices at once.
          </p>
          <p className="content__para">
            Watch offline on the Prime Video app when <br /> you download titles
            to your iPhone, iPad, <br /> Tablet, or Android device.
          </p>
          <p className="content__para">
            Control data usage while downloading and <br /> watching videos on
            select phones or <br /> tablets.
          </p>
        </div>
      </div>
      <div className="family">
        <div className="content--left">
          <h1 className="content__heading">Family Friendly</h1>
          <p className="content__para">
            With easy to use Parental Controls and a dedicated kids page, <br />{" "}
            enjoy secure, ad-free kids entertainment. Kids can enjoy <br />{" "}
            popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota <br />{" "}
            Bheem.
          </p>
          <span className="join">
            <Link to="https://www.primevideo.com/region/eu/auth-redirect/ref_=dvm_mlp_in_ai_s_g_unrec_lego/ref=atv_mlp_default_ft/257-7930259-5978924?_encoding=UTF8&amp%3BreturnUrl=%2Fregion%2Ffr%2F&deviceTypeId=A13Q6A55DBZB7M&signin=1">
              Get started
            </Link>
          </span>
        </div>
      </div>
      <div className="footer">
        <div className="footer__content">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png"
            alt="logo"
          />
          <div className="footer__text">
            <Link to="https://www.primevideo.com/help/ref=dvm_MLP_EU_privacy?nodeId=202064890">
              Terms and Privacy Notice
            </Link>
            <Link to="Send us feedback">Send us feedback</Link>
            <Link to="https://www.primevideo.com/help/ref=dvm_MLP_EU_help">
              Help
            </Link>
            <span>© 1996-2021, Amazon.com, Inc. or its affiliates</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginContents;
