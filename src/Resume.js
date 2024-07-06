// import React from 'react';

// import './Res.css';
// // import PIC from './thalapathy.jpg';

// export default function Resume() {
//     return (
//         <div className='container'>
//             <header>
//                 <h1 className='pt-5'>Nandigam Naresh</h1>
//                 <h2>Front-End Developer</h2>
//             </header>
//             <section>
//                 {/* <img src={PIC} alt="Profile" className="profile-img" width={'100%'} /> */}
                
//                 <video width={"100%"} controls>
//                     <source src="vijayspeech.mp4" type="video/mp4" controls />
//                     Your browser does not support the video tag.
//                 </video>
//                 <h3 className='mt-5'>Introduction</h3>
//                 <p>
//                     Hello, I'm Nandigam Naresh, a dedicated Front-End Developer with a strong passion for crafting engaging user experiences. My expertise lies in HTML5, CSS3, and JavaScript, and I'm proficient in popular front-end frameworks like Bootstrap. I specialize in building dynamic interfaces with React.js and have experience in server-side development using Node.js and MongoDB.
//                 </p>
//             </section>
//             <section>
//                 <h3>Education</h3>
//                 <p>
//                     I completed my Bachelor of Technology in Computer Science and Engineering with distinction from RVR&JC, where I honed my technical skills and problem-solving abilities. Throughout my academic journey, I maintained a keen interest in technology, which led me to pursue projects ranging from responsive e-commerce websites to innovative news and music weather applications, all showcased on my GitHub profile.
//                 </p>
//             </section>
//             <section>
//                 <h3>Experience</h3>
//                 <p>
//                     In my most recent role at Talent Pro, I've developed responsive web applications, implemented robust front-end designs, and contributed to enhancing user experiences through intuitive interfaces. I thrive in collaborative environments, actively participating in code reviews and offering constructive feedback to my colleagues.
//                 </p>
//             </section>
//             <section>
//                 <h3>Internship</h3>
//                 <p>
//                     During my internship at Nfen Info Labs LLP from October 3, 2023, to December 30, 2023, I was associated with the Web Development team. I was responsible for assisting in various web development projects, contributing  front-end  development tasks. Notably, I played a crucial role in the development of the Leven Soft Pvt Ltd website, where I designed and implemented various features using HTML, CSS, Bootstrap, JavaScript, and ReactJS. This experience enhanced my functionality and user experience skills, further solidifying my strong work ethic, problem-solving abilities, and collaborative attitude.
//                 </p>
//             </section>
//             <section>
//                 <h3>Conclusion</h3>
//                 <p>
//                     Beyond coding, I enjoy exploring new technologies and indulging in movies during my leisure time. My goal is to leverage my skills and creativity to contribute to innovative projects that push the boundaries of user interface design and functionality.
//                 </p>
//             </section>
//             <div>
//                 <p className='text-warning ' style={{ textAlign: 'center' }}>Thank you for considering my application. I look forward to discussing how my skills and experiences can contribute to your team's success.</p> <br />
//                 <p style={{ marginLeft: '100px' }}>Best regards,</p> <br />
//                 <p style={{ marginLeft: '100px' }}>Nandigam Naresh</p>
//             </div>
//         </div>
//     )
// }







import React from 'react';
import './Res.css';
// import PIC from './thalapathy.jpg';

export default function Resume() {
    return (
        <div className='container'>
            <div id="res-header">
                <h1 id='header-title'>Nandigam Naresh</h1>
                <h2 id='header-subtitle'>Front-End Developer</h2>
            </div>
            <div id="section">
                {/* <img src={PIC} alt="Profile" className="profile-img" width={'100%'} /> */}
                <video width={"95%"} controls>
                    <source src="vijayspeech.mp4" type="video/mp4" controls />
                    Your browser does not support the video tag.
                </video>
                <h3 id='section-title' className='mt-5'>Introduction</h3>
                <p>
                    Hello, I'm Nandigam Naresh, a dedicated Front-End Developer with a strong passion for crafting engaging user experiences. My expertise lies in HTML5, CSS3, and JavaScript, and I'm proficient in popular front-end frameworks like Bootstrap. I specialize in building dynamic interfaces with React.js and have experience in server-side development using Node.js and MongoDB.
                </p>
            </div>
            <div id="section">
                <h3 id='section-title'>Education</h3>
                <p>
                    I completed my Bachelor of Technology in Computer Science and Engineering with distinction from RVR&JC, where I honed my technical skills and problem-solving abilities. Throughout my academic journey, I maintained a keen interest in technology, which led me to pursue projects ranging from responsive e-commerce websites to innovative news and music weather applications, all showcased on my GitHub profile.
                </p>
            </div>
            <div id="section">
                <h3 id='section-title'>Experience</h3>
                <p>
                    In my most recent role at Talent Pro, I've developed responsive web applications, implemented robust front-end designs, and contributed to enhancing user experiences through intuitive interfaces. I thrive in collaborative environments, actively participating in code reviews and offering constructive feedback to my colleagues.
                </p>
            </div>
            <div id="section">
                <h3 id='section-title'>Internship</h3>
                <p>
                    During my internship at Nfen Info Labs LLP from October 3, 2023, to December 30, 2023, I was associated with the Web Development team. I was responsible for assisting in various web development projects, contributing front-end development tasks. Notably, I played a crucial role in the development of the Leven Soft Pvt Ltd website, where I designed and implemented various features using HTML, CSS, Bootstrap, JavaScript, and ReactJS. This experience enhanced my functionality and user experience skills, further solidifying my strong work ethic, problem-solving abilities, and collaborative attitude.
                </p>
            </div>
            <div id="section">
                <h3 id='section-title'>Conclusion</h3>
                <p>
                    Beyond coding, I enjoy exploring new technologies and indulging in movies during my leisure time. My goal is to leverage my skills and creativity to contribute to innovative projects that push the boundaries of user interface design and functionality.
                </p>
            </div>
            <div>
                <p className='text-warning ' style={{ textAlign: 'center' }}>Thank you for considering my application. I look forward to discussing how my skills and experiences can contribute to your team's success.</p> <br />
                <p style={{ marginLeft: '100px' }}>Best regards,</p> <br />
                <p style={{ marginLeft: '100px' }}>Nandigam Naresh</p>
            </div>
        </div>
    )
}






