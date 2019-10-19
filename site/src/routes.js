import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Curso from './pages/cursos/index';
import Contato from './pages/contato/index';

export default props => (
<Switch>
    <Route path='/cursos' component={Curso} />
    <Route path='/contato' component={Contato} />
    <Route path='*' component={Curso} />
</Switch>
)