import React from "react";
import { endpoints, currTeamIDs } from "../api/endpoints";
import API from "../api/API";
import { Link } from "react-router-dom";
import PlayerTable from "./playerTable";

let roster = [];

function translateParams(params) {
  const translated = params.slice(1).replace(/%20/g, " ");
  const result = currTeamIDs.filter(
    name => name.name.toLowerCase() === translated
  );
  return result[0].id;
}

export default class TeamDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      conf: "",
      div: "",
      loc: "",
      site: "",
      firstYear: "",
      city: "",
      venueName: ""
    };
  }
  componentDidMount() {
    const translatedParams = translateParams(window.location.search);
    API.get(`${endpoints.teams}/${translatedParams}?expand=team.roster`).then(
      res => {
        roster.push(...res.data.teams[0].roster.roster);
        this.setState({
          name: res.data.teams[0].teamName,
          conf: res.data.teams[0].conference.name,
          div: res.data.teams[0].division.name,
          loc: res.data.teams[0].locationName,
          site: res.data.teams[0].officialSiteUrl,
          firstYear: res.data.teams[0].firstYearOfPlay,
          city: res.data.teams[0].venue.city,
          venueName: res.data.teams[0].venue.name
        });
      }
    );
  }

  render() {
    //const classes = useStyles();
    return (
      <div>
        <div>Name: {this.state.name}</div>
        <div>Conference: {this.state.conf}</div>
        <div>Division: {this.state.div}</div>
        <div>Location: {this.state.loc}</div>
        <div>
          <Link to={this.state.site}>Website</Link>
        </div>
        <div>First Year of Play: {this.state.firstYear}</div>
        <div>City: {this.state.city}</div>
        <div>Venue Name: {this.state.venueName}</div>
        <PlayerTable players={roster} />
      </div>
    );
  }
}
