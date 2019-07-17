import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

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
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
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

  GetImg(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }

}
