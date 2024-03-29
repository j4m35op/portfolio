import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/tictactoe.jpg";
import project2 from "../../public/images/projects/stack.png";
import project3 from "../../public/images/projects/snake.png";
import project4 from "../../public/images/projects/signuplogin.png";
import project5 from "../../public/images/projects/solarsystem.png";
import project6 from "../../public/images/projects/virtualcard.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            " />
            <Link href={link} target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10"> {" "} <GithubIcon />{" "}</Link>
                    <Link href={link} target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                        dark:bg-light dark:text-dark 
                        sm:px-4 sm:text-base
                        "
                    >Visit Project</Link>
                </div>

            </div>

        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        ">

            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            " />

            <Link href={link} target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>

                <div className="w-full mt-2 flex items-center justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className="text-lg font-semibold underline md:text-base"
                    >
                        Visit</Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6">
                        <GithubIcon />
                    </Link>

                </div>

            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>James Rathod | Projects</title>
                <meta name="description" content="know more about me" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Tic Tac Toe Game"
                                img={project1}
                                summary="Immerse yourself in the nostalgia of childhood with my meticulously crafted Tic Tac Toe web game. Using HTML and CSS, I've recreated the beloved classic for endless entertainment right on your web browser. With a clean, intuitive interface, players can enjoy manual gameplay, challenging friends or family to strategic matches. So, gather your opponents and let the X's and O's fill the grid in this timeless web rendition of Tic Tac Toe."
                                link="https://tictactoe-by-james.vercel.app/"
                                github="https://github.com/j4m35op/tictactoe-game"
                                type="Featured Project"

                            />

                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Stack Game"
                                img={project2}
                                summary="Engage in the addictive challenge of stacking slabs with my custom-built web game, Stack Slab. Utilizing HTML and CSS, this game presents players with the thrilling task of constructing the tallest tower they can manage. With intuitive controls and a sleek design, Stack Slab promises hours of entertainment and skill-testing fun, perfect for anyone seeking a captivating gaming experience right from their web browser."
                                link="https://stack-by-james.vercel.app/"
                                github="https://github.com/j4m35op/stack-game"
                                type="Featured Project"

                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Snake Game"
                                img={project3}
                                summary="Indulge in the timeless joy of the Snake game with my custom-built web version. Developed using HTML and CSS, this rendition brings the classic arcade experience to your fingertips, right in your web browser. Maneuver the snake through the grid, gobbling up food and growing longer with each successful bite."
                                link="https://snake-by-james.vercel.app/"
                                github="https://github.com/j4m35op/Snake-Game"
                                type="Featured Project"

                            /></div>

                        <div className="col-span-12">
                            <FeaturedProject
                                title="SignUp Login Page"
                                img={project4}
                                summary="Explore my latest project, a bespoke 3D Signup/Login page designed to redefine user interaction on the web. Crafted using modern web technologies like HTML, CSS, and potentially JavaScript, this project showcases an innovative approach to web interface design. With its captivating 3D visuals and seamless navigation, users can effortlessly register or access their accounts in style, setting a new standard for web interfaces."
                                link="https://signup-login-form-by-james.vercel.app/"
                                github="https://github.com/j4m35op/signup-login-form"
                                type="Featured Project"

                            />

                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Solar System Visualisation"
                                img={project5}
                                summary="Experience the wonders of space with my Solar System visualization project, crafted using HTML, CSS, and possibly JavaScript. Navigate through the celestial bodies of our solar system, from the blazing sun to the outer reaches, all within your web browser. This visually captivating project not only showcases your web development skills but also provides an immersive journey through the cosmos for users."
                                link="https://solar-system-by-james.vercel.app/"
                                github="https://github.com/j4m35op/solar-system"
                                type="Featured Project"

                            /></div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Virtual Card"
                                img={project6}
                                summary="Indulge in the timeless joy of the Snake game with my custom-built web version. Developed using HTML and CSS, this rendition brings the classic arcade experience to your fingertips, right in your web browser. Maneuver the snake through the grid, gobbling up food and growing longer with each successful bite."
                                link="https://jamesvirtualcard.netlify.app/"
                                github="https://github.com/j4m35op/virtualcard"
                                type="Featured Project"

                            /></div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;