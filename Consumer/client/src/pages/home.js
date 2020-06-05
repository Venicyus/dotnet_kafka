import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as signalR from '@microsoft/signalr';

import EventComponent from '../components/event';

import styled from 'styled-components';

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
    const dispatch = useDispatch();

    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:5000/hub")
            .build();

        const start = async () => {
            connection.start()
                .then(() => connection.invoke("Get"))
                .catch((err) => setTimeout(() => start(), 10000));
        };

        connection.onclose(async () => await start());

        connection.on("Get", data => {
            console.log("-> Get");
            dispatch({ type: 'GET', event: data });
        });

        connection.on("Add", data => {
            console.log("-> Add");
            dispatch({ type: 'ADD', event: data });
        });

        connection.on("Edit", data => {
            console.log("-> EDIT");
            dispatch({ type: 'EDIT', event: data });
        });

        connection.on("Remove", data => {
            console.log("-> Remove");
            dispatch({ type: 'REMOVE', event: data });
        });

        start();
    }, [dispatch]);

    return (
        <Container>
            <EventComponent data={events} />
        </Container>
    );
}