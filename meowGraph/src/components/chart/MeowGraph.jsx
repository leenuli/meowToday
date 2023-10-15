import Avatar from "@mui/material/Avatar";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
// added so guickly as possible
import { Grid } from "@mui/material";
import omg from "../../images/OMG.PNG";
import aaa from "../../images/aaa.PNG";
import duh from "../../images/duh.PNG";
import genious from "../../images/genious.PNG";
import lol from "../../images/lol.PNG";
import madf from "../../images/mad.PNG";
import smile from "../../images/smile.PNG";
import wut from "../../images/wut.PNG";
/* SOUND */
import useSound from "use-sound";
import { default as amazingSfx } from "../../sounds/mp3/amazing.mp3";
import { default as boringSfx } from "../../sounds/mp3/boring.mp3";
import { default as brilliantSfx } from "../../sounds/mp3/brilliant.mp3";
import { default as bummerSfx } from "../../sounds/mp3/bummer.mp3";
import { default as bungeeSfx } from "../../sounds/mp3/bungee.mp3";
import { default as byeByeSfx } from "../../sounds/mp3/byebye.mp3";
import { default as collectSfx } from "../../sounds/mp3/collect.mp3";
import { default as comeonthenSfx } from "../../sounds/mp3/comeonthen.mp3";
ChartJS.register(ArcElement, Tooltip, Legend);

function MeowGraph() {
  const [happyCat, setHappyCat] = useState(0);
  const [sadCat, setSadCat] = useState(0);
  const [madCat, setMadCat] = useState(0);
  const [okCat, setOkCat] = useState(1);
  const [aaaCat, setAaaCat] = useState(0);
  const [omgCat, setOmgCat] = useState(0);
  const [wutCat, setWutCat] = useState(0);
  const [smileCat, setSmileCat] = useState(0);

  /* sound */

  const [byebye] = useSound(byeByeSfx, { volume: 0.25 });
  const [amazing] = useSound(amazingSfx, { volume: 0.25 });
  const [brilliant] = useSound(brilliantSfx, { volume: 0.25 });
  const [bummer] = useSound(bummerSfx, { volume: 0.25 });
  const [bungee] = useSound(bungeeSfx, { volume: 0.25 });
  const [boring] = useSound(boringSfx, { volume: 0.25 });
  const [collect] = useSound(collectSfx, { volume: 0.25 });
  const [comeonthen] = useSound(comeonthenSfx, { volume: 0.25 });

  /* DATA */
  const data = {
    datasets: [
      {
        labels: [
          "iloinen",
          "surullinen",
          "Ok",
          "vihainen",
          "Pelokas",
          "Järkyttynyt",
          "Yllättynyt",
          "hölmistynyt",
          "vahingoniloinen",
        ],
        data: [
          happyCat,
          sadCat,
          okCat,
          madCat,
          aaaCat,
          omgCat,
          wutCat,
          smileCat,
        ],
        backgroundColor: [
          "#00c853",
          "#0d47a1",
          "#ffd600",
          "#ff1744",
          "#f06292",
          "#ff6d00",
          "#18ffff",
          "#1b5e20",
        ],
        borderColor: [
          "#00c853",
          "#0d47a1",
          "#ffd600",
          "#ff1744",
          "#f06292",
          "#ff6d00",
          "#18ffff",
          "#1b5e20",
        ],
        options: {
          legend: {
            display: false,
          },
        },
      },
    ],
  };

  const happy = () => {
    byebye();
    setHappyCat((happyCat) => happyCat + 1);

    console.log(happyCat);
  };
  const sad = () => {
    amazing();
    setSadCat((sadCat) => sadCat + 1);
  };
  const mad = () => {
    boring();
    setMadCat((madCat) => madCat + 1);
  };
  const ok = () => {
    bummer();
    setOkCat((okCat) => okCat + 1);
  };

  const aaah = () => {
    bungee();
    setAaaCat((aaaCat) => aaaCat + 1);
  };
  const omgash = () => {
    collect();
    setOmgCat((omgCat) => omgCat + 1);
  };

  const wuts = () => {
    brilliant();
    setWutCat((wutCat) => wutCat + 1);
  };
  const smiled = () => {
    comeonthen();
    setSmileCat((smileCat) => smileCat + 1);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12} xl={12}>
        <h1>How meow you are today? pick a cat</h1>
      </Grid>
      <Grid item xs={12} md={6} xl={12}>
        {okCat == 0 ? (
          <h6>Valitse kissa kuva</h6>
        ) : (
          <Doughnut
            data={data}
            style={{
              display: "inline-block",
              maxWidth: "100%",
              maxHeight: "400px",
              width: "100%",
              height: "300px",
              minWidth: "100px",
              minHeight: "100px",
            }}
          ></Doughnut>
        )}
      </Grid>
      <Grid item xs={12} md={6} xl={12} style={{ marginTop: "60px" }}>
        <button
          onClick={happy}
          style={{ backgroundColor: "#00c853", margin: "5px" }}
        >
          <Avatar alt="DUH" src={lol} sx={{ width: 100, height: 100 }} />
        </button>
        <button
          onClick={sad}
          style={{ backgroundColor: "#0d47a1", margin: "5px" }}
        >
          <Avatar alt="DUH" src={duh} sx={{ width: 100, height: 100 }} />
        </button>
        {/* tästä eteenpäin tee uudes kissa buttonit */}
        <button
          onClick={mad}
          style={{ backgroundColor: "#ff1744", margin: "5px" }}
        >
          <Avatar alt="mad" src={madf} sx={{ width: 100, height: 100 }} />
        </button>
        <button
          onClick={aaah}
          style={{ backgroundColor: "#f06292", margin: "5px" }}
        >
          <Avatar alt="AAA" src={aaa} sx={{ width: 100, height: 100 }} />
        </button>
        <button
          onClick={ok}
          style={{ backgroundColor: "#ffd600", margin: "5px" }}
        >
          <Avatar alt="DUH" src={genious} sx={{ width: 100, height: 100 }} />
        </button>
        <button
          onClick={omgash}
          style={{ backgroundColor: "#ff6d00", margin: "5px" }}
        >
          <Avatar alt="AAA" src={omg} sx={{ width: 100, height: 100 }} />
        </button>
        <button
          onClick={wuts}
          style={{ backgroundColor: "#18ffff", margin: "5px" }}
        >
          <Avatar alt="AAA" src={wut} sx={{ width: 100, height: 100 }} />
        </button>
        <button
          onClick={smiled}
          style={{ backgroundColor: "#1b5e20", margin: "5px" }}
        >
          <Avatar alt="AAA" src={smile} sx={{ width: 100, height: 100 }} />
        </button>
      </Grid>
    </Grid>
  );
}

export default MeowGraph;
