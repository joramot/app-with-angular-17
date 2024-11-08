import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './app.component.html',
  styles: ``,
})

export class AppComponent {
  title = 'angular-17-app';
  city = 'Veracruz, Mexico';
}
