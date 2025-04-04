import { useState } from "react";

const airdrops = [
  {
    nome: "Grass",
    rede: "Solana",
    status: "Farmando",
    progresso: 80,
    link: "https://app.getgrass.io"
  },
  {
    nome: "Parcl",
    rede: "Solana",
    status: "Aguardando tarefas",
    progresso: 20,
    link: "https://parcl.co"
  },
  {
    nome: "Sonic",
    rede: "Sui",
    status: "Fazendo missões",
    progresso: 50,
    link: "https://sonic.game"
  },
  {
    nome: "Maverick (Zealy)",
    rede: "Sui",
    status: "Missões sociais",
    progresso: 40,
    link: "https://zealy.io/c/maverickprotocol/questboard"
  },
  {
    nome: "Typus Finance",
    rede: "Sui",
    status: "Jogo + farming",
    progresso: 30,
    link: "https://typus.finance"
  },
  {
    nome: "Kamino",
    rede: "Solana",
    status: "Farming gratuito",
    progresso: 10,
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
  return (
    <div style={{ padding: '1rem', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ background: 'white', padding: '1rem', marginBottom: '1rem', borderRadius: 8 }}>
        <h2 style={{ fontSize: 24, fontWeight: 'bold' }}>Cronograma da Semana</h2>
        <ul style={{ fontSize: 14, paddingLeft: 20 }}>
          {cronograma.map((item, index) => (
            <li key={index}><strong>{item.dia}:</strong> {item.tarefa}</li>
          ))}
        </ul>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {airdrops.map((airdrop, index) => (
          <div key={index} style={{ background: 'white', padding: '1rem', borderRadius: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: 18 }}>{airdrop.nome}</h3>
              <span style={{ fontSize: 12, background: '#eee', padding: '2px 8px', borderRadius: 12 }}>{airdrop.rede}</span>
            </div>
            <p style={{ fontSize: 14 }}>{airdrop.status}</p>
            <progress value={airdrop.progresso} max={100} style={{ width: '100%' }} />
            <a href={airdrop.link} target="_blank" rel="noopener noreferrer">
              <button style={{ marginTop: 10, width: '100%' }}>Acessar</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
