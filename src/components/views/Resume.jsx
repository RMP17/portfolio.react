import React, {useContext} from "react";
import Card from "../molecules/Card/Card";
import {mdiBook, mdiBriefcase, mdiCertificate, mdiFlag, mdiLabelVariantOutline} from "@mdi/js";
import Icon from "@mdi/react";
import {GlobalContext} from "../../GlobalContext";


const Resume = (props) => {
    const file = useContext(GlobalContext);
    return (
        <Card>
            <Card.Body>
                <h2 className="title">{props.title}</h2>

                <div className="border flex-row w100p pb-32">

                    {/*Seccion Experiencia*/}
                    <div className="border border_right pt-16 pr-16 flex-fill">
                        <h4 className="uppercase m-0 mb-16">
                            <Icon path={mdiBriefcase} className="icon-right text-tertiary"/>
                            experiencia
                        </h4>
                        {
                            file.experience.map(value=>(
                                <div key={value.id} className="border pt-16 pb-16">
                                <span className="rounded-edges">
                                    {value.end_year? value.start_year+' - '+value.end_year:value.start_year}
                                </span>
                                    <h4 className="m-0 text-white">
                                        {value.title}
                                    </h4>
                                    <span>{value.company}</span>
                                    <div className="mt-8">
                                        {value.description}
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    {/*Seccion Educacion*/}
                    <div className="border pt-16 pl-32 flex-fill">
                        <h4 className="uppercase m-0 mb-16">
                            <Icon path={mdiCertificate} className="icon-right text-tertiary"/>
                            educación
                        </h4>
                        {
                            file.education.map(value=>(
                                <div key={value.id} className="border pt-16 pb-16">
                                <span className="rounded-edges">
                                    {value.end_year? value.start_year+' - '+value.end_year:value.start_year}
                                </span>
                                    <h4 className="m-0 text-white">
                                        {value.title}
                                    </h4>
                                    <span>{value.company}</span>
                                    <div className="mt-8">
                                        {value.description}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/*Mis Habilidades*/}
                <h2 className="title">Mis Habilidades</h2>
                <div className="border flex-row pb-32 w100p">

                    {/*Seccion Conocimiento */}
                    <div className="border border_right pt-16 pr-16 flex-fill">
                        <h4 className="uppercase m-0 mb-16">
                            <Icon path={mdiBook} className="icon-right text-tertiary"/>
                            Conocimiento
                        </h4>
                        {
                            file.knowledge.map(value=>(
                                <div className="mt-8" key={value}>
                                    <Icon path={mdiLabelVariantOutline} className="icon-right text-tertiary"/>
                                    {value}
                                </div>
                            ))
                        }

                    </div>

                    {/*Seccion Idiomas */}
                    <div className="border pt-16 pl-32 flex-fill">
                        <h4 className="uppercase m-0 mb-16">
                            <Icon path={mdiFlag} className="icon-right text-tertiary"/>
                            Idiomas
                        </h4>
                        {
                            file.language.map(value=>(
                                <div key={value.name} className="flex-row justify-space-between border border_bottom p-8">
                                    <span className="text-tertiary uppercase">{value.name}</span>
                                    <span>{value.level}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Card.Body>
        </Card>
    )

}
export default Resume
