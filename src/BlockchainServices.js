import { ethers } from "ethers";
import Web3 from "web3";
import config from "./contract/cricket.json";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
const { ethereum } = isBrowser();
if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

const CONTRACT_ADDRESS = "0xb976ed289fc21266D302ebBDC1515d8D585a683f";

const GetPrice = async () => {
  console.log("fetching price started");
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(CONTRACT_ADDRESS, config.abi, signer);

  const price = await Role.getJoiningFee();
  console.log(price);
};

const Register = async ({ name }) => {
  console.log("registering started ....");
  let provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(CONTRACT_ADDRESS, config, signer);
  const res = await Role.register(name);
  console.log(res);
  console.log("registered");
  window.alert("You are registered");
  return true;
};

const CreateTeam = async ({ selectedPlayers }) => {
  console.log("team creation started");
  console.log(selectedPlayers);
  let provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(CONTRACT_ADDRESS, config, signer);
  const res = await Role.createTeam(selectedPlayers);

  console.log(res);
  console.log("Team Created");
  window.alert("Your team was created");
  return true;
};

const createContest = async ({ contestName }) => {
  console.log("team creation started");
  console.log(contestName);
  let provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(CONTRACT_ADDRESS, config, signer);
  const res = await Role.createBattle(contestName);

  console.log(res);
  console.log("Contest Created");
  window.alert("Your Contest was created");
  return true;
};
const joinContest = async ({ joinContestName }) => {
  console.log("team creation started");
  console.log(joinContestName);
  let provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(CONTRACT_ADDRESS, config, signer);
  const res = await Role.joinBattle(joinContestName);

  console.log(res);
  console.log("Contest Joined");
  window.alert("Your Contest was created");
  return true;
};

const contestPlayers = async ({ contestName }) => {
  console.log("getting the contest folks");

  let provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(CONTRACT_ADDRESS, config, signer);
  const res = await Role.getBattlePlayers(contestName);
  console.log(res);
};

export {
  GetPrice,
  Register,
  CreateTeam,
  createContest,
  joinContest,
  contestPlayers,
};
