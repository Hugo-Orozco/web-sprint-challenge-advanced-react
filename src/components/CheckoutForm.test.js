import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CheckoutForm from "./CheckoutForm";
import ShoppingCart from './ShoppingCart';

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

test("displays plants in cart", () => {

  const plants = [
    {
      name: "Peperomia Rosso",
      id: 143,
      scientificName: "Peperomia caperata rosso",
      difficulty: "easy",
      light: "direct",
      img:
        "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
      sizes: ["small"],
      watering: 2,
      description:
        "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
      price: 21,
    },
    {
      name: "String of Dolphins",
      id: 125341,
      scientificName: "Senecio peregrinus",
      difficulty: "easy",
      light: "direct",
      img:
        "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
      sizes: ["small"],
      watering: 2,
      description:
        "Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins. Flipper hails from South Africa, so he thrives in warm environments with lots of sun. This dolphin doesn't need too much water to thrive, making him low maintenance and easy to love.",
      price: 15,
    },
    {
      name: "Snake Plant",
      id: 4893,
      scientificName: "Sansevieria zeylanica",
      difficulty: "easy",
      light: "direct",
      img:
        "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SANSEVIERIA_ZEYLANICA-1_800x.png?v=1587146468",
      sizes: ["small", "medium"],
      watering: 2,
      description:
        "One of the most popular and hardy of houseplants, he's virtually indestructible and adaptable to almost any condition. Whether you throw full, direct sunlight at him or shove him in the low-light corner of your apartment, he'll grow. And to top it off, he'll go weeks without water if he must.",
      price: 18,
    },
  ];

  render(<ShoppingCart cart={plants} />);

  const peperomiaRosso = screen.getByText(plants[0].name);
  const stringOfDolphins = screen.getByText(plants[1].name);
  const snakePlant = screen.getByText(plants[2].name);

  expect(peperomiaRosso).toBeInTheDocument();
  expect(stringOfDolphins).toBeInTheDocument();
  expect(snakePlant).toBeInTheDocument();

})
