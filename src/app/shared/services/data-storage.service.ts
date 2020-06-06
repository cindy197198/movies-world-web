import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { UserDetail } from "../../admin/user-detail.model";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataStorageService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  fetchCustomers() {
    return this.httpClient.get<UserDetail[]>(this.baseUrl + "/users");
  }

  updateCustomer(customer: UserDetail) {
    return this.httpClient.put<UserDetail>(
      `${this.baseUrl}/users/${customer.id}`,
      customer
    );
  }

  newCustomer(customer: UserDetail) {
    return this.httpClient.post<UserDetail>(
      this.baseUrl + "/staffs/register",
      customer
    );
  }

  deleteCustomer(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/users/${id}`);
  }

  searchCustomer() {}
}
