import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { PropTypes } from 'react';

import { Constructor as Settings } from './Settings';
import { Constructor as Descriptor } from 'iradiator-plugin-ping/Descriptor';
import DataPropType from 'iradiator-plugin-ping/schema/Data';

export default class PingWidget extends React.Component {
    static sourceType = 'single-plugin-multiple-identifiers'

    static propTypes = {
        settings: PropTypes.instanceOf(Settings).isRequired,
        descriptor: ImmutablePropTypes.mapOf(PropTypes.instanceOf(Descriptor)).isRequired,
        data: PropTypes.objectOf(DataPropType).isRequired
    }

    renderData(key) {
        const up = this.props.data[key].alive;
        const descriptor = this.props.descriptor.get(key);

        return (
            <li key={key}>{descriptor.name} is {up ? 'UP' : 'DOWN'}</li>
        );
    }

    render() {
        return (
            <div className="widget-ping">
                <h4>{this.props.settings.title}</h4>
                <ul>
                    {Object.keys(this.props.data).map(::this.renderData)}
                </ul>
            </div>
        );
    }
}
