import React, {Component} from 'react';
import Axios from 'axios';
import './App.css';

const DisplayUserList = (props) => (
    <div>
        <table border-bottom='1px'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>User Id</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.userList.map((item, index) => 
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.userId}</td>
                            <td>{item.body}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
);

class CodeTestTCS extends Component {
    constructor(props){
        super(props);
        this.state = {
            userList : []
        };
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState ({
                    userList: response.data
                });
        })
        .catch(e => console.log('error', e));
    }
    render() {
        return (
            <div>
                <DisplayUserList userList={this.state.userList} />
            </div>
        );
    }
}

export default CodeTestTCS
