import './styles.scss';
import debounce from 'lodash/debounce';
import { fetchCountries } from './API/fetchCountries.js';
import * as Swal from 'sweetalert2';
import { tableComponent } from './components/tableComponent';
import { mainCard } from './components/mainCard';


const inputRef = document.querySelector('#search');
const root = document.querySelector('#root');


const onInputChange = (e) => {
  let name = e.target.value.trim();
  if (name.length === 0) return;

  fetchCountries(name)
    .then(res => {
      root.innerHTML = '';

      if (res.length > 10){
        Swal.fire(`You have - ${res.length} matches. Narrow your search up to 10 !`)
        return
      }
      if (res.length > 1) {
        tableComponent(res, root);
      }
      if (res.length === 1) {
        mainCard({ ...res[0]}, root);
      }
    })
    .catch(e => {
      if (e.message === 'Unexpected end of JSON input') {
        return;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: e.message,
      });

    });

};
inputRef.addEventListener('input', debounce(onInputChange, 500));

