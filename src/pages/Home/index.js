import logo from "../../logo.svg";
import "../../App.css";
import { Calc, Increase, ApiGithub } from "../../widgets";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testando o React
        </a>
      </header>
      <br />
      <ApiGithub></ApiGithub>
      <br />
      <Increase />
      <br />
      <Calc name="Jeferson" />
    </div>
  );
}
