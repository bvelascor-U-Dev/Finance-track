import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'expenses-page.component',
  imports: [],
  templateUrl: './expenses-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesPageComponent {}
