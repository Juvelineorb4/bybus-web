export const getAgencySubscription = /* GraphQL */ `
  query GetAgencySubscription($id: ID!) {
    getAgencySubscription(id: $id) {
      id
      name
      rif
      email
      phone
      subscriptionDate
      status
      scheduledDate
      createdAt
      updatedAt
    }
  }
`;

export const listAgencies = /* GraphQL */ `
  query ListAgencies(
    $filter: ModelAgencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgencies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoID
        pin
        name
        rif
        email
        phone
        officies {
            items {
              id
              agencyID
              name
              state
              city
              address
              email
              phone
              status
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
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
              status
              owner
              lastConnection
              createdAt
              updatedAt
            }
            nextToken
          }
          bookings {
            items {
              id
              status
              code
              agencyID
              officeID
              departureCity
              arrivalCity
              stock
              price
              createdBy
              driver
              transport
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAgency = /* GraphQL */ `
  query GetAgency($id: ID!) {
    getAgency(id: $id) {
      id
      cognitoID
      pin
      name
      rif
      email
      phone
      officies {
        items {
          id
          agencyID
          name
          state
          city
          address
          email
          phone
          status
          createdAt
          updatedAt
        }
        nextToken
      }
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
          status
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      bookings {
        items {
          id
          status
          code
          agencyID
          officeID
          departureCity
          arrivalCity
          departure {
            time
            date
            city
            state
            address
          }
          arrival {
            time
            date
            city
            state
            address
          }
          stock
          price
          createdBy
          driver
          transport
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const listOrderDetails = /* GraphQL */ `
  query ListOrderDetails(
    $filter: ModelOrderDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        paymentMethod
        documentType
        customerDocument
        customerName
        customerEmail
        total
        isGuest
        paymentID
        payment {
          id
          reference
          amount
          metadata
          userID
          createdAt
          updatedAt
        }
        bookingID
        booking {
          id
          status
          code
          agencyID
          officeID
          departureCity
          arrivalCity
          stock
          price
          createdBy
          driver
          transport
          createdAt
          updatedAt
        }
        orderTickets {
          items {
            id
            orderID
            ticketID
            createdAt
            updatedAt
            orderDetailOrderTicketsId
          }
          nextToken
        }
        userID
        createdAt
        updatedAt
        userOrdersId
      }
      nextToken
    }
  }
`;

export const getOrderDetail = /* GraphQL */ `
  query GetOrderDetail($id: ID!) {
    getOrderDetail(id: $id) {
      id
      amount
      paymentMethod
      documentType
      customerDocument
      customerName
      customerEmail
      total
      isGuest
      paymentID
      payment {
        id
        reference
        amount
        metadata
        userID
        createdAt
        updatedAt
      }
      bookingID
      booking {
        id
        status
        code
        agencyID
        agency {
          id
          cognitoID
          pin
          name
          rif
          email
          phone
          createdAt
          updatedAt
        }
        officeID
        office {
          id
          agencyID
          name
          state
          city
          address
          email
          phone
          status
          createdAt
          updatedAt
        }
        customers {
          nextToken
        }
        tickets {
          nextToken
        }
        stops {
          nextToken
        }
        departureCity
        arrivalCity
        departure {
          time
          date
          city
          state
          address
        }
        arrival {
          time
          date
          city
          state
          address
        }
        stock
        price
        createdBy
        driver
        transport
        createdAt
        updatedAt
      }
      orderTickets {
        items {
          id
          orderID
          ticketID
          createdAt
          updatedAt
          orderDetailOrderTicketsId
        }
        nextToken
      }
      userID
      createdAt
      updatedAt
      userOrdersId
    }
  }
`;