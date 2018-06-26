import { VERSION, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class Resp {
  link: string;
  success: boolean;
  key: string;
  expiry: string;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  percentDone: number;
  uploadSuccess: boolean;
  version = VERSION;
  resposta: Resp = { link: '', success : false, key: '', expiry: '' };

  @ViewChild('img')
  img;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.resposta = { link: '', success : false, key: '', expiry: '' };
  }


  upload(files: File[]) {
    // pick from one of the 4 styles of file uploads below
    console.log('>>>Enviando arquivo');
    // this.basicUpload(files);
    this.basicUpload(files);
  }

  basicDirect(files: File[]) {
    this.http.post('http://localhost:4000/api/upload', files[0], httpOptions)
      .subscribe(event => {
        console.log(event);
        this.uploadSuccess = true;
        this.resposta = event as Resp ;
        console.log(this.resposta);
        this.img.nativeElement.setAttribute('src', this.resposta.link);
      });
  }

  basicUpload(files: File[]) {
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f));
     this.http.post('https://file.io', formData)
    // this.http.post('http://localhost:4000/api/upload', formData, httpOptions)
      .subscribe(event => {
        console.log(event);
        this.uploadSuccess = true;
        this.resposta = event as Resp ;
        console.log(this.resposta);
        this.img.nativeElement.setAttribute('src', this.resposta.link);
      });
  }

  // this will fail since file.io dosen't accept this type of upload
  // but it is still possible to upload a file with this style
  basicUploadSingle(file: File) {
    this.http.post('https://file.io', file)
      .subscribe(event => {
        console.log('done');
      });
  }

  uploadAndProgress(files: File[]) {
    console.log(files);
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f ));

    this.http.post('https://file.io', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }

  // this will fail since file.io dosen't accept this type of upload
  // but it is still possible to upload a file with this style
  uploadAndProgressSingle(file: File) {
    this.http.post('https://file.io', file, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }

}
