import { Despesa } from "./../despesa.model";
import { Router, ActivatedRoute } from "@angular/router";
import { DespesaService } from "./../despesa.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-despesa-update",
  templateUrl: "./despesa-update.component.html",
  styleUrls: ["./despesa-update.component.css"],
})
export class DespesaUpdateComponent implements OnInit {
  despesa: Despesa;

  constructor(
    private despesaService: DespesaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.despesaService.readById(id).subscribe((despesa) => {
      this.despesa = despesa;
    });
  }

  updateDespesa(): void {
    this.despesaService.update(this.despesa).subscribe(() => {
      this.despesaService.showMessage("Despesa atualizada com sucesso!");
      this.router.navigate(["/despesas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/despesas"]);
  }
}
