import { Component, createSignal, createEffect } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [name,setName] = createSignal("")
  createEffect(()=>{
    console.log(name());
  })
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a><br />
        {name()? name(): "Your Message Will be displayed here."} <br />
        <br />
        <input type="text" value={name()} onInput={(e)=>{setName(e.target.value)}} style="width:80%;height:30px;font-size:24px;text-align:center" />
      </header>
    </div>
  );
};

export default App;
