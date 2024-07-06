
// import Man3 from "./man3.png";
// import Man3 from './rvr1.png';
import Man3 from './pofi-6.png';
// import About from './about-me-pic2.png';
import About from './Naresh-Verticle.png';

import news from './breaking-news1.gif';
import gym from './gym-api.jpg';
import weather from './weather-api5.gif';
import todolist from './todo-list.gif';
import spotify from './spotify2.gif';
import product from './product.gif';
import housing from './housing1.gif';
import website from './website.gif'

// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';


import One from './1.jpg';
import Two from './2.jpg';
import Three from './3.jpg';
import Four from './4.jpg';
import Five from './5.jpg';
import Six from './6.jpg';



import "./App2.css";
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';



function App2() {
    useEffect(() => {
        let words = document.querySelectorAll(".word");
        words.forEach((word) => {
            let letters = word.textContent.split("");
            word.textContent = "";
            letters.forEach((letter) => {
                let span = document.createElement("span");
                span.textContent = letter;
                span.className = "letter";
                word.append(span);
            });
        });

        let currentWordIndex = 0;
        let maxWordIndex = words.length - 1;
        if (words[currentWordIndex]) {
            words[currentWordIndex].style.opacity = "1";
        }

        let changeText = () => {
            let currentWord = words[currentWordIndex];
            let nextWord =
                currentWordIndex === maxWordIndex
                    ? words[0]
                    : words[currentWordIndex + 1];

            Array.from(currentWord.children).forEach((letter, i) => {
                setTimeout(() => {
                    letter.className = "letter out";
                }, i * 80);
            });
            nextWord.style.opacity = "1";
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = " letter behind";
                setTimeout(() => {
                    letter.className = "letter in";
                }, 340 + i * 80);
            });

            currentWordIndex =
                currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        };
        changeText();
        setInterval(changeText, 3000);
    }, []);


    const [isSticky, setIsSticky] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const onButtonClick = () => {
        const pdfUrl = "Naresh Experince CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Naresh Experince CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    //   const form = useRef();

    //   const sendEmail = (e) => {
    //     e.preventDefault();
    //     alert("bhgfxfc")

    //     emailjs
    //       .sendForm('service_q88v43e', 'template_pxt2x14', form.current, {
    //         publicKey:'_QwNd5b5naC47SC8X',
    //       })
    //       .then(
    //         () => {
    //           console.log('SUCCESS!');
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //         },
    //       );
    //   };



    // const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     alert("Successful completed 😊");

    //     emailjs
    //         .sendForm('service_tayg9tj', 'template_f0fiihl', form.current, 'p0R8YyrMcGON_tGWu')
    //         .then(
    //             (result) => {
    //                 console.log('SUCCESS!', result.text);
    //             },
    //             (error) => {
    //                 console.log('FAILED...', error.text);
    //             }
    //         );
    // };


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        alert("Successful completed 😊");

        emailjs
            .sendForm('service_tayg9tj', 'template_f0fiihl', form.current, 'p0R8YyrMcGON_tGWu')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };



    const Hire = useNavigate()
    const HireBut = () => {
        Hire('/hire')
    }

    const Res = useNavigate()
    const ResBut = () => {
        Res('/resume')
    }




    return (
        <div>
            <header className={isSticky ? 'sticky' : ''}>
                <div className="logo">
                    <span>N</span>aresh.
                </div>
                <ul className="navlist">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div id="menu-icon" className="bx bx-menu"></div>
            </header>







            <section id="home" className="home">
                <div className="home-content">
                    <h1>Hi! I'm Nandigam Naresh</h1>
                    <div className="change-text">
                        <h3>And I'm</h3><br></br>
                        <h3>
                            <span className="word">Frontend &nbsp; Developer &nbsp; &nbsp;</span>
                            {/* <span className="word">Coder &nbsp; &nbsp; &nbsp;</span>
                            <span className="word">Web Developer</span> */}
                        </h3>
                    </div>

                    <p>DEveloped a Frontend page and interact with html page</p>
                    <div className="info-box">
                        <div className="email-info">
                            <h5>Email:</h5>
                            <span>Nandigamnaresh999@gmail.com</span>
                        </div>
                        <div className="behance-info ms-5">
                            <h5>Number:</h5>
                            <span>9390091216</span>
                        </div>
                    </div>

                    <div className="btn-box">
                        <a className="btn" download="Naresh Experince CV.pdf" onClick={onButtonClick} target='_blank'>
                            Dowload CV
                        </a>
                        <a className="btn" onClick={HireBut}>
                            Hire Me Now
                        </a>
                    </div>

                    <div className="social-icons">
                        <a href="https://www.facebook.com/nandigamn34" target='next'>
                            <i class="bx bxl-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/nandigam__naresh/" target='next'>
                            <i class="bx bxl-instagram"></i>
                        </a>
                        <a href="https://x.com/Chinna10362558" target='next'>
                            <i class="bx bxl-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nandigam-naresh-0b3331237/" target='next'>
                            <i class="bx bxl-linkedin-square"></i>
                        </a>
                    </div>
                </div>

                <div className="home-image">
                    <div className="img-box">
                        <img src={Man3} />
                    </div>

                    <div className="liquid-shape">
                        <svg
                            viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            id="blobSvg">
                            <path fill="#12f7ff">
                                <animate attributeName="d"
                                    dur="20000ms"
                                    repeatCount="indefinite"
                                    values="M420,289Q385,328,364,369.5Q343,411,296.5,454Q250,497,193.5,472Q137,447,121,390Q105,333,86,291.5Q67,250,51,188Q35,126,99.5,114Q164,102,207,68.5Q250,35,303,51Q356,67,375.5,116.5Q395,166,425,208Q455,250,420,289Z;


M433,296.5Q411,343,380.5,383.5Q350,424,300,436.5Q250,449,209.5,419.5Q169,390,123.5,369.5Q78,349,59.5,299.5Q41,250,65,203.5Q89,157,130.5,135.5Q172,114,211,67.5Q250,21,308.5,34Q367,47,393,100Q419,153,437,201.5Q455,250,433,296.5Z


M445,307.5Q450,365,412.5,415.5Q375,466,312.5,454.5Q250,443,191.5,447.5Q133,452,104.5,401Q76,350,53.5,300Q31,250,60.5,204Q90,158,110,100.5Q130,43,190,45Q250,47,297,67Q344,87,376.5,122.5Q409,158,424.5,204Q440,250,445,307.5Z


M432,298Q416,346,379,377.5Q342,409,296,440Q250,471,202,444Q154,417,97,394Q40,371,49,310.5Q58,250,84.5,210Q111,170,131.5,125Q152,80,201,45.5Q250,11,291.5,58.5Q333,106,362.5,137Q392,168,420,209Q448,250,432,298Z


M404.5,295.5Q408,341,382.5,388Q357,435,303.5,432.5Q250,430,196.5,432.5Q143,435,104,396Q65,357,48.5,303.5Q32,250,43.5,193.5Q55,137,92.5,89.5Q130,42,190,29Q250,16,303,41.5Q356,67,390,108.5Q424,150,412.5,200Q401,250,404.5,295.5Z


M412,298.5Q417,347,381.5,381Q346,415,298,422Q250,429,194.5,435.5Q139,442,92.5,405Q46,368,24.5,309Q3,250,32.5,196Q62,142,101,100.5Q140,59,195,32Q250,5,310.5,23Q371,41,408.5,89Q446,137,426.5,193.5Q407,250,412,298.5Z


M428.5,296Q409,342,376.5,378Q344,414,297,444.5Q250,475,193.5,460.5Q137,446,118,391.5Q99,337,64,293.5Q29,250,55,201Q81,152,116,115Q151,78,200.5,62.5Q250,47,307,50Q364,53,389.5,104Q415,155,431.5,202.5Q448,250,428.5,296Z


M446.5,301Q427,352,390,390Q353,428,301.5,430Q250,432,197,432.5Q144,433,92.5,401.5Q41,370,45.5,310Q50,250,79,209Q108,168,133,129.5Q158,91,204,78Q250,65,297.5,75Q345,85,400.5,108Q456,131,461,190.5Q466,250,446.5,301Z


M453.5,303Q434,356,397,398.5Q360,441,305,438.5Q250,436,193,441.5Q136,447,120,390.5Q104,334,85.5,292Q67,250,71.5,200Q76,150,118,122Q160,94,205,60Q250,26,291.5,66.5Q333,107,359,139.5Q385,172,429,211Q473,250,453.5,303Z

M467.5,304Q437,358,395,393.5Q353,429,301.5,418.5Q250,408,209,400Q168,392,143.5,359Q119,326,67,288Q15,250,31.5,191.5Q48,133,90,89Q132,45,191,49Q250,53,305,56Q360,59,382,110Q404,161,451,205.5Q498,250,467.5,304Z

M472,308Q450,366,397,389.5Q344,413,297,430.5Q250,448,196,442.5Q142,437,117,389Q92,341,49.5,295.5Q7,250,24.5,190Q42,130,91,94.5Q140,59,195,38Q250,17,302,43.5Q354,70,375.5,117.5Q397,165,445.5,207.5Q494,250,472,308Z

M455,302.5Q431,355,385,379.5Q339,404,294.5,428.5Q250,453,193.5,449Q137,445,104,399Q71,353,72.5,301.5Q74,250,78,201.5Q82,153,108.5,102Q135,51,192.5,68Q250,85,293,93Q336,101,368,132Q400,163,439.5,206.5Q479,250,455,302.5Z

M442.5,308Q452,366,392,379Q332,392,291,423Q250,454,198,442Q146,430,107,392.5Q68,355,75,302.5Q82,250,66.5,192.5Q51,135,93.5,94Q136,53,193,54Q250,55,289,84.5Q328,114,360.5,140.5Q393,167,413,208.5Q433,250,442.5,308Z
"
                                ></animate>
                            </path>
                        </svg>
                    </div>


                    <div className="liquid-shape">
                        <svg
                            viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            id="blobSvg">
                            <path fill="#12f7ff">
                                <animate attributeName="d"
                                    dur="20000ms"
                                    repeatCount="indefinite"
                                    values="M420,289Q385,328,364,369.5Q343,411,296.5,454Q250,497,193.5,472Q137,447,121,390Q105,333,86,291.5Q67,250,51,188Q35,126,99.5,114Q164,102,207,68.5Q250,35,303,51Q356,67,375.5,116.5Q395,166,425,208Q455,250,420,289Z;


M433,296.5Q411,343,380.5,383.5Q350,424,300,436.5Q250,449,209.5,419.5Q169,390,123.5,369.5Q78,349,59.5,299.5Q41,250,65,203.5Q89,157,130.5,135.5Q172,114,211,67.5Q250,21,308.5,34Q367,47,393,100Q419,153,437,201.5Q455,250,433,296.5Z


M445,307.5Q450,365,412.5,415.5Q375,466,312.5,454.5Q250,443,191.5,447.5Q133,452,104.5,401Q76,350,53.5,300Q31,250,60.5,204Q90,158,110,100.5Q130,43,190,45Q250,47,297,67Q344,87,376.5,122.5Q409,158,424.5,204Q440,250,445,307.5Z


M432,298Q416,346,379,377.5Q342,409,296,440Q250,471,202,444Q154,417,97,394Q40,371,49,310.5Q58,250,84.5,210Q111,170,131.5,125Q152,80,201,45.5Q250,11,291.5,58.5Q333,106,362.5,137Q392,168,420,209Q448,250,432,298Z


M404.5,295.5Q408,341,382.5,388Q357,435,303.5,432.5Q250,430,196.5,432.5Q143,435,104,396Q65,357,48.5,303.5Q32,250,43.5,193.5Q55,137,92.5,89.5Q130,42,190,29Q250,16,303,41.5Q356,67,390,108.5Q424,150,412.5,200Q401,250,404.5,295.5Z


M412,298.5Q417,347,381.5,381Q346,415,298,422Q250,429,194.5,435.5Q139,442,92.5,405Q46,368,24.5,309Q3,250,32.5,196Q62,142,101,100.5Q140,59,195,32Q250,5,310.5,23Q371,41,408.5,89Q446,137,426.5,193.5Q407,250,412,298.5Z


M428.5,296Q409,342,376.5,378Q344,414,297,444.5Q250,475,193.5,460.5Q137,446,118,391.5Q99,337,64,293.5Q29,250,55,201Q81,152,116,115Q151,78,200.5,62.5Q250,47,307,50Q364,53,389.5,104Q415,155,431.5,202.5Q448,250,428.5,296Z


M446.5,301Q427,352,390,390Q353,428,301.5,430Q250,432,197,432.5Q144,433,92.5,401.5Q41,370,45.5,310Q50,250,79,209Q108,168,133,129.5Q158,91,204,78Q250,65,297.5,75Q345,85,400.5,108Q456,131,461,190.5Q466,250,446.5,301Z


M453.5,303Q434,356,397,398.5Q360,441,305,438.5Q250,436,193,441.5Q136,447,120,390.5Q104,334,85.5,292Q67,250,71.5,200Q76,150,118,122Q160,94,205,60Q250,26,291.5,66.5Q333,107,359,139.5Q385,172,429,211Q473,250,453.5,303Z

M467.5,304Q437,358,395,393.5Q353,429,301.5,418.5Q250,408,209,400Q168,392,143.5,359Q119,326,67,288Q15,250,31.5,191.5Q48,133,90,89Q132,45,191,49Q250,53,305,56Q360,59,382,110Q404,161,451,205.5Q498,250,467.5,304Z

M472,308Q450,366,397,389.5Q344,413,297,430.5Q250,448,196,442.5Q142,437,117,389Q92,341,49.5,295.5Q7,250,24.5,190Q42,130,91,94.5Q140,59,195,38Q250,17,302,43.5Q354,70,375.5,117.5Q397,165,445.5,207.5Q494,250,472,308Z

M455,302.5Q431,355,385,379.5Q339,404,294.5,428.5Q250,453,193.5,449Q137,445,104,399Q71,353,72.5,301.5Q74,250,78,201.5Q82,153,108.5,102Q135,51,192.5,68Q250,85,293,93Q336,101,368,132Q400,163,439.5,206.5Q479,250,455,302.5Z

M442.5,308Q452,366,392,379Q332,392,291,423Q250,454,198,442Q146,430,107,392.5Q68,355,75,302.5Q82,250,66.5,192.5Q51,135,93.5,94Q136,53,193,54Q250,55,289,84.5Q328,114,360.5,140.5Q393,167,413,208.5Q433,250,442.5,308Z
"
                                ></animate>
                            </path>
                        </svg>
                    </div>


                </div>
            </section>



            {/* about */}
                                


            <section id="about" className="about">
                <div className="img-about">
                    <img src={About} />
                    <div className="info-about1">
                        <span>6+</span>
                        <p>Months of Experience</p>
                    </div>
                    <div className="info-about2">
                        <span>1</span>
                        <p>Project Completed</p>
                    </div>
                    <div className="info-about3">
                        <span>6+</span>
                        <p>Months Intership</p>
                    </div>
                </div>
                <div className="about-content">
                    <span>Let me introduce myself</span>
                    <h2>About Me</h2>
                    <h3>Hello Everyone ....</h3>
                    <p>My name is Nandigam Naresh , I am from Guntur. I am born and rised in kastala , This is my native place.  &nbsp; Recently completed my graduate as a computer science and engineering in rvr&jc at guntur from 2020 to 2023 with aggregate cgpa 7.    &nbsp; I have knowledge about reactjs, html, css, bootstrap and basics are nodejs, java, python. <br></br>
                        <p style={{ marginTop: "10px" }}>My ultimate is to get a job in reputed company and settle in life both financially and professinally</p>
                    </p>
                    <div className="btn-box">
                        <a onClick={ResBut} className="btn">Read More!</a>
                    </div>
                </div>
            </section>





            {/* service */}


            <section id="services" className="services">
                <div className="main-text">
                    <span>What i will do for you</span>
                    <h2>Our Services</h2>
                </div>


                <div className="section-services">
                    <div className="service-box">
                        <i class='bx bxs-layer service-icon'></i>
                        <h3>Frontend Developer</h3>
                        <p>focuses on creating an intuitive and user-friendly interface. Our professionals use cutting-edge design tools and principles for building interactive elements, and smooth navigation to ensure that your users can navigate the website and app effortlessly, giving them an enjoyable experience.</p>
                        <div className="btn-box service-btn">
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>

                    <div className="service-box">
                        <i class='bx bx-code-alt service-icon'></i>

                        <h3>Frontend Developer</h3>
                        <p>focuses on creating an intuitive and user-friendly interface. Our professionals use cutting-edge design tools and principles for building interactive elements. and we are using the technologies for creating webiste HTML5 ,CSS3 ,javascript and  React js ,Make the webiste Both static and Dynamic</p>
                        <div className="btn-box service-btn">
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>


                    <div className="service-box">
                        <i class='bx bx-desktop service-icon'></i>
                        <h3>Frontend Developer</h3>
                        <p>focuses on creating an intuitive and user-friendly interface. Our professionals use cutting-edge design tools and principles for building interactive elements.we can do the webistes both static and dyanmic and more important we can create webiste with great Responsive by using frame works.</p>
                        <div className="btn-box service-btn">
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>


                </div>
            </section>









            {/* sills */}




            <section id="skills" className="skills">
                <div className="main-text">
                    <span>Technical and professional</span>
                    <h2>My Skills</h2>
                </div>

                <div className="skill-main">




                    <div className="skill-left">
                        <h3>Technical Skills</h3>
                        <div className="skill-bar">
                            <div className="info">
                                <p>HTML</p>
                                <p>75%</p>
                            </div>
                            <div className="bar">
                                <span className="html"></span>
                            </div>
                        </div>


                        <div className="skill-bar">
                            <div className="info">
                                <p>REACT.js</p>
                                <p>70%</p>
                            </div>
                            <div className="bar">
                                <span className="figma"></span>
                            </div>
                        </div>


                        <div className="skill-bar">
                            <div className="info">
                                <p>JAVASCRIPT</p>
                                <p>70%</p>
                            </div>
                            <div className="bar">
                                <span className="javascript"></span>
                            </div>
                        </div>


                        <div className="skill-bar">
                            <div className="info">
                                <p>CSS</p>
                                <p>65%</p>
                            </div>
                            <div className="bar">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>


                    {/* <div className="skill-left">
                        <h3>Professional Skills</h3>
                        <div className="skill-bar">
                            <div className="info">
                                <p>Team Work</p>
                                <p>75%</p>
                            </div>
                            <div className="bar">
                                <span className="html"></span>
                            </div>
                        </div>


                        <div className="skill-bar">
                            <div className="info">
                                <p>Team Work</p>
                                <p>70%</p>
                            </div>
                            <div className="bar">
                                <span className="figma"></span>
                            </div>
                        </div>


                        <div className="skill-bar">
                            <div className="info">
                                <p>Team Work</p>
                                <p>70%</p>
                            </div>
                            <div className="bar">
                                <span className="javascript"></span>
                            </div>
                        </div>


                        <div className="skill-bar">
                            <div className="info">
                                <p>Team Work</p>
                                <p>65%</p>
                            </div>
                            <div className="bar">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div> */}



                    {/* <div className="skill-right">
                        <h3>Professional Skills</h3>
                        <div className="porfessional">
                            <div className="box">
                                <div className="circle" data-dots="80" data-percent="90"></div>
                                <div className="text">
                                    <big>90%</big>
                                    <small>Team Work</small>
                                </div>
                            </div>



                            <div className="box">
                                <div className="circle" data-dots="80" data-percent="90"></div>
                                <div className="text">
                                    <big>90%</big>
                                    <small>Team Work</small>
                                </div>
                            </div>




                            <div className="box">
                                <div className="circle" data-dots="80" data-percent="90"></div>
                                <div className="text">
                                    <big>90%</big>
                                    <small>Team Work</small>
                                </div>
                            </div>




                            <div className="box">
                                <div className="circle" data-dots="80" data-percent="90"></div>
                                <div className="text">
                                    <big>90%</big>
                                    <small>Team Work</small>
                                </div>
                            </div>
                        </div>
                    </div>
 */}








                </div>
            </section>
















            {/* portfolio */}



            <section id="portfolio" className="portfolia">
                <div className="main-text">
                    <span>What i will do for you</span>
                    <h2>Latest Project</h2>
                </div>

                <div className="container">
                    <div className="fillter-buttons">
                        <button className="btn" data-filter="all">All</button>
                        <button className="btn" data-filter="product">Product</button>
                        <button className="btn" data-filter="inter">Interacting</button>
                        <button className="btn" data-filter="web">Web App</button>
                    </div>

                    <div className="portfolio-Gallery">

                        <div className="port-box mix product">
                            <div className="port-image">
                                <img src={news} />
                            </div>

                            <div className="port-content">
                                <h3>News App</h3>
                                <p>the news app provides a clean interface with a navbar for accessing various news categories and a search bar for finding specific articles.</p>
                                <a href="https://naresh-newsapi.netlify.app/" target="_blank"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>




                        <div className="port-box mix product">
                            <div className="port-image">
                                <img src={gym} />
                            </div>

                            <div className="port-content">
                                <h3>Gym App</h3>
                                <p>The gym app includes a navbar with component for different exercise and a search bar to find exercise by body part.</p>
                                <a href="https://naresh-gym.netlify.app/" target="_blank"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>


                        <div className="port-box mix inter">
                            <div className="port-image">
                                <img src={weather} />
                            </div>

                            <div className="port-content">
                                <h3>Weather App</h3>
                                <p>In that weather report website, I am create thee fuctionality like when we enter the city name in the search bar it will be shown the total weather report.</p>
                                <a href="https://weather-info-nar.netlify.app/" target="_blank"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>


                        <div className="port-box mix inter">
                            <div className="port-image">
                                <img src={todolist} />
                            </div>

                            <div className="port-content">
                                <h3>To-Do List</h3>
                                <p>In that to-do list handling:use usestate to manage tasks and implementing onclick for adding ,deleting.</p>
                                <a href="https://naresh-todo.netlify.app/" target="_blank"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>



                        <div className="port-box mix inter">
                            <div className="port-image">
                                <img src={spotify} />
                            </div>

                            <div className="port-content">
                                <h3>Music Appp</h3>
                                <p>The music app feature a sleek interface with a navbar for browsing playlists,album and artist  along with a search bar for spec task.</p>
                                <a href="https://naresh-spotify.netlify.app/" target="_blank"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>


                        <div className="port-box mix product">
                            <div className="port-image">
                                <img src={product} />
                            </div>

                            <div className="port-content">
                                <h3>Product App</h3>
                                <p>The product website seach a product will show the produc like dress or gold. In this product using tech reactjs,html,css</p>
                                <a href="https://naresh-product.netlify.app/" target="_blank"><i class='bx bx-link-external' ></i></a>
                            </div>
                        </div>




                        <div className="port-box mix web">
                            <div className="port-image">
                                <img src={housing} />
                            </div>

                            <div className="port-content">
                                <h3>Housing App</h3>
                                <p>The housing app is a static website. in this website add media query like mobile view , tabs and laptop. Using tech html,css,bootstrap</p>
                                <a href="https://naresh-housing.netlify.app/" target="_blank"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>



                        <div className="port-box mix inter">
                            <div className="port-image">
                                <img src={website} />
                            </div>

                            <div className="port-content">
                                <h3>MY Project</h3>
                                <p>my multiple project website. Including a navbar aceesing varios components a todo-list, product, text-util,calcu.</p>
                                <a href="https://naresh-website.netlify.app/" target="_blank"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>





                    </div>
                </div>
            </section>



            {/* Contact */}


            <section id="contact" className="contant">
                <div className="main-text">
                    <span>ask me question</span>
                    <h2>Contact me</h2>
                </div>

                {/* <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Your Name" name="user_name" />
        <input type="email" placeholder="Your Email" name="user_email"/>
        <input type="text" placeholder="Your" />
        <input type="number" placeholder="Phone Number"/>
        <textarea id="" cols="" rows="" placeholder="Your Message"  name="message"></textarea>
        <div className="btn-box formBtn">
            <button type="submit" className="btn">Send Message</button>
        </div>
    </form> */}
                {/* <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Your Name" name="user_name" />
                    <input type="email" placeholder="Your Email" name="user_email" />
                    <input type="number" placeholder="Phone Number" name="user_phone" />
                    <textarea cols="" rows="" placeholder="Your Message" name="message"></textarea>
                    <div className="btn-box formBtn">
                        <button type="submit" className="btn">Send Message</button>
                    </div>
                </form> */}


                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Enter Your Full Name" id="name" name="user_name" required />
                    <input type="email" placeholder="Enter Your Email Id" id="mail" name="user_email" required />
                    <input type="number" placeholder="Enter Your Phone Number" id="num" name="user_phone" required />
                    <input type="text" placeholder="Enter Your Address" id="addr" name="user_address" required />
                    <textarea id="txt" placeholder="Enter Your Message" name="message" required></textarea>
                    <div className="btn-box formBtn">
                        <button type="submit" className="btn" value="Send">Send Message</button>
                    </div>
                </form>


            </section>

            <footer>
                <p>Copyright &copy; 2023 by ParsCoder || All Right Reserved</p>
                <a href="#home"><i class='bx bx-up-arrow-alt'></i></a>
            </footer>





        </div>

    );
}

export default App2;
