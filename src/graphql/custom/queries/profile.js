export const getAgency = /* GraphQL */ `
  query GetAgency($id: ID!) {
    getAgency(id: $id) {
      id
      cognitoID
      pin
      name
      rif
      email
      image
      phone
      employees {
        items {
          id
          name
          email
          phone
          pin
          type
          agencyID
          officeID
          lastConnection
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      stock
    }
  }
`;

export const getOffice = /* GraphQL */ `
  query GetOffice($id: ID!) {
    getOffice(id: $id) {
      id
      agencyID
      name
      state
      city
      createdAt
      updatedAt
    }
  }
`;
export const listEmployeesByAgency = /* GraphQL */ `
  query ListEmployeesByAgency(
    $agencyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeesByAgency(
      agencyID: $agencyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        phone
        pin
        type
        agencyID
        officeID
        status
        lastConnection
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;