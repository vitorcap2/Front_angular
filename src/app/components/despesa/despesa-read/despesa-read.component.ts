import { DespesaService } from './../despesa.service';
import { Despesa } from './../despesa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despesa-read',
  templateUrl: './despesa-read.component.html',
  styleUrls: ['./despesa-read.component.css']
})
export class DespesaReadComponent implements OnInit {

  despesas: Despesa[]
  displayedColumns = ['id', 'name', 'price', 'action']
  
  constructor(private despesaService: DespesaService) { }

  ngOnInit(): void {
    this.despesaService.read().subscribe(despesas => {
      this.despesas = despesas
    })
  }

}
