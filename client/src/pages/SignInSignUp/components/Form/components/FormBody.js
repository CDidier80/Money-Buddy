import {
    Grid,
    Paper,
    MuiThemeProvider,
} from '@material-ui/core/'
import theme from "../styles/theme"
import React from 'react'


const FormBody = (props) => {

    const {
        child3: FormControl,
        child1: LockedOut,
        child2: Header,
        isSigningUp,
        forSubmit,
        classes,
    } = props

    
    const forFormControl = {
        ...forSubmit,
    }

    const forHeader = {
        isSigningUp,
        classes, 
    }

    return (
        <MuiThemeProvider theme={theme}>
            <div className="form-wrapper" >
                <Grid 
                    className={classes.root}
                    container 
                >
                    <Grid 
                        className={classes.paperRoot}
                        component={Paper} 
                        square 
                    >
                        <div   className={classes.paper} >
                            <LockedOut classes={classes} />
                            <Header        {...forHeader} />
                            <FormControl {...forFormControl} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </MuiThemeProvider>
    )
}

export default FormBody
