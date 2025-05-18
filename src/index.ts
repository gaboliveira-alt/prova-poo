import { StarTrip } from "./models/startrip"

const mission = new StarTrip()
mission.startMission()
mission.executeMission()
console.log(mission.generateReport())