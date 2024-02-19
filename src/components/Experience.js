import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                {position}&nbsp;
            <a href={companyLink} 
                target="_blank"
                className="text-primary dark:text-primaryDark capitalize"
            >
                @{company}
                </a>
            </h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {address}
            </span>
            <p className="font-medium w-full md:text-sm">
                {work}
            </p>
        </motion.div>
    </li>
    );
}

const Experience = () => {
    const ref = useRef (null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
            Experience
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

                <motion.div
                style={{scaleY: scrollYProgress}}
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                " />
                
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details 
                    position="Founder and Owner" company="JM&K Enterprises"
                    companyLink="www.jmandkenterprises.com"
                    time="2023" address="Vadodara, Gujarat, IN"
                    work=" I led a team specializing in dynamic social media marketing, delivering tailored strategies to businesses across industries. My expertise in innovation and results-driven approaches propelled brands to new heights through targeted campaigns, earning recognition for our impactful work and commitment to excellence."
                    />

<Details 
                    position="Director" company="Hamrah Charitable Trust"
                    companyLink="www.google.com"
                    time="2023" address="Vadodara, Gujarat, IN"
                    work="As the IT Manager at Hamrah Charitable Trust, I led a team in optimizing technological infrastructure and digital initiatives. My focus on efficiency and cybersecurity bolstered operations, integrating innovative solutions to support the trust's mission."
                    />

<Details 
                    position="Founder and Owner" company="Kirei Verse"
                    companyLink="https://www.instagram.com/kirei_verse/"
                    time="2023" address="Vadodara, Gujarat, IN"
                    work="At KireiVerse, we've built an anime clothing brand that blends fandom with fashion, offering stylish collections that resonate with enthusiasts worldwide. Our quality apparel allows fans to express their love for anime while fostering a vibrant community of like-minded individuals."
                    />

<Details 
                    position="Intern" company="CareerNaksha"
                    companyLink="https://www.careernaksha.com/"
                    time="2023" address="Vadodara, Gujarat, IN"
                    work="During my internship at Career Naksha, I collaborated closely with experienced professionals on diverse graphic design projects, refining my skills in digital media. Through hands-on experience and mentorship, I gained valuable insights into strategic design thinking, enhancing both my technical proficiency and understanding of the intersection between design and business objectives, setting a solid foundation for my future in graphic design."
                    />

                </ul>
            </div>
        </div>
    )
}

export default Experience