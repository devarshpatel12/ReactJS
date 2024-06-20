import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Load Contact Page", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading", { name: "Contact No:NULL" });
  const email = screen.getByRole("heading", { name: "Email:NULL" });
  expect(heading).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
