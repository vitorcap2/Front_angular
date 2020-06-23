import { Despesa } from './../despesa.model';
import { DespesaService } from './../despesa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-despesa-create',
  templateUrl: './despesa-create.component.html',
  styleUrls: ['./despesa-create.component.css']
})
export class DespesaCreateComponent implements OnInit {

  despesa: Despesa = {
    setor: '',
    price: null
  }

  constructor(private despesaService: DespesaService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createDespesa(): void {
    this.despesaService.create(this.despesa).subscribe(() => {
      this.despesaService.showMessage('Despesa criada!')
      this.router.navigate(['/despesas'])
    })

  }

  cancel(): void {
    this.router.navigate(['/despesas'])
  }
}
