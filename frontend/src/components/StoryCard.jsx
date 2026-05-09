function StoryCard({ story, onBookmark }) {

    return (

        <div
            className="
                bg-slate-800
                p-6
                rounded-xl
                shadow-lg
                hover:scale-[1.01]
                transition
                mb-6
            "
        >

            <h2
                className="
                    text-2xl
                    text-white
                    font-bold
                    mb-4
                "
            >
                {story.title}
            </h2>

            <p className="text-gray-300 mb-2">
                Author: {story.author}
            </p>

            <p className="text-yellow-400 mb-4">
                Points: {story.points}
            </p>

            <div className="flex gap-4">

                <a
                    href={story.url}
                    target="_blank"
                    className="
                        bg-cyan-500
                        px-4
                        py-2
                        rounded-lg
                        text-white
                        no-underline
                    "
                >
                    Read More
                </a>

              <button
    onClick={() => onBookmark(story._id)}
    className="
        bg-pink-500
        hover:bg-pink-400
        text-white
        px-6
        py-3
        rounded-xl
        font-semibold
        transition
    "
>
    Bookmark
</button>

            </div>

        </div>
    );
}

export default StoryCard;