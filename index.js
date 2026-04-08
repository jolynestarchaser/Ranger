import Ranger from "./Ranger.js";
import Villians from "./Villains.js"

let man1 = new Ranger("stukasa","red","Shark")
let man2 = new Ranger("josuke","blue","Lion")
let Gigi1 = new Villians("Googa","Gogre")

man1.transform()
console.log(man1.combat(Gigi1))




