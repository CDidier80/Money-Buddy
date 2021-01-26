import React, { useState, useLayoutEffect } from 'react';
import IncomeTable from "../IncomeTable/IncomeTable"
import AddDelButtonGroup from "./components/buttons/AddDelButtonGroup"
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import { 
    makeStyles, 
    Accordion, 
    useMediaQuery 
} from '@material-ui/core'


const IncomeAccordion = (props) => {

    /* -------------------------- PROPS ------------------------- */
    
    const { gradientWrapper } = props.fromApp
    const { newIncomes } = props.fromBudget

    /* -------------------- init MEDIA QUERY -------------------- */

    const autoExpandHeight = useMediaQuery('(min-height:950px)', {noSsr: true})
    
    /* -------------------------- STATE ------------------------- */
    
    const [showIncomeDeleteIcons, toggleIncomeDeleteIcons] = useState(false)
    const [lengthOfIncomes, setLengthOfIncomes] = useState(newIncomes.length)
    const [expanded, setExpanded] = useState(false)


    /* ------------------------ EFFECTS ----------------------- */

    useLayoutEffect(() => {
        if (autoExpandHeight && !expanded) {
            console.log("triggered")
            setExpanded(true)
        }
    }, [autoExpandHeight])

    
    /* -------------------------- FUNCTIONS ------------------------- */

    const handleExpansion = (e) => {
        setExpanded(!expanded)
    }


    /* -------------------------- STYLES ------------------------- */

    const useStyles = makeStyles({
        accordionWrapper: {
            ...gradientWrapper,
            marginBottom: "20px",
            padding: "6px",
            marginBottom: "20px",
            position: "relative"
        },
        accordion: {
            borderRadius: "3px",
            minHeight: "15vh",
            position: "relative"
        },
        deleteButton: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: showIncomeDeleteIcons ? "#e6a824" : "#2c7b71",
            padding: "0 5px 0 5px"
        }
    })
    
    const classes = useStyles()


    /* -------------------------- PROPS FOR CHILDREN------------------------- */

    const incomeTableProps = {
        showIncomeDeleteIcons,
        toggleIncomeDeleteIcons
    }

    const addDelButtonGroupProps = {
        showIncomeDeleteIcons,
        toggleIncomeDeleteIcons,
        setLengthOfIncomes,
        lengthOfIncomes
    }
    

    return (
        <div className={classes.accordionWrapper}>
            <Accordion 
                className={classes.accordion}
                expanded={expanded} 
                onChange={(e) => handleExpansion(e)}
            >
                <AccordionDropdownTab 
                    expanded={expanded}
                />
                <AddDelButtonGroup 
                    {...props}
                    fromIncomeAccordion={{...addDelButtonGroupProps}}
                />
                <IncomeTable 
                    {...props}
                    fromIncomeAccordion={{...incomeTableProps}}
                />
            </Accordion>
        </div>
    )
}

export default IncomeAccordion

