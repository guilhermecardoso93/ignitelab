import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning
} from "phosphor-react";

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
            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://github.com/guilhermecardoso93.png"
                alt=""
                className="h-16 w-16 rounded-full border-2 border-blue-500"
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Guilherme Cardoso
                </strong>
                <span className="text-gray-200 text-sm block">
                  Desenvolvedor Front-End
                </span>
              </div>
            </div>
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

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material Complementar</strong>
              <p className="text-sm text-gray-200 mt-2"></p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
