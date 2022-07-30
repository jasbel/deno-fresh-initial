/** @jsx h */
import { h } from "preact";
import { useState } from 'preact/hooks';

function SayHello() {
  const [msg, setMsg] = useState('hello word')
  return <div>
    <h1>{msg}</h1>

    <button onClick={() => setMsg('codigo de blba')}>Click me</button>
  </div>;
}

export default SayHello;
