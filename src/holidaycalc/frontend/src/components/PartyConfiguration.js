import {Counter} from "../feature/counter/Counter";
import {useSelector, useDispatch} from 'react-redux'
import {Modal, Button} from 'react-bootstrap'
import {addPerson, addGroup, addSpending, changePersonName} from "../feature/groups/groupsSlice";
import {nanoid} from '@reduxjs/toolkit'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'

export default function PartyConfiguration() {
    const groups = useSelector(state => state.groups)

    const dispatch = useDispatch()

    return <div className='container'>
        {groups.map((group, i) => {
            return <Group
                name={group.name}
                id={group.id}
                key={group.id}
                persons={group.persons}
                spendings={group.spendings}
            />
        })}
        <div className={'row align-content-center'} style={{marginTop: 10}}>
            <button className={'btn btn-success btn-lg'} onClick={() => dispatch(addGroup({
                id: nanoid(),
                name: 'new name',
                persons: [],
                spendings: [],
            }))}>+
            </button>
        </div>
    </div>
}

function Group(props) {
    const {id, name, persons, spendings} = props
    const dispatch = useDispatch()


    function addNewPerson() {
        dispatch(addPerson({
            id: id
        }))
    }

    function addNewSpending() {
        dispatch(addSpending({
            id: id
        }))
    }

    return (
        <div className='container'>
            <div className='row'>
                <p className={'h4'}>{name}</p>
            </div>
            <div className={'row'} style={{marginTop: '10px'}}>
                <div className={'fs-2 mb-3'}>
                    <p className={'h6'}>Persons <FontAwesomeIcon icon={faPlusCircle} color={'green'}
                                                                 onClick={addNewPerson}/></p>
                </div>
            </div>
            <div className='row justify-content-center'>
                {persons ? persons.map((person, i) => {
                    return <Person
                        name={person.name}
                        drinksAlcohol={person.drinksAlcohol}
                        eatMeat={person.eatMeat}
                        id={person.id}
                        key={person.id}
                    />
                }) : ''}
            </div>
            <div className={'row'} style={{marginTop: '10px'}}>
                <div className={'fs-2 mb-3'}>
                    <p className={'h6'}>Spendings <FontAwesomeIcon icon={faPlusCircle} color={'green'}
                                                                   onClick={addNewSpending}/></p>
                </div>
            </div>
            <div className='row justify-content-center'>
                {spendings ? spendings.map((person, i) => {
                    return <Spending

                    />
                }) : ''}
            </div>
        </div>
    )
}


function Person(props) {
    const {id, name, eatMeat, drinksAlcohol} = props
    const dispatch = useDispatch()

    function onChangeName(e){
        dispatch(changePersonName({
            id: id,
            name: e.target.value,
        }))
    }

    return (
        <div className={'row'} style={{marginTop: '10px'}}>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="name"><i className="bi bi-person-circle"/></span>
                <input type="text" className="form-control" placeholder="Name" aria-label="Username"
                       aria-describedby="name" value={name} onChange={onChangeName}/>
                <span className="input-group-text">Alcohol</span>
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" checked={drinksAlcohol}
                           aria-label="Checkbox for following text input"/>
                </div>
                <span className="input-group-text">Meat</span>
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" checked={eatMeat}
                           aria-label="Checkbox for following text input"/>
                </div>
            </div>
        </div>
    )
}

function Spending(props) {
    const {id, amount, type} = props
    return (
        <div className={'row'} style={{marginTop: '10px'}}>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Spent amount"/>
                <select className="form-select">
                    <option selected={true} value={'other'}>Other</option>
                    <option value={'alcohol'}>Alcohol</option>
                    <option value={'meat'}>Meat</option>
                </select>
            </div>
        </div>
    )
}