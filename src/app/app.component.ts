import { Component } from '@angular/core';
import {NameService} from './name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  names: any[];

    constructor(private nameService: NameService) {
      this.names = this.nameService.names;
    }

    onSubmit(form) {
      if (form.valid && form.value && form.value.username.length) {
          this.nameService.onAdd(form.value.username);
          form.reset();
      }
    }

}

