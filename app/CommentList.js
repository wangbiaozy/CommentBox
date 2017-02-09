import  React from 'react';
export default class CommentList extends React.Component{
    render(){
        return(
            <ul className="list-group">
                {
                    this.props.messages.map((message,index)=>{
                        return <li className="list-group-item" key={index}>
                            {message.name}:{message.content} 
                            <button className="btn btn-danger btn-xs pull-right" onClick={()=>this.props.deleteMessage(message._id)}>删除</button><span className="pull-right">{new Date(message.createAt).toLocaleString()}</span>
                        </li>
                    })
                }
            </ul>
        )
    }
}
