import { ANIME } from "@consumet/extensions";
import ItemCard from "./card";

export const TopAiring = () => {
    const gogoanime = new ANIME.Gogoanime();
    const topAired = gogoanime.fetchTopAiring().then(data => {
        // console.log(data);
        return (
            <>
                {data.results.map((item, index) => {
                    return (
                        <ItemCard key={index} data={item} />
                    )
                })}
            </>
        )
    }
    );

    return topAired;

}