import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default history;

export const redirect = (url: string) => history.push(url);
export const redirectBack = () => history.goBack();
