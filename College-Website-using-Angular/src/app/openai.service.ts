// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class OpenaiService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = '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'; // Replace with your OpenAI API key

  constructor(private http: HttpClient) { }

  sendMessage(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
