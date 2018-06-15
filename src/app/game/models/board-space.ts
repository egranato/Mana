export class BoardSpace {
  public title: string;
  public description: string;
  public landTrigger: () => void;
  public passTrigger: () => void;
  constructor(title: string, description: string, landTrigger: () => void, passTrigger: () => void) {
    this.title = title;
    this.description = description;
    this.landTrigger = landTrigger;
    this.passTrigger = passTrigger;
  }
}
