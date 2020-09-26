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
	ContainerScroll,
	ButtonSecond,
	TextButtonSecond,
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
				<ContainerScroll>
					<ButtonSecond src="https://themes.muffingroup.com/be/party3/wp-content/uploads/2020/02/party3-icon1.png" alt="party3-icon1" title="party3-icon1"/>
					<TextButtonSecond>SCROLL DOWN</TextButtonSecond>
				</ContainerScroll>
            </Container>
        )
    }
}

export default Body;
