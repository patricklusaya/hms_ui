import { HttpClient ,  HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {



  constructor( private http:HttpClient) { }
  getChartData() : Observable<any>{
  
    const httpOptions = {
      headers: new HttpHeaders({ 
       
        'Access-Control-Allow-Origin': '*',
    
    })
    };
    // { responseType: 'arraybuffer' }

   return this.http.get('http://localhost:8090/api/test/chart', { responseType: 'arraybuffer' }  )
  }

  getLineChart() {
    return this.http.get('/api/charts/line-chart');
  }


}
