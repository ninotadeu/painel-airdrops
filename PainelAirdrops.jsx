import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const airdrops = [
  {
    nome: "Grass",
    rede: "Solana",
    status: "Farmando",
    progresso: 80,
    previsao: "Sem data confirmada",
    link: "https://app.getgrass.io"
  },
  {
    nome: "Parcl",
    rede: "Solana",
    status: "Aguardando tarefas",
    progresso: 20,
    previsao: "Airdrop inicial já rolou (fase 2 em análise)",
    link: "https://parcl.co"
  },
  {
    nome: "Sonic",
    rede: "Sui",
    status: "Fazendo missões",
    progresso: 50,
    previsao: "Futuro token em preparação",
    link: "https://sonic.game"
  },
  {
    nome: "Maverick (Zealy)",
    rede: "Sui",
    status: "Missões sociais",
    progresso: 40,
    previsao: "Campanha XP ativa, sem data de token",
    link: "https://zealy.io/c/maverickprotocol/questboard"
  },
  {
    nome: "Typus Finance",
    rede: "Sui",
    status: "Jogo + farming",
    progresso: 30,
    previsao: "Airdrop provável, sem confirmação",
    link: "https://typus.finance"
  },
  {
    nome: "Kamino",
    rede: "Solana",
    status: "Farming gratuito",
    progresso: 10,
    previsao: "Rumores de airdrop em 2025",
    link: "https://app.kamino.finance"
  }
];

const cronograma = [
  { dia: "Segunda", tarefa: "Verificar Grass (pontos e funcionamento)" },
  { dia: "Terça", tarefa: "Fazer missões no Sonic (Arcade + Zealy)" },
  { dia: "Quarta", tarefa: "Verificar Parcl (novidades e Discord)" },
  { dia: "Quinta", tarefa: "Missões sociais no Maverick (Zealy)" },
  { dia: "Sexta", tarefa: "Jogar no Typus Finance e verificar farming" },
  { dia: "Sábado", tarefa: "Usar algo no Kamino (simular estratégia, visitar app)" },
  { dia: "Domingo", tarefa: "Revisar tudo e atualizar planilha" }
];

export default function PainelAirdrops() {
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

  const toggleConcluido = (nome) => {
    setTarefasConcluidas((prev) =>
      prev.includes(nome) ? prev.filter((n) => n !== nome) : [...prev, nome]
    );
  };

  return (
    <div className="p-4 space-y-6">
      <Card>
        <CardContent className="space-y-2 p-4">
          <h2 className="text-2xl font-bold">Cronograma da Semana</h2>
          <ul className="text-sm list-disc pl-4">
            {cronograma.map((item, index) => (
              <li key={index}><strong>{item.dia}:</strong> {item.tarefa}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {airdrops.map((airdrop, index) => (
          <Card key={index}>
            <CardContent className="space-y-2 p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{airdrop.nome}</h2>
                <span className="text-sm bg-gray-200 px-2 py-1 rounded-xl">{airdrop.rede}</span>
              </div>
              <p className="text-sm">{airdrop.status}</p>
              <p className="text-xs text-gray-500">🕒 Previsão: {airdrop.previsao}</p>
              <Progress value={airdrop.progresso} />
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  checked={tarefasConcluidas.includes(airdrop.nome)}
                  onChange={() => toggleConcluido(airdrop.nome)}
                />
                <label className="text-sm">Tarefa concluída</label>
              </div>
              <Button asChild className="w-full mt-2">
                <a href={airdrop.link} target="_blank" rel="noopener noreferrer">
                  Acessar
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
