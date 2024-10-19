


function BoxMusic({cover, name, music, link}) {

    return (

        <div className="BM"> 
            <img className="imgBM1" src={cover} />
            <p className="nameC" >{name}</p>
            <p className="nameM" >{music}</p>
            
            <a className="YT1" href={link} target="_blank">Ouça Aqui</a>
           
        </div>

 )
}

export default BoxMusic;

