import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux'
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*
FCC USER STORY
랜덤 시리즈 오브 버튼 프레스 => clear
추가시 : 기존 + new steps. => clear
눌렀을 때 + 재생될 때 소리 => clear
틀리면 알려주고, 다시 할 수 있게끔 => clear
show how many steps played => clear
플레이를 누르면 다시 시작가능하게 => clear
스트릭트 모드
20 레벨이 끝나면 게임을 끝낼 수 있게끔 => clear
*/

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,document.getElementById('root')
    );
registerServiceWorker();
