import * as sapper from '@sapper/app';
import { articles } from './store/store';

articles.useLocalStorage();

sapper.start({
	target: document.querySelector('#sapper')
});