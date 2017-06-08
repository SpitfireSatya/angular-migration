
class MainController {

  public title: string;

  constructor() {}

  public ngOnInit = () => {
    this.title = 'This is an angular 1 component!!'
  }

}

export class MainComponent {

  public controller: any;
  public controllerAs: string;
  public templateUrl: string;
  public bindings: Object;

  constructor() {
    this.controller = MainController;
    this.controllerAs = 'vm';
    this.templateUrl = './main.component.html';
    this.bindings = {};
  }

}
