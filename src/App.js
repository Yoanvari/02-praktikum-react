import TodoList from "./TodoList";
import Greeting from "./Greeting";
import Counter from "./Counter";
import React, { useState } from "react";

function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>Ini adalah aplikasi React saya.</h2>
      <p>Ini adalah area konten utama</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>Hak Cipta &copy; 2025</p>
    </footer>
  );
}

function Example() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={handleChangeName}
      />
      <input
        type="number"
        placeholder="Umur"
        value={age}
        onChange={handleChangeAge}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleChangeEmail}
      />

      <p>
        {name} berumur {age} tahun dan emailnya adalah {email}.
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <Main />
      <Greeting name="Yoan" />
      <Counter />
      <Example />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
