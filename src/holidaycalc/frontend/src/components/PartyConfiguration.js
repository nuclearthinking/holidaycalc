import {Counter} from "../feature/counter/Counter";
import {useSelector, useDispatch} from 'react-redux'
import {Modal, Button} from 'react-bootstrap'
import {groupAdded} from "../feature/groups/groupsSlice";
import { nanoid } from '@reduxjs/toolkit'


export default function PartyConfiguration() {
    const groups = useSelector(state => state.groups)

    const dispatch = useDispatch()

    return <div className='container'>
        {groups.map((group, i) => {
            return <Group name={group.name}/>
        })}
        <div className={'row align-content-center'} style={{'margin-top': 10}}>
            <button className={'btn btn-success btn-lg'} onClick={() => dispatch(groupAdded({
                id: nanoid(),
                name: 'new name',
                persons: []
            }))}>+</button>
        </div>
    </div>
}

function Group(props) {

    return (
        <div className='container'>
            <div className='row'>
                <p className={'h4'}>{props.name}</p>
            </div>
            <div className='row justify-content-center'>
                <Person name={'vlad'}/>
                <Person name={'hannah'}/>
            </div>
            <div className={'row'} style={{marginTop: '10px'}}>
                <p className={'h6'}>Spendings</p>
            </div>
            <div className='row justify-content-center'>
                <Spending/>
                <Spending/>
                <Spending/>
                <Spending/>
            </div>
        </div>
    )
}

function Person(props) {

    return (
        <div className={'row'} style={{marginTop: '10px'}}>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="name"><i className="bi bi-person-circle"/></span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                       aria-describedby="name" value={props.name}/>
                <span className="input-group-text">Alcohol</span>
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" checked={true}
                           aria-label="Checkbox for following text input"/>
                </div>
                <span className="input-group-text">Meat</span>
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" checked={true}
                           aria-label="Checkbox for following text input"/>
                </div>
            </div>
        </div>
    )
}

function Spending() {
    return (
        <div className={'row'} style={{marginTop: '10px'}}>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Spent amount"/>
                <select className="form-select" id="inputGroupSelect01">
                    <option selected={true} value={'other'}>Other</option>
                    <option value={'alcohol'}>Alcohol</option>
                    <option value={'meat'}>Meat</option>
                </select>
            </div>
        </div>
    )
}