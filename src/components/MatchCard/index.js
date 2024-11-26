import './index.css'

const MatchCard = props => {
  const {eachMatchDetails} = props
  const formattedEachMatchDetails = {
    umpires: eachMatchDetails.umpires,
    result: eachMatchDetails.result,
    manOfTheMatch: eachMatchDetails.man_of_the_match,
    id: eachMatchDetails.id,
    date: eachMatchDetails.date,
    venue: eachMatchDetails.venue,
    competingTeam: eachMatchDetails.competing_team,
    competingTeamLogo: eachMatchDetails.competing_team_logo,
    firstInnings: eachMatchDetails.first_innings,
    secondInnings: eachMatchDetails.second_innings,
    matchStatus: eachMatchDetails.match_status,
  }

  let resultClassName = ''

  if (formattedEachMatchDetails.matchStatus === 'Won') {
    resultClassName = 'wonGameClass'
  } else {
    resultClassName = 'lossGameClass'
  }

  return (
    <li className="recentMatchListItem">
      <img
        className="opponentTeamLogo"
        src={formattedEachMatchDetails.competingTeamLogo}
        alt={`competing team ${formattedEachMatchDetails.competingTeam}`}
      />
      <p>{formattedEachMatchDetails.competingTeam}</p>
      <p>{formattedEachMatchDetails.result}</p>
      <p className={resultClassName}>{formattedEachMatchDetails.matchStatus}</p>
    </li>
  )
}

export default MatchCard
