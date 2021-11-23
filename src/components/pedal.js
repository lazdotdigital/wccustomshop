import "./pedal.css";

// pedal fronts
import boxOfWarImg from "../media/box-of-war.png";
import capridImg from "../media/caprid.png";
import tallFontImg from "../media/tall-font.png";
import whiteElkImg from "../media/white-elk.png";
import yourFace60sImg from "../media/your-face-60s.png";
import yourFace70sImg from "../media/your-face-70s.png";

// mods
import cleanBlendImg from "../media/clean-blend.png";
import creamyImg from "../media/creamy.png";
import midFlatAndAntiBufferImg from "../media/mid-flat-anti-buffer.png";
import biasKnobImg from "../media/bias-knob.png";
import ballSilverImg from "../media/ball-silver.jpg";

// leds
import redLedImg from "../media/red-led.png";
import amberLedImg from "../media/amber-led.png";
import blueLedImg from "../media/blue-led.png";
import orangeLedImg from "../media/orange-led.png";
import pinkLedImg from "../media/pink-led.png";
import whiteLedImg from "../media/white-led.png";
import yellowLedImg from "../media/yellow-led.png";

const mods = [
  { name: "Clean Blend", img: cleanBlendImg, price: 7.99 },
  { name: "Creamy", img: creamyImg, price: 4.99 },
  { name: "Mid-Flat", img: midFlatAndAntiBufferImg, price: 4.99 },
  { name: "Bias Knob", img: biasKnobImg, price: 4.99 },
  { name: "Anti-Buffer Switch", img: midFlatAndAntiBufferImg, price: 4.99 },
  { name: "Tropical Fish Upgrade", price: 12.99 },
  { name: "Bass Face", price: 2.99 },
  { name: "Hybrid", price: 9.99 },
];

const colors = [
  { name: "Ball Silver", css: `url(${ballSilverImg})` },
  { name: "Pink", css: "rgb(255,143,159)" },
  { name: "Black", css: "rgb(26,26,26)" },
  { name: "White", css: "rgb(235,238,243)" },
  { name: "Army Green", css: "rgb(85,106,57)" },
  { name: "Yellow", css: "rgb(255,217,2)" },
  { name: "Orange", css: "rgb(255,139,8)" },
  { name: "Primer Grey", css: "rgb(169,169,169)" },
  { name: "Baby Blue", css: "rgb(161,190,255)" },
  { name: "Red", css: "rgb(207,1,20)" },
  { name: "Dark Grey", css: "rgb(80,80,80)" },
  { name: "Navy Blue", css: "rgb(24,65,140)" },
  { name: "Purple", css: "rgb(128,0,128)" },
];

const leds = [
  { name: "Red", css: "red", img: redLedImg },
  { name: "Amber", css: "rgb(255,191,0)", img: amberLedImg },
  { name: "Blue", css: "blue", img: blueLedImg },
  { name: "Orange", css: "orange", img: orangeLedImg },
  { name: "Pink", css: "pink", img: pinkLedImg },
  { name: "White", css: "rgb(235,238,243)", img: whiteLedImg },
  { name: "Yellow", css: "yellow", img: yellowLedImg },
];

export const ledBrightnesses = [
  { name: "Low", value: 0.75 },
  { name: "Medium", value: 0.88 },
  { name: "Standard", value: 1 },
  { name: "Bright", value: 1.2 },
];

export const standardLedBrightnessIdx = 2;

export const variants = [
  {
    name: "Box of War",
    img: boxOfWarImg,
    basePrice: 199.99,
    // all colors except army green
    colors: [...colors.slice(0, 4), ...colors.slice(5)],
    leds,
    mods: mods.slice(0, 3),
    defaultColorIdx: 0,
    modInfoUrl: "/muff-mod-info",
  },
  {
    name: "Caprid",
    img: capridImg,
    basePrice: 199.99,
    colors: [...colors.slice(1, 4), ...colors.slice(5)],
    leds,
    mods: mods.slice(0, 3),
    defaultColorIdx: 2,
    modInfoUrl: "/muff-mod-info",
  },
  {
    name: "Tall Font Russian",
    img: tallFontImg,
    basePrice: 199.99,
    colors: colors.slice(1),
    leds,
    mods: mods.slice(0, 3),
    defaultColorIdx: 3,
    modInfoUrl: "/muff-mod-info",
  },
  {
    name: "White Elk",
    img: whiteElkImg,
    basePrice: 199.99,
    colors: [...colors.slice(1, 4), ...colors.slice(5)],
    leds,
    mods: mods.slice(0, 3),
    defaultColorIdx: 2,
    modInfoUrl: "/muff-mod-info",
  },
  {
    name: "Your Face 60s",
    img: yourFace60sImg,
    basePrice: 209.99,
    colors: [...colors.slice(1, 4), ...colors.slice(5)],
    leds,
    mods: mods.slice(3),
    defaultColorIdx: 6,
    modInfoUrl: "/your-face-mod-info",
  },
  {
    name: "Your Face 70s",
    img: yourFace70sImg,
    basePrice: 199.99,
    colors: [...colors.slice(1, 4), ...colors.slice(5)],
    leds,
    mods: mods.slice(3),
    defaultColorIdx: 7,
    modInfoUrl: "/your-face-mod-info",
  },
];

export default ({
  variantIdx,
  ledIdx,
  ledBrightnessIdx,
  colorIdx,
  modVisibilities,
}) => {
  const variant = variants[variantIdx];

  return (
    <div className="pedal">
      <img
        className="pedal__front"
        src={variant.img}
        style={{ background: variant.colors[colorIdx].css }}
      />

      <img
        className="pedal__led"
        src={variant.leds[ledIdx].img}
        style={{
          filter: `brightness(${ledBrightnesses[ledBrightnessIdx].value})`,
        }}
      />

      {modVisibilities.map((visible, i) => {
        const style = visible ? {} : { display: "none" };
        const { name, img } = variant.mods[i];

        // Some mods may not have an image
        if (img) {
          return (
            <img key={name} className="pedal__mod" src={img} style={style} />
          );
        }
      })}
    </div>
  );
};
