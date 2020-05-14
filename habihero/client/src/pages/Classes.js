import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/Classes.css';

function Classes() {
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
                    <h2>My Classroom</h2>
                    <Button variant='link' className='new-lesson' onClick={handleShow}>
                        Invite
                        <span className="fas fa-share-square" />
                    </Button>
                    <div className='sort-container'>
                        <p>sort by:</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                A - Z
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
                <div className='class-stats'>
                    <ClassInfo />
                </div>
                <CardDeck id='students'>
                    <StudentCard name='Andre Magallanes' color='green' />
                    <StudentCard name='Chad Ohta' color='purple' />
                    <StudentCard name='Adam Pumputis' color='orange' />
                    <StudentCard name='Jiyun Yu' color='green' />
                    <StudentCard name='Andre Magallanes' color='purple' />
                    <StudentCard name='Chad Ohta' color='orange' />
                    <StudentCard name='Adam Pumputis' color='green' />
                    <StudentCard name='Jiyun Yu' color='purple' />
                </CardDeck>
                <Modal dialogClassName="modal-90w" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <LessonModal />
                </Modal>
            </div>
        </div>
    );
}

function ClassInfo() {
    return (
        <div className='class-info-container'>
            <p id='num-students' className='class-info'>
                <i className="fas fa-users" />&nbsp;
                <span style={{ fontWeight: 'bold' }}> 29 </span> 
                students
            </p>
            <p id='num-lessnos' className='class-info'>
                <i className="fas fa-file-alt" />&nbsp; 
                <span style={{ fontWeight: 'bold' }}> 32 </span>
                lessons
            </p>
            <p id='num-coins' className='class-info'>&nbsp;
                <img className="coin-icon" src='./img/habi-coin-icon.png' alt='habi-coin icon' /> 
                <span style={{ fontWeight: 'bold' }}> 1000 </span> 
                Habi-coins
            </p>
        </div>
    );
}

function StudentCard(props) {
    let path = './img/teacher/student-green.png'
    if (props.color === 'green') {
        path = './img/teacher/student-green.png'
    } else if (props.color === 'orange') {
        path = './img/teacher/student-orange.png'
    } else  {
        path = './img/teacher/student-purple.png'
    } 

    return (
        <Card>
            <Card.Body>
                <img className='student-image' src={path} alt="student profile" />
                <Card.Title>{props.name}</Card.Title>
                <div className='student-stats'>
                    <p><i class="fas fa-gamepad" /> <span style={{ fontWeight: 'bold' }}>43</span> plays</p>
                    <p><i className="fas fa-users" /> <span style={{ fontWeight: 'bold' }}>3</span> lessons</p>
                    <p className='student-coins'>&nbsp;
                        <img className="coin-icon" src='./img/habi-coin-icon.png' alt='habi-coin icon' /> 
                        <span style={{ fontWeight: 'bold' }}> 300 </span> 
                        Habi-coins
                    </p>
                </div>
                <Button variant="danger">Remove</Button>
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
            <Modal.Body>
                   
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success">Save</Button>
            </Modal.Footer>
        </div>
    );
}

export default Classes;