import React, {useContext} from "react";
import Card from "../molecules/Card/Card";
import {mdiEmailSend} from "@mdi/js";
import TextField from "../atoms/TextField";
import Textarea from "../atoms/Textarea";
import Icon from "@mdi/react";
import Button from "../molecules/Button/Button";
import {GlobalContext} from "../../GlobalContext";

const Contact = (props) => {
    const file = useContext(GlobalContext);
    return (
        <Card>
            <Card.Body>
                {/* Cantacto */}
                <h2 className="title">{props.title}</h2>
                <div className="border flex-row pb-32 w100p">

                    <div className="flex-column flex-fill  border border_right">
                        <div className="flex-row justify-space-between pr-16 pt-16">
                            <span className="text-tertiary uppercase">Residencia</span>
                            <span>{file.residence}</span>
                        </div>

                        <div className="flex-row justify-space-between pr-16 pt-16">
                            <span className="text-tertiary uppercase">Correo</span>
                            {/*<span>{file.email}</span>*/}
                            <a href="mailto:rdrmamani@gmail.com">rdrmamani@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex-column flex-fill">
                        <div className="flex-row justify-space-between pt-16 pl-32">
                            <span className="text-tertiary uppercase">Dirección</span>
                            <span>{file.address}</span>
                        </div>
                    </div>

                </div>
                {/* Formulario de contacto */}
                {/*<h2 className="title">Formulario de contacto</h2>
            <div className="border flex-row pb-16 w100p">
                <div className="flex-column align-center pt-16 pl-16 flex-fill">
                    <TextField placeholder="Nombre completo"/>
                </div>
                <div className="flex-column align-center pt-16 pl-16 flex-fill">
                    <TextField placeholder="Correo"/>
                </div>
            </div>
            <div className="flex-column  justify-center w100p">
                <Textarea name="message" placeholder="Tu mensaje"/>
                <Button type='large' onClick={()=>window.location.assign('mailto:rdrmamani@gmail.com&body=rider')}>
                    <Icon path={mdiEmailSend} size='1.5rem'/>
                    <span className="pl-8">Enviar</span>
                </Button>
            </div>*/}
            </Card.Body>
        </Card>
    )

}
export default Contact

/* todo: Formulario corto
import React from "react";
import axios from "axios"; // For making client request.


class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: "", surname: "", email: "", message: ""};
    }

    handleForm = e => {
        axios.post(
            "https://formcarry.com/s/yourFormId",
            this.state,
            {headers: {"Accept": "application/json"}}
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        e.preventDefault();
    }

    handleFields = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.handleForm}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={this.handleFields} />

                <label htmlFor="surname">Surname</label>
                <input type="text" id="surname" name="surname" onChange={this.handleFields} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={this.handleFields} />

                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message" onChange={this.handleFields}></textarea>

                <button type="submit">Send</button>
            </form>
        );
    }
}

export default Form;*/
