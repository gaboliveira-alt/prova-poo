import { StarTrip } from "./services/startrip"

const mission = new StarTrip()
mission.startMission()
mission.executeMission()

const mission1 = new StarTrip()
mission1.startMission()
mission1.executeMission()

const mission2 = new StarTrip()
mission2.startMission()
mission2.executeMission()

const mission3 = new StarTrip()
mission3.startMission()
mission3.executeMission()

console.log(mission.generateReport())
console.log(mission1.generateReport())
console.log(mission2.generateReport())
console.log(mission3.generateReport())
