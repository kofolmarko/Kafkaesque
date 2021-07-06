import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Thought } from '../Thought';
import { THOUGHTS } from '../mock-thoughts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private apiUrl = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  getThoughts(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.apiUrl);
  }

  postThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.apiUrl, thought, httpOptions);
  }

  deleteThought(thought: Thought): Observable<number> {
    return this.http.delete<number>(`${this.apiUrl}/${thought._id}`, httpOptions);
  }

}
