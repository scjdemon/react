import React from 'react';
import Button from './button';
import Input from './input';
import Table from './table'


const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];



var Anttext = React.createClass({
	getInitialState:function(){
		return{
			value:'aaa',
            error : false
		}
	},
	render:function(){
		return (
			<div>
				<Button size='large' type='info'>按钮</Button><br/>
				<Input value={this.state.value} 
				onChange={(e)=>this.setState({value:e.target.value})}
				onPressEnter={this.enter}
				/>
				 <Table page boder onRowClick={this.handleClick} dataSource={dataSource} columns={columns} />

			</div>
		)
	},
	enter:function(e){
		alert(e.target.value)
	}

})

export default Anttext;