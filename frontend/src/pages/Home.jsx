


import React, { useEffect, useState } from "react";
import API from "../services/api";
import StoryCard from "../components/StoryCard";

const Home = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {

        const fetchStories = async () => {

            try {

                const res = await API.get("/stories");

                setStories(res.data);

            } catch (error) {

                console.log(error);
            }
        };

        fetchStories();

    }, []);


    const handleBookmark = async (id) => {

        const token = localStorage.getItem("token");

        // USER NOT LOGGED IN
        if (!token) {

            alert(
                "You are not registered yet. Please login first."
            );

            return;
        }

        try {

            await API.post(
                `/stories/${id}/bookmark`,
                {},
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            alert("Bookmark Added");

        } catch (error) {

            console.log(error);

            alert("you are not register yet");
        }
    };


    return (

        <div className="max-w-5xl mx-auto p-6 min-h-screen bg-gray-950">

            <h1
                className="
                    text-5xl
                    font-bold
                    text-center
                    text-cyan-400
                    mb-10
                "
            >
                Top Hacker News Stories
            </h1>

            <div className="grid gap-6">

                {
                    stories.map((story) => (

                        <StoryCard
                            key={story._id}
                            story={story}
                            onBookmark={handleBookmark}
                        />

                    ))
                }

            </div>

        </div>
    );
};

export default Home;