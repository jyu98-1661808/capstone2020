import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/Lessons.css';

function Lessons() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var classcode_style = {
        color: '#857EBB',
        fontWeight: 'bold',
    }

    return (
        <div className='list-view'>
            <div className='list-container'>
                <div className='list-span'>
                    <h3>Class Code: <span style={classcode_style}>MATHFUN1</span></h3>
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="success"><span className="fas fa-search" /></Button>
                    </Form>
                </div>
                <div className='list-header'>
                    <h2>My Lessons</h2>
                    <Button variant='link' className='new-lesson' onClick={handleShow}>
                        New Lesson
                    <span className="far fa-plus-square" />
                    </Button>
                    <div className='sort-container'>
                        <p>sort by:</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Most Recent
                      </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Most Recent</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <CardDeck id='lessons'>
                    <LessonCard />
                    <LessonCard />
                    <LessonCard />
                    <LessonCard />
                </CardDeck>
                <Modal id='#teacher' dialogClassName="modal-90w" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <LessonModal />
                </Modal>
            </div>
        </div>
    );
}

function LessonCard() {
    return (
        <Card>
            <Card.Img className='lesson-image' src="./img/teacher/sample-lesson-image.png" alt="Card image" />
            <Card.Body>
                <div className='card-description-container'>
                    <div className='card-description'>
                        <Card.Title>Even Number Addition</Card.Title>
                        <Card.Text>by cedarwoods12</Card.Text>
                    </div>
                    <div className='card-description-buttons'>
                        <Button variant='link' className='share'>
                            Share
                            <span className="fas fa-share-alt" />
                        </Button>
                        <Button variant='link' className='edit'>
                            Edit
                            <span className="fas fa-pencil-alt" />
                        </Button>
                    </div>
                </div>
                <Card.Footer>
                    <div className='lesson-footer'>
                        <div className='lesson-stats'>
                            <p><i className="fas fa-users" /> <span style={{ fontWeight: 'bold' }}>23</span> students</p>
                            <p><i class="fas fa-gamepad" /> <span style={{ fontWeight: 'bold' }}>43</span> plays</p>
                        </div>
                        <Button variant="danger">Remove</Button>
                    </div>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}

function LessonModal() {
    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Create Lesson</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group size="sm" className="input-level-name mb-3" controlId="validationLessonTitle">
                        <Form.Label>Lesson Title</Form.Label>
                        <InputGroup>
                            <Form.Control
                                placeholder=""
                                aria-label="Enter level name"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2"><i class="fas fa-pencil-alt"></i></InputGroup.Text>
                            </InputGroup.Append>
                            <Form.Control.Feedback type="invalid">
                                Please enter a lesson title.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="validationCharacter">
                        <Form.Label>Select Animal</Form.Label>
                        <p>Choose an animal and select <a href='http://www.corestandards.org/Math/Content/1/introduction/'>Common Core</a> topic.</p>
                        <div className='characters-container'>
                            <div id='character-polar-bear' className='character' tabindex="-1">
                                <img src='./img/character-icons/polar-bear.png' alt='polar bear' />
                                <Form.Group controlId="validationPolarBear">
                                    <Form.Control as="select" value="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div id='character-tiger' className='character' tabindex="-1">
                                <img src='./img/character-icons/tiger.png' alt='tiger' />
                                <Form.Group controlId="validationTiger">
                                    <Form.Control as="select" value="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div id='character-orca' className='character' tabindex="-1">
                                <img src='./img/character-icons/orca.png' alt='orca' />
                                <Form.Group controlId="validationOrca">
                                    <Form.Control as="select" value="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div id='character-panda' className='character' tabindex="-1">
                                <img src='./img/character-icons/panda.png' alt='panda' />
                                <Form.Group controlId="validationPanda">
                                    <Form.Control as="select" value="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Label>Game Parameters</Form.Label>
                    <div className='parameters-container'>
                        <Form.Label>Habitat Threats</Form.Label>
                        <Form.Group controlId="validationThreats">
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Label>Equation(s) per Threat</Form.Label>
                        <Form.Group controlId="validationEquations">
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Label>Attempt(s) per Equation</Form.Label>
                        <Form.Group controlId="validationAttempts">
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Label>Answer Input Type</Form.Label>
                        <Form.Group controlId="validationInputType">
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <Form.Label>Equation Parameters</Form.Label>
                    <Form.Group size="sm" className="input-habicoins mb-3" controlId="validationHabiCoins">
                        <Form.Label>Habi Coins per Equation</Form.Label>
                        <InputGroup>
                            <Form.Control
                                placeholder="ex: 1000"
                                aria-label="Enter amount"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2"><i class="fas fa-pencil-alt"></i></InputGroup.Text>
                            </InputGroup.Append>
                            <Form.Control.Feedback type="invalid">
                                Please enter an amount.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <div className='equation-container'>
                        <Form>
                            <div className="mb-3">
                                <Form.Check inline label="Even Numbers" type='checkbox' id='inline-checkbox-1' />
                                <Form.Check inline label="Odd Numbers" type='checkbox' id='inline-checkbox-2' />
                                <Form.Check inline label="Hints" type='checkbox' id='inline-checkbox-3' />
                                <Form.Check inline label="Labels" type='checkbox' id='inline-checkbox-4' />
                            </div>
                        </Form>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success">Save</Button>
                </Modal.Footer>
            </Form>
        </div>
    );
}

export default Lessons;