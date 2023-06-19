import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "au-fa-input input",
})
export class InputRefDirective {
  focus = false;
  constructor() {}

  @HostListener("focus", ["$event.target"])
  onFocus(_target: HTMLInputElement) {
    this.focus = true;
  }

  @HostListener("blur", ["$event.target"])
  onBlur(_target: HTMLInputElement) {
    this.focus = false;
  }
}
