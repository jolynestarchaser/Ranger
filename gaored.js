import Ranger from "./Ranger.js";

class Gaored extends Ranger {
  constructor(name, color, animalSpirit) {
    super(name, color, animalSpirit);
    this.weapon = "Lion Fang";
  }
  shout() {
    if (this.isTransformed) {
      console.log(`${this.color} : สิงห์หนุ่มผู้ร้อนแรง ${this.color}`);
    } else {
      console.log(`${this.name} : ฉันคือคุณหมอ ${this.name}`);
    }
  }

  transform() {
    this.hp += 999899;
    super.transform();
    this.name = "Gao Red";
    console.log(`I am ${this.name}`);
  }

  aftertransform() {
        console.log(`${this.name} aftertransform into a Rainbow Ranger!. HP is now ${this.hp}`);
    }


  callAnimalSpirit() {
    if (this.isTransformed) {
      console.log(
        `${this.color} ขอเรียกวิญญาณสรรพสัตว์ มาเล้ย! ${this.animalSpirit}!`,
      );
    } else {
      console.log(`${this.name} มาเลยไอ้สิงโตเปรต!`);
    }
  }
}

export default Gaored;
