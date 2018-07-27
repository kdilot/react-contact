import React, { Component } from 'react';
import Header from './component/Header';
import Container from './component/Container';
import ViewSelector from './component/ViewSelector';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <ViewSelector />
                <Container></Container>
            </div>
        );
    }
}

export default App;
