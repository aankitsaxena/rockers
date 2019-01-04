import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public members;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getMembers().subscribe(
      data => {this.members = data},
      err => console.error(err),
      () => console.log('members loaded')
    )
  }

  deleteMember(member) {
    this.memberService.deleteMember(member).subscribe(
      () => console.log("Member Deleted: " + member.id)
    )
  }
}
