import React from 'react';
import CardSwap, { Card } from '../components/CardSwap';

export default function Home_service() {
    return (
        <div className="home-service-container">
            <div className='home-service-text'>
                <h1>Nos services</h1>
                <p>L'ITConceptor Agency of Madagascar propose divers services mais spécialement dans le monde numérique.</p>

            </div>
            <div className='home-service-cards'>
                <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={false}
                >
                    <Card>
                        <h3>Developpement et programmation</h3>
                        <p>ITConceptor propose des services de Developpement/Programmation web, mobile, desktop. des logiciel sur mésure adapter aux besoins des clients.</p>
                    </Card>
                    <Card>
                        <h3>automatisations</h3>
                        <p>Nous pouvons automatiser des services déjà existante afin d'améliorer la productiviter des entreprises graces à des services d'intelligences artificiel déjà pre-fabriquer ou bien personnaliser selon la demande du client.</p>
                    </Card>
                    <Card>
                        <h3>Design UI et UX</h3>
                        <p>Nous proposons des services de design pour améliorer les entreprises voulons améliorer leurs identités visuel ou bien pour ceux qui veulent en créer avec leurs propres touches personnels</p>
                    </Card>
                    <Card>
                        <h3>Maintenance logiciel</h3>
                        <p>Nous pouvons effectuer des services de maintenances des logiciel en cours afin de garder la stabiliter numérique des entreprises</p>
                    </Card>
                </CardSwap>
            </div>
        </div>
    );
}