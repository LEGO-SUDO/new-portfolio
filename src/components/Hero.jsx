import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { bwmap, worldmap, download, downloadHover, email, git, github1, linkedin } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
        </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full invisible md:visible md:block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                Nakul
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Passionate Software Developer   <br className="sm:block hidden" />
              creating digital magic one line of code at a time.
            </p>

            <button
              className="live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
              w-[125px] h-[46px] rounded-[10px] bg-jetLight 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() =>
                window.open(
                  './NAKUL_RESUME.pdf', //paste the link to your resume here
                  '_blank'
                )
              }
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download);
              }}>
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              />
            </button>

          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-2 bottom-40 md:bottom-20 z-0 w-full md:w-[50px] md:right-[50vw] 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div className= 'absolute invisible md:visible w-[100px] right-10 top-0 h-[100%] md:flex flex-col  gap-10 items-center justify-center'>
          <a href='https://github.com/LEGO-SUDO' target='_blank'>
          <div className='flex h-[40px] w-[120px] justify-end gap-4 items-center hover:text-[#39b54a] text-transparent'>
            <p className=''>
              GitHub
            </p>
          <img
            className=" w-[40px] h-[40px] cursor-pointer"
            src={github1}
            alt="github"
          />
          </div>
          </a>
          <a href='https://www.linkedin.com/in/nakulksingh' target='_blank'>
          <div className='flex h-[40px] w-[120px] justify-end gap-2 items-center hover:text-[#39b54a] text-transparent'>
            <p className=''>
              LinkedIn
            </p>
          <div className='h-[40px] w-[40px] rounded-[20px] border-white border-[2px] border-solid flex items-center justify-center '>
          <img
            className=" w-[40px] h-[40px] cursor-pointer"
            src={linkedin}
            alt="linkedin"
          />
          </div>
          </div>
          </a>
          <a href='mailto:nakulksingh3127@gmail.com' target='_blank'>
          <div className='flex h-[40px] w-[120px] justify-end gap-4 items-center hover:text-[#39b54a] text-transparent'>
            <p className=''>
              Email
            </p>
          <img
            className="w-[40px] h-[40px] cursor-pointer"
            src={email}
            alt="email"
          />
          </div>
          </a>
        </div>
        <div className= 'absolute visible md:invisible w-[100%] bottom-10 left-0 h-[100px] flex flex-row items-center justify-center gap-10'>
          <a href='https://github.com/LEGO-SUDO' target='_blank'>
          <img
            className="w-[40px] h-[40px] cursor-pointer"
            src={github1}
            alt="github"
          />
          </a>
          <a href='https://www.linkedin.com/in/nakulksingh' target='_blank'>
          <div className=' h-[40px] md:h-[40px] w-[40px] rounded-[20px] border-white border-[2px] border-solid flex items-center justify-center '>
          <img
            className=" w-[40px] h-[40px] cursor-pointer"
            src={linkedin}
            alt="linkedin"
          />
          </div>
          </a>
           <a href='mailto:nakulksingh3127@gmail.com' target='_blank'>
          <img
            className=" w-[40px] h-[40px] cursor-pointer"
            src={email}
            alt="email"
          />
          </a>
        </div>
      </section>

    </>
  );
};

export default Hero;
