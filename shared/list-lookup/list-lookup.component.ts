import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { GeositeList } from '../../models/Geosite';

@Component({
    templateUrl: './list-lookup.component.html',
    styleUrls: ['./list-lookup.component.scss']
})

export class ListLookupDialogComponent implements OnInit {
    geosites: any;
    displayedColumns = ['GeositeId', 'Name']
    dataSource = new MatTableDataSource<GeositeList>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        public dialogRef: MatDialogRef<ListLookupDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.geosites = data;
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.geosites);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    public applyFilter(filterValue: string) {
        filterValue = filterValue.trim().toLowerCase();
        this.dataSource.filter = filterValue;
    }

    close(row): void {
        this.dialogRef.close(row);
      }
    
}
