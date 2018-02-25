import { Injectable } from '@angular/core';
declare let toastr: any;
@Injectable()
export class ToastrService {

  constructor() { }
  success(title: string, message?: string) {
    toastr.success(title, message);
  }

  warning(title: string, message?: string) {
    toastr.warning(message, title);
  }
  error(title: string, message?: string) {
    toastr.error(message, title);
  }
  info(message: string) {
    toastr.error(message);
  }
}
