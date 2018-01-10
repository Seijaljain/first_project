import React from 'react';
import { Route, IndexRoute} from 'react-router';
import New from './new'; 
import {LearnPage} from './components/LearnPage';
import {LivePage} from './components/LivePage';
import {LovePage} from './components/LovePage';

export default (
    <Route path="/" component={New}>
<IndexRoute component={New} />
<Route path='/Live1' component={LivePage} />
<Route path="/Love2" component={LovePage} />
<Route path="/Learn3" component={LearnPage} />
</Route>

); 