import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import '../styles/Reports.css';

function Reports() {
    const [show, setShow] = useState(false);
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
                </div>
                <div className='list-header'>
                    <h2>My Report</h2>
                    <Button variant='link' className='new-lesson' onClick={handleShow}>
                        Share
                        <span className="fas fa-share-square" />
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
                <div className='class-stats'>
                    <ClassInfo />
                </div>
                <img id='report' src='./img/teacher/class-graph.png' alt='class graph' />
            </div>
        </div>
    )
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

export default Reports;