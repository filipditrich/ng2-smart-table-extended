// ...

@Component({ 
  template: `
    <input #search class="search" type="text" placeholder="Search..." (keydown.enter)="onSearch(search.value)">
    <ng2-smart-table-extended [settings]="settings" [source]="source"></ng2-smart-table-extended>
  `
})
// ...
