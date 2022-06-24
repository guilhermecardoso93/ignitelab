import { DiscordLogo, Lightning } from "phosphor-react";

export function Video() {
  return (
    <div className="flex-1 ">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl fot-bold">
              Aula 1 • O início da especialização em ReactJS
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Na aula 1 você vai entender quais são as oportunidades que você
              pode ter se especializando em ReactJS e porque essa é a decisão
              mais inteligente pra sua carreira no momento! E também vamos dar
              início ao projeto que vamos desenvolver nessa semana: uma
              plataforma de conteúdos em vídeo. Bora codar!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="http://"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo />
              comunidade do discord
            </a>
            <a
              href="http://"
              className="p-4 text-sm border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
