/**
    ls.terminal.ink Discord Bot List Server
    Copyright (C) 2018 Moustacheminer Server Services
    Copyright (C) 2018 Terminal.ink

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

@connect(
	state => ({ locale: state.locale }),
	null,
)
export default class LocaleWrapper extends React.Component {
	render() {
		return <IntlProvider locale={this.props.locale || 'en'}>
			{this.props.children}
		</IntlProvider>;
	}
};