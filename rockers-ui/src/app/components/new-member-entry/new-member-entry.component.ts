import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-new-member-entry',
  templateUrl: './new-member-entry.component.html',
  styleUrls: ['./new-member-entry.component.css']
})
export class NewMemberEntryComponent implements OnInit {

  private member;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  addMember(firstName: string, lastName: string) {
    this.member = {
      firstName: firstName,
      lastName: lastName
    }

    this.memberService.addMember(this.member).subscribe(
      () => console.log('member added')
    )
  }

}
