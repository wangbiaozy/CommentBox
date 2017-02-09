import  React from 'react';
export default class CommentForm extends React.Component{
    addMessage(event){
        event.preventDefault();//阻止表单的默认提交
        let message = {
            name:this.refs.name.value,
            content:this.refs.content.value
        };
        this.props.addMessage(message);
        this.refs.content.value = '';
    }
    render(){
        return(
            <form onSubmit={this.addMessage.bind(this)} role="form" className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-md-1" htmlFor="name">姓名</label>
                    <div className="col-md-11">
                        <input ref="name" type="text" name="name" id="name" className="form-control" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-md-1" htmlFor="content">内容</label>
                    <div className="col-md-11">
                        <textarea ref="content" name="content" id="content" cols="30" rows="10" className="form-control" required></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-offset-1 col-md-11">
                        <button className="btn btn-primary" type="submit">留言</button>
                    </div>
                </div>
            </form>
        )
    }
}
