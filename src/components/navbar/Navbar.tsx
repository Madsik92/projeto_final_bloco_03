import { ShoppingCart, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {

	return (
		<>
			<div className="flex justify-center w-full py-4 text-white bg-slate-800">
				<div className="container flex items-center justify-between mx-4 text-lg">
					<div className="flex items-center gap-2 justify-center">
						<img
							src="https://cdn.discordapp.com/attachments/1306319291171471411/1343911653153968251/favicon.png?ex=67befec2&is=67bdad42&hm=8b68e47a5e3b144b678eb4efcac616c888136c3b4da0b7217150399539d6b38f&"
							alt="Logo"
							className="w-10"
						/>

						<Link to={'/'}><h1>Farmácia</h1></Link>
					</div>


					<div className="flex items-center gap-4 py-4">

						<Link
							to="/"
							className="hover:underline"
						>
							Produtos
						</Link>
						<Link
							to="/categorias"
							className="hover:underline"
						>
							Categorias
						</Link>
						<Link
							to="/cadastrarcategoria"
							className="hover:underline"
						>
							Cadastrar Categoria
						</Link>

						<User size={32} weight="bold" />
						<ShoppingCart size={32} weight="bold" />
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar