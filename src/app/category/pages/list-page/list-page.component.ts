import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { ModalFormComponent } from '../../components/modals/modal-form/modal-form.component';
import { Category } from '../../interfaces';
import { DialogConfirmComponent } from '../../../shared/components/modals/dialog-confirm/dialog-confirm.component';
import { Loading, Message, Modal } from '../../../../class';
import { MessageComponent } from '../../../shared/components/message/message.component';
import { MessageService } from '../../../shared/services/message.service';

@Component({
  selector: 'category-list-page',
  standalone: true,
  imports: [CommonModule, RouterModule, SpinnerComponent, ModalFormComponent, DialogConfirmComponent, MessageComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css',
})
export class ListPageComponent implements OnInit {
  private _categoryService = inject(CategoryService);
  private _messageService = inject(MessageService);

  public modalCategory = new Modal<Category>();
  public modalRemove = new Modal<Category>();
  public modalOptions = new Modal<Category>();
  public loadingRemove = new Loading();
  public message = new Message();

  ngOnInit(): void {
    this._categoryService.findCategories().subscribe();
  }

  public get categories() {
    return this._categoryService.categories;
  }

  public get loadingCategories() {
    return this._categoryService.loadingCategories;
  }

  public handleClosedModalDialog() {
    this.message.reset();
    this.modalRemove.hide();
  }

  private resetModals() {
    this.modalRemove.hide();
    this.modalOptions.hide();
    this.loadingRemove.hide();
    this.message.reset();
  }

  public handleDelete() {
    if (!this.modalRemove.data) return;

    this.loadingRemove.show();

    this._categoryService.removeCategory(this.modalRemove.data.id).subscribe({
      next: (data) => {
        if (data.success) this._messageService.success('La categoría se eliminó correctamente');
        else this._messageService.error('No se pudo eliminar la categoría');
        this.resetModals();
      },
      error: () => {
        this._messageService.error('No se pudo eliminar la categoría');
        this.resetModals();
      },
    });
  }

  public handleCloseMoreContainer(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.modalOptions.hide();
    }
  }
}
