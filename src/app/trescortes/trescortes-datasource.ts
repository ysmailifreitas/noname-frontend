import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TrescortesItem {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TrescortesItem[] = [
  { id: 1, name: 'Hydrogen' },
  { id: 2, name: 'Helium' },
  { id: 3, name: 'Lithium' },
  { id: 4, name: 'Beryllium' },
  { id: 5, name: 'Boron' },
  { id: 6, name: 'Carbon' },
  { id: 7, name: 'Nitrogen' },
  { id: 8, name: 'Oxygen' },
  { id: 9, name: 'Fluorine' },
  { id: 10, name: 'Neon' }
];

/**
 * Data source for the Trescortes view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TrescortesDataSource extends DataSource<TrescortesItem> {
  data: TrescortesItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }


}
