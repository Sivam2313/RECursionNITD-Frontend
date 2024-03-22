/* eslint-disable */
import React from 'react'
import { gsap } from "gsap";

const Boxes = () => {
    gsap.to('.animate', {rotation: -360, duration: 40, repeat: -1, ease: 'linear'})
    gsap.to('.animate1', {rotation: 360, duration: 20, repeat: -1, ease: 'linear'})
    return (
        <div>
            <svg className='absolute animate rotate-[12deg] opacity-30 z-10 top-[20vh] left-[10vw]' width="170" height="170" xmlns="http://www.w3.org/2000/svg">
                <rect className='z-10' width="150" height="150" x="10" y="10" rx='5' ry='5' style={{ fill: "#282828" }} />
            </svg>
            <svg className='absolute animate1 rotate-[-12deg] opacity-30 z-10 top-[22vh] right-[20vw]' width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                <rect className='z-10' width="50" height="50" x="10" y="10" rx='5' ry='5' style={{ fill: "#282828" }} />
            </svg>
            <svg className='absolute animate rotate-[-35deg] opacity-30 z-10 top-[28vh] right-[10vw]' width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect className='z-10' width="80" height="80" x="10" y="10" rx='5' ry='5' style={{ fill: "#282828" }} />
            </svg>
            <svg className='absolute animate1 rotate-[8deg] opacity-30 z-10 top-[58vh] left-[17vw]' width="170" height="170" xmlns="http://www.w3.org/2000/svg">
                <rect className='z-10' width="150" height="150" x="10" y="10" rx='5' ry='5' style={{ fill: "#282828" }} />
            </svg>
            <svg className='absolute animate rotate-[-22deg] opacity-30 z-10 top-[50vh] right-[24vw]' width="170" height="170" xmlns="http://www.w3.org/2000/svg">
                <rect className='z-10' width="150" height="150" x="10" y="10" rx='5' ry='5' style={{ fill: "#282828" }} />
            </svg>
            <svg className='absolute animate rotate-[20deg] opacity-30 z-10 top-[62vh] left-[50vw]' width="95" height="95" xmlns="http://www.w3.org/2000/svg">
                <rect className='z-10' width="75" height="75" x="10" y="10" rx='5' ry='5' style={{ fill: "#282828" }} />
            </svg>
            <svg className='absolute animate1 rotate-[50deg] opacity-30 z-10 top-[79vh] left-[40vw]' width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                <rect className='z-10' width="50" height="50" x="10" y="10" rx='5' ry='5' style={{ fill: "#282828" }} />
            </svg>
            <svg className='absolute animate1 rotate-[12deg] opacity-30 z-10 top-[75vh] left-[7vw]' width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                <rect className='z-10' width="50" height="50" x="10" y="10" rx='5' ry='5' style={{ fill: "#282828" }} />
            </svg>
            <svg className='absolute animate rotate-[30deg] opacity-30 z-10 top-[88vh] left-[15vw]' width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                <rect className='z-10' width="50" height="50" x="10" y="10" rx='5' ry='5' style={{ fill: "#282828" }} />
            </svg>
            <svg className='absolute animate rotate-[-10deg] opacity-30 z-10 top-[90vh] right-[40vw]' width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                <rect className='z-10' width="50" height="50" x="10" y="10" rx='5' ry='5' style={{ fill: "#282828" }} />
            </svg>
            <svg className='absolute animate1 rotate-[-22deg] opacity-30 z-10 top-[83vh] right-[20vw]' width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                <rect className='z-10' width="50" height="50" x="10" y="10" rx='5' ry='5' style={{ fill: "#282828" }} />
            </svg>
            <svg className='absolute animate rotate-[-8deg] opacity-30 z-10 top-[87vh] right-[7vw]' width="95" height="95" xmlns="http://www.w3.org/2000/svg">
                <rect className='z-10' width="75" height="75" x="10" y="10" rx='5' ry='5' style={{ fill: "#282828" }} />
            </svg>
        </div>
    )
}

export default Boxes