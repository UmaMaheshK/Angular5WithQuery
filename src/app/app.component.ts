import { ToastrService } from './toastr.service';
import { Component } from '@angular/core';
declare let $: any;//declare Jquery global variable
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private toastrService: ToastrService) { }

  openModal() {
    $('#myModal').modal('show');//show the model popup
  }
  success() {
    this.toastrService.success('Success button clicked');
  }
  error() {
    this.toastrService.error('Error button clicked');
  }
  warning() {
    this.toastrService.warning('Warning button clicked');
  }
  info() {
    this.toastrService.info('Info button clicked');
  }
}
