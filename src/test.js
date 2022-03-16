import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

function render(ui) {
	const conteiner = document.createElement("div");
	ReactDOM.render(ui, conteiner);
	document.body.appendChild(conteiner);
	return {
		...getQueriesForElement(conteiner),
		conteiner,
		cleanup() {
			ReactDOM.unmountComponentAtNode(conteiner);
			document.body.removeChild(conteiner);
		},
	};
}

test("renders a counter", () => {
	const { getByText, cleanup } = render(<Counter />);
	const contagem = getByText("0");
	userEvent.click(contagem);
	expect(contagem).toHaveTextContent("1");

	userEvent.click(contagem);
	expect(contagem).toHaveTextContent("2");
	cleanup();
});
