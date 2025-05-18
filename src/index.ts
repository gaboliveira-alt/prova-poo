import { MissionTravel } from "./models/missiontravel"

const mission = new MissionTravel()
mission.startMission()
mission.executeMission()
console.log(mission.generateReport())
