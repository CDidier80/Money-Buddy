import React, {useEffect, useState} from 'react';
import "./styles/CashFlow.css"
import Chart from "./components/Chart/Chart"
import { generateMonths } from "./modules/MonthClass"
import CashflowHeader from './components/CashflowHeader/CashflowHeader';
import PaginatingContainer from "./components/PaginatingContainer/PaginatingContainer"

const CashflowDevelopment = (props) => {

    /* ----------------------- STATE ----------------------- */
    
    const [inflows, setInflows] = useState("")
    const [newMonths, setMonths] = useState("")
    const [outflows, setOutflows] = useState("")
    const [cashReserves, setCashReserves] = useState("")
    
    const [loaded, setLoaded] = useState(false)
    const [tick, incrementTicker] = useState(0)


    useEffect(() => {
        const generatedMonths = generateMonths()
        setMonths(generatedMonths)
        const [
            inflows,
            outflows, 
            adjustedCashReserves
        ] = createDatasets(generatedMonths)

        setInflows(inflows)
        setOutflows(outflows)
        setCashReserves(adjustedCashReserves)

    }, [tick])

    useEffect(() => {
        if (
            newMonths    !== ""  |
            inflows      !== ""  |
            outflows     !== ""  |
            cashReserves !== "" 
        ){
            setLoaded(true)
        }
    },  
    [
        newMonths,
        inflows,
        outflows, 
        cashReserves
    ])


    /* ----------------------- FUNCTIONS ----------------------- */

    const createDatasets = (months) => {

        let inflows = []
        let outflows = []
        let monthlyCashReserve = [1000]

        months.forEach(month => {
            const index = monthlyCashReserve.length - 1
            const lastCashReserve = monthlyCashReserve[index]
            const totalInflows = month.totalInflows
            const totalOutflows = month.totalOutflows
            const monthlyCashflow = totalInflows - totalOutflows
            const newCashReserve = lastCashReserve + monthlyCashflow
            inflows.push(totalInflows)
            outflows.push(totalOutflows)
            monthlyCashReserve.push(newCashReserve)
        })
        let adjustedCashReserves = monthlyCashReserve.slice(1)
        return [inflows, outflows, adjustedCashReserves]
    }

//     /* ----------------------- PROPS FOR CHILDREN ----------------------- */

    const headerProps = {
        tick,
        setLoaded, 
        incrementTicker,
    }

    const chartProps = {
        inflows,
        outflows, 
        cashReserves,
    }

    const paginatingContainerProps = {
        inflows,
        outflows, 
        newMonths,
        cashReserves
    }

    /* -------------------------- JSX -------------------------- */

    return ( !loaded ? <div></div> : 

        <div className="cashflow">
            <CashflowHeader 
                fromCashflowDevelopment={{...headerProps}}
            />
            <Chart 
                {...props.fromApp}
                fromCashflowDevelopment={{...chartProps}}
            />
            <PaginatingContainer 
                {...props}
                fromCashflowDevelopment={{...paginatingContainerProps}}
            />

        </div>
    )
}

export default CashflowDevelopment

