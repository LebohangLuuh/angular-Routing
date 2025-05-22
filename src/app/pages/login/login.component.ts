import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AppComponent } from "../../app.component";
import { FeedComponent } from '../../posts/feed/feed.component';

@Component({
  selector: 'app-login',
  imports: [RouterLink, RouterModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  title="Login";

}
