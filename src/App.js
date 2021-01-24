import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import CountryGrid from "./CountryGrid";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  field: {
    backgroundColor: "white",
    borderRadius: "3px",
    margin: "2px",
  },
}));

function App() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [lang, setLang] = useState("");
  const [curr, setCurr] = useState("");
  const [capital, setCapital] = useState("");
  const [callcode, setCallcode] = useState("");
  const [region, setRegion] = useState("");
  const [regionbloc, setRegionbloc] = useState("");
  const [{ countries }, dispatch] = useStateValue();

  useEffect(() => {
    handleChange();
  }, [name, code, lang, curr, capital, callcode, region, regionbloc]);

  const handleChange = async () => {
    let arr = [];
    await fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        data.map((doc) => {
          if (arr.indexOf(doc.name) === -1) {
            arr.push(doc.name);
          }
        });
      })
      .catch((err) => console.log(err));
    name &&
      (await fetch("https://restcountries.eu/rest/v2/name/" + name)
        .then((response) => response.json())
        .then((data) => {
          let temp = [];
          data.map((doc) => {
            temp.push(doc.name);
          });
          arr = arr.filter((value) => temp.includes(value));
        })
        .catch((err) => console.log(err)));

    code &&
      (await fetch("https://restcountries.eu/rest/v2/alpha/" + code)
        .then((response) => response.json())
        .then((doc) => {
          if (arr.includes(doc.name)) {
            arr = [doc.name];
          }
        })
        .catch((err) => console.log(err)));

    lang &&
      (await fetch("https://restcountries.eu/rest/v2/lang/" + lang)
        .then((response) => response.json())
        .then((data) => {
          let temp = [];
          data.map((doc) => {
            temp.push(doc.name);
          });
          arr = arr.filter((value) => temp.includes(value));
        })
        .catch((err) => console.log(err)));

    curr &&
      (await fetch("https://restcountries.eu/rest/v2/currency/" + curr)
        .then((response) => response.json())
        .then((data) => {
          let temp = [];
          data.map((doc) => {
            temp.push(doc.name);
          });
          arr = arr.filter((value) => temp.includes(value));
        })
        .catch((err) => console.log(err)));

    capital &&
      (await fetch("https://restcountries.eu/rest/v2/capital/" + capital)
        .then((response) => response.json())
        .then((data) => {
          let temp = [];
          data.map((doc) => {
            temp.push(doc.name);
          });
          arr = arr.filter((value) => temp.includes(value));
        })
        .catch((err) => console.log(err)));
    callcode &&
      (await fetch("https://restcountries.eu/rest/v2/callingcode/" + callcode)
        .then((response) => response.json())
        .then((data) => {
          let temp = [];
          data.map((doc) => {
            temp.push(doc.name);
          });
          arr = arr.filter((value) => temp.includes(value));
        })
        .catch((err) => console.log(err)));
    region &&
      (await fetch("https://restcountries.eu/rest/v2/region/" + region)
        .then((response) => response.json())
        .then((data) => {
          let temp = [];
          data.map((doc) => {
            temp.push(doc.name);
          });
          arr = arr.filter((value) => temp.includes(value));
        })
        .catch((err) => console.log(err)));
    regionbloc &&
      (await fetch(
        "https://restcountries.eu/rest/v2/regionalbloc/" + regionbloc
      )
        .then((response) => response.json())
        .then((data) => {
          let temp = [];
          data.map((doc) => {
            temp.push(doc.name);
          });
          arr = arr.filter((value) => temp.includes(value));
        })
        .catch((err) => console.log(err)));
    arr.sort();
    dispatch({
      type: actionTypes.SET_COUNTRIES,
      countries: arr,
    });
  };

  return (
    <div className="App">
      <div id="App-header" className="App-header">
        <TextField
          id="name"
          color="primary"
          className={classes.field}
          value={name}
          autoComplete="new-text"
          label="Country Name"
          variant="filled"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="code"
          color="primary"
          className={classes.field}
          value={code}
          autoComplete="new-text"
          label="Country Code"
          variant="filled"
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <TextField
          id="lang"
          color="primary"
          className={classes.field}
          value={lang}
          autoComplete="new-text"
          label="Language"
          variant="filled"
          onChange={(e) => {
            setLang(e.target.value);
          }}
        />
        <TextField
          id="curr"
          color="primary"
          className={classes.field}
          value={curr}
          autoComplete="new-text"
          label="Currency"
          variant="filled"
          onChange={(e) => {
            setCurr(e.target.value);
          }}
        />
        <TextField
          id="capital"
          color="primary"
          className={classes.field}
          value={capital}
          autoComplete="new-text"
          label="Capital City"
          variant="filled"
          onChange={(e) => {
            setCapital(e.target.value);
          }}
        />
        <TextField
          id="callcode"
          color="primary"
          className={classes.field}
          value={callcode}
          autoComplete="new-text"
          label="Calling Code"
          variant="filled"
          onChange={(e) => {
            setCallcode(e.target.value);
          }}
        />
        <TextField
          id="region"
          color="primary"
          className={classes.field}
          value={region}
          autoComplete="new-text"
          label="Region"
          variant="filled"
          autoComplete="new-text"
          onChange={(e) => {
            setRegion(e.target.value);
          }}
        />
        <TextField
          id="regionbloc"
          color="primary"
          className={classes.field}
          value={regionbloc}
          autoComplete="new-text"
          label="RegionalBlock"
          variant="filled"
          onChange={(e) => {
            setRegionbloc(e.target.value);
          }}
        />
        <h3>Enter Data to Filter</h3>
      </div>
      <div className="App-body">
        <CountryGrid />
      </div>
      <div id="gotofilters">
        <a href="#App-header">
          <IconButton color="secondary">
            <ArrowUpwardIcon color="secondary" />
          </IconButton>
        </a>
      </div>
    </div>
  );
}

export default App;
