import React from 'react'
import Carousel from 'react-material-ui-carousel'
import img1 from '../../../../src/assets/user/internaute/actualite.png'
import img2 from '../../../../src/assets/user/internaute/acceuil.PNG'
import HeroSlider, {Slide,Nav,AutoplayButton} from 'hero-slider'
const kyoto = 'https://i.imgur.com/xw5Abku.jpg'

function Item(props){
  return (<div className='container-carousel'>
            <p className='text-carousel'>{props.item.text}</p> 
            <img src={props.item.image} alt='carousel image' />
          </div>  
      )
}
function Home() {
  var data = [ 
    { id:1, image:img2 , color:"red", text:"Nous offrons une platforme avancée pour vous aider à suivre et optimiser votre consommation d'energie électrique."},
    { id:2, image:img2 , color:"blue", text:"Nous aidons nos clients à optimiser leur consommation d'énergie et à réaliser des économies tout en préservant l'environnement."},
    { id:3, image:img2 , color:"green", text:"Nous aidons nos clients à optimiser leur consommation d'énergie et à réaliser des économies tout en préservant l'environnement."},
    { id:4, image:img2 , color:"yellow", text:"Découvrez comment nous pouvons vous aider à réduire vos coûts d'énergie tout en assurant une consommation responsable."}
  ]
  return (
    <div id='accueil' className='inter-section'>
      {/* <h1 className='title-internaute'>Accueil</h1> 
        <h3>Bienvenue sur notre site <b>Smart Grid</b> dédié à la gestion d'energie électrique avec des compteurs intelligente.</h3>   */}
          {/* { data.map( (item, i) => <Item key={i} item={item} /> )  } */}

    <HeroSlider
      slidingAnimation='left_to_right'
      orientation='horizontal'
      set
      initialSlide={1}
      style={{
        backgroundColor: '#000'
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 2000,
        height: '100vh'
      }}>
     
      <AutoplayButton />

      <Slide
        shouldRenderMask
        background={{
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: img2,
          backgroundAnimation: 'fade'
        }} />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: img2,
          backgroundAnimation: 'fade'
        }} />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: img1,
          backgroundAnimation: 'fade'
        }} />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: img2,
          backgroundAnimation: 'fade'
        }} />

      <Nav />
    </HeroSlider>   
    </div>
  )
}

export default Home;
