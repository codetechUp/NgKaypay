import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
id:number;
user;
thumbnail;
prenom;
form: FormGroup;
modiGroup: FormGroup;
  constructor(private route:ActivatedRoute,private userService:UserService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      image:[]
    });

    this.modiGroup= new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
    });
    this.id=this.route.snapshot.params["id"];
    this.userService.getUserById(this.id)
    .subscribe(
      data=>{
        console.log(data);
        this.thumbnail=this.userService.getThumbnail(data);
        this.user=data;
        this.prenom=this.user.prenom;
      }
    )
    
    
  }
 
  upload($event){
    if ($event.target.files.length>0) {
        let selectedFile=$event.target.files[0];
        const uploadData = new FormData();
        uploadData.append('image', selectedFile, selectedFile.name);
                  this.userService.upload(uploadData,this.id).subscribe(
                    data=>{
                      console.log(data);
               
                    },
                    error=>{
                      console.log(error);
                      this.userService.getUserById(this.id).subscribe(
                        data=>{
                        this.thumbnail=this.userService.getThumbnail(data);
                          
                        }
                      )
                      
                    }
               
                  );
                   }
              };

        modi(){
          console.log(this.modiGroup.value);
          this.userService.modiUser(this.modiGroup.value,this.id).subscribe(
            data=> console.log(data),
            error=> console.log(error)
          )
        }
      }
      
