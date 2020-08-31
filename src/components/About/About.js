import React from "react";
import { Segment, Card, Image, Icon } from "semantic-ui-react";
import "./style.css";
export default function About(props) {
  return (
    <>
      <Segment className="background-remove">
        <Card color="teal" centered>
          <Image src={props.data && props.data.avatar_url} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{props.data && props.data.name}</Card.Header>
            <Card.Meta>
              <a href="https://www.github.com/KzZe-Sama">
                <Icon name="github alternate" size="large" color="black" />
              </a>
              <a href="https://www.linkedin.com/in/aayush-kc-bb59291ab/">
                <Icon name="linkedin" size="large" color="blue" />
              </a>
              <a href="https://www.instagram.com/aayush_kessy/">
                <Icon name="instagram" size="large" color="pink" />
              </a>
              <a href="https://www.reddit.com/user/KZeeSama">
                <Icon name="reddit" size="large" color="orange" />
              </a>
              <a href="https://www.pinterest.com/lilmisstreebox/">
                <Icon name="pinterest p" size="large" color="red" />
              </a>
            </Card.Meta>

            <Card.Description>{props.data && props.data.bio}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" color="teal" />
            {props.data && props.data.followers} followers on GitHub
          </Card.Content>
        </Card>
        <Segment inverted className="about-text">
          Corona-Chan is a web app that pulls live stats of covid-19 database
          from <a href="https://covid19api.com/">covid19api</a>. Built using
          React Frontend Library. The app uses Some Components Provided by
          semantic ui. The app is intended to be used for educatioanl purposes.
          This app was one of the finest projects built by me. Corona-Chan is
          purposed to be deployed on Netlify. Do check my other Projects on
          github and follow me on my social media accounts linked above.
        </Segment>
      </Segment>
    </>
  );
}
