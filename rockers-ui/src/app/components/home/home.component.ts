import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'Ankit Saxena',
    'Rohit Singh',
    'Uttam Kumar Yadav'
  ];
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

}
