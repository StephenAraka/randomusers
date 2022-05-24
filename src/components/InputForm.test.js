import { render, screen } from "@testing-library/react"
import InputForm from "./InputForm"

test('on initial render, the download button is disabled', async () => {
  render(<InputForm data={[]} />);

  expect(await screen.findByRole('button', { name: /download/i })).toBeDisabled();
})