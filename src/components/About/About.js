import React from 'react'
import { Segment, Card, Image, Icon } from 'semantic-ui-react'
import './style.css'
export default function About(props) {
    return (
        <>
            <Segment className="background-remove">
                <Card color="teal" centered>
                    <Image src={props.data && props.data.avatar_url} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{props.data && props.data.name}</Card.Header>
                        <Card.Meta>
                            <a href="https://www.github.com/KzZe-Sama"><Icon name="github alternate" size="large" color="black" /></a>
                            <a href="https://www.linkedin.com/in/aayush-kc-bb59291ab/"><Icon name="linkedin" size="large" color="blue" /></a>
                            <a href="https://www.instagram.com/aayush_kessy/"><Icon name="instagram" size="large" color="pink" /></a>
                            <a href="https://www.reddit.com/user/KZeeSama"><Icon name="reddit" size="large" color="orange" /></a>
                            <a href="https://www.pinterest.com/lilmisstreebox/"><Icon name="pinterest p" size="large" color="red" /></a>


                            </Card.Meta>

                        <Card.Description>
                            {props.data && props.data.bio}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>

                        <Icon name='user circle ' color="teal" />
                        {props.data && props.data.followers} followers on GitHub

                    </Card.Content>
                </Card>
                <Segment >

                </Segment>

            </Segment>
        </>
    )
}
