'use client'

// import VideoJS from "@/components/player";
import Hls from "hls.js"
import { useEffect, useRef } from "react"
import React from 'react';
import videojs from 'video.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export default function Page() {
    const source = "api/proxy?url=https://www049.anzeat.pro/streamhls/91e22e411752c8b91e8cd2c1fb76241a/ep.1.1727973605.360.m3u8";
    // const source = "https://gogoanime-and-hianime-proxy.vercel.app/quality-proxy?url=https://www049.anzeat.pro/streamhls/91e22e411752c8b91e8cd2c1fb76241a/ep.1.1727973605.360.m3u8";
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const hls = new Hls();
        if (Hls.isSupported()) {
            hls.loadSource(source);
            if (videoRef.current) {
                hls.attachMedia(videoRef.current)
            }
        }
    }, []);


    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        techOrder: ["html5"],
        html5: {
            vhs: {
                overrideNative: true,
                withCredentials: true
            },
            nativeTextTracks: false,
            nativeAudioTracks: false,
            nativeVideoTracks: false,
        },
        fluid: true,
        sources: [
            {
                src: 'https://gogoanime-and-hianime-proxy.vercel.app/quality-proxy?url=https://www049.anzeat.pro/streamhls/91e22e411752c8b91e8cd2c1fb76241a/ep.1.1727973605.360.m3u8',                   
            }            
            // {
            //     src: 'https://playertest.longtailvideo.com/adaptive/elephants_dream_v4/index.m3u8',
            //     type: 'application/x-mpegURL',
            //     name:'hehe'
            // },
        ],
        controlBar: {
            skipButtons: {
                forward: 5,
                backward: 5
            },
            fullscreenToggle: false
        },
        
        
    };

    const handlePlayerReady = (player: any) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };




    return (
        <>
            <video id="my-player" controls ref={videoRef} className="w-full max-w-xl mx-auto mt-20"/>
            {/* <div className="w-full max-w-5xl mx-auto mt-20">
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </div> */}
        </>
    );
}
