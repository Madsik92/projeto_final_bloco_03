import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center text-white bg-slate-800">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">Farmácia Jessica Rosário | Copyright: {data}</p>
                    <p className="text-lg">Acesse minhas redes sociais</p>
                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/in/jessica-rosario-" target="_blank">
                            <LinkedinLogo size={48} weight="bold" />
                        </a>
                        <a href="https://www.instagram.com/mad.sik/" target="_blank">
                            <InstagramLogo size={48} weight="bold" />
                        </a>
                        <a href="https://github.com/Madsik92" target="_blank">
                            <GithubLogo size={48} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer