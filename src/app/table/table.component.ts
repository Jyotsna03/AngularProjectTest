import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() records: any[] = [];
  @Output() editRecord = new EventEmitter<any>();
  @Output() deleteRecord = new EventEmitter<number>();

  onEdit(record: any) {
    this.editRecord.emit(record);
  }

  onDelete(index: number) {
    this.deleteRecord.emit(index);
  }
}
