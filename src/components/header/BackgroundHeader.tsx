export default function BackgroundHeader() {
  return (
    <div className="backgroundHeader">
      <img
        className="stars"
        src="https://www.kirupa.com/images/stars.png"
        width="16"
        height="16"
        alt=""
        style={{ transform: "translate(40vw, 90px) scale(.5)" }}
      />
      <img
        className="stars"
        src="https://www.kirupa.com/images/stars.png"
        width="16"
        height="16"
        alt=""
        style={{ transform: "translate(6vw, 56px) scale(.7)" }}
      />
      <img
        className="stars"
        src="https://www.kirupa.com/images/stars.png"
        width="16"
        height="16"
        alt=""
        style={{ transform: "translate(90vw, 40px) scale(.5)" }}
      />
      <img
        className="stars"
        src="https://www.kirupa.com/images/stars.png"
        width="16"
        height="16"
        alt=""
        style={{ transform: "translate(60vw, 30px) scale(.5)" }}
      />
      <img
        className="stars"
        src="https://www.kirupa.com/images/stars.png"
        width="16"
        height="16"
        alt=""
        style={{ transform: "translate(49vw, 10px) scale(.6)" }}
      />
      <img
        className="stars"
        src="https://www.kirupa.com/images/stars.png"
        width="16"
        height="16"
        alt=""
        style={{ transform: "translate(67vw, 113px) scale(.5)" }}
      />
      <img
        className="stars"
        src="https://www.kirupa.com/images/stars.png"
        width="16"
        height="16"
        alt=""
        style={{ transform: "translate(15vw, 100px) scale(.4)" }}
      />

      <img
        className="clouds cloud2"
        src="https://www.kirupa.com/images/cloud2b.png"
        width="55"
        height="32"
        alt=""
        style={
          {
            "--duration": "60s",
            "--ypos": "150px",
            "--xpos": "-300px",
            "--xscale": "1.2",
            "--yscale": "1.2",
            opacity: 0.3,
            "--animDelay": "-10s",
          } as React.CSSProperties
        }
      />
      <img
        className="clouds cloud3"
        src="https://www.kirupa.com/images/cloud2b.png"
        width="55"
        height="32"
        alt=""
        style={
          {
            "--duration": "80s",
            "--ypos": "110px",
            "--xpos": "-300px",
            "--xscale": "1",
            "--yscale": "1",
            "--animDelay": "-30s",
          } as React.CSSProperties
        }
      />
      <img
        className="clouds cloud4"
        src="https://www.kirupa.com/images/cloud2b.png"
        width="55"
        height="32"
        alt=""
        style={
          {
            "--duration": "100s",
            "--ypos": "10px",
            "--xpos": "-300px",
            "--xscale": "-.75",
            "--yscale": ".75",
            "--animDelay": "-98s",
          } as React.CSSProperties
        }
      />
      <img
        className="clouds cloud5"
        src="https://www.kirupa.com/images/cloud3a.png"
        width="20"
        height="16"
        alt=""
        style={
          {
            "--duration": "300s",
            "--ypos": "90px",
            "--xpos": "-300px",
            "--xscale": "1",
            "--yscale": "1",
            "--animDelay": "-214s",
          } as React.CSSProperties
        }
      />
      <img
        className="clouds cloud1"
        src="https://www.kirupa.com/images/cloud1a.png"
        width="71"
        height="39"
        alt=""
        style={
          {
            "--duration": "200s",
            "--ypos": "180px",
            "--xpos": "-300px",
            "--xscale": "1",
            "--yscale": "1",
            "--animDelay": "-193s",
          } as React.CSSProperties
        }
      />
    </div>
  );
}
