import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {
    addGroup,
    addPayments,
    addPerson,
    addSpending,
    changePersonName,
    changeSpendingAmount,
    changeSpendingType,
    deleteGroup,
    deletePerson,
    deleteSpending,
    toggleDrinksAlcohol,
    toggleEatMeat,
} from "../feature/groups/groupsSlice";
import {nanoid} from '@reduxjs/toolkit'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight, faPlusCircle, faRubleSign} from '@fortawesome/free-solid-svg-icons'
import {Modal} from 'react-bootstrap'
import HelperAlert from "./HelperAllert";

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

    return <div className='container-md'>
        <HelperAlert/>
        <div className={'row row-cols-1'}>
            {groups.map((group, i) => {
                return <Group
                    name={group.name}
                    id={group.id}
                    key={group.id}
                    persons={group.persons}
                    spendings={group.spendings}
                />
            })}
        </div>
        <div className={'row row-cols-1'}>
            <div className={'col mb-2'}>
                <div className={'row'}>
                    <button type="button" className="btn btn-success btn-lg" onClick={handleShowModal}>
                        Добавить группу
                    </button>
                </div>
            </div>
            <Calculate/>
        </div>
        <CalculationResults/>
        <Modal show={modalShow} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить новую группу</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={'row justify-content-center'}>
                    <div className={'col-1'}/>
                    <div className={'col-auto'}>
                        <input
                            className={getGroupNameInputClass()}
                            type="text"
                            placeholder="Введите название"
                            value={groupName}
                            onChange={onModalGroupNameChange}
                        />
                    </div>
                    <div className={'col-1'}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Закрыть</button>
                <button type="button" className="btn btn-primary" onClick={addNewGroup}>Добавить</button>
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

    function onDeleteGroup() {
        dispatch(deleteGroup({id: id}))
    }

    return (
        <div className='col mb-2'>
            <div className='row'>
                <p className={'h3'}>{name}
                    <button type="button" className="btn-close btn-sm" onClick={onDeleteGroup}/>
                </p>
            </div>
            <div className={'row'}>
                <div className={'col'}>
                    <p className={'h6'}>Участники <FontAwesomeIcon icon={faPlusCircle} color={'green'}
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
            <div className={'row'}>
                <div className={'col'}>
                    <p className={'h6'}>Траты <FontAwesomeIcon icon={faPlusCircle} color={'green'}
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

    function onDelete() {
        dispatch(deletePerson({id: id}))
    }

    const closeBtnStyle = {
        position: 'absolute', right: '3%', top: '50%', transform: 'translate(-3%, -50%)'
    }

    return (
        <div className={'row mb-1'} style={{position: 'relative'}}>
            <div className={'row'}>
                <div className={'col-md-12 col-lg-6'}>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="name"><i className="bi bi-person-circle"/></span>
                        <input type="text" className="form-control" placeholder="Имя" value={name}
                               onChange={onChangeName}/>
                    </div>
                </div>
                <div className={'col-md-12 col-lg-6'} style={{position: 'relative'}}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id={id + ':alcoholCheckbox'}
                               checked={drinksAlcohol}
                               onChange={onChangeDrinksAlcohol}/>
                        <label className="form-check-label" htmlFor={id + ':alcoholCheckbox'}>Алкоголь</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id={id + ":meatCheckbox"} checked={eatMeat}
                               onChange={onChangeEatMeat}/>
                        <label className="form-check-label" htmlFor={id + ":meatCheckbox"}>Мясо</label>
                    </div>
                </div>
            </div>
            <button type="button" className="btn-close btn-sm" style={closeBtnStyle} onClick={onDelete}/>
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

    function onDelete() {
        dispatch(deleteSpending({id: id}))
    }

    return (
        <div className={'row'} style={{marginTop: 5}}>
            <div className="input-group flex-nowrap">
                <input type="number" className="form-control" placeholder="Сумма" value={amount}
                       onChange={onChangeAmount}/>
                <select className="form-select" value={type} onChange={onChangeType}>
                    <option value={'other'}>Другое</option>
                    <option value={'alcohol'}>Алкоголь</option>
                    <option value={'meat'}>Мясо</option>
                </select>
                <span className={'input-group-text'}> <button type="button" className="btn-close btn-sm" onClick={onDelete}/></span>
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
        return <div className={'col mb-2'}>
            <div className={'row'}>
                <button type="button" className="btn btn-success btn-lg" onClick={onClick}>
                    Посчитать
                </button>
            </div>
        </div>
    } else {
        return <div className={'col mb-2'}>
            <div className={'row'}>
                <button type="button" className="btn btn-success btn-lg" disabled={true}>
                    Посчитать
                </button>
            </div>
        </div>
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
                icon={faArrowRight} style={{marginLeft: 30, marginRight: 30}}/> {props.amount}<FontAwesomeIcon
                icon={faRubleSign} size={'xs'}/> <FontAwesomeIcon
                icon={faArrowRight} style={{marginLeft: 30, marginRight: 30}}/>{props.recepient}</p>
        </div>
    </div>
}