import html from "../index";
// import { connect } from "./store";

import ActiveList from "./ActiveList";
import ArchivedList from "./ArchivedList";
// console.log(html);
export default function App(tasks) {
  return html`
    ${ActiveList()} ${ArchivedList()}
  `;
}
