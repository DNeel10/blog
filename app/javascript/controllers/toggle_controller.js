import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "secret", "buttonOne", "buttonTwo" ]
  static classes = [ "change", "hidden", "visible" ]

  toggle() {
    this.secretTarget.classList.toggle(this.changeClass)
  }

  swap() {
    this.buttonOneTarget.classList.toggle(this.hiddenClass)
    this.buttonTwoTarget.classList.toggle(this.visibleClass)
  }
}