import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
handleEdit($event: any) {
throw new Error('Method not implemented.');
}
handleRecordSubmit($event: any) {
throw new Error('Method not implemented.');
}
handleDelete($event: number) {
throw new Error('Method not implemented.');
}
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