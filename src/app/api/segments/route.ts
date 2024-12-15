import { type NextRequest } from 'next/server'
import axios from 'axios';

const corsOptions = {
  'Content-Type': 'application/vnd.apple.mpegurl',
  'Cache-Control': 'no-cache',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "*",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",

}

export async function GET(req: NextRequest) {

  const searchParams = req.nextUrl.searchParams;

  const url = searchParams.get('url') as string;

  const response = await axios.get(url, {
    responseType: 'stream',
  });


  return new Response(response.data.pipe, {
    status: 200,
    headers: corsOptions,
  })

}