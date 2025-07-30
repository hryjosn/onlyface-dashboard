import { NextRequest, NextResponse } from 'next/server';
import prisma from '~/lib/prisma';

export async function PUT(req: NextRequest) {
  try {
    const { guestId } = await req.json();
    console.log('guestId>',guestId)
    if (!guestId) {
      return NextResponse.json({ error: 'Missing guestId' }, { status: 400 });
    }

    const warning = await prisma.warning.create({
      data: {
        guestId,
        status: 'warning',
      },
    });

    return NextResponse.json({ success: true, warning });
  } catch {
    return NextResponse.json({ error: 'Operation failed' }, { status: 500 });
  }
}
