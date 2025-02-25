function Home() {
    return (
        <>
            <div className="w-full flex justify-center bg-gradient-to-b from-neutral-200 to-transparent">
                <div className="container grid grid-cols-1 md:grid-cols-2 text-stone-800">
                    <div className="ffont-medium order-2 md:order-1 flex flex-col items-center justify-center gap-4 px-4 py-4">
                        <h2>Seja Bem Vinde!</h2>
                        <p>Aqui você encontra Medicamentos e Cosméticos!</p>
                    </div>

                    
                    
                </div>
                <div className="order-1 md:order-2 flex justify-center" >
                        <img
                            src="https://cdn.discordapp.com/attachments/1306319291171471411/1343911654408065044/home.png?ex=67befec3&is=67bdad43&hm=d18ac6e8fb675966ebed620960266ac7cc7d686754a7bbd7fde188c28b88c53d&"
                            alt="Imagem da Página Home" className="w-2/3 py-5"
                        />
                    </div>
            </div>
        </>
    )
}

export default Home