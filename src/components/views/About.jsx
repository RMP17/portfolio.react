import React,{useContext} from "react";
import {GlobalContext} from "../../GlobalContext";
import {mdiCodeBraces} from "@mdi/js";
// import file from '../../assets/curriculum.json'
import Card from "../molecules/Card/Card";
import CustomIcon from "../molecules/CustomIcon";

const About = (props) => {
    const file = useContext(GlobalContext);
    return (
        <Card>
            <Card.Body>
                <h2 className="title">{props.title}</h2>
                {
                    // todo: carga imagen de google drive
                    /*<img src="https://drive.google.com/uc?id=1awfARFiP_SUg6c_8VZUNq0SurBrMG_1Q" alt=""/>*/
                }
                <div className="border flex-row pb-32">
                    <div className="border border_right pt-16 pr-16 flex-fill">
                        {file.about_me}
                    </div>
                    <div className="flex-fill pt-16 pl-16">
                        <div className="flex-row justify-space-between border border_bottom p-8">
                            <span className="text-tertiary uppercase">Edad</span>
                            <span>{file.age}</span>
                        </div>

                        <div className="flex-row justify-space-between border border_bottom p-8">
                            <span className="text-tertiary uppercase">Residencia</span>
                            <span>{file.residence}</span>
                        </div>

                        <div className="flex-row justify-space-between border border_bottom p-8">
                            <span className="text-tertiary uppercase">Dirección</span>
                            <span>{file.address}</span>
                        </div>
                    </div>
                </div>

                <h2 className="title">Servicios</h2>
                <div className="border flex-row pb-32 w100p">
                    <div className="flex-column align-center pt-16 pl-16 flex-fill">
                        <CustomIcon icon={mdiCodeBraces}/>
                        <div className="text-center pt-16">
                            <h2 className="text-tertiary">{file.services.title}</h2>
                            <span>{file.services.description}</span>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
export default About
