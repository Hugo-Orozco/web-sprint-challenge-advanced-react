import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

  render(<CheckoutForm />);

  const header = screen.getByText('Checkout Form');

  expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", () => {

  render(<CheckoutForm />);

  const collection = [
    'First Name',
    'Last Name',
    'Address',
    'City',
    'State',
    'Zip'
  ];

  const firstName = screen.getByLabelText(`${collection[0]}:`);
  const lastName = screen.getByLabelText(`${collection[1]}:`);
  const address = screen.getByLabelText(`${collection[2]}:`);
  const city = screen.getByLabelText(`${collection[3]}:`);
  const state = screen.getByLabelText(`${collection[4]}:`);
  const zip = screen.getByLabelText(`${collection[5]}:`);

  userEvent.type(firstName, collection[0]);
  userEvent.type(lastName, collection[1]);
  userEvent.type(address, collection[2]);
  userEvent.type(city, collection[3]);
  userEvent.type(state, collection[4]);
  userEvent.type(zip, collection[5]);

  const button = screen.getByRole('button', { type: 'submit' });

  const messageFailed = screen.queryByTestId('successMessage');

  expect(messageFailed).not.toBeInTheDocument();

  button.click();

  const message = screen.getByTestId('successMessage');

  expect(message).toBeInTheDocument();

  const firstNameMessage = screen.getByDisplayValue(collection[0]);
  const lastNameMessage = screen.getByDisplayValue(collection[1]);
  const addressMessage = screen.getByDisplayValue(collection[2]);
  const cityMessage = screen.getByDisplayValue(collection[3]);
  const stateMessage = screen.getByDisplayValue(collection[4]);
  const zipMessage = screen.getByDisplayValue(collection[5]);

  expect(firstNameMessage).toBeInTheDocument();
  expect(lastNameMessage).toBeInTheDocument();
  expect(addressMessage).toBeInTheDocument();
  expect(cityMessage).toBeInTheDocument();
  expect(stateMessage).toBeInTheDocument();
  expect(zipMessage).toBeInTheDocument();

});
