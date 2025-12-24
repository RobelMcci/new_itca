import CircularGallery from "../components/CircularGallery";

export default function HomeTech() {
    return (
        <div className="home-tech">
            <div className="home-tech-text">
                <h1>Technology</h1>
                <p>Nous utilisons des Technology de pointes pour assurer la sérucitée, la performance et le design de chaque application/logiciel que nous concevons avec ITConceptor</p>
            </div>
            <div className="home-tech-gallery">
                <CircularGallery bend={3} textColor="#000000ff" borderRadius={0.05} scrollEase={0.02} />
            </div>
        </div>
    );
}