import { Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';

export const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'news', component: NewsComponent }
];
