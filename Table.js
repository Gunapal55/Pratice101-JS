import React, { Component } from 'react'
import Form from './Forms';
import './Table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default class Table extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          people: []
        };
    
        this.addPerson = this.addPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
      }
    
      addPerson(name, email) {
        this.setState(prevState => ({
          people: [...prevState.people, { name, email }]
        }));
      }
    
      
    
      deletePerson(email) {
        return () => {
          this.setState(prevState => ({
            people: prevState.people.filter(person => person.email !== email)
          }));
        };
      }
    
      render() {
        console.log(this.state);
    
        return (
          <div className="container-fluid">
            <Form addPerson={this.addPerson} />
            <table id="tab">
              <thead className="" variant="dark">
                <tr>
                  <th>Id</th>
                  <th>User Name</th>
                  <th>Destination</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.people.map((person, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{person.name}</td>
                      <td>{person.email}</td>
                      <td>
                        <Button variant="outline-danger" onClick={this.deletePerson(person.email)}>Delete</Button>
                    </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
}
