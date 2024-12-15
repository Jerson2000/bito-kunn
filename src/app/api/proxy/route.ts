import { type NextRequest } from 'next/server'
import axios from 'axios';

const corsOptions = {
  'Content-Type': 'application/vnd.apple.mpegurl',
  'Cache-Control': 'no-cache',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "*",
}

export async function GET(req: NextRequest) {

  const searchParams = req.nextUrl.searchParams;

  // Get a specific query parameter by name
  const url = searchParams.get('url') as string;


  const response = await axios.get(url, {
    responseType: 'text',
  });

  const originalContent = response.data as string;
  const proxyBaseUrl = `/api/segments?url=${url.split('/ep')[0]}`
  const updatedUrl = originalContent
    .split('\n')
    .map(line => {
      if (line.startsWith('ep')) {
        return `${proxyBaseUrl}/${line}`;
      }
      return line;
    })
    .join('\n');

  return new Response(updatedUrl, {
    status: 200,
    headers: corsOptions,
  })

}