import ThemedButton from "../../../../../../../../../TopLevelComponents/ThemedButton"
import React from 'react'

const ConfirmButton = (props) => {

    const { categoryIndex, toggleCategoryDeletePopup } = props.fromCategoryAccordion


    const { 
        tick,
        updateBudget,
        newCategories, 
        toggleChanges, 
        userMadeChanges,
        setNewCategories, 
    } = props.fromBudget

    const confirm = (e) => {
        e.preventDefault()
        let categoriesArrayCopy = newCategories
        categoriesArrayCopy.splice(categoryIndex, 1)
        setNewCategories(categoriesArrayCopy)
        !userMadeChanges && toggleChanges(true)
        toggleCategoryDeletePopup(false)
        updateBudget(tick + 1)
    }

    return (
        <ThemedButton 
            onClick={(e) => confirm(e)} 
            className={props.classes.button}
        >
            Confirm
        </ThemedButton>
    )
}

export default ConfirmButton
