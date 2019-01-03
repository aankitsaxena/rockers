import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  
  }

}
