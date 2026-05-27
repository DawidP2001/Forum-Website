interface FallSectionProps {
    title: string;
    description: string;
    imageUrl: string;
}

const FallSection: React.FC<FallSectionProps> = ({ title, description, imageUrl }) => {
    return (
        <section style={{ display: 'flex', alignItems: 'center', padding: '2rem' }}>
            <div style={{ flex: 1 }}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div style={{ flex: 1 }}>
                <img src={imageUrl} alt="Fall" style={{ width: '100%', height: 'auto' }} />
            </div>
        </section>
    );
}

export default FallSection;