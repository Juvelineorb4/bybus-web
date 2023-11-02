/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmailSusbcription = /* GraphQL */ `
  query GetEmailSusbcription($id: ID!) {
    getEmailSusbcription(id: $id) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const listEmailSusbcriptions = /* GraphQL */ `
  query ListEmailSusbcriptions(
    $filter: ModelEmailSusbcriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmailSusbcriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmailSubscriptionbyEmail = /* GraphQL */ `
  query GetEmailSubscriptionbyEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelEmailSusbcriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEmailSubscriptionbyEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
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
      agencyID
      createdAt
      updatedAt
    }
  }
`;
export const listAgencySubscriptions = /* GraphQL */ `
  query ListAgencySubscriptions(
    $filter: ModelAgencySubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgencySubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        rif
        email
        phone
        subscriptionDate
        status
        scheduledDate
        agencyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAgencySubscriptionbyRif = /* GraphQL */ `
  query GetAgencySubscriptionbyRif(
    $rif: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAgencySubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAgencySubscriptionbyRif(
      rif: $rif
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        rif
        email
        phone
        subscriptionDate
        status
        scheduledDate
        agencyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAgencySubscriptionbyEmail = /* GraphQL */ `
  query GetAgencySubscriptionbyEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAgencySubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAgencySubscriptionbyEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        rif
        email
        phone
        subscriptionDate
        status
        scheduledDate
        agencyID
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
<<<<<<< HEAD
=======
          status
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
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
          nextToken
        }
        employees {
          nextToken
        }
        bookings {
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
export const getAgencyByEmail = /* GraphQL */ `
  query GetAgencyByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAgencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAgencyByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cognitoID
        pin
        name
        rif
        email
        phone
        officies {
          nextToken
        }
        employees {
          nextToken
        }
        bookings {
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
export const getOffice = /* GraphQL */ `
  query GetOffice($id: ID!) {
    getOffice(id: $id) {
      id
      agencyID
      name
      state
      city
      address
      email
      phone
      status
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
<<<<<<< HEAD
=======
          status
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      transports {
        items {
          id
          model
          serial
          type
          officeID
          createdBy
          createdAt
          updatedAt
          owner
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
  }
`;
export const listOffices = /* GraphQL */ `
  query ListOffices(
    $filter: ModelOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOffices(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        employees {
          nextToken
        }
        transports {
          nextToken
        }
        bookings {
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
export const officesByAgencyID = /* GraphQL */ `
  query OfficesByAgencyID(
    $agencyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    officesByAgencyID(
      agencyID: $agencyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        employees {
          nextToken
        }
        transports {
          nextToken
        }
        bookings {
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
export const getState = /* GraphQL */ `
  query GetState($id: ID!) {
    getState(id: $id) {
      id
      name
      cities
      createdAt
      updatedAt
    }
  }
`;
export const listStates = /* GraphQL */ `
  query ListStates(
    $filter: ModelStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        cities
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      name
      email
      phone
      pin
      type
      agencyID
      agency {
        id
        cognitoID
        pin
        name
        rif
        email
        phone
        officies {
          nextToken
        }
        employees {
          nextToken
        }
        bookings {
          nextToken
        }
        owner
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
        employees {
          nextToken
        }
        transports {
          nextToken
        }
        bookings {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
<<<<<<< HEAD
=======
      status
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
      owner
      lastConnection
      createdAt
      updatedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        pin
        type
        agencyID
        agency {
          id
          cognitoID
          pin
          name
          rif
          email
          phone
          owner
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
          owner
          createdAt
          updatedAt
        }
<<<<<<< HEAD
=======
        status
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
        owner
        lastConnection
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const employeesByAgencyID = /* GraphQL */ `
  query EmployeesByAgencyID(
    $agencyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByAgencyID(
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
        agency {
          id
          cognitoID
          pin
          name
          rif
          email
          phone
          owner
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
          owner
          createdAt
          updatedAt
        }
<<<<<<< HEAD
=======
        status
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
        owner
        lastConnection
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const employeesByOfficeID = /* GraphQL */ `
  query EmployeesByOfficeID(
    $officeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByOfficeID(
      officeID: $officeID
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
        agency {
          id
          cognitoID
          pin
          name
          rif
          email
          phone
          owner
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
          owner
          createdAt
          updatedAt
        }
<<<<<<< HEAD
=======
        status
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
        owner
        lastConnection
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTransport = /* GraphQL */ `
  query GetTransport($id: ID!) {
    getTransport(id: $id) {
      id
      model
      serial
      type
      officeID
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTransports = /* GraphQL */ `
  query ListTransports(
    $filter: ModelTransportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        model
        serial
        type
        officeID
        createdBy
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const transportsByOfficeID = /* GraphQL */ `
  query TransportsByOfficeID(
    $officeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transportsByOfficeID(
      officeID: $officeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        model
        serial
        type
        officeID
        createdBy
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getScheduleBooking = /* GraphQL */ `
  query GetScheduleBooking($id: ID!) {
    getScheduleBooking(id: $id) {
      id
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
          owner
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
          owner
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
        owner
        createdAt
        updatedAt
      }
      freq
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listScheduleBookings = /* GraphQL */ `
  query ListScheduleBookings(
    $filter: ModelScheduleBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScheduleBookings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
          owner
          createdAt
          updatedAt
        }
        freq
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
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
        officies {
          nextToken
        }
        employees {
          nextToken
        }
        bookings {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      officeID
<<<<<<< HEAD
=======
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
        employees {
          nextToken
        }
        transports {
          nextToken
        }
        bookings {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
      customers {
        items {
          id
          fullName
          ci
          email
          bookingID
          ticketID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      tickets {
        items {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
        }
        nextToken
      }
      stops {
        items {
          id
          bookingID
          price
          owner
          createdAt
          updatedAt
        }
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
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          owner
          createdAt
          updatedAt
        }
        officeID
<<<<<<< HEAD
=======
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
          owner
          createdAt
          updatedAt
        }
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
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
<<<<<<< HEAD
=======
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBookingbyCode = /* GraphQL */ `
  query GetBookingbyCode(
    $code: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBookingbyCode(
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          owner
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
          owner
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
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const bookingsByAgencyID = /* GraphQL */ `
  query BookingsByAgencyID(
    $agencyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByAgencyID(
      agencyID: $agencyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          owner
          createdAt
          updatedAt
        }
        officeID
<<<<<<< HEAD
=======
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
          owner
          createdAt
          updatedAt
        }
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
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
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const bookingsByOfficeID = /* GraphQL */ `
  query BookingsByOfficeID(
    $officeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByOfficeID(
      officeID: $officeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          owner
          createdAt
          updatedAt
        }
        officeID
<<<<<<< HEAD
=======
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
          owner
          createdAt
          updatedAt
        }
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
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
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStopBooking = /* GraphQL */ `
  query GetStopBooking($id: ID!) {
    getStopBooking(id: $id) {
      id
      bookingID
      tickets {
        items {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
        }
        nextToken
      }
      arrival {
        time
        date
        city
        state
        address
      }
      price
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listStopBookings = /* GraphQL */ `
  query ListStopBookings(
    $filter: ModelStopBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStopBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookingID
        tickets {
          nextToken
        }
        arrival {
          time
          date
          city
          state
          address
        }
        price
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const stopBookingsByBookingID = /* GraphQL */ `
  query StopBookingsByBookingID(
    $bookingID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStopBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stopBookingsByBookingID(
      bookingID: $bookingID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingID
        tickets {
          nextToken
        }
        arrival {
          time
          date
          city
          state
          address
        }
        price
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      fullName
      ci
      email
      bookingID
      ticketID
      ticket {
        id
        code
        bookingID
        stop
        customerID
        customer {
          id
          fullName
          ci
          email
          bookingID
          ticketID
          owner
          createdAt
          updatedAt
<<<<<<< HEAD
          __typename
=======
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
        }
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullName
        ci
        email
        bookingID
        ticketID
        ticket {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const customersByBookingID = /* GraphQL */ `
  query CustomersByBookingID(
    $bookingID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customersByBookingID(
      bookingID: $bookingID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fullName
        ci
        email
        bookingID
        ticketID
        ticket {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      id
      code
      bookingID
      stop
      customerID
      customer {
        id
        fullName
        ci
        email
        bookingID
        ticketID
        ticket {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
<<<<<<< HEAD
          __typename
=======
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
        }
        owner
        createdAt
        updatedAt
<<<<<<< HEAD
        __typename
=======
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
      }
      seating
      status
      description
      url
      owner
      createdAt
      updatedAt
      stopBookingTicketsId
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        bookingID
        stop
        customerID
        customer {
          id
          fullName
          ci
          email
          bookingID
          ticketID
          owner
          createdAt
          updatedAt
<<<<<<< HEAD
          __typename
=======
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
        }
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
      }
      nextToken
    }
  }
`;
export const ticketsByBookingID = /* GraphQL */ `
  query TicketsByBookingID(
    $bookingID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketsByBookingID(
      bookingID: $bookingID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        bookingID
        stop
        customerID
        customer {
          id
          fullName
          ci
          email
          bookingID
          ticketID
          owner
          createdAt
          updatedAt
<<<<<<< HEAD
          __typename
=======
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
        }
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
      }
      nextToken
    }
  }
`;
export const ticketsByStop = /* GraphQL */ `
  query TicketsByStop(
    $stop: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketsByStop(
      stop: $stop
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        bookingID
        stop
        customerID
        customer {
          id
          fullName
          ci
          email
          bookingID
          ticketID
          owner
          createdAt
          updatedAt
<<<<<<< HEAD
          __typename
=======
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
        }
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
      }
      nextToken
    }
  }
`;
export const getOrderTicket = /* GraphQL */ `
  query GetOrderTicket($id: ID!) {
    getOrderTicket(id: $id) {
      id
      orderID
      ticketID
      ticket {
        id
        code
        bookingID
        stop
        customerID
        customer {
          id
          fullName
          ci
          email
          bookingID
          ticketID
          owner
          createdAt
          updatedAt
<<<<<<< HEAD
          __typename
=======
>>>>>>> 543509edf92b96a4b4ffbabb0a8c3210f56d58c7
        }
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
      }
      owner
      createdAt
      updatedAt
      orderDetailOrderTicketsId
    }
  }
`;
export const listOrderTickets = /* GraphQL */ `
  query ListOrderTickets(
    $filter: ModelOrderTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderID
        ticketID
        ticket {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
        }
        owner
        createdAt
        updatedAt
        orderDetailOrderTicketsId
      }
      nextToken
    }
  }
`;
export const orderTicketsByOrderID = /* GraphQL */ `
  query OrderTicketsByOrderID(
    $orderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderTicketsByOrderID(
      orderID: $orderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderID
        ticketID
        ticket {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
        }
        owner
        createdAt
        updatedAt
        orderDetailOrderTicketsId
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
        owner
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
          owner
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
          owner
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
        owner
        createdAt
        updatedAt
      }
      orderTickets {
        items {
          id
          orderID
          ticketID
          owner
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
      owner
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
          owner
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
          owner
          createdAt
          updatedAt
        }
        orderTickets {
          nextToken
        }
        userID
        createdAt
        updatedAt
        userOrdersId
        owner
      }
      nextToken
    }
  }
`;
export const orderDetailsByUserID = /* GraphQL */ `
  query OrderDetailsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderDetailsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          owner
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
          owner
          createdAt
          updatedAt
        }
        orderTickets {
          nextToken
        }
        userID
        createdAt
        updatedAt
        userOrdersId
        owner
      }
      nextToken
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
      id
      reference
      amount
      metadata
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        reference
        amount
        metadata
        userID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOrderDetailHistory = /* GraphQL */ `
  query GetOrderDetailHistory($id: ID!) {
    getOrderDetailHistory(id: $id) {
      id
      orderID
      order {
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
          owner
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
          owner
          createdAt
          updatedAt
        }
        orderTickets {
          nextToken
        }
        userID
        createdAt
        updatedAt
        userOrdersId
        owner
      }
      userID
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const listOrderDetailHistories = /* GraphQL */ `
  query ListOrderDetailHistories(
    $filter: ModelOrderDetailHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderDetailHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderID
        order {
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
          bookingID
          userID
          createdAt
          updatedAt
          userOrdersId
          owner
        }
        userID
        owner
        googleOwner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      status
      notificationToken
      previousBalance
      orders {
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
          bookingID
          userID
          createdAt
          updatedAt
          userOrdersId
          owner
        }
        nextToken
      }
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        status
        notificationToken
        previousBalance
        orders {
          nextToken
        }
        owner
        googleOwner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserbyEmail = /* GraphQL */ `
  query GetUserbyEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserbyEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        status
        notificationToken
        previousBalance
        orders {
          nextToken
        }
        owner
        googleOwner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
