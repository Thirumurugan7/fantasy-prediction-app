import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const PlayersList = ({ matchId }) => {
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const [credits, setCredits] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const fetchAPI = async () => {
    const options = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`,
      headers: {
        "X-RapidAPI-Key": "83a28b3020msh04c8416d55ed24dp1ee956jsnbe0859b18b5a",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const team1 = response.data.matchInfo.team1;
      const team2 = response.data.matchInfo.team2;
      setTeam1Players(team1.playerDetails);
      setTeam2Players(team2.playerDetails);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  var spent = 0;
  const [spending, setSpending] = useState(0);

  const handlePlayerSelection = (playerId) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers((prev) => prev.filter((id) => id !== playerId));
    } else {
      setSelectedPlayers((prev) => [...prev, playerId]);
    }
  };

  const handleSelect = () => {
    spent = spending + spent;
  };

  useEffect(() => {
    handleSelect();
    spent += spending;
    console.log(spending);
    console.log(spent);
  }, [spending]);

  const teamplayer1 = () =>
    team1Players.map((player, index) => {
      if (
        player.role === "Batsman" ||
        player.role === "Bowler" ||
        player.role === "WK-Batsman" ||
        player.role === "Bowling Allrounder"
      ) {
        const isSelected = selectedPlayers.includes(player.id);
        return (
          <div
            id={index}
            className={`flex bg-[#0C0F0C] p-5 rounded-3xl gap-4 ${
              isSelected ? "bg-green-500" : ""
            }`}
            onClick={() => {
              if (isSelected) {
                setSelectedPlayers(
                  selectedPlayers.filter((selected) => selected !== player.id)
                );
              } else if (selectedPlayers.length < 11) {
                setSelectedPlayers([...selectedPlayers, player.id]);
              } else if (selectedPlayers.length === 11) {
                alert("you can select only  11 players");
              }
            }}
          >
            <div>
              <h1 className="text-[#feb561]">{player.fullName}</h1>
              <h4 className="text-[#c4c4c4]">{player.role}</h4>
            </div>
            <div>
              <p className="text-[#c4c4c4]">
                (
                {player.role === "Batsman" || player.role === "WK-Batsman"
                  ? "10"
                  : "9"}
                )
              </p>
            </div>
          </div>
        );
      }
    });
  const team_players = [];
  const teamplayer2 = () =>
    team2Players.map((player, index) => {
      if (
        player.role === "Batsman" ||
        player.role === "Bowler" ||
        player.role === "WK-Batsman" ||
        player.role === "Bowling Allrounder"
      ) {
        const isSelected = selectedPlayers.includes(player.id);

        return (
          <div
            key={player.id}
            id={player.id}
            className={`flex bg-[#0C0F0C] p-5 rounded-3xl gap-4 ${
              isSelected ? "bg-green-500" : ""
            }`}
            onClick={() => {
              if (isSelected) {
                setSelectedPlayers(
                  selectedPlayers.filter((selected) => selected !== player.id)
                );
              } else if (selectedPlayers.length < 11) {
                setSelectedPlayers([...selectedPlayers, player.id]);
              } else if (selectedPlayers.length === 11) {
                alert("you can select only  11 players");
              }
            }}
          >
            <div>
              <h1 className="text-[#feb561]">{player.fullName}</h1>
              <h4 className="text-[#c4c4c4]">{player.role}</h4>
            </div>
            <div>
              <p className="text-[#c4c4c4]">
                (
                {player.role === "Batsman" || player.role === "WK-Batsman"
                  ? "10"
                  : "9"}
                )
              </p>
            </div>
          </div>
        );
      }
    });

  console.log(selectedPlayers);

  function SelectedPlayers({ selectedPlayers, teamPlayers }) {
    const players = teamPlayers.filter((player) =>
      selectedPlayers.includes(player.id)
    );

    return (
      <div>
        <h2>Selected Players :</h2>
        {players.map((player) => (
          <div key={player.id}>
            <span>{player.fullName}</span>
          </div>
        ))}
      </div>
    );
  }
  function CreditHandler({ selectedPlayers, teamPlayers }) {
    console.log(selectedPlayers, teamPlayers);
    const players = teamPlayers.filter((player) =>
      selectedPlayers.includes(player.id)
    );

    let credit = credits;

    players.map((player) => {
      if (player.role === "Batsman") {
        setCredits(credit + 10);
      } else if (player.role === "WK-Batsman") {
        setCredits(credit + 10);
      } else if (player.role === "Bowler") {
        setCredits(credit + 9);
      } else if (player.role === "Bowling Allrounder") {
        setCredits(credit + 9);
      }
      return "thiru";
    });
  }

  return (
    <>
      <div className=" flex flex-row justify-between mx-[75px] ">
        <div className="flex flex-col gap-4 flex-wrap ">{teamplayer1()}</div>
        <div className="flex justify-center items-stretch text-white">
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            teamPlayers={team1Players}
          />
          <CreditHandler
            selectedPlayers={selectedPlayers}
            teamPlayers={team1Players}
          />
          <CreditHandler
            selectedPlayers={selectedPlayers}
            teamPlayers={team2Players}
          />
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            teamPlayers={team2Players}
          />
        </div>
        <div className="flex flex-col gap-4 flex-wrap-reverse mx-3 ">
          {teamplayer2()}
        </div>
      </div>

      <div className="flex justify-center items-center pb-5 ">
        <button className="border-white py-2 px-5 border bg-white font-semibold text-[#182152] rounded-3xl">
          Credits remaining: <span className="text-[#9E9E9E]">{credits}</span> /{" "}
          <span className="text-[#B48325]">100</span>
        </button>
      </div>

      <div className="flex justify-center items-center pb-5">
        <Link to="/createContest">
          <button className="border-white py-2 px-5 border text-[#B48325] rounded-3xl hover:bg-red-600 hover:text-white">
            Save Team
          </button>
        </Link>
      </div>
    </>
  );
};

export default PlayersList;
