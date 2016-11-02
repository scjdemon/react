import React from 'react';


var Table = React.createClass({
	render:function(){
			var header = this.props.columns,
				data = this.props.dataSource;
			var arr=[]
			var headerNodes = header.map(function(obj){
				arr.push(obj.dataIndex)
				return (
					<td key={obj.key}>{obj.title}</td>
					)
			})
			var nodes = data.map(function(obj,i){
				var tr = arr.map(function(o){
					return(
					<td key={o.key}>{obj[o]}</td>
						)
				})
					return(
						<tr key={i}>{tr}</tr>
						)
			})
			return(
				<div>
	                <table>
	                    <thead>
	                        <tr>
	                            {headerNodes}
	                        </tr>
	                    </thead>

	                    <tbody>
	                            {nodes}
	                    </tbody>
	                </table>
	            </div>
			)
	}
})
export default Table;