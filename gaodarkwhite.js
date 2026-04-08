import Ranger from "./Ranger.js";

class GaoDarkWhite extends Ranger {
  constructor(name, color, animalSpirit) {
    super(name, color, animalSpirit);
    this.weapon = "Illusion of GayRay";
  }

  shout() {
    const message = this.isTransformed
      ? `นกฟินิกมายา ${this.color}`
      : `ฉันคือเจ้าของบาร์ เ ก เ ร ${this.name}`;

    console.log(`${this.isTransformed ? this.color : this.name} : ${message}`);
  }

  callAnimalSpirit() {
    if (!this.isTransformed) {
      console.log(`${this.name} : เจ้าจะได้เห็นปีกมายา !`);
      return;
    }

    console.log(
      `${this.color} : นกฟินิกของข้าจงสยายปีกแห่ง เ ก เ ร ออกมา! ${this.animalSpirit}!`,
    );
  }
}

export default GaoDarkWhite;
