import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4 border-gray-400'>About</p>
            </div>
            <br />
            <p className='text-xl'>
                Hello! I'm Anurag Kumar, a 21-year-old full-stack developer from Delhi. Currently, I'm in my 3rd year of pursuing a Bachelor of Engineering in Computer Science and Engineering at Chandigarh University.
            </p>
            <br />
            <p className='text-xl'>
                As a developer, my primary interest lies in Java development, leveraging tools such as Spring MVC, Spring Boot, JWT, and WebSockets. I also work extensively with Postman for API testing and SQL for database management. On the front-end, I'm exploring React.js and Tailwind CSS to create dynamic and responsive user interfaces.
                In addition to my technical skills, I'm proficient in Data Structures and Algorithms in Java, which enables me to solve complex problems efficiently and effectively in my projects.
            </p>
            <br />
            <p className='text-xl'>
                Beyond coding, I'm passionate about football and music. I play guitar in a band, and we've had the honor of winning multiple Battle of the Bands competitions.
                I'm excited to continue growing my skills and contributing to innovative projects. Thank you for visiting my portfolio!
            </p>
            <br />
        </div>
    </div>
  )
}

export default About