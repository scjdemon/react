import React from 'react';

import './index.css';
var Button = React.createClass({
	render:function(){
		return(
			<button className={this.props.type+' '+this.props.size}>{this.props.children}</button>
			
			)
	}
})
export default Button;