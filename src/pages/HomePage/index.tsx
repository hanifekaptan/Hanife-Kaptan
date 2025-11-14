import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import IntroSection from './components/IntroSection/IntroSection';
import AboutSection from './components/AboutSection/AboutSection';
import TechSkillsSection from './components/TechSkilllsSection/TechSkillsSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import PostsSection from './components/PostsSection/PostsSection';
import CTASection from './components/CTASection/CTASection';

import styles from './HomePage.module.css';


const HomePage: React.FC = () => {
    return (
        <div className={styles.homePage}>
            <HeroSection />
            <IntroSection />
            <AboutSection />
            <TechSkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <PostsSection />
            <CTASection />
        </div>
    );
};

export default HomePage;