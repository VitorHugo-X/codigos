import BoxMusic from "./BoxMusic"
import Eugostoassim from "../assets/Eugostoassim.jpg"
import x600bb from "../assets/x600bb.jpg"
import x600bb1 from "../assets/x600bb1.jpg"
import x600bb2 from "../assets/x600bb2.jpg"
import x600bb3 from "../assets/x600bb3.jpg"
import x600bb4 from "../assets/x600bb4.jpg"
import x600bb5 from "../assets/x600bb5.jpg"
import x600bb6 from "../assets/x600bb6.jpg"
import x600bb7 from "../assets/x600bb7.jpg"
import x600bb8 from "../assets/x600bb8.jpg"

function MaisPedidas() {

    return (


        <section className="AMP">
            <h1> As Mais Pedidas </h1>
            <div className="Musics">

            <BoxMusic cover={Eugostoassim} name="Gustavo Mioto, Mari Fernandez" music="Eu Gosto Assim" link=" https://www.youtube.com/watch?v=af8fdbaB8JY " />
            <BoxMusic cover={x600bb} name="Ze Neto e Cristiano" music="Deu Moral" link=" https://www.youtube.com/watch?v=CH8-4BbYSf4 " />
            <BoxMusic cover={x600bb1} name="Jorge e Mateus" music="Haverá Sinais" link=" https://www.youtube.com/watch?v=Muo3F10dAcw " />
            <BoxMusic cover={x600bb2} name="Luan Santana" music="Eu Sou Sentimento" link=" https://www.youtube.com/watch?v=Ad1s0Xn2VDo " />
            <BoxMusic cover={x600bb3} name="Gustavo Lima" music="Relação Errada" link=" https://www.youtube.com/watch?v=y4IIym6BmX0 " />
            <BoxMusic cover={x600bb4} name="Simone Mendes" music="Dois Tristes" link=" https://www.youtube.com/watch?v=KPQkb2AuXSw " />
            <BoxMusic cover={x600bb5} name="Ana Castela" music="Minha Herança" link=" https://www.youtube.com/watch?v=OrIlirfhorI " />
            <BoxMusic cover={x600bb6} name="Diego e Victor Hugo" music="Bem Mais Que Eu" link=" https://www.youtube.com/watch?v=5OFR4soB5xw " />
            <BoxMusic cover={x600bb7} name="Guilherme e Benuto" music="Chorosa" link=" https://www.youtube.com/watch?v=qMH3ZGDG1VQ " />
            <BoxMusic cover={x600bb8} name="Felipe e Rodrigo" music="Gosta De Rua" link=" https://www.youtube.com/watch?v=ZsN_0_6yEXk " />
            
           
                 

            </div> 
        </section>
        
        
    

 )
}

export default MaisPedidas;
