import { type NextRequest } from 'next/server'
import axios from 'axios';

const corsOptions = {
  'Content-Type': 'no-cahce',
  'Cache-Control': 'no-cache',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "*",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",

}

export async function GET(req: NextRequest,{ params }: { params: Promise<{ id: string }> }) {

   const { id } = await params;
  
  const response = await axios.get(`https://consumet-api-theta.vercel.app/anime/gogoanime/watch/${id}?server=gogocdn`, {
    responseType: 'text',
  });


  return new Response(response.data, {
    status: 200,
    headers: corsOptions,
  })

}