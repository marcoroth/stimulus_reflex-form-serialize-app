import ApplicationController from './application_controller'

export default class extends ApplicationController {

  connect () {
    super.connect()
  }

  click (event) {
    this.stimulate('ExampleReflex#click', event.target)
  }
}
