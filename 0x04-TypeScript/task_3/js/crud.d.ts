import type { RowID } from './interface';
import RowElement from './interface';
type insertRow = (row: number) => number;
type deleteRow = (rowId: number) => void;
type updateRow = (rowId: number; row: number) => number;