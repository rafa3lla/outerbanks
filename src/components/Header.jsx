import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header>
            <h1 className="text-8xl font-bold text-orange-950 mb-5"> Outer Banks </h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/personagens">Personagens</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}