import React, { useEffect } from 'react';
import { HubConnectionBuilder } from '@aspnet/signalr';

import styled from "styled-components";

import Table from 'react-bootstrap/Table';

const Container = styled.div`
  width: 25%;

  Table {
    th, td {
      text-align: center;
    }
  }
`;

const Title = styled.span`
  font-weight: bold;
`;

function EventComponent(props) {

  useEffect(() => {
    if (!props.fetched) {
      // Crio a instância do Hub de conexão do SignalR
      this.conexao = new HubConnectionBuilder()
        .withUrl('http://localhost:5000/hub')
        .build();

      // Trato o recebimento da mensagem.
      this.conexao.on("events", (data) => {
        this.props.adicionarMensagem(data);
      });

      // Inicio a conexão.
      this.conexao
        .start()
        .catch(err => console.error(err.toString()));
    }
  });

  return (
    <Container>
      <Table bordered hover size="sm">
        <thead>
          <td colSpan="4">
            <Title>Eventos</Title>
          </td>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Data</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>{item.title}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default EventComponent;