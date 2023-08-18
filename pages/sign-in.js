import React from 'react';
import styles from './styles/landingpage.module.css'; // Import the CSS module
import Navbar from '@/components/ui-components/NavBar';
import WelcomeBackSection from '@/components/WelcomeBackSection';
import FeatureSection from '@/components/FeatureSection';
import ActionButton from "@/components/ui-components/ActionButton";
import Section from "@/components/ui-components/Section";
import Card from "@/components/ui-components/Card";
import { useRouter } from 'next/router';

const SignInPage = () => {
    const router = useRouter();


    const handleButtonClick = () => {
        router.push('/');
    };

    return(
        <>
            <Navbar buttonLabel="Get Started" handleButtonClick={handleButtonClick} />


            <div className={styles.container}>
                <div className={styles.jumpo}>
                    {/* <img src='assets/logo-white.png' /> */}
                    <h1 style={{ fontSize: '50px ', }}>Unlock Business directories <br /> and Personal Potentials</h1>
                    <p style={{ fontSize: '20px', margin: '20px auto' }}>Meet prospective clients and vendors <br /> for your next product or service <br /> needs</p>
                    <ActionButton
                        label="Get Started"
                        inverse={false}
                        onClick={() => handleButtonClick()}
                        style={{ padding: '10px 30px', backgroundColor: '#BC400BCF' }}
                    />
                </div>
                <div className={styles.content}>
                    <WelcomeBackSection />
                    <FeatureSection />
                </div>
            </div>
        </> 
    );
};

export default SignInPage;