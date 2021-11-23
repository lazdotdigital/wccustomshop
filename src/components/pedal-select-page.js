import "./pedal-select-page.css";
import Pedal, { variants, standardLedBrightnessIdx } from "./pedal";
import { Link } from "wouter";

export default () => (
  <div className="pedal-select-page">
    <h1>Builder - Select Pedal</h1>

    <div className="pedal-select-page__pedal-grid">
      {variants.map((variant, idx) => (
        <Link href={`/builder/${idx}`}>
          <div className="pedal-select-page__pedal">
            <h2 className="pedal-select-page__pedal-text">
              {variant.name} - ${variant.basePrice}
            </h2>
            <Pedal
              variantIdx={idx}
              ledIdx={0}
              ledBrightnessIdx={standardLedBrightnessIdx}
              colorIdx={variant.defaultColorIdx}
              modVisibilities={[]}
            />
          </div>
        </Link>
      ))}
    </div>
  </div>
);
