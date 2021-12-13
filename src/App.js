import './App.css';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form } from './components/Form/Form.jsx'
import { Filter } from "./components/Filter/Filter.jsx"
import {Contacts} from "./components/Contacts/Contacts.jsx"


class App extends Component {
  state = {
    contacts: [],
    filter: "",
  }
  // filterId = nanoid()

  componentDidMount() {
    console.log('1');
    const contactLocalStorage = JSON.parse(localStorage.getItem("contacts"))
    if (contactLocalStorage) {
      this.setState({ contacts: contactLocalStorage})
    }
  }
  componentDidUpdate( prevProp, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState( {[name]: value })}

  forSubmit = (obj) => {
    const findContact = this.state.contacts.find(item => {
      return item.name === obj.name;
    })
    if (findContact) {
      return alert (`${obj.name} is already in phonebook`)
    }
    this.setState(prev => ({
      // contacts: [{id: nanoid(),...contact}, ...prev.contacts, contact ]
      contacts: [{id: nanoid(),...obj}, ...prev.contacts ]
    }))
  }
  contactsFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      if (contact.name.toLowerCase().includes(filter.toLocaleLowerCase())) {
        return contact;
      }
    });
  };
  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== e.target.parentNode.id;
      }),
    }));
  };

  render ()
  {
    return (
      <div className="App">
        <div>
          <h2>PhoneBook</h2>
          <Form onSubmit={ this.forSubmit}/>
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter
            value={this.state.filter}
            onChange={this.handleChange}
          />
          <Contacts
            names={this.contactsFilter} onClick={ this.deleteContact }
          />
        </div>
      </div>
    )
  }
  
}

export default App;
