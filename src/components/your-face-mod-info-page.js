import "./your-face-mod-info-page.css";

export default () => (
  <div className="your-face-mod-info-page">
    <h1>Your Face Mod Info</h1>

    <p>
      <span className="bold">Bias mod:</span> This mod adds a bias knob that
      allows you to adjust how the fuzz sounds. It's a hard one to describe in
      text, but it will let you go from a sputtery, "wrong" weird sound, to a
      buttery smooth proper Fuzz Face® style sound (and everything in between).
    </p>

    <p>
      <span className="bold">Anti-Buffer mod:</span> Removes the effect of a
      buffer preceding the Your Face in your chain. *See detailed description
      below.
    </p>

    <p>
      <span className="bold">Battery Kill Switch:</span> A toggle that allows
      you to kill the battery power when the pedal is plugged in. Great for
      those purists that love using batteries on their pedal boards, but hate
      having to unplug the input jack when the pedal not being used.
    </p>

    <p>
      <span className="bold">Upgrade caps to Mullard tropical fish:</span> This
      upgrade converts two input and one smoothing cap to Mullard “tropical
      fish” capacitors, so there will be a total of four. (The out cap on the
      Your Face is always a Mullard trop-fish cap).
    </p>

    <p>
      <span className="bold">Bass Face:</span> Replace the output capacitor with
      a higher capacitance tropical fish cap. A comon mod that extends the lows
      on the output making the Your Face more bass friendly.
    </p>

    <p>
      <span className="bold">Hybrid transistor option:</span> This mod puts a
      germanium transistor in the first position, a silicon transistor in the
      second position. Gets a sweet mix of modern with the smoothness of a
      germanium. Also makes the bias a bit more stable than an all germanium
      setup.
    </p>

    <p>
      *Fuzz Face style pedals do not like buffered pedal preceding them in your
      pedal chain. Put a buffer in front, and your pedal will sound like a buzzy
      mess. Buffers can be found in many pedals, even the ones with the silver
      button style switches that we usually assoiciate with "true-bypass." If
      you have a delay with "trails" on bypass, you got a buffer. Also any
      traditional style Boss®, Ibanez®, DOD®, pedals etc. (with the exception of
      a few models that state they are true-bypass). Many switching systems and
      wireless setups require built-in buffers to be used in order for them to
      operate. And finally, active pickups.
    </p>
  </div>
);
