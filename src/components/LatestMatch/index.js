import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const formattedLatestMatchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  return (
    <div className="LatestMatchCard">
      <div className="latestMatchResultPart">
        <div className="latestMatchResultSubPart">
          <p>{formattedLatestMatchDetails.competingTeam}</p>
          <p>{formattedLatestMatchDetails.date}</p>
          <p>{formattedLatestMatchDetails.venue}</p>
          <p>{formattedLatestMatchDetails.result}</p>
        </div>
        <img
          className="opponentImage"
          src={formattedLatestMatchDetails.competingTeamLogo}
          alt={`latest match ${formattedLatestMatchDetails.competingTeam}`}
        />
      </div>
      <div className="latestMatchStats">
        <h1>First Innings</h1>
        <p>{formattedLatestMatchDetails.firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{formattedLatestMatchDetails.secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{formattedLatestMatchDetails.manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{formattedLatestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
