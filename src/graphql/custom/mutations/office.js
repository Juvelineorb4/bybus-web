export const createOffice = /* GraphQL */ `
  mutation CreateOffice(
    $input: CreateOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    createOffice(input: $input, condition: $condition) {
      id
      agencyID
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const updateOffice = /* GraphQL */ `
  mutation UpdateOffice(
    $input: UpdateOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    updateOffice(input: $input, condition: $condition) {
      id
      agencyID
      name
      state
      city
      address
      email
      phone
    }
  }
`;

export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      status
      code
      agencyID
      stock
    }
  }
`;

export const createOrderDetail = /* GraphQL */ `
  mutation CreateOrderDetail(
    $input: CreateOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    createOrderDetail(input: $input, condition: $condition) {
      id
    }
  }
`;
