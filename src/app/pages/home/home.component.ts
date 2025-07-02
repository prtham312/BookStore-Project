import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCardModule , CommonModule , MatPaginatorModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http : HttpService , private router : Router){}

  books : any[] = []
  paginatedBooks : any[] = []
  currentPage = 0
  pageSize = 8 

ngOnInit() : void{
  this.http.getApi('bookstore_user/get/book').subscribe((res : any) => {
    this.books = res.result.map((book : any) => ({
  ...book,
  rating: +(Math.random() * (5 - 3) + 3).toFixed(1),
  reviewCount: Math.floor(Math.random() * 100)
}));
    this.setPage(0);
    console.log("books loaded")
  })
}

setPage(pageIndex : number){
  const start = pageIndex * this.pageSize
  const end = this.pageSize + start
  this.paginatedBooks = this.books.slice(start , end)
}

onPageChange(event: PageEvent) {
  this.pageSize = event.pageSize;
  this.setPage(event.pageIndex);
}

bookCount(){
  const count = this.books.length;
  return count;
}

openBook(bookId : any){
this.router.navigate(['dashboard/book', bookId])
}

}
