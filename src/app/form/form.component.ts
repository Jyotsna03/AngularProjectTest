import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { TextField, Button, MenuItem, InputAdornment, IconButton } from '@mui/material';
//import { Visibility, VisibilityOff } from '@mui/icons-material';
//import { Input, Label, Select, Textarea } from '@shadcn/ui';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
}) 

export class FormComponent {
  @Input() record: any = null; // Holds the record to edit
  @Output() formSubmit = new EventEmitter<any>();


  formData: any = {
    role: '',
    fullName: '',
    dateOfBirth: '',
    phoneNumber: '',
    accountStatus: '',
  };
  passwordFieldType: string = 'password';
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  selectedRole: string = '';
  roles: string[] = ['Admin', 'User', 'Guest'];
  ngOnChanges() {
    if (this.record) {
      this.formData = { ...this.record };
    } else {
      this.onClear();
    }
  }

  onSubmit() {
    this.formData.role = this.selectedRole;
    this.formSubmit.emit(this.formData);
    this.onClear();
  }

  onClear() {
    this.formData = {
      role: '',
      fullName: '',
      dateOfBirth: '',
      phoneNumber: '',
      accountStatus: '',
    };
    this.selectedRole = '';
  }
}
