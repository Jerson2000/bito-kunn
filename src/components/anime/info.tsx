'use client'
import { ANIME, IEpisodeServer } from "@consumet/extensions"
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

import Hls from "hls.js"
// import videojs from 'video.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
const AnimeInfo = (data: { id: string, episode: string }) => {
    const gogoanime = new ANIME.Gogoanime();
    const [animeInfo, setAnimeInfo] = useState<any>(null);
    const [server, setServer] = useState<any>(null);
    const [currentServer, setCurrentServer] = useState<string | null>(null);
    const [stream, setStream] = useState<any>(null);

    const videoRef = useRef<HTMLVideoElement>(null)
    const hls = new Hls();

    useEffect(() => {
        gogoanime.fetchAnimeInfo(data.id).then((data) => {
            setAnimeInfo(data)
        });
        gogoanime.fetchEpisodeServers(data.id + "-episode-" + data.episode).then((data) => {
            setServer(data);
            setCurrentServer(data[0].url)
        })

        // if (Hls.isSupported()) {
        //     hls.loadSource(data.);
        //     if (videoRef.current) {
        //         hls.attachMedia(videoRef.current)
        //     }
        // }
    }, [setAnimeInfo, setServer, setCurrentServer])

    const switchServer = (link: string) => {
        setCurrentServer(link);
    }

    const extractId = (epId: string) => {
        return epId.replace(/-episode-\d+$/, '');
    }




    return (

        <div className="container mx-auto my-10">

            <div className="my-10 flex gap-4 max-sm:flex-col items-center justify-center text-center bg-indigo-950 text-white dark:bg-indigo-100 dark:text-indigo-950  px-6 py-3.5 rounded font-[sans-serif]">
                <p className="text-base">Please use adblock to block the ads coming from the embed video I have yet implemented the proxy because i does not work huhu 🥺😞</p>
            </div>

            {animeInfo &&
                <h1><span className="text-lg">Now watching 📺</span> <span className="text-2xl underline">{animeInfo.title.toString()}</span>  / Episode {data.episode.toUpperCase()}</h1>

            }

            <div className="block mt-2">
                <h1 className="text-md md:text-lg">Description</h1>
                <p className="text-sm md:text-md text-indigo-950 dark:text-indigo-200">{animeInfo && animeInfo.description}</p>
                <h1 className="text-md md:text-lg">Genre</h1>
                <ul className="flex flex-wrap" >

                    {animeInfo && animeInfo?.genres.map((item: string, index: number) => {
                        return (


                            <li key={index}>
                                <span className='bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300'>{item}</span>
                            </li>

                        )
                    })
                    }

                </ul>
            </div>

            <div className="block">
                <h1 className="mt-5">Servers</h1>
                <ul className="flex flex-wrap" >

                    {server && server.map((item: IEpisodeServer, index: number) => {
                        return (
                            <li key={index} data-value={item.url} onClick={() => { switchServer(item.url); }} className=" cursor-pointer">
                                <span className={`${currentServer === item.url ? 'bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300' : 'bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300'}`}>{item.name}</span>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            <div className="flex flex-wrap">
                <h1 className="w-full">Episodes</h1>
                <div className="flex flex-col md:flex-row w-full">
                    <ul className="md:w-1/2 lg:w-1/3 p-2">
                        {animeInfo && animeInfo.episodes.map((item: any, index: number) => {
                            return (
                                <li key={index} className="my-2">
                                    <Link href={`/anime/${extractId(item.id)}/${item.number}`} className={`bg-blue-100 ${data.episode == item.number ? "dark:bg-blue-100" : "dark:bg-gray-700"}  hover:bg-blue-200 text-blue-800 text-xs lg:text-sm font-medium me-2 px-2.5 py-0.5 rounded  dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center`}>
                                        {item.id}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    {currentServer && (
                        <iframe
                            className="w-full md:w-1/2 lg:w-2/3 h-[400px] md:h-[600px] lg:h-[800px] loading='lazy'"
                            src={currentServer?.toString()}
                            allowFullScreen
                        />
                    )}
                </div>

            </div>
            {/* <video id="my-player" controls ref={videoRef} className="w-full max-w-xl mx-auto mt-20" /> */}


        </div >
    )


}

export default AnimeInfo;