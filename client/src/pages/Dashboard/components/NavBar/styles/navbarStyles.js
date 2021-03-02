import { makeStyles } from '@material-ui/core/'

export const useMoneyBuddyLinkStyles = makeStyles(({palette: p}) => {
    return({
        titleLink: {
            "&:hover": { color: p.secondary.main, },
            "&:hover $money": { color: "white" },
            transition: "color .3s ease-in-out",
            textDecoration: "none",
            fontSize: "26px",
            display: "block",
            color: "white",
        },
        money: {
            transition: "color .3s ease-in-out",
            color: p.secondary.main,
            marginRight: "2px",
            fontSize: "26px",
        },
    })
})


export const useBurgerStyles = makeStyles(({palette: p}) => {
    return({
        burgerWrapper: {
            textDecoration: "none",
            display: "block",
            color: "white",
        },
        burger: {
            transition: "color .3s ease-in-out",
            marginRight: "2px",
            fontSize: "26px",
            color: "white",
            "&:hover": {
                color: p.secondary.main
            }
        },
        '@media (max-width: 430px)': {
            burgerWrapper: {
              fontSize: "18px",
              padding: "5px",
            }
        }


    })
})

export const useSignoutLinkStyles = makeStyles(({palette: p}) => {
    return({
        link: {
            transition: "color .3s ease-in-out",
            paddingRight: "1.25rem",
            textAlign: "-webkit-match-parent",
            paddingLeft: "1.25rem",
            boxSizing: "border-box",
            textDecoration: "none",
            letterSpacing: "1px",
            justifySelf: "right",
            marginLeft: "auto",
            display: "block",
            color: "#ffffff",
            fontSize: "1rem",
            fontWeight: 700,
            marginBottom: 0,
            padding: "1rem",
            "&:hover": {
                color: p.secondary.main
            },
        },
        '@media (max-width: 430px)': {
            link: {
              fontSize: "14px",
              padding: "5px",
              paddingRight: "5px", 
              paddingLeft: "5px"
            }
        }
    })
})


export const useAccountLinkStyles = (theme, iconSelected) => {
    
    const useStyles = makeStyles(({palette: p}) => {
        return({
            accountLink: {
                transition: "color .3s ease-in-out",
                color: iconSelected ? p.secondary.main : "white",
                "&:hover": {
                    color: p.secondary.main
                }
            },
        })
    })

    return useStyles(theme)
}