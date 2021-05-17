import React from 'react'
import Vector1 from '../assets/blog-vector.png'
import Vector2 from '../assets/Rectangle 242.png'
import Vector3 from '../assets/Rectangle 242.png'
import '../App.css'

function Blog() {
    return (
        <>
            <main class="blog__main">
        <nav>

        </nav>
        <div class="blog__content">
            <h1>Latest Updates on CityTech</h1>
            <img src={Vector1} alt="" />
        </div>
    </main>
    <section class="blog__section">
        <div class="single__blog">
            <div class="blog--icon">
                <img src={Vector2} alt="" />
            </div>
            <div class="blog__text">
                <div>
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eligendi.</p>
                </div>
                <a href="">See more</a>
            </div>
        </div>
        <div class="single__blog">
            <div class="blog--icon">
                <img src={Vector3} alt="" />
            </div>
            <div class="blog__text">
                <div>
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eligendi.</p>
                </div>
                <a href="">See more</a>
            </div>
        </div>
    </section>
        </>
    )
}

export default Blog
