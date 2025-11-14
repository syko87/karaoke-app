"use client";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [songs, setSongs] = useState([]);

  async function loadSongs() {
    const res = await fetch("/api/songs");
    const data = await res.json();
    setSongs(data);
  }

  async function removeSong(id) {
    await fetch("/api/songs?id=" + id, { method: "DELETE" });
    loadSongs();
  }

  useEffect(() => {
    loadSongs();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Músicas (Garçom)</h1>
      {songs.length === 0 && <p>Nenhum pedido de música até agora.</p>}
      <ul>
        {songs.map((song) => (
          <li key={song.id} style={{ marginBottom: 10 }}>
            <strong>{song.name}</strong> — {song.music} ({song.author})
            <button
              onClick={() => removeSong(song.id)}
              style={{
                marginLeft: 10,
                padding: "4px 10px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={loadSongs} style={{ marginTop: 20, padding: 10 }}>
        Atualizar Lista
      </button>
    </div>
  );
}
