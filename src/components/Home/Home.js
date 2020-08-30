import React from 'react'
import { Segment, Grid,Icon,Statistic,Image } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
    return (
        <>
        
            <Segment  padded="very" size="massive">
                <Grid>
                
                    <Statistic.Group>
                        <Statistic>
                            <Statistic.Value>22</Statistic.Value>
                            <Statistic.Label><FontAwesomeIcon icon="candy-corn"/></Statistic.Label>
                        </Statistic>

                        <Statistic>
                            <Statistic.Value text>
                                Three
                                <br />
                                Thousand
                        </Statistic.Value>
                            <Statistic.Label>Signups</Statistic.Label>
                        </Statistic>

                        <Statistic>
                            <Statistic.Value>
                                <Icon name='plane' />5
                            </Statistic.Value>
                            <Statistic.Label>Flights</Statistic.Label>
                        </Statistic>

                        <Statistic>
                            <Statistic.Value>
                                
                                    42
                                 </Statistic.Value>
                            <Statistic.Label>Team Members</Statistic.Label>
                        </Statistic>
                    </Statistic.Group>

                </Grid>

            </Segment>

        </>
    )
}
