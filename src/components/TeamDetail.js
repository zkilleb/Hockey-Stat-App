import React from "react";
import { endpoints, currTeamIDs, otherTeamIDs } from "../api/endpoints";
import API from '../api/API';

function translateParams(params){
  const translated = params.slice(1).replace(/%20/g, " ");
  const result = currTeamIDs.filter((name) => name.name.toLowerCase() === translated)
  return result[0].id;
}

export default class TeamDetail extends React.Component {
  componentDidMount() {
    const translatedParams = translateParams(window.location.search);
    API.get(`${endpoints.teams}/${translatedParams}`)
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return <div>{window.location.search}</div>;
  }
}
