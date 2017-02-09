import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages:[]};
        this.props.model.list((messages)=>{
            this.setState({messages});
        });
        /*this.state = {
            messages: [
                {
                    name: '张三', content: '今天很好', createAt: new Date()
                },
                {
                    name: '李四', content: '明天更好', createAt: new Date()
                }
            ]
        };//在es6里要通过这种方法去初始化状态对象*/
    }
    //增加一条新的留言
    addMessage(message){
        this.props.model.add(message,(messages)=>{
            this.setState({messages});
        });
        //message.createAt = new Date();
        //this.state.messages.push(message);
        //this.setState({messages:this.state.messages});
    }
    deleteMessage(id){
        this.props.model.del(id,(messages)=>{
            this.setState({messages});
        });
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="text-center">留言板</h3>
                </div>
                <div className="panel-body">
                    <CommentList deleteMessage={this.deleteMessage.bind(this)} messages={this.state.messages}/>
                </div>
                <div className="panel-footer">
                    <CommentForm addMessage={this.addMessage.bind(this)}/>
                </div>
            </div>
        )
    }
}
