import "./builder-page.css";
import Pedal, {
  ledBrightnesses,
  standardLedBrightnessIdx,
  variants,
} from "./pedal";
import { useRoute } from "wouter";
import { useEffect, useState } from "react";
import { Link } from "wouter";

const ModsCheckboxes = ({ mods, enabledMods, setEnabledMods }) => {
  const onChange = (e) => {
    setEnabledMods({ ...enabledMods, [e.target.name]: e.target.checked });
  };

  return (
    <div className="mods-checkboxes">
      {mods.map((mod) => (
        <label key={mod.name}>
          <input
            className="mods-checkboxes__checkbox"
            type="checkbox"
            name={mod.name}
            onChange={onChange}
          />
          {`${mod.name} ($${mod.price})`}
        </label>
      ))}
    </div>
  );
};

const ColorSelector = ({ colorIdx, setColorIdx, colors }) => {
  return (
    <div className="color-selector">
      <h3>{colors[colorIdx].name}</h3>
      <div className="color-selector__colors">
        {colors.map((color, idx) => {
          const className = `color-selector__color ${
            colorIdx === idx ? "color-selector__color--selected" : ""
          }`;

          const onClick = () => setColorIdx(idx);

          return (
            <div
              key={color.name}
              className={className}
              style={{ background: color.css }}
              onClick={onClick}
            />
          );
        })}
      </div>
    </div>
  );
};

const BrightnessSlider = ({ ledBrightnessIdx, setLedBrightnessIdx }) => (
  <div className="brightness-slider">
    <h3>{ledBrightnesses[ledBrightnessIdx].name}</h3>
    <input
      className="brightness-slider__input"
      type="range"
      min={0}
      max={ledBrightnesses.length - 1}
      value={ledBrightnessIdx}
      onChange={(e) => setLedBrightnessIdx(e.target.value)}
    />
  </div>
);

const modsPrice = (mods, enabledModsArr) => {
  let modsPrice = 0;
  for (let i = 0; i < enabledModsArr.length; i++) {
    if (enabledModsArr[i]) modsPrice += mods[i].price;
  }

  return modsPrice;
};

const addToCartUrl = (
  variant,
  totalPrice,
  colorIdx,
  ledIdx,
  ledBrightnessIdx,
  enabledModsArr
) => {
  const baseUrl = "https://wccustomshop.foxycart.com/cart?";

  const name = variant.name;
  const color = variant.colors[colorIdx].name;
  const led = variant.leds[ledIdx].name;

  const enabledModsNamesArr = enabledModsArr
    .map((enabled, i) => (enabled ? variant.mods[i].name : false))
    .filter(Boolean);

  const modsStr =
    enabledModsNamesArr && enabledModsNamesArr.length
      ? enabledModsNamesArr.reduce((str, name) => (str += `, ${name}`))
      : "";

  const brightness = ledBrightnesses[ledBrightnessIdx].name;

  return `${baseUrl}name=${name}&price=${totalPrice}&Color=${color}&LED=${led}&Brightness=${brightness}&Mods=${modsStr}`;
};

export default () => {
  const [_match, params] = useRoute("/builder/:variant");
  const [enabledMods, setEnabledMods] = useState({});
  const [colorIdx, setColorIdx] = useState(0);
  const [ledIdx, setLedIdx] = useState(0);
  const [ledBrightnessIdx, setLedBrightnessIdx] = useState(
    standardLedBrightnessIdx
  );

  const variant = variants[params.variant];

  // initialize the enabledMods object
  useEffect(() => {
    variant.mods.forEach((mod) => (enabledMods[mod.name] = false));
    setEnabledMods({ ...enabledMods });
  }, []);

  const enabledModsArr = Object.values(enabledMods);
  const totalPrice = (
    variant.basePrice + modsPrice(variant.mods, enabledModsArr)
  ).toFixed(2);

  return (
    <div className="builder-page">
      <h1>{variant.name}</h1>
      <h2 className="builder-page__price">${totalPrice}</h2>

      <div className="builder-page__build">
        <div className="builder-page__pedal">
          <Pedal
            variantIdx={params.variant}
            ledIdx={ledIdx}
            colorIdx={colorIdx}
            ledBrightnessIdx={ledBrightnessIdx}
            modVisibilities={enabledModsArr}
          />
        </div>

        <div className="builder-page__config">
          <h2 className="builder-page__section-title">Mods</h2>
          <Link href={variant.modInfoUrl}>
            <a className="builder-page__mod-info">Learn about these mods</a>
          </Link>

          <ModsCheckboxes
            mods={variant.mods}
            enabledMods={enabledMods}
            setEnabledMods={setEnabledMods}
          />

          <h2 className="builder-page__section-title">Color</h2>
          <ColorSelector
            colors={variant.colors}
            setColorIdx={setColorIdx}
            colorIdx={colorIdx}
          />

          <h2 className="builder-page__section-title">LED Color</h2>
          <ColorSelector
            colors={variant.leds}
            colorIdx={ledIdx}
            setColorIdx={setLedIdx}
          />

          <h2 className="builder-page__section-title">LED Brightness</h2>
          <BrightnessSlider
            ledBrightnessIdx={ledBrightnessIdx}
            setLedBrightnessIdx={setLedBrightnessIdx}
          />

          <a
            className="builder-page__add-to-cart"
            target="_blank"
            href={addToCartUrl(
              variant,
              totalPrice,
              colorIdx,
              ledIdx,
              ledBrightnessIdx,
              enabledModsArr
            )}
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};
