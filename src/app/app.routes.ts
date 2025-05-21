import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ChatComponent } from './messages/chat/chat.component';
import { FeedComponent } from './posts/feed/feed.component';
import { GlobalFeedComponent } from './posts/global-feed/global-feed.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { StoryComponent } from './stories/story/story.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user/user.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'global-feed', component: GlobalFeedComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'story', component:StoryComponent},
  { path: 'path', component: ProfileComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: 'global-feed', pathMatch: 'full', },

];
