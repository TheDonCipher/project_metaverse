'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Us" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        We are a brand-new technology business that sells{' '}
        <span className="font-extrabold text-white">refurbished</span> Samsung
        and iPhone smartphones. We focus on offering customers with the best
        smartphone deals so they get the latest in smartphone features with up
        to <span className="font-extrabold text-white">50% in savings.</span>
        <br />
        <br />
        We also offer well known methods of making payments as to ensure that
        customers make purchases smoothly. These purchases also come with a
        warranty, quick delivery, and first-rate customer support surpassing
        that of local retailers.
        <br />
        <br />
        Additionally, buying refurbished products is
        <span className="text-green-700"> good for the environment.</span>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
