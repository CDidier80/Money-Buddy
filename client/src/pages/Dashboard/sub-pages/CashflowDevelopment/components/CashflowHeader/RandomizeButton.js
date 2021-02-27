import React from 'react'
import ThemedButton from "../../../../../../TopLevelComponents/ThemedButton"
export const RandomizeButton = (props) => {

    const {
        tick,
        setLoaded, 
        incrementTicker,
    } = props.fromCashflowDevelopment

    const rerender = (e) => {
        e.preventDefault()
        setLoaded(false)
        incrementTicker(tick + 1)
    }

    const buttonProps = {
        onClick: (e) => rerender(e),
        overrides: {width: "10vw", minWidth: "100px"} 
    }
    
    return (
        <ThemedButton {...buttonProps} >
            Randomize
        </ThemedButton>
    )
}
