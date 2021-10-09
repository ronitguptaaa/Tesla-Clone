import React from 'react'
import styled from 'styled-components'
import Section from "./Section";

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back Gurantee"
                backgroundImg="solar-panel.jpg"
                LeftBtnText="Order Now"
                RightBtnText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roofs Costs Less than a New Roof Plus Solar Panel"
                backgroundImg="solar-roof.jpg"
                LeftBtnText="Order Now"
                RightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                LeftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh; 
`