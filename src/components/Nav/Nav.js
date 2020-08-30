import React from 'react'
import { Menu, Header, Icon } from 'semantic-ui-react'
import './style.css'
import { useHistory } from 'react-router-dom'
export default function Nav() {
    let history=useHistory();
    let navigateAbout=()=>{
        history.push('/about')
    }
    let navigateHome=()=>{
        history.push('/')
    }
    return (
        <>
            <Menu inverted>
                <Menu.Menu>
                    <Menu.Item><Header as="h1" color="red" className="font-header">Corona-chan<Icon name="bug" color="green"/></Header></Menu.Item>
                </Menu.Menu>
                <Menu.Menu position="right">
                    <Menu.Item onClick={navigateHome}>
                        Home
                    </Menu.Item>
                    <Menu.Item onClick={navigateAbout}>
                        About
                    </Menu.Item>
                </Menu.Menu>

            </Menu>
        </>
    )
}
