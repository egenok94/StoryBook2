import react from 'react'

const Checkbox = ({ label, onChange, isChecked, id }) => {
    return (
        <lable htmlFor={id}>
            <input type="checkbox" onChange={(event => onChange(event.target.checked))} checked={isChecked} id={id} ></input>
            <span>{label}</span>
        </lable>
    )

}

export { Checkbox }