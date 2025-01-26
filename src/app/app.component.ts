import { Component, OnInit } from '@angular/core';
import { DataSourceService } from './services/datasource.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  records: any[] = []; // Holds all records
  editRecord: any = null; // Record being edited

  constructor(private dataService: DataSourceService) {}

  ngOnInit() {
    // Load data from datasource.json
    this.dataService.getRecords().subscribe((data) => {
      this.records = data;
    });
  }

  // Add or update a record
  handleRecordSubmit(record: any) {
    if (this.editRecord) {
      // Update existing record
      const index = this.records.findIndex((r) => r.id === this.editRecord.id);
      if (index !== -1) {
        this.records[index] = { ...record, id: this.editRecord.id };
      }
    } else {
      // Add new record
      const newRecord = { ...record, id: this.records.length + 1 };
      this.records.push(newRecord);
    }
    this.editRecord = null;
  }

  // Handle record editing
  handleEdit(record: any) {
    this.editRecord = { ...record };
  }

  // Handle record deletion
  handleDelete(index: number) {
    this.records.splice(index, 1);
  }
}
