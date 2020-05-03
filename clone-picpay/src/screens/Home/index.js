import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import Sugestion from '../../components/Sugestions'
import Activities from '../../components/Activities'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'


import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './style'

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#18c85e" />

                    <BalanceContainer>
                        <BalanceTitle>Meu saldo:</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#10c86e" />
                </Header>

                <Sugestion />
                <Activities />
                <Tips />
                <Banner />

            </Container>
        </Wrapper>
    );
}