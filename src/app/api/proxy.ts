import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

/* eslint-disable @typescript-eslint/no-explicit-any */



export async function hlsProxy(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = req.query.url as string;
    const response = await axios.get(url, {
      responseType: 'text',
    });
    
    const originalContent = response.data as string;
    const proxyBaseUrl = `/api/qualityProxy?url=${encodeURIComponent(url.split('/ep')[0])}`;
    
    const updatedContent = originalContent
      .split('\n')
      .map(line => {
        if (line.startsWith('ep')) {
          return `${proxyBaseUrl}/${line}`;
        }
        return line;
      })
      .join('\n');

    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
    res.setHeader('Cache-Control', 'no-cache');
    res.send(updatedContent);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
}


export  async function qualityProxy(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = req.query.url as string;
    const response = await axios.get(url, {
      responseType: 'text',
    });

    const originalContent = response.data as string;
    const proxyBaseUrl = `/api/segmentProxy?url=${url.split('/ep')[0]}`;
    
    const updatedContent = originalContent
      .split('\n')
      .map(line => {
        if (line.startsWith('ep')) {
          return `${proxyBaseUrl}/${line}`;
        }
        return line;
      })
      .join('\n');

    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
    res.setHeader('Cache-Control', 'no-cache');
    res.send(updatedContent);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
}


export async function segmentProxy(req: NextApiRequest, res: NextApiResponse) {
    try {
      const url = req.query.url as string;
      const response = await axios.get(url, {
        responseType: 'stream',
      });
  
      res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
      res.setHeader('Cache-Control', 'no-cache');
      
      // Pipe the response data directly to the client
      response.data.pipe(res);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  }