/// <reference path = "./crud.d.ts" />
import type RowID from './interface';
import type RowElement from './interface';
import * as CRUD from './crud';

let row: RowElement = {
      firstName: "Guillaume",
      lastName: "Salva",
};

const newRowID: RowID = insertRow();
const updatedRow: RowElement = {age: 23};
updateRow();
deleteRow();