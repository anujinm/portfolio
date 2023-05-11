import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Image from 'next/image'
import avatar from '../public/ai-avatar.png'
import faithlife from '../public/faithlife.png'
import olive from '../public/olive.jpg'
import logos from '../public/logos.png'
import codeu from '../public/codeu.png'
import ffour from '../public/14four-logo.png'
import dev from '../public/dev.png'
import explorer from '../public/explorer.png'
import entrepreneur from '../public/entrepreneur.png'
import phone from '../public/mobile.png'
import chat from '../public/chat.png'
import { useState } from 'react'
import MapChart from "./MapChart";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Anujin Munkhbat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-beige lg:p-10 md:p-20 lg:p-30 dark:bg-black-blue">
        <div className="bg-white dark:bg-light-beige md:p-10 shadow-xl drop-shadow-2xl w-fit lg:rounded-2xl sm:rounded-none md:my-0">
          <section className="">
            <nav className="py-10 mb-12 flex justify-end">
              {/* <h1 class="text-xl font-burtons collapse md:visible">DevelopedByAnu</h1> */}
              <div className="flex items-center">
                <button onClick={() => setDarkMode(!darkMode)}>
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl text-dark-purple"/>
                </button>
                <button>
                  <a className="bg-gradient-to-r from-raspberry to-red text-white px-4 py-2 rounded-md ml-8 mr-3" href="./Resume.pdf" target="_blank">Resume</a>
                </button>
              </div>
            </nav>
            <div class="grid align-middle lg:grid-cols-2 gap-10 md:grid-cols-2 grid-cols-1">
              <div class="align-middle self-center">
                <div className="text-center p-2 md:p-10">
                  <h2 className="text-5xl py-2 text-red dark:text-raspberry font-medium md:text-5xl">Anujin Munkhbat</h2>
                  <h3 className="text-sm py-2 text-gray">Developer | Designer | Entrepreneur</h3>
                  <p className="text-md py-5 leading-8 text-gray md:text-xl max-w-xl mx-auto">Software Engineer with a passion to design and build meaningful products that have a positive impact.</p>
                </div>
                <div className="text-3xl flex justify-center gap-10 py-0 text-light-blue">
                  <a href="https://github.com/anujinm" target="_blank"><AiFillGithub/></a>
                  <a href="https://www.linkedin.com/in/anujin-munkhbat" target="_blank"><AiFillLinkedin/></a>
                </div>
              </div>
                <div className="mx-auto bg-gradient-to-b from-beige dark:from-black-blue rounded-full">
                  <Image alt="avatar" src={avatar} class="object-contain lg:w-fit lg:h-fit lg:pb-4 md:w-fit md:h-fit md:pt-6 h-64 w-64"/>
                </div>
            </div>
          </section>
       
          {/* Second Page - Professional Journey*/}

          <section class="md:my-10 lg:w-fit bg-beige dark:bg-black-blue rounded-2xl shadow-lg hover:drop-shadow-2xl">
            <div class="md:flex-row md:block lg:flex lg:justify-between lg:items-start lg:py-7">
              <div class="sticky top-0 p-4 md:justify-center md:flex">
                <h1 className="text-5xl font-bold py-20 pl-8 flex justify-center dark:text-white">My Professional Journey</h1>
              </div>
              <div className="flex-grow p-4 md:py-0">
                <div className="sticky">
                  {/* cool graph of my timeline */}

                  <div className="ml-0 md:ml-6 lg:ml-0 sticky">
                    <div className="relative py-10 px-5 h-full">
                      <div className="border-rosy dark:border-red absolute h-96/100 lg:right-1/2 right-4/5 border-2 border-solid text-rosy rounded-sm"></div>
                      <div class="border-rosy dark:border-red absolute h-96/100 lg:left-1/2 left-1/5 border-2 border-solid text-rosy rounded-sm"> </div>
                      
                      {/* First left item */}
                      <div class="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline lg:left-timeline">
                        <div class="timeline-item-buffer"></div>
                        <div class="timeline-item-content md:timeline-item-content-md lg:timeline-item-content-left-lg">
                          <h4 class="mb-3 font-bold text-lg md:text-2xl dark:text-white">Software Engineer ll</h4>
                          <p class="text-gray-purple dark:text-light-blue text-md">Faithlife, Logos Desktop Team</p>
                          <p class="mb-3 text-base text-red dark:text-red">March 2020 - Current</p>

                          <div class="mt-1 text-sm md:text-base text-gray dark:text-white">
                              <ul class="list-none">
                                <li class="py-1">Led the development of a major feature for the latest release of the Logos app, which was highly valued by customers and contributed to a record-breaking increase in profits.</li>
                                <li class="py-1">Maintained and implemented software features on multiple platforms, including macOS, Windows, and the web, ensuring seamless user experience and functionality.</li>
                                <li class="py-1">Strengthened team collaboration and improved project outcomes through effective leadership skills developed by mentoring interns and leading projects.</li>
                              </ul>
                            <p className="italic font-semibold my-1">C#, .NET, WPF, Objective-C, JavaScript, TypeScript, Azure, MySQL</p>
                          </div>
                        </div>
                        <div class="timeline-img-container md:timeline-img-container-md lg:timeline-img-container-lg">
                          <Image class="lg:h-8 lg:w-8 h-6 w-6" src={logos} alt="logos"/>
                        </div>
                      </div>

                      {/* Second right item */}
                      <div class="mb-8 flex justify-between items-center w-full right-timeline">
                        <div class="timeline-item-buffer"></div>
                        <div class="timeline-item-content md:timeline-item-content-md lg:timeline-item-content-right-lg">
                          <h4 class="mb-3 font-bold text-lg md:text-2xl dark:text-white">Software Engineering Intern</h4>
                          <p class="text-gray-purple dark:text-light-blue text-md">Faithlife, Faithlife.com Team</p>
                          <p class="mb-3 text-base text-red dark:text-red">Summer 2019</p>
                          <div class="mt-1 text-sm md:text-base leading-snug text-gray dark:text-white">
                            <ul>
                              <li class="py-1">Contributed to building and maintaining the company&apos;s flagship social web platform as a member of the Faithlife.com team, resulting in increased user engagement and retention. </li>
                              <li class="py-1">Spearheaded the integration of a new dashboard feature that streamlined access to multiple internal products.</li>
                            </ul>
                            <p class="italic font-semibold my-1">React, JavaScript, TypeScript</p>
                          </div>
                        </div>
                        <div class="timeline-img-container  md:timeline-img-container-md lg:timeline-img-container-lg">
                          <Image class="lg:h-8 lg:w-8 h-6 w-6" src={faithlife} alt="fl" />
                        </div>
                      </div>

                      {/* Third left item */}
                      <div class="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline lg:left-timeline">
                        <div class="timeline-item-buffer"></div>
                        <div class="timeline-item-content md:timeline-item-content-md lg:timeline-item-content-left-lg">
                          <h4 class="mb-3 font-bold text-lg md:text-2xl dark:text-white">iOS Development Intern</h4>
                          <p class="text-gray-purple dark:text-light-blue text-md">Olive Tree Bible Software</p>
                          <p class="mb-3 text-base text-red dark:text-red">Sept 2018 - May 2019</p>
                          <div class="mt-1 text-sm md:text-base leading-snug text-gray dark:text-white">
                            <p>Integrated new features into the app such as Siri Shortcuts, Vision Accessibility support, and ML model that leverages Natural Language Processing</p>
                            <p class="italic font-semibold my-1">Objective-C, ML</p>
                          </div>
                        </div>
                        <div class="timeline-img-container md:timeline-img-container-md lg:timeline-img-container-lg">
                          <Image class="lg:h-8 lg:w-8 h-6 w-6" src={olive} alt="olive"/>
                        </div>
                      </div>

                      {/* Fourth right item */}
                      <div class="mb-8 flex justify-between items-center w-full right-timeline">
                        <div class="timeline-item-buffer"></div>
                        <div class="timeline-item-content md:timeline-item-content-md lg:timeline-item-content-right-lg">
                          
                          <h4 class="mb-3 font-bold text-lg md:text-2xl dark:text-white">Web Development Intern</h4>
                          <p class="text-gray-purple dark:text-light-blue text-md">14Four</p>
                          <p class="mb-3 text-base text-red dark:text-red">May - Aug 2018</p>
                          <div class="mt-1 text-sm md:text-base leading-snug text-gray dark:text-white">
                            <ul>
                              <li class="py-1">Learned and applied new skills in the internship project including creating a web app for cooking recipes and measurement conversions.</li>
                              <li class="py-1">Contributed to various client projects such as websites and banners upon request.</li>
                            </ul>
                            <p class="italic font-semibold my-1">VueJS, JavaScript, NodeJS, MySQL, AWS</p>
                          </div>
                        </div>
                        <div class="timeline-img-container md:timeline-img-container-md lg:timeline-img-container-lg">
                          <Image class="lg:h-8 lg:w-8 h-6 w-6" src={ffour} alt="ff" />
                        </div>
                      </div>

                      {/* Fifth left item */}
                      <div class="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline lg:left-timeline">
                        <div class="timeline-item-buffer"></div>
                        <div class="timeline-item-content md:timeline-item-content-md lg:timeline-item-content-left-lg">
                          <h4 class="mb-3 font-bold text-lg md:text-2xl dark:text-white">Google CodeU Program Alumna</h4>
                          <p class="text-gray-purple dark:text-light-blue text-md">Google Developers</p>
                          <p class="mb-3 text-base text-red dark:text-red">Feb - May 2018</p>
                          <div class="mt-1 text-sm md:text-base leading-snug text-gray dark:text-white">
                            <ul>
                              <li class="py-1">Collaborated with a team of 4 students and a Google Software Engineer as a mentor.</li>
                              <li class="py-1">Developed a chat web application for CS college students. Integrated user profile page and served as a UI Lead</li>
                            </ul>
                            <p class="italic font-semibold my-1">Java, Google Cloud Platform</p>
                          </div>
                      </div>
                        <div class="timeline-img-container md:timeline-img-container-md lg:timeline-img-container-lg">
                          <Image class="lg:h-8 lg:w-8 h-6 w-6" src={codeu} alt="codeu"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Middle filler */}
          <section class="columns-3 justify-between my-20 md:my-28">
            <div className="flex flex-col gap-4 items-center">
              <Image src={dev} alt="developer"/>
              <h2 className="text-black-blue">Developer</h2>
            </div>
            <div className="flex flex-col items-center gap-4 border-x-2 border-raspberry">
              <Image src={explorer} alt="explorer"/>
              <h2 className="text-black-blue">Explorer</h2>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Image src={entrepreneur} alt="entrepreneur" height="50"/>
              <h2 className="text-black-blue">Entrepreneur</h2>
            </div>
          </section>

          {/* About me */}
          <section class="my-5 md:my-10 bg-beige dark:bg-black-blue rounded-2xl">
            <div class="p-4 md:justify-center md:flex">
              <h1 className="w-1/3 text-5xl text-left font-bold pt-20 pl-8 dark:text-white">My Personal Journey</h1>
              <h4 class="w-fit md:w-2/3 justify-center pt-4 md:pt-20 lg:pt-24 px-8 md:px-28 md:text-right italic font-semibold text-sm md:text-lg text-dark-purple dark:text-light-blue">
                 I believe the best education is gained through experience. Join me on my journey as I uncover new cultures, gain fresh insights, and leave my mark on this world map. 
              </h4>
            </div>
            <div class="mr-4 md:mr-28">
              <MapChart />
            </div>

            <div class="flex justify-center pb-10 md:pb-32">
              <div class=" border-b-2 border-raspberry justify-center w-1/3"/>
            </div>  

            <div class="flex flex-col md:flex-row md:px-12 pb-20">
              <Image src={phone} alt="mobile" class="align-middle self-center lg:pl-20 object-contain w-2/3 lg:max-w-md lg:max-h-150"/>

              <div class="dark:text-white px-10 lg:pl-20 pt-16 align-middle md:w-1/2">
                <p class="text-xs lg:text-2xl text-dark-purple dark:text-white">
                  As both an entrepreneur and small-business owner, I take on a diverse range of responsibilities,
                   from strategic planning to day-to-day operations.</p>
                <p class="text-xs lg:text-2xl text-dark-purple dark:text-white">  With a multifaceted skill set and a passion for 
                   success, I am able to wear many hats and effectively manage all aspects of my business.</p>
                <h3 class="text-3xl text-dark-purple dark:text-white hidden">As an entrepreneur and a small-business owner, I wear many hats:</h3>
                <ul class="list-none py-4 md:py-8 text-left text-dark-purple dark:text-light-blue text-xs lg:text-lg font-semibold">
                  <li class="py-1">I am a</li>
                  <li class="py-1">Brand Strategist</li>
                  <li class="">Creative Director</li>
                  <li class="py-1">Content Creator</li>
                  <li class="">Digital Marketing Specialist</li>
                </ul>
                
                <p class="text-xs lg:text-lg"> Through my diverse skill set and experience, I aim to create a strong and authentic brand identity that resonates
                    with my audience.</p>
                <button class="my-10">
                  <a className="bg-gradient-to-r from-raspberry to-red text-white px-4 py-2 rounded-md" href="https://ellys-style.myshopify.com/" target="_blank">Visit Store</a>
                </button>
              </div>
            </div>
          </section>
          
          {/* Third page  - Testimonials */}
          <section class="my-20 dark:bg-black-blue hidden rounded-2xl">
            <h3 className="text-2xl font-bold py-10 pl-8 flex justify-center dark:text-white">Testimonials</h3>
            <div class="grid grid-cols-2 md:grid-cols-4">
              <div className="max-w-xl m-5 p-4 text-sm text-gray-800 italic rounded-lg bg-neutral-100 bg-opacity-20 text-neutral-600 shadow-md">
                <div className="mb-2">
                  <div class="h-2 text-xl text-left text-gray-600">“</div>
                  <p className="text-center px-4">You were instrumental to the success of Logos 10</p>
                  <div class="h-1 text-xl text-right text-gray-600">”</div>
                </div> 
                <p className="text-sm text-center italic font-bold">Ryan Gano</p>
              </div>
              
              <div className="max-w-xl m-5 p-4 text-sm text-gray-800 italic rounded-lg bg-neutral-100 bg-opacity-20 text-neutral-600 shadow-md">
                <div className="mb-2">
                  <div class="h-2 text-xl text-left text-gray-600">“</div>
                  <p className="text-center px-4">Pleasure to work with</p>
                  <div class="h-1 text-xl text-right text-gray-600">”</div>
                </div> 
                <p className="text-sm text-center italic font-bold">Matt Preucil</p>
              </div>

              <div className="max-w-xl m-5 p-4 text-sm text-gray-800 italic rounded-lg bg-neutral-100 bg-opacity-20 text-neutral-600 shadow-md">
                <div className="mb-2">
                  <div class="h-2 text-xl text-left text-gray-600">“</div>
                  <p className="text-center px-4">Tenacious and meticulous</p>
                  <div class="h-1 text-xl text-right text-gray-600">”</div>
                </div> 
                <p className="text-sm text-center italic font-bold">Andrew Batishko</p>
              </div>

              <div className="max-w-xl m-5 p-4 text-sm text-gray-800 italic rounded-lg bg-neutral-100 bg-opacity-20 text-neutral-600 shadow-md">
                <div className="mb-2">
                  <div class="h-2 text-xl text-left text-gray-600">“</div>
                  <p className="text-center px-4">Exceeds expectations</p>
                  <div class="h-1 text-xl text-right text-gray-600">”</div>
                </div> 
                <p className="text-sm text-center italic font-bold">Nick Mueller</p>
              </div>
            </div>
          </section>
         
          {/* Contact form */}
          <section class="mt-12 px-8 md:px-12 lg:px-16 pt-16 mx-auto bg-beige dark:bg-black-blue rounded-2xl grid gap-8 grid-cols-1 md:grid-cols-2 bg-gray-100 text-gray-purple dark:text-light-blue">
            <div>
              <h2 class="text-4xl lg:text-5xl font-bold leading-tight dark:text-raspberry">Lets get in touch!</h2>
              <p class="dark:text-light-blue mt-8 pr-12">Interested in working together? Feel free to reach out via  
              <a class="" href="https://www.linkedin.com/in/anujin-munkhbat" target="_blank"> LinkedIn</a> or email: anujin.munhbat@gmail.com</p>
            </div>
            <Image src={chat} alt="conversation" />
          </section>

          {/* Footer */}
          <div class="justify-center my-10 md:mt-20 md:mb-5 text-gray">
            <p class="py-3 flex justify-center font-thin">Copyright 2023. Made by Anujin Munkhbat</p>
            
            <div className="flex justify-evenly">
              <div className="h-2 w-1/4 bg-beige dark:bg-dark-purple"></div>
              <div className="h-2 w-1/4 bg-rosy dark:bg-red"></div>
              <div className="h-2 w-1/4 bg-dark-red"></div>
              <div className="h-2 w-1/4 bg-light-blue dark:bg-black-blue"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
