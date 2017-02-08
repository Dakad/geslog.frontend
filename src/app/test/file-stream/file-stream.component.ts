import { Component,OnInit , ElementRef , Input, ViewChild } from '@angular/core'
import { Http } from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/share';

@Component({
  selector: 'app-file-stream',
  templateUrl: './file-stream.component.html',
  styleUrls: ['./file-stream.component.css']
})



@Injectable()
export class FileStreamComponent implements OnInit {

	@Input() multiple: boolean = false;
    @ViewChild('fileInput') inputEl: ElementRef;
	texte = "lol";
	private progress: number = 0;
	data = {"fileName":""};
	private progressObserver: any;
	 file: File;
  onChange(event: EventTarget) {
  		console.log("lol " + this.data.fileName);
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
        console.log(this.file);
    }

     changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0]; 
    var myReader:FileReader = new FileReader();
    var t ;
    myReader.onloadend = function(e){
      // you can perform an action with readed data here
      //console.log(myReader.result + "");
     var output = document.getElementById('output');
      output.innerHTML  = myReader.result;
       //document.getElementById('my_iframe').src = myReader.result;
    };
  //  myReader.readAsDataURL(file);
  
    myReader.readAsText(file);
   console.log( this.upload());
  }


	 constructor(private http: Http, private el: ElementRef ,
    private location: Location) {};

	ngOnInit() {
	 
	}

    public upload2(){
   			this.upload().then(result => console.log("Resultat  : " + result))
          .catch(error => console.log(error));
;
    }
    public upload() : Promise<any>{
    return new Promise((resolve, reject) => {
        let inputEl: HTMLInputElement = this.inputEl.nativeElement;
        let fileCount: number = inputEl.files.length;
        let formData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('file[]', inputEl.files.item(i));
            }
           // this.http.post('/', formData);
             
                // do whatever you do...
                // subscribe to observable to listen for response
        }

          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        };

        //FileUploadService.setUploadUpdateInterval(500);

       xhr.upload.onprogress = (event) => {
            this.progress = Math.round(event.loaded /event.total * 100);

            this.progressObserver.next(this.progress);
        };

        xhr.open('POST', "/users", true);
        xhr.send(formData);
        }).catch(this.handleError);
    }

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
 goBack(): void {
    this.location.back();
  }
}

