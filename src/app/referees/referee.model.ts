export class Referee {
  public firstName: string;
  public lastName: string;
  public description: string;
  public imagePath: string;

  constructor(firstName: string, lastName: string, desc: string, imagePath: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
