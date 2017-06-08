
class MainController {

  public title: string;

  constructor() {}

  public $onInit = () => {
    console.log('inside init');
    this.title = 'This is an angular 1 component!!'
  }

}

export class MainComponent implements ng.IComponentOptions {

  public controller: any;
  public controllerAs: string;
  public templateUrl: string;
  public bindings: any;

  constructor() {
    this.controller = MainController;
    this.controllerAs = 'vm';
    this.templateUrl = 'src/app/ngJS/main.component.html';
    this.bindings = {};
  }

}
