import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'led-input',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './led-input.component.html',
  styleUrl: './led-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LedInputComponent),
      multi: true,
    },
  ],
})
export class LedInputComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'password' = 'text';
  @Input() placeholder: string = '';

  isTyping: boolean = false;

  value: string = '';
  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.isTyping = this.value.length > 0;

    this.onChange(inputValue);
  }
}
