import { Despesa } from './../despesa.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DespesaRead2DataSource } from './despesa-read2-datasource';

@Component({
  selector: 'app-despesa-read2',
  templateUrl: './despesa-read2.component.html',
  styleUrls: ['./despesa-read2.component.css']
})
export class DespesaRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Despesa>;
  dataSource: DespesaRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'setor', 'price'];

  ngOnInit() {
    this.dataSource = new DespesaRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
