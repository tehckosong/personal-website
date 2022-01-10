import React from 'react'
import styled from 'styled-components'
function NotFound() {
    return (
        <Container>
            <div>
                <h1>404 ERROR ! </h1>
                <h4>Page Not Found....</h4>
            </div>
        </Container>
    )
}

export default NotFound


const Container = styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
    height: calc(100vh - 80px);
`
