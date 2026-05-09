

import { useEffect, useState } from "react";
import API from "../services/api";

export default function Bookmarks() {

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        fetchBookmarks();
    }, []);

    const fetchBookmarks = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.get(
                "/stories/bookmarks",
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            setBookmarks(response.data);

        } catch (error) {

            console.log(error);
        }
    };


    const removeBookmark = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await API.post(
                `/stories/${id}/bookmark`,
                {},
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            // remove instantly from UI
            setBookmarks(
                bookmarks.filter(
                    (story) => story._id !== id
                )
            );

        } catch (error) {

            console.log(error);
        }
    };


    return (

        <div
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-950
                via-blue-950
                to-slate-900
                px-6
                py-10
            "
        >

            <div className="max-w-6xl mx-auto">

                <h1
                    className="
                        text-5xl
                        font-bold
                        text-cyan-400
                        text-center
                        mb-12
                    "
                >
                    Your Bookmarks
                </h1>

                {
                    bookmarks.length === 0 ? (

                        <div
                            className="
                                text-center
                                text-gray-400
                                text-xl
                                mt-20
                            "
                        >
                            No bookmarks added yet.
                        </div>

                    ) : (

                        <div
                            className="
                                grid
                                md:grid-cols-2
                                lg:grid-cols-3
                                gap-8
                            "
                        >

                            {
                                bookmarks.map((story) => (

                                    <div
                                        key={story._id}
                                        className="
                                            bg-white/10
                                            backdrop-blur-lg
                                            border
                                            border-white/20
                                            rounded-3xl
                                            p-6
                                            shadow-xl
                                            hover:scale-105
                                            transition
                                            duration-300
                                        "
                                    >

                                        <h2
                                            className="
                                                text-2xl
                                                font-bold
                                                text-white
                                                mb-4
                                            "
                                        >
                                            {story.title}
                                        </h2>

                                        <p
                                            className="
                                                text-gray-300
                                                mb-2
                                            "
                                        >
                                            Author:
                                            <span className="text-cyan-400 ml-2">
                                                {story.author}
                                            </span>
                                        </p>

                                        <p
                                            className="
                                                text-gray-300
                                                mb-6
                                            "
                                        >
                                            Points:
                                            <span className="text-cyan-400 ml-2">
                                                {story.points}
                                            </span>
                                        </p>

                                        <a
                                            href={story.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                                                inline-block
                                                w-full
                                                text-center
                                                bg-cyan-400
                                                hover:bg-cyan-300
                                                text-slate-900
                                                font-semibold
                                                px-5
                                                py-2
                                                rounded-xl
                                                transition
                                            "
                                        >
                                            Read More
                                        </a>

                                        <button
                                            onClick={() =>
                                                removeBookmark(story._id)
                                            }
                                            className="
                                                mt-4
                                                w-full
                                                bg-pink-500
                                                hover:bg-pink-400
                                                text-white
                                                font-semibold
                                                px-5
                                                py-2
                                                rounded-xl
                                                transition
                                            "
                                        >
                                            Remove Bookmark
                                        </button>

                                    </div>

                                ))
                            }

                        </div>

                    )
                }

            </div>

        </div>
    );
}