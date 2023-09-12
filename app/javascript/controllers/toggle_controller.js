import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "element", "check"]
  static classes = [ "change" ]

  toggle() {
    this.elementTargets.forEach((element) => {
      element.classList.toggle(this.changeClass)
    })
  }

  // highlight() {
  //   this.checkTargets.forEach((check) => {
  //     check.classList.toggle(this.changeClass)
  //   })
  // }
}