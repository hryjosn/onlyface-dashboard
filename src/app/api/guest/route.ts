import { NextRequest, NextResponse } from 'next/server';
import prisma from '~/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '15', 10);
  const skip = (page - 1) * pageSize;

  const [guests, total] = await Promise.all([
    prisma.guest.findMany({
      where:{
        verify:true
      },
      orderBy: [{ created_at: 'desc' }],
      skip,
      take: pageSize,
    }),
    prisma.guest.count(),
  ]);

  return NextResponse.json({ guests, total });
}
