import React, { useEffect, useState } from 'react';
import "./docs.css";

const ProgressBar: React.FC = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const startScroll = window.innerHeight;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollable = docHeight - startScroll;

            let percent = 0;
            if (scrollTop > startScroll && scrollable > 0) {
                percent = ((scrollTop - startScroll) / scrollable) * 100;
                percent = Math.min(Math.max(percent, 0), 100); 
            }
            setScrollPercent(percent);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate vertical position (e.g., between 30px and window.innerHeight-30px)
    const minY = 30;
    const maxY = window.innerHeight - 30 - 40; // 40 is the circle's diameter
    const top = minY + ((maxY - minY) * (scrollPercent / 100));

    return (
        <div className="progress_bar_container">
            <div
                style={{
                    position: 'fixed',
                    left: '30px',
                    top: `${top}px`,
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'black',
                    zIndex: -1,
                    transition: 'top 0.2s ease-out',
                }}
            />
        </div>
    );
};

export default ProgressBar;