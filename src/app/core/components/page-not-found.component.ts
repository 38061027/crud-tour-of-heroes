import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <mat-card>

  <mat-card-title>404: Page Not Found</mat-card-title>
  <mat-card-content>
  <h2>Page Not Found</h2>
<p>
Não foi possível encontrar essa página! Nem mesmo com visão raio-x.</p>
  </mat-card-content>

  <mat-card-actions>
    <button mat-raised-button color="primary" routerLink="/">Take me home</button>
  </mat-card-actions>

  </mat-card>

  `,
  styles: [

`
:host{
  text-align: center;
}
`
  ]
})
export class PageNotFoundComponent {

}
