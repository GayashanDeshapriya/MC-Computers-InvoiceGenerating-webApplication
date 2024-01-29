import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  GetAllInvoice() {
    return this.http.get('https://localhost:7215/api/Invoices');
  }
  GetInvoicebyid(InvoiceNumber: any) {
    return this.http.get('https://localhost:7215/api/Invoices/' + InvoiceNumber);
  }
  AddInvoice(id: any, invoiceData: any) {
    return this.http.post('https://localhost:7215/api/Invoices' + id, invoiceData);
  }

  GetCustomer() {
    return this.http.get('https://localhost:7215/api/Customers');
  }
  GetCustomerbyid(id: any) {
    return this.http.get('https://localhost:7215/api/Customers/' + id);
  }
  GetProduct() {
    return this.http.get('https://localhost:7215/api/Products');
  }
  GetProductbyid(id: any) {
    return this.http.get('https://localhost:7215/api/Products/' + id);
  }
}
