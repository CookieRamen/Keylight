import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLogin = true;
  for: any;

  reqBody = {
    limit: 11,
    includeMyRenotes: true,
    includeRenotedMyNotes: true,
    includeLocalRenotes: true,
    i: 'deleted'
  };

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this.UpdateNotes(null);
  }

  UpdateNotes(event) {
    this.httpClient.post('https://misskey.io/api/notes/timeline', this.reqBody)
      .subscribe((data: any[]) => {
        this.for = data;
        if (event !== null) {
          event.target.complete();
        }
      });
  }

}
