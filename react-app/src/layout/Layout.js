import { Outlet, Link } from "react-router-dom"
import { AppBar, Toolbar, Button } from '@mui/material'

const Layout = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Button component={Link} to={'/'} color="inherit">Home</Button>
                    <Button component={Link} to={'/academic'} color="inherit">Academic</Button>
                    <Button component={Link} to={'/experience'} color="inherit">Experience</Button>
                    <Button component={Link} to={'/projects'} color="inherit">Projects</Button>
                    <Button component={Link} to={'/skills'} color="inherit">Skills</Button>
                    <Button component={Link} to={'/interests'} color="inherit">Interests</Button>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    )
}

export default Layout