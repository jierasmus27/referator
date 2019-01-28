import { Rating } from '../shared/rating.model';

export class Referee {
  public firstName: string;
  public lastName: string;
  public description: string;
  public imagePath: string;
  public ratings: Rating[];

  constructor(
    firstName: string,
    lastName: string,
    desc: string,
    imagePath: string,
    ratings: Rating[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = desc;
    this.imagePath = imagePath;
    this.ratings = ratings;
  }
}
