import { Component, OnInit } from '@angular/core';
import { DndDropEvent,DropEffect} from 'ngx-drag-drop';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import {Router} from '@angular/router';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { QueryBuilderConfig, QueryBuilderModule } from 'angular2-query-builder';
import { DataService } from '../data.service';
declare var $:JQuery;
declare var require : any;
@Component({
  selector: 'app-edit-app',
  templateUrl: './edit-app.component.html',
  styleUrls: ['./edit-app.component.css']
})
export class EditAppComponent implements OnInit {
  constructor(private dataService: DataService) {
   }
  

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
    })  
  }

  query = {
    
  };
  
  config: QueryBuilderConfig = { 
    fields: function(){
      var request =this.require('request');
      var options = {
        'method': 'GET',
        'url': 'https://ac6224d13f8e.ngrok.io/api/vi/query_build/builder_config',
        'headers': {
          'Content-Type': 'application/json',
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body.config.fields);
        return response.body.config.fields;
      });
    }
  }
}

 

