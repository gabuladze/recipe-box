import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LocalStorage from '../Services/LocalStorage';

class DeleteRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = { redirectToIndex: false };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        LocalStorage.deleteRecipe(id);
        this.setState({ redirectToIndex: true });
    }

    render() {
        const { redirectToIndex } = this.state;
        if (redirectToIndex) return <Redirect to="/" />;
        return null;
    }
}

export default DeleteRecipe;