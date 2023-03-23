import React from 'react'
import './Form.css'
class Form extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: "",
            email: "",
            message: "",
            btnText: "SUBMIT",
            nameError: false,
            emailError: false,
            messageError: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.validate = this.validate.bind(this);
    }


    handleChange(e) {
        const key = e.target.id != 'message' ? e.target.name: 'message';
        const msgDiv = document.getElementById("message");
        const value = (key != "message" ? e.target.value: msgDiv.innerText);
        this.setState({[key]: value,
        })
        this.validate(key);
    }


    validate = (id) => {
        if (id == "email") {
            const atposition = this.state.email.indexOf("@");
            const dotposition = this.state.email.lastIndexOf(".");
            const wrongEmail = (atposition < 1 || dotposition < atposition+2 || dotposition+2 >= this.state.email.length || this.state.email.length <= 5);
            this.setState({
                emailError: wrongEmail,
            });
        } else if (id == "name") {
            const wrongName = (this.state.name.replace(/\s/g, '').length == 0 || this.state.name.length <= 2);
            this.setState({
                nameError: wrongName,
            });
        } else if (id == "message") {
            const wrongMessage = (this.state.message.replace(/\s/g, '').length == 0 || this.state.message.length < 2);

            this.setState({
                messageError:wrongMessage,
            });
        }
    }



    submitForm = async (e) => {
        e.preventDefault();
        const scriptURL = "https://script.google.com/macros/s/AKfycbwCxiiMafp0KsaJTcTpSi4U9c5MrfP766YWZP0w_QMGlZxgGEQ6RKu4--64KaVL78G3/exec";
        const form = document.forms['myForm'];
        const msgDiv = document.getElementById("message");

        await this.validate("name");
        await this.validate("email");
        await this.validate("message");
        if (this.state.nameError || this.state.emailError || this.state.messageError) {}else{
            this.setState({
                btnText: "SENDING..."
            });
            const data = new FormData(form);
            data.append('message', msgDiv.innerText);
            fetch(scriptURL, {method: 'POST', body: data})
            	.then(response => {
                	form.reset();
                	msgDiv.innerText = "";
                	this.setState(this.oldState);
		}
		)
            	.catch(error => {
                	this.setState({
                	    btnText: "SUBMIT"
                	});
                	alert("some error occoured while submitting the form, please try again later")
		})

	}
    }

	componentDidMount(){
		this.oldState = this.state;
	}

    render() {
        return (
            <div className="formMain">
			<form className="form" id="myForm">
			<input required className="input" onChange={this.handleChange} type="Text" name="name" placeholder="Name" />
		{this.state.nameError && <div className="error">
invalid name
            </div>
                }
			<input required className="input" onChange={this.handleChange} type="email" name="email" placeholder="Email" />
		{this.state.emailError && <div className="error">
invalid email
                </div>
                }
			<div id="message" data-placeholder="Say Hello to Me" contentEditable='true' onInput={this.handleChange} className='input message' />
		{this.state.messageError && <div className="error">
invalid message
                </div>
                }
			<button onClick={this.submitForm}>{this.state.btnText}</button>
            </form>
            </div>
        )
    }
}
export default Form;