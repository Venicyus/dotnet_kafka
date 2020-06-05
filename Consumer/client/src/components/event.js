import React from 'react';

import styled from "styled-components";

import Table from 'react-bootstrap/Table';

const Container = styled.div`
  width: 50%;

  Table {
    th, td {
      text-align: center;
    }

    tbody tr {
      animation-name: edit;
      animation-duration: 0.8s; 
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      animation-direction: alternate;
      animation-iteration-count: 2;
      animation-fill-mode: none;
      animation-play-state: running;
    }
  }

  @keyframes edit {
    0%     {background-color:white;}
    100.0%  {background-color:#4bb877;}
  }
`;

const Title = styled.span`
  font-weight: bold;
`;

function EventComponent(props) {
  return (
    <Container>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th colSpan="4">
              <Title>Eventos</Title>
            </th>
          </tr>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Data</th>
            <th>Descrição</th>
          </tr>
        </thead>

        <tbody>
          {
            props.data.map((item) => (
              <tr key={item}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>{item.description}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default EventComponent;