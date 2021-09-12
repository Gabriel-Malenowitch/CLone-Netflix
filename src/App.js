import Tmdb from './Tmdb';
import './App.css';
import { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'

let Main = ()=>{

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  
  useEffect(()=>{
    const loadAll = async ()=>{
      // Pegando a lista por completa
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChoise = Math.floor(Math.random() * (originals[0].items.results.length-1))
      let chose =  originals[0].items.results[randomChoise];
      let choseInfo = Tmdb.getMovieInfo(chose.id, 'tv');
      setFeaturedData(choseInfo);
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return ()=>{
      window.removeEventListener('scroll', scrollListener);
    }
  })

  /*
    Header
    Destaque
    Listas
    Rodapé
  */

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {
          movieList.map((item, key)=>{
            return(
              <MovieRow key={key}  title={item.title} items={item.items}/>
            )
          })
        }
      </section>

      <footer>
        <p>
        Feito por <strong>Gabriel Botelho Malenowitch</strong>, com muito 
        <span role="img" aria-label="coração">💝</span>
        </p>
        <p>Direitos de Imagem para Netflix</p>
        <p>Dados pegos do site Themoviedb.org</p>
      </footer>
    </div>
  );
}


export default Main;