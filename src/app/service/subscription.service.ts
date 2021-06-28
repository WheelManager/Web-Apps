import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs'; 

@Injectable({
    providedIn: 'root',
})
export class SubscriptionService{
    private baseURL = 'http://localhost:8080/api/subscriptions';
    constructor(private http: HttpClient) {}
    createSubscription(subscription: Object): Observable<Object> {
        return this.http.post(`${this.baseURL}`, subscription);
    }
    updateSubscription(id: number, subscription: Object): Observable<Object> {
        return this.http.put(`${this.baseURL}/${id}`, subscription);
      }
    getSubscriptionList(): Observable<any> {
        return this.http.get(`${this.baseURL}`);
    }
    deleteSubscription(id: number): Observable<any> {
        return this.http.delete(`${this.baseURL}/${id}`);
    }
    getSubscriptionByDescritpion(description: string): Observable<any> {
        return this.http.get(`${this.baseURL}/searchByDescription/${description}`);
    }
    getSubscriptionById(id: number): Observable<any> {
        return this.http.get(`${this.baseURL}/${id}`);
    }
    
    getSubscriptionByStartdate(startDate: Date): Observable<any> {
        return this.http.get(`${this.baseURL}/searchByStartdate/${startDate}`);
    }
    
    getSubscriptionByPrice(price: number): Observable<any> {
        return this.http.get(`${this.baseURL}/searchByPrice/${price}`);
    }
}