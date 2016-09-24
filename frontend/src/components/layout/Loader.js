import React, { Component, PropTypes } from 'react';
import ReactLoaders from 'react-loaders';

import './loader.less';

export default class Loader extends Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
    };

    render() {
        const { show } = this.props;

        if (!show) {
            return <div />;
        }

        return (
            <div className="overlay">
                <ReactLoaders
                    type="ball-spin-fade-loader"
                />
            </div>
        );
    }
}
