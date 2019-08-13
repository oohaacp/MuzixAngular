import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Result } from './modals/Result';
import { Track } from './modals/Track';
import { Observable } from 'rxjs';
import { Guid } from "guid-typescript";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MuzixService {

  

  constructor(private httpclient: HttpClient) { }

  public results: any;
  public trackList: Track[];
  public url = "http://localhost:8090/api/v1/track";
  lastFmUrl = 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=b8dde93c701237504552ab3ec3953972&format=json';

  editTrack(updateTrack: Track) : Observable<Track>{
    // throw new Error("Method not implemented.");
    return this.httpclient.put<Track>(this.url,updateTrack,httpOptions);
  }

  getLastFmTracks(searchString: string): Observable<Result> {
    let params = new HttpParams();
    params = params.append('track', searchString);
    var url = 'http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=d49c2ee6942b4ad28ef6334c4591f231&format=json';
    // this.httpclient.get<Result>(url, { params: params }).subscribe((data) => { this.results = data });
    return this.httpclient.get<Result>(url, { params: params });
  }

  getData() {
    console.log("Inside service");
    return this.httpclient.get(this.lastFmUrl);
  }

  saveTrack(track: Track): Observable<Track> {
    //  track.mbid = Guid.create();
    
    var postUrl = "http://localhost:8090/api/v1/track";
    return this.httpclient.post<Track>(postUrl, track, httpOptions);
    // .pipe(
    //   catchError(this.handleError('addTrack', track))
    // );
  }

  getPlayList(): Observable<Track[]> {
    var getUrl = "http://localhost:8090/api/v1/track";
    // this.httpclient.get<Track[]>(getUrl).subscribe((data) => {this.trackList = data});
    return this.httpclient.get<Track[]>(getUrl);
  }

  removeTrack(track: Track): Observable<Track> {
    console.log(track);
    return this.httpclient.delete<Track>(this.url + "/" + track.id);
  }
  // deleteTrack(track: Track):Observable<Track>
  // {
  //   console.log(track);
  //   return this.httpclient.put<Track>(this.url + "/" + track.id,track,httpOptions);
  // }
}
