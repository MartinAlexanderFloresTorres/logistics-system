import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Category } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { DEFAULT_MESSAGE } from '../../../../../constants';
import { MessageComponent } from '../../../../shared/components/message/message.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Loading, Message } from '../../../../../class';

@Component({
  selector: 'category-modal-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MessageComponent, ButtonComponent],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css',
})
export class ModalFormComponent implements OnInit {
  @Input() public categoryEdit: Category | null = null;
  @Output() public onCloseModal = new EventEmitter();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    abbreviation: [''],
    description: [''],
  });
  private _categoryService = inject(CategoryService);

  public message = new Message(DEFAULT_MESSAGE.type, DEFAULT_MESSAGE.message);
  public loadingCategory = new Loading();

  ngOnInit(): void {
    if (this.categoryEdit) {
      this.form.patchValue(this.categoryEdit);
    }
  }

  public handleSubmit() {
    const { abbreviation, description } = this.form.value;

    if (!abbreviation) {
      this.message.error('Ingrese una abreviatura');
      return;
    }

    if (abbreviation.length < 3) {
      this.message.error('La abreviatura debe tener mínimo 3 caracteres');
      return;
    }

    if (abbreviation.length > 3) {
      this.message.error('La abreviatura debe tener máximo 3 caracteres');
      return;
    }

    if (!description) {
      this.message.error('Ingrese una descripción');
      return;
    }
    this.loadingCategory.show();

    if (this.categoryEdit) {
      this._categoryService
        .updateCategory(this.categoryEdit.id, {
          abbreviation,
          description,
        })
        .subscribe({
          next: (data) => {
            if (data.success) {
              this.message.success('Categoría actualizada correctamente');
            } else {
              this.message.error('La categoría no se pudo actualizar');
            }

            this.loadingCategory.hide();
          },
          error: () => {
            this.loadingCategory.hide();
            this.message.error('No se pudo actualizar la categoría');
          },
        });
    } else {
      this._categoryService
        .createCategory({
          abbreviation,
          description,
        })
        .subscribe({
          next: (data) => {
            if (data.success) {
              this.message.success('Categoría creada correctamente');
              this.form.reset();
            } else {
              this.message.error('No se pudo crear la categoría');
            }

            this.loadingCategory.hide();
          },
          error: () => {
            this.loadingCategory.hide();
            this.message.error('No se pudo crear la categoría');
          },
        });
    }
  }

  public handleClose() {
    this.onCloseModal.emit();
  }
}
