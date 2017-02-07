import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Component({
  selector: 'app-file-stream',
  templateUrl: './file-stream.component.html',
  styleUrls: ['./file-stream.component.css']
})



@Injectable()
export class FileStreamComponent implements OnInit {
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
      console.log(myReader.result + "");
     var output = document.getElementById('output');
      output.innerHTML  = myReader.result;
    };
  //  myReader.readAsDataURL(file);
  
    myReader.readAsText(file);
  }


	constructor() {
     }

	ngOnInit() {
	  
	}

	public upload (url: string, files: File[]): Promise<any> {
    return new Promise((resolve, reject) => {
        let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();

        for (let i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i].name);
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
            this.progress = Math.round(event.loaded / event.total * 100);

            this.progressObserver.next(this.progress);
        };

        xhr.open('POST', url, true);
        xhr.send(formData);
    });
}


}

