import { Component, OnInit } from '@angular/core';
import { field, value } from '../global.model';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  modelFields:Array<field>=[];
  model:any =  {
    "name": "App name...",
    "description": "App Description...",
    "theme": {
      "bgColor": "ffffff",
      "textColor": "555555",
      "bannerImage": ""
    },
    "attributes": [
      {
        "type": "email",
        "icon": "fa-envelope",
        "required": true,
        "label": "Email",
        "description": "Enter your email",
        "placeholder": "Enter your email",
        "className": "form-control",
        "subtype": "text",
        "regex": "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+).([a-zA-Z]{2,5})$",
        "errorText": "Please enter a valid email",
        "handle": true,
        "name": "email-1613741861511"
      }
    ]
  };
}
