import * as React from 'react';
import {connect} from 'react-redux';
import * as actions from './../Action/AppAction';
import store from './../../app/createStore';

interface IAppProps {
    sprint: any
}

interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {

    render(): JSX.Element {
        return <div>
            <div>{this.props.sprint.get('count')}</div>
            <button onClick={() => {store.dispatch(actions.createSprint())}}>+1</button>
        </div>
    }
}

export default connect(state => ({
    sprint: state.get('sprint')
}))(App);
