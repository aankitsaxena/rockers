import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-member-entry',
  templateUrl: './new-member-entry.component.html',
  styleUrls: ['./new-member-entry.component.css']
})
export class NewMemberEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  id = new FormControl('');

}
