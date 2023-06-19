import {
  AfterContentInit,
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnInit,
} from "@angular/core";
import { InputRefDirective } from "../common/input-ref.directive";

@Component({
  selector: "au-fa-input",
  templateUrl: "./au-fa-input.component.html",
  styleUrls: ["./au-fa-input.component.css"],
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  @Input() icon: string | null = null;
  @ContentChild(InputRefDirective, { static: true }) input: HTMLElement;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    if (!this.input) {
      console.error("the au-fa-input needs an input inside its content");
    }
  }

  @HostBinding("class.input-focus")
  get isFocused() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {
      [`fa-${this.icon}`]: !!this.icon,
    };

    return cssClasses;
  }
}
