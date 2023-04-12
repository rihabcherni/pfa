import React , {useState , useEffect} from 'react'
import Carousel from 'react-material-ui-carousel'
const data=[
  {
    travail : "Directeur général",
    nom : " Ahmed Ben Ali",
    formation : "Ingénieur en Énergie",
    experience : " Plus de 20 ans dans le secteur de l'énergie électrique",
    resp : "Supervision générale des opérations de la STEG",
  },
  {
    travail : "Responsable des opérations techniques",
    nom : "Fatma Ben Ammar",
    formation : "Ingénieur en Énergie",
    experience : " Plus de 15 ans dans le secteur de l'énergie électrique",
    resp : "Supervision des opérations quotidiennes et de la maintenance des infrastructures de la STEG",
  },
  {
    travail : "Responsable des finances ",
    nom : "Mohamed Nasri",
    formation : "Diplôme en Finance",
    experience : "Plus de 10 ans dans le secteur financier",
    resp : "Gestion des finances de la STEG, y compris la comptabilité, les budgets et la planification financière",
  },
  {
    travail : "Responsable des ressources humaines",
    nom : "Amina Ben Ahmed",
    formation : "Diplôme en Ressources Humaines",
    experience : "Plus de 8 ans dans la gestion des ressources humaines",
    resp : "Responsabilités: Gestion des politiques de ressources humaines de la STEG, y compris le recrutement, la formation et le développement des employés",
  },
  {
    travail : "Responsable de la planification stratégique",
    nom : "Omar Mansour",
    formation : "Master en Administration des Affaires",
    experience : "Plus de 10 ans dans la planification stratégique",
    resp : "Développement de la stratégie d'entreprise de la STEG, y compris la planification à long terme et la mise en œuvre des objectifs stratégiques",
  },
   {
    travail : "Responsable de la communication",
    nom : "Nadia Ben Said",
    formation : "Diplôme en communication",
    experience : "Plus de 12 ans dans la communication et les relations publiques",
    resp : "Responsable de la communication interne et externe de la STEG, y compris la gestion de l'image de l'entreprise et la coordination avec les médias",
  }
];
function Equipe() {
  const [produit, setProduit] = useState(data);

  if (produit !== null) {
    const sliderItems = produit.length > 3 ? 3 : produit.length;
    const items = [];

    for (let i = 0; i < produit.length; i += sliderItems) {
      if (i % sliderItems === 0) {
        items.push(
          <div className='equipe-container' key={i.toString()}>
            {produit.slice(i, i + sliderItems).map((da, index) => {
              return (
              <div className='card' key={index.toString()} item={da}>
                <h3>Responsable de la planification stratégique</h3>
                <ul>
                <img src={`./${da.photo}`} style={{ height: '200px', width: '200px' }} alt={`${da.nom}`} />
                <li>Nom:  {da.nom}</li>
                    <li>Formation:  {da.formation}</li>
                    <li>Expérience professionnelle:  {da.experience}</li>
                    <li>Responsabilités:  {da.resp}</li>
                </ul>
              </div>
              );
            })}
          </div>
        );
      }
    }

    return (
      <div id='equipe' className='inter-section'>
         <h1 className='title-internaute'>Notre équipe</h1> 
         Nous sommes une équipe passionnée et engagée dans la mise en place de solutions intelligentes pour la gestion de l'énergie électrique. Nous avons des compétences variées dans les domaines de l'ingénierie, de la gestion de projet, de la communication et du marketing.
         <h2>Nos membres</h2>
        <Carousel indicators={false}>
          {items}
        </Carousel>
        <h2>Nos valeurs</h2>
        Nous croyons en la durabilité et en l'efficacité énergétique comme moyen de préserver l'environnement et de promouvoir une utilisation responsable de l'énergie électrique. Nous sommes déterminés à fournir des solutions innovantes et efficaces pour répondre aux besoins de nos clients tout en préservant les ressources naturelles.

        <h2>Joindre notre équipe</h2>
        Si vous partagez nos valeurs et notre passion pour l'innovation et la durabilité, nous sommes intéressés à entendre parler de vous. Consultez notre page "Carrières" pour voir nos offres d'emploi actuelles et soumettez votre candidature.
 
        Notre équipe de travail est passionnée par notre mission de fournir de l'énergie fiable et durable à la Tunisie. Nous travaillons ensemble pour fournir les meilleurs services à nos clients et pour atteindre les objectifs de notre entreprise.
      </div>
      
    );
  } else {
    return <></>;
  }
}export default Equipe;
