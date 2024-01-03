import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'shared-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  private fb = inject(FormBuilder);
  public searchForm = this.fb.group({
    search: [''],
  });

  @Input() public placeholder: string = 'Buscar...';
  @Input() public button: string = 'Buscar';
  @Input() public disabled: boolean = false;
  @Input() public loading: boolean = false;
  @Output() public search = new EventEmitter<string>();

  public onSearch(value: string) {
    if (this.searchForm.invalid) return;
    if (this.disabled) return;
    if (this.loading) return;
    this.search.emit(value);
  }

  public onSubmit = () => {
    if (!this.searchForm.value.search) return;
    this.onSearch(this.searchForm.value.search);
  };
}
