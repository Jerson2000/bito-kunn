
'use client'
import Image from "next/image";
import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ItemCard = (data: any) => {

    return (
        <div className="hover:cursor-pointer relative m-10 flex w-full max-w-52 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md dark:border-blue-950 dark:bg-blue-950">
            <Link href={`/anime/${data && data.data?.id}/1`}>
                <Image
                    src={data && data.data?.image || "/brand2.jpg"}
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    style={{
                        width: '100%',
                    }}
                />
                <p className="w-full absolute bottom-0 text-sm text-black p-4 rounded-lg shadow-black shadow-[0_-6px_15px_-3px_rgba(0,0,0,0.5)] dark:shadow-[0_-6px_15px_-3px_rgba(0,0,0,0.5)] dark:shadow-white dark:text-white dark:bg-indigo-600 dark:bg-opacity-35  ">
                    {data && data.data?.title || "Bito-kunn"}
                </p>
            </Link>

        </div>
    )
}

export default ItemCard;