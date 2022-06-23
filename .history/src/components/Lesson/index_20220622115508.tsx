import { CheckCircle } from 'phosphor-react'

export function Lesson() {
  return (
    <a href="#">
      <span className="text-gray-500">Domingo • 20 de junho • 19h00</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="text-sm text-blue-500 font-medium">
            <CheckCircle size={20}/>
            Contéudo liberado{" "}
          </span>
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
            AO VIVO
          </span>
        </header>
        <strong className="mt-5 text-gray-200 block">
          Abertura do Evento Ignite Lab
        </strong>
      </div>
    </a>
  );
}
