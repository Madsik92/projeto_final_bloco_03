import { ShoppingCart, User } from "@phosphor-icons/react";

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

                        <h1>Farmácia</h1>
                    </div>
						
					

					<div className="flex items-center gap-4 py-4">
						
						Produtos
						
						Categorias
						
						Cadastrar Categoria
						
						<User size={32} weight="bold"/>
						<ShoppingCart size={32} weight="bold"/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar