/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.parentWindow;
