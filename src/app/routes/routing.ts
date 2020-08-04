import { ListComponent } from './../components/list/list.component';
import { SideBarComponent } from './../components/side-bar/side-bar.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path: 'side', component: SideBarComponent},
  { path: '', component: ListComponent}
];

export const AppRouting = RouterModule.forRoot(routes);
