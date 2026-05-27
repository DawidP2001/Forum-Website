interface Section1798Props {
    title: string;
    description: string;
    imageUrl: string;
}

const Section1798: React.FC<Section1798Props> = ({ title, description, imageUrl }) => {
    return (
        <section style={{ display: 'flex', alignItems: 'center', padding: '2rem' }}>
            <div style={{ flex: 1 }}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div style={{ flex: 1 }}>
                <img src={imageUrl} alt="Section1798" style={{ width: '100%', height: 'auto' }} />
            </div>
        </section>
    );
}

export default Section1798;