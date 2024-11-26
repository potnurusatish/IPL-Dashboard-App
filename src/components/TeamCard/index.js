import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-item">
        <img className="teamLogo" src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
