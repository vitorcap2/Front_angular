import { Router, ActivatedRoute } from "@angular/router";
import { DespesaService } from "./../despesa.service";
import { Despesa } from "./../despesa.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-despesa-delete",
  templateUrl: "./despesa-delete.component.html",
  styleUrls: ["./despesa-delete.component.css"],
})
export class DespesaDeleteComponent implements OnInit {
  despesa: Despesa;

  constructor(
    private despesaService: DespesaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.despesaService.readById(id).subscribe((despesa) => {
      this.despesa = despesa;
    });
  }

  deleteDespesa(): void {
    this.despesaService.delete(this.despesa.id).subscribe(() => {
      this.despesaService.showMessage("Despesa excluida com sucesso!");
      this.router.navigate(["/despesas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/despesas"]);
  }
}
