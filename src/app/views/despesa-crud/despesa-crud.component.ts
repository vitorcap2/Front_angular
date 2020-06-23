import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-despesa-crud',
  templateUrl: './despesa-crud.component.html',
  styleUrls: ['./despesa-crud.component.css']
})
export class DespesaCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Despesas',
      icon: 'storefront',
      routeUrl: '/despesas'
    }
  }

  ngOnInit(): void {
  }

  navigateToDespesaCreate(): void {
    this.router.navigate(['/despesas/create'])
  }

}
