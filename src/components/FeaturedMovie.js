import React, { useState } from 'react';
import './FeaturedMovie.css';

function Main(item){
    const [n, set_n] = useState('');
    item.item.then(aux => set_n(aux));

    let firstDate = new Date(n.first_air_date);
    let genres = [];
    for(let i in n.genres){
        genres.push( n.genres[i].name);
    }
    console.log(n);
    console.log(n.overview);
    let description = n.overview;
    console.log(description);
    
    description = n.overview;
    // console.log(description)
    try {
        description = description.substring(0, 200)+'...'
    } catch (error) {
        console.log(error)
    }
    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${n.backdrop_path})`

        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{n.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{n.vote_average}</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">
                            {n.number_of_seasons} temporada{n.number_of_seasons !==1 ? 's': ''}
                        </div>
                        <div className="featured--description">{description}</div>
                        <div className="featured--buttons">
                            <a className="featured--watchbutton" href={`/watch/${n.id}`}>Assistir</a>
                            <a className="featured--watchbutton" href={`/watch/add/${n.id}`}>+ Minha lista</a>
                        </div>
                        <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Main;