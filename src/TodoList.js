// Fragment 是一种占位符形式，类似于 Vue 的 Template
import React, { Component, Fragment } from 'react';
import './style/reset.css'
import './style/common.css'
import './style/index.css'
import './style/icon.css'
import TodoItem from './components/TodoItem'

class TodoList extends Component {

  // 构造函数
  constructor(props) {
    super(props);
    // 定义数据
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  // 渲染页面
  render() {
    // let closeStyle = {
    //   fontSize: '1.2em',
    //   color: 'deepskyblue',
    //   marginLeft: '10px'
    // }
    return (
      <Fragment>
        <div>
        <label htmlFor="insertArea">输入内容：</label>
          {/* 单项数据绑定 */}
          {/* 在 React 中，绑定时间的，一般为半驼峰形式 */}
          <input 
            id="insertArea"
            type="text" 
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {       
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    )
  }


    // 获取单独项
    getTodoItem() {
      return this.state.list.map( (item, index) => {
        return (
          <TodoItem 
            key={index}
            item={item} 
            index={index}
            handleItemDelete={this.handleItemDelete}
          />
        )
      })
    }

  // 方法体 - 输入内容
  handleInputChange(e) {
    const value = e.target.value;
    this.setState( () => ({
      inputValue: value
    }))
  }

  // 方法体 - 点击提交
  handleBtnClick() {
    const list = this.state.list,
          inputValue = this.state.inputValue;
    this.setState( () => ({
      list: [...list, inputValue],
      inputValue: ''
    }))
  }
  // 方法体 - 删除项目
  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list
    })
  }

}

export default TodoList;