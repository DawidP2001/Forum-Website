interface FooterProps {
    links?: { name: string; url: string }[];
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer style={{ padding: '1rem', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
            <p>&copy; 2024 My Company. All rights reserved.</p>
        </footer>
    );
}

export default Footer;