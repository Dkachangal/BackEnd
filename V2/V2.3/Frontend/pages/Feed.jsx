import React from 'react'
import './Feed.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Feed = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: 'https://placehold.co/600x400',
            caption: 'Exploring the city lights and capturing the essence of urban life. #CityVibes #UrbanExploration',
            __v: 0
        }
    ]);
useEffect(() => {
        axios.get("http://localhost:3000/view-images")
            .then((res) => {
                // 1. CRUCIAL: Save the incoming array data into your state!
                // Axios holds the array inside res.data
                setPosts(res.data); 
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    return (
        <section className='feed-section'>
            <div className="bg-ambient-glow-1"></div>
            <div className="bg-ambient-glow-2"></div>

            <header className="feed-header">
                <h1>Feed</h1>
                <p>Explore today's moments</p>
            </header>

            {/* Scrollable Container */}
            <div className="feed-container">
                
                {/* 2. Loop over the posts dynamically using .map() */}
                {posts.map((post, index) => (
                    <article className="feed-card" key={post._id || index}>
                        <div className="card-header">
                            <div className={`avatar-placeholder ${index % 2 === 0 ? 'pink-glow' : 'blue-glow'}`}></div>
                            <span className="username">anonymous_user</span>
                        </div>
                        
                        <div className="post-image-container">
                            {/* Uses the image URL from your database array object */}
                            <img src={post.image} alt="Feed content" className="image-viewport" />
                        </div>
                        
                        <div className="card-footer">
                            <p className="post-caption">
                                <strong className="username-inline">anonymous_user</strong> 
                                {post.caption}
                            </p>
                        </div>
                    </article>
                ))}

            </div>
            <button onClick={ () => navigate('/create-post')}>Add More</button>
        </section>
    )
}

export default Feed;