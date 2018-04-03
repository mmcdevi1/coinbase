import React from 'react';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Craig Calderone',
    linkedin: 'https://www.linkedin.com/in/craigcalderone/',
    bio: "Craig is a co-founder that comes from a background in the tech startup industry. Having worked at NASDAQ, Techstars and Leanplum, he is driving product vision. He holds a degree in Economics from Villanova University.",
    img: `${process.env.PUBLIC_URL}/images/craig.jpg`
  },
  {
    id: 2,
    name: 'PJ Smith',
    linkedin: 'https://www.linkedin.com/in/paultsmithjr/',
    bio: "PJ is a co-founder that comes from a background in genetics and biomedical science. Having worked at Yale University and The Jackson Laboratory and holds a patent for a small molecule treatment for cystic fibrosis that's currently in FDA stage 1 clinical trials.",
    img: `${process.env.PUBLIC_URL}/images/pj.jpg`
  },
  {
    id: 3,
    name: 'Michael McDevitt',
    linkedin: 'https://www.linkedin.com/in/mmcdevi1/',
    bio: "Michael is a co-founder that comes from a background in Civil Engineering and is a self-taught developer. He will be leading the technical development of our platform.",
    img: `${process.env.PUBLIC_URL}/images/mike.jpg`
  }
];

class Team extends React.Component {
  renderTeamMembers () {
    return TEAM_MEMBERS.map(member => {
      return (
        <div className="col-sm-4" key={member.id}>
          <img src={member.img} alt={member.name.split(' ')[0]} className="img-circle img-responsive" />
          <div className="blurb">
            <div className="name center">
              <h6>{member.name}</h6>
            </div>
            <div className="bio">
              <div className="center"> 
                <a href={member.linkedin} target="_blank">
                  Linkedin
                </a>
              </div>
              <p>{member.bio}</p>
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
                <h1 style={{marginBottom: 30}}>Team</h1>
                <p style={{marginBottom: 50}} className="text-muted">Our team comes from a wide range of backgrounds. From genetics researcher to mobile automation, we have a unique set of skills geared towards creating a mission driven, meaningful company that helps the world be a better place. </p>
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

