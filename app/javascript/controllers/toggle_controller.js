import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "list" ]
  static classes = [ "change" ]

  hide() {
    this.listTarget.classList.toggle(this.changeClass)
  }
}