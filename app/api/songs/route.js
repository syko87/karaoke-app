let queue = [];

export async function GET() {
  return Response.json(queue);
}

export async function POST(req) {
  const body = await req.json();
  queue.push({
    id: Date.now(),
    ...body
  });

  return Response.json({ ok: true });
}

export async function DELETE(req) {
  const { id } = await req.json();
  queue = queue.filter(item => item.id !== id);

  return Response.json({ ok: true });
}
