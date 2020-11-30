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

const GET_PETS = gql`
  {
    pets {
      id
      name
      photo
      age
      breed
      height
      weight
      ownerId
    }
  }
`;

const GET_PETS_OWNER = gql`
  query pets($ownerId: String!) {
    pets(ownerId: $ownerId) {
      id
      name
      photo
      age
      breed
      height
      weight
      ownerId
    }
  }
`;

const ADD_PET = gql`
  mutation addPet(
    $name: String!
    $photo: String!
    $age: Float!
    $breed: String!
    $height: Float!
    $weight: Float!
    $ownerId: String!
  ) {
    addPet(
      name: $name
      photo: $photo
      age: $age
      breed: $breed
      height: $height
      weight: $weight
      ownerId: $ownerId
    ) {
      id
    }
  }
`;

const GET_DOCTORS = gql`
  {
    doctors {
      id
      username
      password
      name
      photo
      address
      dob
      age
      phone
      clinicAddress
      clinicCity
      experience
    }
  }
`;

const ADD_DOCTOR = gql`
  mutation addDoctor(
    $username: String!
    $password: String!
    $name: String!
    $photo: String!
    $address: String!
    $dob: String!
    $age: Float!
    $phone: String!
    $clinicAddress: String!
    $clinicCity: String!
    $experience: String!
  ) {
    addDoctor(
      username: $username
      password: $password
      name: $name
      photo: $photo
      address: $address
      dob: $dob
      age: $age
      phone: $phone
      clinicAddress: $clinicAddress
      clinicCity: $clinicCity
      experience: $experience
    ) {
      id
    }
  }
`;

const GET_ADMINS = gql`
  {
    admins {
      id
      username
      password
    }
  }
`;

const ADD_ADMIN = gql`
  mutation addAdmin($username: String!, $password: String!) {
    addAdmin(username: $username, password: $password) {
      id
    }
  }
`;

const GET_APPOINTMENTS = gql`
  {
    appointments {
      id
      date
      ownerId
      doctorId
      petId
      appointmentType
      appointmentStatus
    }
  }
`;

const ADD_APPOINTMENT = gql`
  mutation addAppointment(
    $date: String!
    $ownerId: String!
    $doctorId: String!
    $petId: String!
    $appointmentType: String!
    $appointmentStatus: String!
  ) {
    addAppointment(
      date: $date
      ownerId: $ownerId
      doctorId: $doctorId
      petId: $petId
      appointmentType: $appointmentType
      appointmentStatus: $appointmentStatus
    ) {
      id
    }
  }
`;

const GET_APPOINTMENTS_OWNER = gql`
  query appointments($ownerId: String!) {
    appointments(ownerId: $ownerId) {
      id
      date
      ownerId
      doctorId
      petId
      appointmentType
      appointmentStatus
    }
  }
`;

const GET_APPOINTMENTS_DOCTOR = gql`
  query appointments($doctorId: String!) {
    appointments(doctorId: $doctorId) {
      id
      date
      ownerId
      doctorId
      petId
      appointmentType
      appointmentStatus
    }
  }
`;

const ADD_REVIEW = gql`
  mutation addReview(
    $rating: Float!
    $feedback: String!
    $ownerId: String!
    $doctorId: String!
    $petId: String!
  ) {
    addReview(
      rating: $rating
      feedback: $feedback
      ownerId: $ownerId
      doctorId: $doctorId
      petId: $petId
    ) {
      id
    }
  }
`;

export {
  GET_OWNERS,
  ADD_OWNER,
  GET_PETS,
  ADD_PET,
  GET_PETS_OWNER,
  GET_DOCTORS,
  ADD_DOCTOR,
  GET_ADMINS,
  ADD_ADMIN,
  GET_APPOINTMENTS,
  ADD_APPOINTMENT,
  GET_APPOINTMENTS_OWNER,
  GET_APPOINTMENTS_DOCTOR,
  ADD_REVIEW,
};
