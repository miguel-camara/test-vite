import './style.css';
import { setupResult } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<form class="row g-3">
<div class="col-auto">
  <label for="inputNumbes" class="visually-hidden">Numeros</label>
  <input type="number" class="form-control" id="inputNumbers" placeholder="Numbers">
</div>
<div class="col-auto">
  <button id="result" type="button" class="btn btn-primary mb-3">Result</button>
</div>
</form>
<div id="show"></div>
`;

setupResult(document.querySelector<HTMLButtonElement>('#result')!);
// showResult(document.querySelector<HTMLDivElement>('#show')!)
