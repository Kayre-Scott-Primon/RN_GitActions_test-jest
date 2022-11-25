import React from 'react';
import { View } from 'react-native';
import { Styles } from './style';

// import { Container } from './styles';

const Splash: React.FC = () => {
    return (
        <Styles.Container>
            <Styles.Label>
                Teste com jest usando o github Actions
            </Styles.Label>
        </Styles.Container>
    );
}

export default Splash;