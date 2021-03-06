import React from 'react';
import { Aside, FlexBox, Columns, Column, Header } from '../components'

class Home extends React.Component {
	render () {
		return (
      <FlexBox className="flex-column">
        <Header className="flex bg-green align-items-center">
          <div className="flex bg-navy aside quarter">
            Logo
          </div>
          <div className="">
            Links
          </div>  
        </Header>
        <FlexBox>
          <Aside />
          <FlexBox className="content bg-orange flex-column">
            <Header>
              headera
            </Header>
            <Columns>
              <Column width="half" bgColor="bg-red">
                col 1
              </Column>
              <Column>
                col 1
              </Column>
              <Column>
                col 1
              </Column>
            </Columns>
            <Columns>
              <Column>
                col 1
              </Column>
              <Column>
                col 1
              </Column>
              <Column>
                col 1
              </Column>
            </Columns>
          </FlexBox>
        </FlexBox>
      </FlexBox>
		)
	}
}

export default Home;