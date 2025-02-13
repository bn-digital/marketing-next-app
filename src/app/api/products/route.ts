import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'products.json');
  const data = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(data);

  return NextResponse.json(products);
}
