import React, {Suspense, useEffect, useState} from 'react'
// import logo from './logo.svg';
import './App.scss'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Img2 from './assets/img/photo.png'
import Button from "./components/molecules/Button/Button"
import ButtonGroup from "./components/molecules/ButtonGroup/ButtonGroup"
import Card from './components/molecules/Card/Card'
import AnimatedBackground from './components/atoms/AnimatedBackground'
import Icon from '@mdi/react';
import {mdiAccount, mdiAt, mdiDownload, mdiTextBox} from '@mdi/js'
import Person from './models/Person'
import documentCV from './assets/documentCV.pdf'
import Resume from "./components/views/Resume"
import About from "./components/views/About"
import {GlobalContext} from "./GlobalContext";
// import Contact from "./components/views/Contact"
const Contact = React.lazy(() => import ('./components/views/Contact'))

const App = () => {
    const [file, setFile] = useState(new Person())
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/curriculum.json').then(response => {
            response.json().then(res => {
                setFile(res)
            })
        })
    }, [])
    const menu = {
        about: 'Sobre Mi',
        resume: 'Resumen',
        works: 'Trabajos',
        contact: 'Contactarme',
    };
    const downloadCV = () => {
        // todo: Crear documento y descargar JAVASCRIPT
        /*let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'employees.json';
        a.click();*/
        /*const text = 'Some data I want to export';
        const data = new Blob([JSON.stringify(file)], {type: 'application/json'});*/

        // const url = window.URL.createObjectURL(Img2);

        const link = document.createElement("a")
        link.href = documentCV;
        link.download = 'documentCV.pdf';
        link.click()
    };

    return (
        <div className="app">
            <Router basename={process.env.PUBLIC_URL}>
                <GlobalContext.Provider value={file}>
                    <div className="container flex-row">
                        <div className="px-16">
                            <div className='main'>
                                <Button to="/about" icon={mdiAccount}>{menu.about}</Button>
                                <Button to="/resume" icon={mdiTextBox}>{menu.resume}</Button>
                                {/*<Button icon={mdiCardAccountDetails}>{menu.works}</Button>*/}
                                <Button to="/contact" icon={mdiAt}>Contanto</Button>
                            </div>
                        </div>

                        <div className="w100p px-16">
                            <Switch>
                                <Redirect from='/' to='/about' exact/>
                                <Route path="/about">
                                    <About title={menu.about}/>
                                </Route>
                                <Route path="/resume">
                                    <Resume title={menu.resume}/>
                                </Route>
                                <Route path="/contact">
                                    <Suspense fallback={<div>Cargando</div>}>
                                        <Contact title={menu.contact}/>
                                    </Suspense>
                                </Route>
                                <Route component={() => (<span>Paginia no encontrada</span>)}/>
                            </Switch>
                        </div>

                        <div className="px-16" style={{width: '45rem'}}>
                            <Card noPadding noBorder>
                                <Card.Header>
                                    <div className="card__img">
                                    </div>
                                    <div className="photo">
                                        <img className="photo__img" src={Img2} alt=""/>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    {/*<div className="p-0" style={{width: '30rem'}}></div>*/}
                                    <h2 className="uppercase">{file.name}</h2>
                                    <h3 className="text-tertiary">{file.profession}</h3>
                                    {/*<div className='flex-row'>
                                        <Icon path={mdiAccount} size='2rem'/>
                                        <Icon path={mdiAccount} size='2rem'/>
                                        <Icon path={mdiAccount} size='2rem'/>
                                    </div>*/}
                                </Card.Body>
                                <Card.Footer>
                                    <ButtonGroup>
                                        <Button type='large' br onClick={() => downloadCV()}>
                                            <Icon path={mdiDownload} size='1.5rem'/>
                                            <span className="pl-8">Descargar CV</span>
                                        </Button>
                                        <Button type='large' to="/contact">
                                            <Icon path={mdiAt} size='1.5rem'/>
                                            <span className="pl-8">Contactame</span>
                                        </Button>
                                    </ButtonGroup>
                                </Card.Footer>
                            </Card>
                        </div>
                        <AnimatedBackground/>
                    </div>
                </GlobalContext.Provider>
            </Router>
        </div>
    );
}

export default App;

