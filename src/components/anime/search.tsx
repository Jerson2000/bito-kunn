'use client'
import ItemCard from '@/components/anime/card'
import { ANIME, IAnimeResult, ISearch } from '@consumet/extensions'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any*/
/* eslint-disable react-hooks/exhaustive-deps*/
export default function Search() {
    const searchParams = useSearchParams()
    const search = searchParams.get('q')
    const [result, setResult] = useState<ISearch<IAnimeResult> | null>(null)

    const gogoanime = new ANIME.Gogoanime();

    useEffect(() => {
        gogoanime.search(search!, 1).then((data) => {
            setResult(data);
        })
    }, [setResult]);



    return <>
        <div className="container mx-auto my-10">
            <form className="max-w-lg mx-auto" action="/search">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" name="q" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={search!} placeholder="Search anime.. manga.." required />

                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div className="flex flex-wrap justify-center">
                {result && result.results.length == 0 && <div className='my-24'><span className='text-lg md:text-3xl'>No anime entries!😞</span></div>}
                {result && result.results.map((item: any, index: number) => {
                    return (
                        <ItemCard key={index} data={item} />
                    )
                })}

            </div>
        </div>
    </>
}