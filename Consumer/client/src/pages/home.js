import React from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';

import EventComponent from '../components/event';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
      padding-bottom: 20px;
  }
`;

export default function HomePage() {
    const events = useSelector(state => state.data);

    return (
        <Container>
            <EventComponent data={events} />
        </Container>
    );
}