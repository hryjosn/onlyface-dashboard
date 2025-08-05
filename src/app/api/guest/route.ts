import { type NextRequest, NextResponse } from 'next/server';
import prisma from '~/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number.parseInt(searchParams.get('page') || '1', 10);
  const pageSize = Number.parseInt(searchParams.get('pageSize') || '15', 10);
  const skip = (page - 1) * pageSize;

  const [guests, total] = await Promise.all([
    prisma.guest.findMany({
      where: {
        verify: true,
        emailOTP: true,
        warning: {
          isNot: {
            status: 'warning',
          },
        },
      },
      orderBy: [{ updated_at: 'desc' }],
      skip,
      take: pageSize,
    }),
    prisma.guest.count({
      where: {
        verify: true,
        emailOTP: true,
        warning: {
          is: {
            status: 'warning',
          },
        },
      },
    }),
  ]);

  return NextResponse.json({ guests, total });
}
