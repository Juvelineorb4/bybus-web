/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteAgency = /* GraphQL */ `
  mutation DeleteAgency(
    $input: DeleteAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    deleteAgency(input: $input, condition: $condition) {
      id
      cognitoID
      identityID
      image
      pin
      name
      rif
      email
      phone
      percentage
      status
      history {
        items {
          id
          agencyID
          reason
          description
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
      employees {
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
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          agency {
            id
            cognitoID
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          percentage
          createdBy
          driver
          transport
          transportParking
          transportFeatures
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
        booking {
          id
          status
          code
          agencyID
          agency {
            id
            cognitoID
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          percentage
          createdBy
          driver
          transport
          transportParking
          transportFeatures
          owner
          createdAt
          updatedAt
        }
        orderDetailID
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
            orderDetailID
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
            orderDetailTicketsId
          }
          owner
          createdAt
          updatedAt
        }
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
        orderDetailTicketsId
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
      id
      code
      bookingID
      booking {
        id
        status
        code
        agencyID
        agency {
          id
          cognitoID
          identityID
          image
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
          }
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
            orderDetailID
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
            orderDetailTicketsId
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
        percentage
        createdBy
        driver
        transport
        transportParking
        transportFeatures
        owner
        createdAt
        updatedAt
      }
      orderDetailID
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          orderDetailID
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
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          orderDetailTicketsId
        }
        owner
        createdAt
        updatedAt
      }
      seating
      status
      description
      url
      owner
      createdAt
      updatedAt
      stopBookingTicketsId
      orderDetailTicketsId
    }
  }
`;
export const createTasaCambio = /* GraphQL */ `
  mutation CreateTasaCambio(
    $input: CreateTasaCambioInput!
    $condition: ModelTasaCambioConditionInput
  ) {
    createTasaCambio(input: $input, condition: $condition) {
      id
      price
      createdAt
      updatedAt
    }
  }
`;
export const updateTasaCambio = /* GraphQL */ `
  mutation UpdateTasaCambio(
    $input: UpdateTasaCambioInput!
    $condition: ModelTasaCambioConditionInput
  ) {
    updateTasaCambio(input: $input, condition: $condition) {
      id
      price
      createdAt
      updatedAt
    }
  }
`;
export const deleteTasaCambio = /* GraphQL */ `
  mutation DeleteTasaCambio(
    $input: DeleteTasaCambioInput!
    $condition: ModelTasaCambioConditionInput
  ) {
    deleteTasaCambio(input: $input, condition: $condition) {
      id
      price
      createdAt
      updatedAt
    }
  }
`;
export const createEmailSusbcription = /* GraphQL */ `
  mutation CreateEmailSusbcription(
    $input: CreateEmailSusbcriptionInput!
    $condition: ModelEmailSusbcriptionConditionInput
  ) {
    createEmailSusbcription(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateEmailSusbcription = /* GraphQL */ `
  mutation UpdateEmailSusbcription(
    $input: UpdateEmailSusbcriptionInput!
    $condition: ModelEmailSusbcriptionConditionInput
  ) {
    updateEmailSusbcription(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmailSusbcription = /* GraphQL */ `
  mutation DeleteEmailSusbcription(
    $input: DeleteEmailSusbcriptionInput!
    $condition: ModelEmailSusbcriptionConditionInput
  ) {
    deleteEmailSusbcription(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const createAgencySubscription = /* GraphQL */ `
  mutation CreateAgencySubscription(
    $input: CreateAgencySubscriptionInput!
    $condition: ModelAgencySubscriptionConditionInput
  ) {
    createAgencySubscription(input: $input, condition: $condition) {
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
export const updateAgencySubscription = /* GraphQL */ `
  mutation UpdateAgencySubscription(
    $input: UpdateAgencySubscriptionInput!
    $condition: ModelAgencySubscriptionConditionInput
  ) {
    updateAgencySubscription(input: $input, condition: $condition) {
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
export const deleteAgencySubscription = /* GraphQL */ `
  mutation DeleteAgencySubscription(
    $input: DeleteAgencySubscriptionInput!
    $condition: ModelAgencySubscriptionConditionInput
  ) {
    deleteAgencySubscription(input: $input, condition: $condition) {
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
export const createAgency = /* GraphQL */ `
  mutation CreateAgency(
    $input: CreateAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    createAgency(input: $input, condition: $condition) {
      id
      cognitoID
      identityID
      image
      pin
      name
      rif
      email
      phone
      percentage
      status
      history {
        items {
          id
          agencyID
          reason
          description
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
      employees {
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
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          agency {
            id
            cognitoID
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          percentage
          createdBy
          driver
          transport
          transportParking
          transportFeatures
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
export const updateAgency = /* GraphQL */ `
  mutation UpdateAgency(
    $input: UpdateAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    updateAgency(input: $input, condition: $condition) {
      id
      cognitoID
      identityID
      image
      pin
      name
      rif
      email
      phone
      percentage
      status
      history {
        items {
          id
          agencyID
          reason
          description
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
      employees {
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
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          agency {
            id
            cognitoID
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          percentage
          createdBy
          driver
          transport
          transportParking
          transportFeatures
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
export const createAgencyHistory = /* GraphQL */ `
  mutation CreateAgencyHistory(
    $input: CreateAgencyHistoryInput!
    $condition: ModelAgencyHistoryConditionInput
  ) {
    createAgencyHistory(input: $input, condition: $condition) {
      id
      agencyID
      reason
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAgencyHistory = /* GraphQL */ `
  mutation UpdateAgencyHistory(
    $input: UpdateAgencyHistoryInput!
    $condition: ModelAgencyHistoryConditionInput
  ) {
    updateAgencyHistory(input: $input, condition: $condition) {
      id
      agencyID
      reason
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAgencyHistory = /* GraphQL */ `
  mutation DeleteAgencyHistory(
    $input: DeleteAgencyHistoryInput!
    $condition: ModelAgencyHistoryConditionInput
  ) {
    deleteAgencyHistory(input: $input, condition: $condition) {
      id
      agencyID
      reason
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOffice = /* GraphQL */ `
  mutation CreateOffice(
    $input: CreateOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    createOffice(input: $input, condition: $condition) {
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
          agency {
            id
            cognitoID
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          status
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
          agency {
            id
            cognitoID
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          percentage
          createdBy
          driver
          transport
          transportParking
          transportFeatures
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
          agency {
            id
            cognitoID
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          status
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
          agency {
            id
            cognitoID
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          percentage
          createdBy
          driver
          transport
          transportParking
          transportFeatures
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
export const deleteOffice = /* GraphQL */ `
  mutation DeleteOffice(
    $input: DeleteOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    deleteOffice(input: $input, condition: $condition) {
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
          agency {
            id
            cognitoID
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          status
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
          agency {
            id
            cognitoID
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          percentage
          createdBy
          driver
          transport
          transportParking
          transportFeatures
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
export const createState = /* GraphQL */ `
  mutation CreateState(
    $input: CreateStateInput!
    $condition: ModelStateConditionInput
  ) {
    createState(input: $input, condition: $condition) {
      id
      name
      cities
      createdAt
      updatedAt
    }
  }
`;
export const updateState = /* GraphQL */ `
  mutation UpdateState(
    $input: UpdateStateInput!
    $condition: ModelStateConditionInput
  ) {
    updateState(input: $input, condition: $condition) {
      id
      name
      cities
      createdAt
      updatedAt
    }
  }
`;
export const deleteState = /* GraphQL */ `
  mutation DeleteState(
    $input: DeleteStateInput!
    $condition: ModelStateConditionInput
  ) {
    deleteState(input: $input, condition: $condition) {
      id
      name
      cities
      createdAt
      updatedAt
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
        identityID
        image
        pin
        name
        rif
        email
        phone
        percentage
        status
        history {
          items {
            id
            agencyID
            reason
            description
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
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
      status
      owner
      lastConnection
      createdAt
      updatedAt
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
        identityID
        image
        pin
        name
        rif
        email
        phone
        percentage
        status
        history {
          items {
            id
            agencyID
            reason
            description
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
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
      status
      owner
      lastConnection
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
        identityID
        image
        pin
        name
        rif
        email
        phone
        percentage
        status
        history {
          items {
            id
            agencyID
            reason
            description
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
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
      status
      owner
      lastConnection
      createdAt
      updatedAt
    }
  }
`;
export const createTransport = /* GraphQL */ `
  mutation CreateTransport(
    $input: CreateTransportInput!
    $condition: ModelTransportConditionInput
  ) {
    createTransport(input: $input, condition: $condition) {
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
export const updateTransport = /* GraphQL */ `
  mutation UpdateTransport(
    $input: UpdateTransportInput!
    $condition: ModelTransportConditionInput
  ) {
    updateTransport(input: $input, condition: $condition) {
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
export const deleteTransport = /* GraphQL */ `
  mutation DeleteTransport(
    $input: DeleteTransportInput!
    $condition: ModelTransportConditionInput
  ) {
    deleteTransport(input: $input, condition: $condition) {
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
export const createScheduleBooking = /* GraphQL */ `
  mutation CreateScheduleBooking(
    $input: CreateScheduleBookingInput!
    $condition: ModelScheduleBookingConditionInput
  ) {
    createScheduleBooking(input: $input, condition: $condition) {
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
          identityID
          image
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
          }
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
            orderDetailID
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
            orderDetailTicketsId
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
        percentage
        createdBy
        driver
        transport
        transportParking
        transportFeatures
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
export const updateScheduleBooking = /* GraphQL */ `
  mutation UpdateScheduleBooking(
    $input: UpdateScheduleBookingInput!
    $condition: ModelScheduleBookingConditionInput
  ) {
    updateScheduleBooking(input: $input, condition: $condition) {
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
          identityID
          image
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
          }
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
            orderDetailID
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
            orderDetailTicketsId
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
        percentage
        createdBy
        driver
        transport
        transportParking
        transportFeatures
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
export const deleteScheduleBooking = /* GraphQL */ `
  mutation DeleteScheduleBooking(
    $input: DeleteScheduleBookingInput!
    $condition: ModelScheduleBookingConditionInput
  ) {
    deleteScheduleBooking(input: $input, condition: $condition) {
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
          identityID
          image
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
          }
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
            orderDetailID
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
            orderDetailTicketsId
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
        percentage
        createdBy
        driver
        transport
        transportParking
        transportFeatures
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
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      status
      code
      agencyID
      agency {
        id
        cognitoID
        identityID
        image
        pin
        name
        rif
        email
        phone
        percentage
        status
        history {
          items {
            id
            agencyID
            reason
            description
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
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
      customers {
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
            orderDetailID
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
            orderDetailTicketsId
          }
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          orderDetailID
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
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          orderDetailTicketsId
        }
        nextToken
      }
      stops {
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
      percentage
      createdBy
      driver
      transport
      transportParking
      transportFeatures
      owner
      createdAt
      updatedAt
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
      agency {
        id
        cognitoID
        identityID
        image
        pin
        name
        rif
        email
        phone
        percentage
        status
        history {
          items {
            id
            agencyID
            reason
            description
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
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
      customers {
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
            orderDetailID
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
            orderDetailTicketsId
          }
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          orderDetailID
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
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          orderDetailTicketsId
        }
        nextToken
      }
      stops {
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
      percentage
      createdBy
      driver
      transport
      transportParking
      transportFeatures
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      id
      status
      code
      agencyID
      agency {
        id
        cognitoID
        identityID
        image
        pin
        name
        rif
        email
        phone
        percentage
        status
        history {
          items {
            id
            agencyID
            reason
            description
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
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
      customers {
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
            orderDetailID
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
            orderDetailTicketsId
          }
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          orderDetailID
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
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          orderDetailTicketsId
        }
        nextToken
      }
      stops {
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
      percentage
      createdBy
      driver
      transport
      transportParking
      transportFeatures
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createStopBooking = /* GraphQL */ `
  mutation CreateStopBooking(
    $input: CreateStopBookingInput!
    $condition: ModelStopBookingConditionInput
  ) {
    createStopBooking(input: $input, condition: $condition) {
      id
      bookingID
      tickets {
        items {
          id
          code
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          orderDetailID
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
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          orderDetailTicketsId
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
export const updateStopBooking = /* GraphQL */ `
  mutation UpdateStopBooking(
    $input: UpdateStopBookingInput!
    $condition: ModelStopBookingConditionInput
  ) {
    updateStopBooking(input: $input, condition: $condition) {
      id
      bookingID
      tickets {
        items {
          id
          code
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          orderDetailID
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
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          orderDetailTicketsId
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
export const deleteStopBooking = /* GraphQL */ `
  mutation DeleteStopBooking(
    $input: DeleteStopBookingInput!
    $condition: ModelStopBookingConditionInput
  ) {
    deleteStopBooking(input: $input, condition: $condition) {
      id
      bookingID
      tickets {
        items {
          id
          code
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          orderDetailID
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
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          orderDetailTicketsId
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
        booking {
          id
          status
          code
          agencyID
          agency {
            id
            cognitoID
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          percentage
          createdBy
          driver
          transport
          transportParking
          transportFeatures
          owner
          createdAt
          updatedAt
        }
        orderDetailID
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
            orderDetailID
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
            orderDetailTicketsId
          }
          owner
          createdAt
          updatedAt
        }
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
        orderDetailTicketsId
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
        booking {
          id
          status
          code
          agencyID
          agency {
            id
            cognitoID
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          percentage
          createdBy
          driver
          transport
          transportParking
          transportFeatures
          owner
          createdAt
          updatedAt
        }
        orderDetailID
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
            orderDetailID
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
            orderDetailTicketsId
          }
          owner
          createdAt
          updatedAt
        }
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
        orderDetailTicketsId
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
      id
      code
      bookingID
      booking {
        id
        status
        code
        agencyID
        agency {
          id
          cognitoID
          identityID
          image
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
          }
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
            orderDetailID
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
            orderDetailTicketsId
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
        percentage
        createdBy
        driver
        transport
        transportParking
        transportFeatures
        owner
        createdAt
        updatedAt
      }
      orderDetailID
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          orderDetailID
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
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          orderDetailTicketsId
        }
        owner
        createdAt
        updatedAt
      }
      seating
      status
      description
      url
      owner
      createdAt
      updatedAt
      stopBookingTicketsId
      orderDetailTicketsId
    }
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
      id
      code
      bookingID
      booking {
        id
        status
        code
        agencyID
        agency {
          id
          cognitoID
          identityID
          image
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
          }
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
            orderDetailID
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
            orderDetailTicketsId
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
        percentage
        createdBy
        driver
        transport
        transportParking
        transportFeatures
        owner
        createdAt
        updatedAt
      }
      orderDetailID
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          orderDetailID
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
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          orderDetailTicketsId
        }
        owner
        createdAt
        updatedAt
      }
      seating
      status
      description
      url
      owner
      createdAt
      updatedAt
      stopBookingTicketsId
      orderDetailTicketsId
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
      amount
      paymentMethod
      documentType
      customerDocument
      customerName
      customerEmail
      total
      isGuest
      status
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
          identityID
          image
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
          }
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
            orderDetailID
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
            orderDetailTicketsId
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
        percentage
        createdBy
        driver
        transport
        transportParking
        transportFeatures
        owner
        createdAt
        updatedAt
      }
      tickets {
        items {
          id
          code
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          orderDetailID
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
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          orderDetailTicketsId
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
export const updateOrderDetail = /* GraphQL */ `
  mutation UpdateOrderDetail(
    $input: UpdateOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    updateOrderDetail(input: $input, condition: $condition) {
      id
      amount
      paymentMethod
      documentType
      customerDocument
      customerName
      customerEmail
      total
      isGuest
      status
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
          identityID
          image
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
          }
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
            orderDetailID
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
            orderDetailTicketsId
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
        percentage
        createdBy
        driver
        transport
        transportParking
        transportFeatures
        owner
        createdAt
        updatedAt
      }
      tickets {
        items {
          id
          code
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          orderDetailID
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
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          orderDetailTicketsId
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
export const deleteOrderDetail = /* GraphQL */ `
  mutation DeleteOrderDetail(
    $input: DeleteOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    deleteOrderDetail(input: $input, condition: $condition) {
      id
      amount
      paymentMethod
      documentType
      customerDocument
      customerName
      customerEmail
      total
      isGuest
      status
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
          identityID
          image
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
          }
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
            orderDetailID
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
            orderDetailTicketsId
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
        percentage
        createdBy
        driver
        transport
        transportParking
        transportFeatures
        owner
        createdAt
        updatedAt
      }
      tickets {
        items {
          id
          code
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          orderDetailID
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
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          orderDetailTicketsId
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
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
export const createOrderDetailHistory = /* GraphQL */ `
  mutation CreateOrderDetailHistory(
    $input: CreateOrderDetailHistoryInput!
    $condition: ModelOrderDetailHistoryConditionInput
  ) {
    createOrderDetailHistory(input: $input, condition: $condition) {
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
        status
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
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          percentage
          createdBy
          driver
          transport
          transportParking
          transportFeatures
          owner
          createdAt
          updatedAt
        }
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
          }
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
export const updateOrderDetailHistory = /* GraphQL */ `
  mutation UpdateOrderDetailHistory(
    $input: UpdateOrderDetailHistoryInput!
    $condition: ModelOrderDetailHistoryConditionInput
  ) {
    updateOrderDetailHistory(input: $input, condition: $condition) {
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
        status
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
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          percentage
          createdBy
          driver
          transport
          transportParking
          transportFeatures
          owner
          createdAt
          updatedAt
        }
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
          }
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
export const deleteOrderDetailHistory = /* GraphQL */ `
  mutation DeleteOrderDetailHistory(
    $input: DeleteOrderDetailHistoryInput!
    $condition: ModelOrderDetailHistoryConditionInput
  ) {
    deleteOrderDetailHistory(input: $input, condition: $condition) {
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
        status
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
            identityID
            image
            pin
            name
            rif
            email
            phone
            percentage
            status
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
          percentage
          createdBy
          driver
          transport
          transportParking
          transportFeatures
          owner
          createdAt
          updatedAt
        }
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
          }
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
          status
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          tickets {
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
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
          status
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          tickets {
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
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
          status
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
            percentage
            createdBy
            driver
            transport
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
          }
          tickets {
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
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const registerAgencyAdmin = /* GraphQL */ `
  mutation RegisterAgencyAdmin($input: RegisterUserInput!) {
    registerAgencyAdmin(input: $input)
  }
`;
export const checkScan = /* GraphQL */ `
  mutation CheckScan($input: CheckScanInput) {
    checkScan(input: $input)
  }
`;
export const reprogram = /* GraphQL */ `
  mutation Reprogram($input: String) {
    reprogram(input: $input)
  }
`;
export const updateAgencyCognito = /* GraphQL */ `
  mutation UpdateAgencyCognito($input: updateAgencyCognitoInput) {
    updateAgencyCognito(input: $input)
  }
`;
export const uploadAgencyImage = /* GraphQL */ `
  mutation UploadAgencyImage($input: String) {
    uploadAgencyImage(input: $input)
  }
`;
