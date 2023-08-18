import React from 'react';
import ActionButton from "@/components/ui-components/ActionButton";
import Section from "@/components/ui-components/Section";
import Input from "@/components/ui-components/Input";
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './FeatureSection.module.css';

const FeatureSection = () => {

    const featuresData = [
        {
            imageUrl: '/assets/sign-in-register-svgrepo-com.png', // Replace with the actual image URL
            description: 'Become a Member by \n Creating a new account or sign-in as an existing user.',
        },
        {
            imageUrl: '/assets/chat-svgrepo-com.png', // Replace with the actual image URL
            description: 'Chat Unlimited! \n Share images, videos, \n files in your conversation.',
        },
        
        {
            imageUrl: '/assets/news-svgrepo-com.png', // Replace with the actual image URL
            description: 'Stay updated on Post \n and News carefully Curated your you.',
        },
        {
            imageUrl: '/assets/group-people-svgrepo-com.png', // Replace with the actual image URL
            description: 'Meet with People and Professionals \n in all sphere of Careers.',
        },
        {
            imageUrl: '/assets/shop-svgrepo-com.png', // Replace with the actual image URL
            description: 'Outlet is your Marketplace. \n Buy and sell Goods at a touch. Services can also be posted.',
        },
        {
            imageUrl: '/assets/connection-svgrepo-com.png', // Replace with the actual image URL
            description: 'Connect with People all over the world \n and reach out to more clients',
        },
    ]

    return (
        <div className={styles.featureSection}>
            <div className={styles.titleContainer}>
                <div className={styles.titleRectangle}>
                    <p>All Feature 2geda right here</p>
                </div>
            </div>
            <div className={styles.itemsContainer}>
                {featuresData.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                        <img style={{height: '20px', width: '20px'}} src={feature.imageUrl} alt={`Feature ${index + 1}` } />
                        <p style={{fontSize: '0.5em'}}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;

