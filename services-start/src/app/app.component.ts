import { Component, OnInit } from '@angular/core';
import { AccountModel } from './accountModel';
import {AccountsService} from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
    accounts: AccountModel[] = [];

    constructor(private accountsService: AccountsService) {}

    ngOnInit(): void {
        this.accounts = this.accountsService.accounts;
    }
}
