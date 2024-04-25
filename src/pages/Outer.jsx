import outer from "/outer.webp"
import Header from "../components/Header"

export default function Outer() {
    return(
        <div className="bg-yellow-100">
            <header>
                <Header />
            </header>
            <section className="">
                <h2 className="text-3xl font-bold text-red-900 mb-10"> Série Outer Banks</h2>

                <img className="mb-3 flex justify-items-center" src={outer} alt="imagem outer banks" />

                <p className="font-poppins text-1xl mb-10 text-pink-950">Outer Banks
                2020 | Classificação etária:A16 | 3 temporadas | Drama
                Em uma ilha onde há pobres e ricos, o jovem John B convoca os três melhores amigos para procurarem por um tesouro lendário ligado ao desaparecimento de seu pai. Outer Banks acompanha um grupo de adolescentes da Carolina do Norte, mais conhecidos como "Pogues". John B (Chase Stokes) é o líder da gangue e passa seu tempo livre surfando e curtindo sua juventude. Um dia, em pleno verão, um furacão paralisa o fornecimento de eletricidade da cidade onde mora, desencadeando uma série de eventos bizarros em sua vida e na de seus amigos. Eles se deparam, então, com um segredo impressionante: o desaparecimento do pai de John durante um acidente de navio parece estar relacionado a um tesouro de quatro milhões de dólares, cheio de ouro. Com a ajuda dos "Pogues", John parte em uma missão para localizar seu pai e descobrir a verdade por trás dessa história. No entanto, mais um conflito é adicionado à vida de John quando ele começa a desenvolver sentimentos por Sarah (Madelyn Cline), a garota mais bonita e popular da cidade. O verão vai ser uma aventura memorável para os "Pogues", com muitos enigmas e emoções. <br />
                Estrelando:Chase Stokes,Madelyn Cline,Madison Bailey
                Criação:Josh Pate,Jonas Pate,Shannon Burke</p>

                <a className="text-2xl text-red-900" href="https://www.netflix.com/br/">Clique aqui para fazer sua assinatura na Netflix!</a>
            </section>
        </div>
    )
}