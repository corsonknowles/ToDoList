import React from 'react';
import Util from '../../util/util';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();

    const todo = {
      title: this.state.title,
      body: this.state.body,
      done: false
    };

    this.props.createTodo( { todo } ).then(
      () => this.setState({ title: "", body: "" })
    );

  }

  update(key) {
    return ( event => this.setState({[key]: event.currentTarget.value}));
  }

  render () {
    return (
      <form>
        <label>
          Title:
          <input onChange={ this.update('title')} value={this.state.title} />
        </label>
        <br/>
        <label>
          Body:
          <textarea onChange={ this.update('body')} value={this.state.body} >
          </textarea>
        </label>
        <br/>
        <button type="submit" onClick={this.handleSubmit} >Press Me</button>
      </form>
    );
  }
}


export default ToDoForm;
