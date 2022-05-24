import { render, screen } from "@testing-library/react"
import InputForm from "./InputForm"

test('on initial render, the download button is disabled', async () => {
  render(<InputForm data={[]} />);

  expect(await screen.findByRole('button', { name: /download/i })).toBeDisabled();
});

test('if there are users in the list, the download CSV button becomes enabled', async () => {
  render(<InputForm data={[{}, {}]} />);

  expect(await screen.findByRole('button', { name: /download/i })).toBeEnabled();
});