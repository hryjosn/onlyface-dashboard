import { NextRequest, NextResponse } from 'next/server';
import prisma from '~/lib/prisma';

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const deleted = await prisma.post.delete({ where: { id } });
    return NextResponse.json({ success: true, post: deleted });
  } catch (e) {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
