import { gql } from "@apollo/client";

const GET_OWNERS = gql`
  {
    owners {
      id
      username
      password
      name
      photo
      address
      dob
      age
      phone
    }
  }
`;

const ADD_OWNER = gql`
  mutation addOwner(
    $username: String!
    $password: String!
    $name: String!
    $photo: String!
    $address: String!
    $dob: String!
    $age: Float!
    $phone: String!
  ) {
    addOwner(
      username: $username
      password: $password
      name: $name
      photo: $photo
      address: $address
      dob: $dob
      age: $age
      phone: $phone
    ) {
      id
    }
  }
`;

export { GET_OWNERS, ADD_OWNER };
