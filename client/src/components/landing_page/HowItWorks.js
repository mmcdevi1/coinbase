import React from 'react';

const TEAM_MEMBERS = [
  {
    id: 1,
    icon: 'Step 1',
    bio: "Send in your saliva kit",
    img: `${process.env.PUBLIC_URL}/images/testtube.png`
  },
  {
    id: 2,
    icon: 'Step 2',
    bio: "Get your DNA Sequenced",
    img: `${process.env.PUBLIC_URL}/images/dnaSequence.png`
  },
  {
    id: 3,
    icon: 'Step 3',
    bio: "Share with Medical research",
    img: `${process.env.PUBLIC_URL}/images/doctor.png`
  },
  {
    id: 4,
    icon: 'Step 4',
    bio: "Earn DNA ID tokens, help cure disease",
    img: `${process.env.PUBLIC_URL}/images/discovery.png`
  }
];

class Team extends React.Component {
  renderTeamMembers () {
    return TEAM_MEMBERS.map(member => {
      return (
        <div className="col-sm-3" key={member.id}>
          <img src={member.img} alt={member.icon.split(' ')[0]} className="img-circle img-responsive" />
          <div className="blurb">
            <div className="name center">
              <h6>{member.icon}</h6>
            </div>
            <div className="bio">
              <div className="center"> 
                
              </div>
              <p className="center">{member.bio}</p>
            </div>
          </div>
        </div>
      )
    });
  }

  render () {
    return (
      <section id="team" style={{padding: '50px 0'}} className="notable-members">
        <div className="container">
          <div className="center">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <h1 style={{marginBottom: 30}}>How it all Works</h1>
                <p style={{marginBottom: 50}} className="text-muted"></p>
              </div>
            </div>
          </div>
          <div className="row">
            {this.renderTeamMembers()}
          </div>
        </div>
      </section>
    )
  }
}

export default Team;