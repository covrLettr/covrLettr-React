import React from 'react';
import styles from './HeroImage.css';
import HeroPicture from '../../../public/assets/heroImage.jpg';

const HeroImage = () => <img className={styles.img} src={HeroPicture} />;


export default HeroImage;
