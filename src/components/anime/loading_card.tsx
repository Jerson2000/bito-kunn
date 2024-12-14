interface LoadingCardProps {
    numOfCards?: number | null;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ numOfCards = 4 }) => {
    const cardCount = numOfCards !== null ? numOfCards : 4;

    return (
        <div className="flex flex-col">
            {Array.from({ length: cardCount }, (_, index) => (
                <div key={index} className="relative m-10 flex w-full max-w-sm flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md animate-pulse">
                    <div className="bg-gray-200 w-full h-64 rounded-lg"></div>
                    <p className="absolute bottom-0 bg-opacity-40 text-sm text-black p-4 rounded-lg shadow-black shadow-[0_-6px_15px_-3px_rgba(0,0,0,0.5)] dark:shadow-[0_-6px_15px_-3px_rgba(0,0,0,0.5)] dark:shadow-white dark:text-white dark:bg-opacity-40">
                        <span className="block bg-gray-300 h-4 w-24 rounded"></span>
                    </p>
                </div>
            ))}
        </div>
    );
}
