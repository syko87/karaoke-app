"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/songs", {
      method: "POST",
      body: JSON.stringify({ name, song, artist }),
    });

    setSent(true);
    setName("");
    setSong("");
    setArtist("");
  }

  return (
    <main style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Karaokê do Restaurante 🎤</h1>
      <p>Preencha para entrar na fila!</p>

      {!sent ? (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
          <input placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} required />
          <input placeholder="Música" value={song} onChange={e => setSong(e.target.value)} required />
          <input placeholder="Artista" value={artist} onChange={e => setArtist(e.target.value)} required />
          <button type="submit" style={{ marginTop: 10 }}>Enviar</button>
        </form>
      ) : (
        <p style={{ color: "green", fontWeight: "bold" }}>Pedido enviado! Aguarde ser chamado 🎤</p>
      )}
    </main>
  );
}
