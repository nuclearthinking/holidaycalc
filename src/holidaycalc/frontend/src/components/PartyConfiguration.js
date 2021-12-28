import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {
    addGroup,
    addPerson,
    addSpending,
    changePersonName,
    changeSpendingAmount,
    changeSpendingType,
    toggleDrinksAlcohol,
    toggleEatMeat,
    addPayments
} from "../feature/groups/groupsSlice";
import {nanoid} from '@reduxjs/toolkit'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle, faRubleSign, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {Modal} from 'react-bootstrap'

export default function PartyConfiguration() {
    const groups = useSelector(state => state.storage.groups)
    const [modalShow, setModalShow] = useState(false)
    const [groupName, setGroupName] = useState('')
    const [groupNameState, setGroupNameState] = useState('empty')

    const dispatch = useDispatch()


    function onModalGroupNameChange(e) {
        setGroupName(e.target.value)
    }

    const handleCloseModal = () => setModalShow(false)
    const handleShowModal = () => setModalShow(true)

    function addNewGroup() {
        if (groupName.length >= 3) {
            dispatch(addGroup({
                id: nanoid(),
                name: groupName,
                persons: [],
                spendings: [],
            }))
            setGroupNameState('empty')
            setGroupName('')
            setModalShow(false)
        } else {
            setGroupNameState('error')
            setTimeout(() => {
                setGroupNameState('empty')
            }, 2000)
        }
    }

    function getGroupNameInputClass() {
        if (groupNameState === 'empty') {
            return 'form-control form-control-lg'
        } else {
            return 'form-control form-control-lg is-invalid'
        }
    }

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
            <button type="button" className="btn btn-success btn-lg" onClick={handleShowModal}>
                +
            </button>
        </div>
        <Calculate/>
        <CalculationResults/>
        <Modal show={modalShow} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add new group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={'row justify-content-center'}>
                    <div className={'col-1'}/>
                    <div className={'col-auto'}>
                        <input
                            className={getGroupNameInputClass()}
                            type="text"
                            placeholder="Group name"
                            value={groupName}
                            onChange={onModalGroupNameChange}
                        />
                    </div>
                    <div className={'col-1'}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={addNewGroup}>Add</button>
            </Modal.Footer>
        </Modal>
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
        <div className='container' style={{marginTop: 15}}>
            <div className='row'>
                <p className={'h3'}>{name}</p>
            </div>
            <div className={'row'}>
                <div className={'col'}>
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
            <div className={'row'} style={{marginTop: 5}}>
                <div className={'col'}>
                    <p className={'h6'}>Spendings <FontAwesomeIcon icon={faPlusCircle} color={'green'}
                                                                   onClick={addNewSpending}/></p>
                </div>
            </div>
            <div className='row justify-content-center'>
                {spendings ? spendings.map((spending, i) => {
                    return <Spending
                        amount={spending.amount}
                        type={spending.type}
                        id={spending.id}
                        key={spending.id}
                    />
                }) : ''}
            </div>
        </div>
    )
}


function Person(props) {
    const {id, name, eatMeat, drinksAlcohol} = props
    const dispatch = useDispatch()

    function onChangeName(e) {
        dispatch(changePersonName({
            id: id,
            name: e.target.value,
        }))
    }

    function onChangeDrinksAlcohol() {
        dispatch(toggleDrinksAlcohol({id: id}))
    }

    function onChangeEatMeat() {
        dispatch(toggleEatMeat({id: id}))
    }

    return (
        <div className={'row align-content-center'}>
            <div className={'row justify-content-center'}>
                <div className={'col-md-12 col-lg-6'}>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="name"><i className="bi bi-person-circle"/></span>
                        <input type="text" className="form-control" placeholder="Name" aria-label="Username"
                               aria-describedby="name" value={name} onChange={onChangeName}/>
                    </div>
                </div>
                <div className={'col-md-12 col-lg-6 align-self-center'}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="alcoholCheckbox" checked={drinksAlcohol}
                               onChange={onChangeDrinksAlcohol}/>
                        <label className="form-check-label" htmlFor="alcoholCheckbox">Alcohol</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="meatCheckbox" checked={eatMeat}
                               onChange={onChangeEatMeat}/>
                        <label className="form-check-label" htmlFor="meatCheckbox">Meat</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Spending(props) {
    const {id, amount, type} = props
    const dispatch = useDispatch()

    function onChangeAmount(e) {
        dispatch(changeSpendingAmount({
            id: id,
            amount: e.target.value,
        }))
    }

    function onChangeType(e) {
        dispatch(changeSpendingType({
            id: id,
            type: e.target.value,
        }))
    }

    return (
        <div className={'row'} style={{marginTop: 5}}>
            <div className="input-group flex-nowrap">
                <input type="number" className="form-control" placeholder="Amount" value={amount}
                       onChange={onChangeAmount}/>
                <select className="form-select" value={type} onChange={onChangeType}>
                    <option value={'other'}>Other</option>
                    <option value={'alcohol'}>Alcohol</option>
                    <option value={'meat'}>Meat</option>
                </select>
            </div>
        </div>
    )
}

function Calculate() {
    const groups = useSelector(state => state.storage.groups)
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()


    function onClick() {
        fetch('/calculator/calculate-spendings', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    eventName: 'event',
                    participants: groups,
                })
            }
        ).then((response) => {
            if (!response.ok) {
                console.error('error')
            } else {
                return response.json()
            }
        }).then(data => {
            dispatch(addPayments({data: data.payments}))
        }).catch(function (error) {
            console.error(error)
        })

    }

    useEffect(() => {
        if (groups.length >= 2) {
            setShow(true)
        }
    }, [groups])


    if (show) {
        return <div className={'row align-content-center'} style={{marginTop: 10}}>
            <button type="button" className="btn btn-success btn-lg" onClick={onClick}>
                Calculate
            </button>
        </div>
    } else {
        return <div/>
    }
}

function CalculationResults() {
    const [show, setShow] = useState(false)
    const payments = useSelector(state => state.storage.payments)

    useEffect(() => {
        if (payments) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [payments])


    if (show) {
        return <div className={'container'} style={{marginTop: 20}}>
            <div className={'row'}>
                {payments.map((p, i) => {
                    return <PaymentRow
                        payer={p.payer}
                        amount={p.amount}
                        recepient={p.recepient}
                    />
                })}
            </div>
        </div>
    } else {
        return <div/>
    }
}

function PaymentRow(props) {
    return <div className={'row align-content-center'}>
        <div className={'col-md-12 justify-content-center'}>
            <p className={'h5 text-center'}>{props.payer}<FontAwesomeIcon
                icon={faArrowRight} style={{marginLeft: 30, marginRight: 30}}/>  {props.amount}<FontAwesomeIcon icon={faRubleSign} size={'xs'}/> <FontAwesomeIcon
                icon={faArrowRight} style={{marginLeft: 30, marginRight: 30}}/>{props.recepient}</p>
        </div>
    </div>
}