import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    console.log(data)

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, teamData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData

    return (
      <div className="team-matches-main-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="team-matches-container">
            <img src={teamBannerUrl} alt="team banner" />
            <p className="latest-matches-heading">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recentMatchesContainer">
              {recentMatches.map(eachMatch => (
                <MatchCard eachMatchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
