
# Angular User-Admin Form


This project is a web app where users start by signing up on the homepage. After signing up, they are taken to a dashboard where they can fill out forms and view data in tables. The app is designed for smooth navigation between the sign-up, form, and table pages.
## Features  🚀

- **Dynamic Form Handling:** The form allows users to input data, and upon submission, the data is processed and displayed in the table below, offering real-time updates without page reloads.
- **Table with Data Interaction:** The table displays user-submitted data in a clean, sortable format with options to edit or delete entries, ensuring efficient data management.
- **Smooth Navigation:** The app leverages Angular's routing to provide a seamless user experience, where users can easily switch between the sign-up page, dashboard, and table without page refreshes.


##  Live Project 🔭

To see this project run

```bash
  https://angular-project-test-zeta.vercel.app/
```


## Technologies Used  💻

**1. [(ngModel)]** : is used for two-way data binding in Angular, meaning that when a user changes a field in the form, the component's corresponding property is updated, and vice versa.

**2. (ngSubmit)** : binds an Angular event to the form submission event. It runs the specified method in the component when the form is submitted.

**3. #dynamicForm**: creates a reference to the form, allowing access to its properties and methods in the template (such as checking if the form is valid).

**4. ngIf**: is used to conditionally display form fields based on the selected role (User or Admin).

**5. datasource.json**:
- The provided Angular code uses a service (DataSourceService) to fetch data from a datasource.json file stored in the assets folder. 
- The data is then displayed in a table within the AppComponent. 
- The form allows users to add or edit records, with the data dynamically updating in the table upon submission. 
- The handleRecordSubmit, handleEdit, and handleDelete methods manage adding, editing, and deleting records. 
- For deletion of record , splice () is being used.
- Angular's two-way data binding with ngModel ensures the form is synchronized with the component's data, while the *ngFor directive is used to render the records in the table.

