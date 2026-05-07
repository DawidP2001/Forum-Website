import React from 'react';

interface NavbarProps {
    title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
            <h1>{title}</h1>
        </nav>
    );
};

export default Navbar;