"use client";
import { useEffect, useState } from "react";
import "../globals.css";

export default function Admin() {
  const [songs, setSongs] = useState([]);

  async function load() {
    const r = await fetch("/api/songs");
    setSongs(await r.json());
  }

  async function remove(id) {
    await fetch("/api/songs", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    load();
  }

  useEffect(() => {
    load();
    const i = setInterval(load, 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <main>
      <h1>Painel do Garçom 🍻</h1>

      {songs.length === 0 ? (
        <p>Ninguém na fila ainda.</p>
      ) : (
        songs.map(item => (
          <div key={item.id} style={{ background: "#fff", padding: 15, marginBottom: 10, borderRadius: 6 }}>
            <p><strong>Nome:</strong> {item.name}</p>
            <p><strong>Música:</strong> {item.song}</p>
            <p><strong>Artista:</strong> {item.artist}</p>
            <button onClick={() => remove(item.id)}>Remover</button>
          </div>
        ))
      )}
    </main>
  );
}
