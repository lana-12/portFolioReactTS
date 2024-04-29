import React, { useState, useEffect, MouseEventHandler } from 'react';
import { Button } from 'react-bootstrap';

interface BtnScrollProps {
    id: string;
    title: string;
    nameBtn: string;
    href?: string | null | undefined;
    actionBtn?: MouseEventHandler<HTMLButtonElement>;

}

const BtnScroll: React.FC<BtnScrollProps> = ({ id, title, nameBtn, href=null, actionBtn}) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <Button 
            className="btn btnCustomLink" 
            size="lg" 
            id={id} 
            title={title} 
            href={href ?? undefined} 
            style={{ display: showButton ? 'block' : 'none' }}
            onClick={actionBtn}
        >
            {nameBtn}
        </Button>
    );
};

export default BtnScroll;
