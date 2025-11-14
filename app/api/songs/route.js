let songs = [];

export async function GET() {
  return Response.json(songs);
}

export async function POST(req) {
  const body = await req.json();
  const newSong = {
    id: Date.now(),
    name: body.name,
    music: body.music,
    author: body.author,
  };
  songs.push(newSong);
  return Response.json({ message: "OK" });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  songs = songs.filter((s) => s.id != id);
  return Response.json({ message: "REMOVED" });
}
