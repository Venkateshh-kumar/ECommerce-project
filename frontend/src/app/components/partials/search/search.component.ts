import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchTerm = '';
  products = ''; 
  productFound = true; 

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm; 
        this.checkProductExists(); // Check if the product exists in the list
      }
    });
  }

  search(term: string): void {
    if (term) {
      this.router.navigateByUrl('/search/' + term); 
    }
  }

  checkProductExists(): void {
    this.productFound = this.products.includes(this.searchTerm.toLowerCase()); // Check if the product is in the list
  }

  gotoo(){
    this.router.navigate(['/'])
  }
}
