import { motion } from 'framer-motion';
import { BallCanvas, BallSm } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center gap-2 md:gap-10 mt-14">
        {technologies.map((technology) => (
          <div key={technology.name}>
          <div className="w-28 h-28 invisible md:visible" >
            <BallCanvas icon={technology.icon} />
          </div>
          <div className="w-20 h-20 visible md:invisible" >
            <BallSm icon={technology.icon} />
          </div>
          
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
