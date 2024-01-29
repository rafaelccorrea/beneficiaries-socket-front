import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const Notificacoes = () => {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    socket.on('notificacao', (data) => {
      setMensagem(data);
    });

    return () => {
      socket.off('notificacao');
    };
  }, []);

  return (
    <div>
      <p>Última Notificação: {mensagem}</p>
    </div>
  );
};

export default Notificacoes;
