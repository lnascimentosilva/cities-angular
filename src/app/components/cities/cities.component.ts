import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CityData } from 'src/app/data/city';
import { CitiesService } from 'src/app/services/cities/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {

  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<CityData>;
  pageEvent: PageEvent = { pageIndex: 0, pageSize: 10, length: 0 };
  pageIndex: number = 0;
  pageSize: number = 0;
  length: number = 0;

  constructor(private citiesService: CitiesService) {
    this.dataSource = new MatTableDataSource();
    this.getPage(this.pageEvent);
  }

  getPage(event: PageEvent): PageEvent {
    this.citiesService.getCities(event).subscribe(
      response => {
        this.dataSource = new MatTableDataSource(response.content);
        this.pageIndex = event.pageIndex;
        this.pageSize = response.content.lenght;
        this.length = response.totalElements;
      }
    );
    return event;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
