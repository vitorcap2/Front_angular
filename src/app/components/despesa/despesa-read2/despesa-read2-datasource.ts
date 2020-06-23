import { Despesa } from './../despesa.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

const EXAMPLE_DATA: Despesa[] = [
  {id: 1, setor: 'Hydrogen', price: 9.99},
  {id: 2, setor: 'Helium', price: 9.99},
  {id: 3, setor: 'Lithium', price: 9.99},
  {id: 4, setor: 'Beryllium', price: 9.99},
  {id: 5, setor: 'Boron', price: 9.99},
  {id: 6, setor: 'Carbon', price: 9.99},
  {id: 7, setor: 'Nitrogen', price: 9.99},
  {id: 8, setor: 'Oxygen', price: 9.99},
  {id: 9, setor: 'Fluorine', price: 9.99},
  {id: 10, setor: 'Neon', price: 9.99},
  {id: 11, setor: 'Sodium', price: 9.99},
  {id: 12, setor: 'Magnesium', price: 9.99},
  {id: 13, setor: 'Aluminum', price: 9.99},
  {id: 14, setor: 'Silicon', price: 9.99},
  {id: 15, setor: 'Phosphorus', price: 9.99},
  {id: 16, setor: 'Sulfur', price: 9.99},
  {id: 17, setor: 'Chlorine', price: 9.99},
  {id: 18, setor: 'Argon', price: 9.99},
  {id: 19, setor: 'Potassium', price: 9.99},
  {id: 20, setor: 'Calcium', price: 9.99},
];

/**
 * Data source for the DespesaRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DespesaRead2DataSource extends DataSource<Despesa> {
  data: Despesa[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Despesa[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Despesa[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Despesa[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'setor': return compare(a.setor, b.setor, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
