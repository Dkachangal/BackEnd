import React from 'react'
import './CreatePost.css'
import axios from 'axios'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';



const CreatePost = () => {
    const navigate = useNavigate();
    const hanleSubmit = async (e) => {

        e.preventDefault()

        const formData = new FormData(e.target);
        await axios.post("http://localhost:3000/create-post", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res);
            navigate('/feed');

        })
    }
    return (
        <section className='create-post-section'>
            {/* Multi-layered ambient lighting to make the light glass pop */}
            <div className="bg-ambient-glow-1"></div>
            <div className="bg-ambient-glow-2"></div>

            <h1>Create post</h1>

            <form onSubmit={hanleSubmit}>
                <input type="file" name="image" accept="image/*" />
                <input type="text" name="caption" required placeholder="Write a caption..." />
                <button type='submit'>Submit</button>
            </form>
            <button onClick={ () => navigate('/feed')}>Feed</button>
        </section>
    )
}

export default CreatePost;