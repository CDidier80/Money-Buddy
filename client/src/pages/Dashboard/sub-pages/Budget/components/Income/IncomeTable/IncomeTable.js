import { 
    Paper, 
    Table, 
    TableBody, 
    makeStyles, 
    useMediaQuery,
    TableContainer, 
    AccordionDetails
} from '@material-ui/core';
import React, { useState } from 'react';
import IncomeRow from "../IncomeRow/IncomeRow"
import IncomeHeaders from "./IncomeHeaders/IncomeHeaders"
import { pickColor } from "../../../../universal-functions/styleFunctions"
import { moneyBuddyTheme } from "../../../../../../../modules/themeAndStyles"


const IncomeTable = (props) => {

    /* -------------------------- PROPS -------------------------- */
    
    const { newIncomes } = props.fromBudget    

    /* -------------------------- STATE -------------------------- */

    const [incomingDeletion, setIncomingDeletion] = useState(false)
    const [annualToggled, setAnnualToggled] = useState(true)

    
    /* ----------------------- MEDIA QUERY ------------------------ */
    const nssr = {noSsr: true}
    
    const small = useMediaQuery('(max-width: 725px)', nssr)
    const verySmall = useMediaQuery('(max-width: 460px)', nssr)
    const onlyTwoCells = useMediaQuery('(max-width: 390px)', nssr)

    
    const createTextStyle = () => {
        let fontSize = {}
        let styleObject = {
            paddingLeft: 0,
            paddingRight: 0
        }
        if (verySmall) (fontSize = {fontSize: "10px"})
        if (small)     (fontSize = {fontSize: "12px"})
        return {...styleObject, ...fontSize}
    }
    
    
    // const { offRowColor, rowColor } = moneyBuddyTheme

    const padding  = verySmall ? { padding: "6px" } : {}
    const overflow = verySmall ? { overflowX: "hidden" } : {}

    const useStyles = makeStyles( theme => {
        
       return ({
            accordionDetails: {
                ...padding,
                ...overflow
            },
            table: {
                minWidth: "270px",
                ...overflow
            },
            tableContainer: {
                maxWidth: "890px",
                margin: "auto",
                ...overflow
            },
        })
    })

    const classes = useStyles(props.theme)

    const textSize = small ? createTextStyle() : {}

    const propsHeaders = {
        annualToggled,
        setAnnualToggled,
        textSize: textSize,
        onlyTwoCells: onlyTwoCells
    }

    return (
        <AccordionDetails
            className={classes.accordionDetails}
        >
            <TableContainer 
                className={classes.tableContainer}
                component={Paper}
            >
                <Table 
                    className={classes.table} 
                    size="small" 
                >
                    <TableBody>
                        <IncomeHeaders 
                            {...props}
                            {...propsHeaders}
                        />
                        {newIncomes.map((income, index) => {
                            const { source, amount } = income
                            const monthly = Math.round(amount / 12)
                            const rowColor = pickColor(index)
                            const propsForRows = {
                                setIncomingDeletion,
                                arrayIndex: index,
                                incomingDeletion,
                                annualToggled,
                                onlyTwoCells,
                                textSize, 
                                rowColor,
                                monthly,
                                source,
                                amount, 
                            }
                            return (
                                <IncomeRow 
                                    fromIncomeTable={{...propsForRows}}
                                    key={index + 100000}
                                    {...props}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </AccordionDetails>
    )
}

export default IncomeTable


