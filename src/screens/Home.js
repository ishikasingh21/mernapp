import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

export default function Home() {
    return (
        <div>
            <div> <Navbar /> </div>
            <div><Carousel /></div>
            <div>
                <card />
            </div>
            <div><Footer /> </div>
        </div >
    )
}
