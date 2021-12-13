import { Component } from "react";
import { nanoid } from "nanoid";

class Form extends Component {
    state = {
        name: '',
        number: '',
    }
    
    // componentDidMount() {
    //     const formValues = JSON.parse(localStorage.getItem("contact"))
    //     if (formValues) {
    //         this.setState({...formValues})
    //     }
    // }

    formChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({[name]: value})
    }
    

    formSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form >
                <label>Name</label>
                <input
                    id={nanoid()}
                    type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.formChange}
                    autoComplete="off"
                />
                <label>Phone number</label>
                <input
                    id={nanoid()}
                    type="text"
                    name="number"
                    value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.formChange}
                    autoComplete="off"
                />
                <button type="submit" onClick={this.formSubmit} >Add contact</button>
            </form>

        )
    }
}
export {Form}