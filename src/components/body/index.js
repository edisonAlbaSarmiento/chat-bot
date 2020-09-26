import React, { Component } from 'react'
import { 
	Container,
	ContainerHeader,
	ContainerText,
	Title,
	Subtitle,
	DataTitle,
	DataSubTitle,
	ContainerDescription,
	Button,
} from './styles'
class Body extends Component {
    render() {
        return (
            <Container>
							<ContainerHeader>
								<ContainerText>
									<ContainerDescription>
									<Title> 2020 </Title>
									<Subtitle>EDITION</Subtitle>
									<DataTitle> March 7</DataTitle>
									<DataSubTitle>Carnival party</DataSubTitle>
									<p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit dolor sit amet. </p>
									<Button>
										Read more 
									</Button>
									</ContainerDescription>
								
								</ContainerText>

							</ContainerHeader>
            </Container>
        )
    }
}

export default Body;
