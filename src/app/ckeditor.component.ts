import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CKEditor4} from 'ckeditor4-angular/ckeditor';

@Component({
  selector: 'lib-ckeditor',
  template: `
    <ckeditor
      [formControl]="control"
      [config]="config"
    >
    </ckeditor>

    <h2>Output:</h2>
    <br/>
    {{control.value}}
  `
})
export class CkeditorComponent {

  control: FormControl = new FormControl();
  eventVariables: string[] = ['kushal', 'ashim', 'shekhar'];

  config: CKEditor4.Config = {
    toolbar: [
      {
        name: 'styles',
        items: ['Font', 'FontSize']
      },
      {name: 'colors', items: ['TextColor']},
      ['Bold', 'Italic', 'Underline', '-',
        'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock',
        '-', 'NumberedList', 'BulletedList'
      ],
      ['placeholder_select']
    ],
    placeholder_select: {
      placeholders: this.eventVariables,
      format: '$' + '{%placeholder%}'
    },
    extraPlugins: 'placeholder'
  };

}
