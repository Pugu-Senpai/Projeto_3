import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Movimentos } from './pages/movimentos/movimentos';
import { MovimentoForm } from './pages/movimento-form/movimento-form';
import { Poupancas } from './pages/poupancas/poupancas';
import { Objetivos } from './pages/objetivos/objetivos';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'movimentos', component: Movimentos },
  { path: 'movimentos/novo', component: MovimentoForm },
  { path: 'poupancas', component: Poupancas },
  { path: 'objetivos', component: Objetivos },
  { path: '**', redirectTo: '' }
];