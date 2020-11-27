const graphql = require("graphql");

const Admin = require("../models/admin");
const Appointment = require("../models/appointment");
const Doctor = require("../models/doctor");
const Owner = require("../models/owner");
const Pet = require("../models/pet");
const Review = require("../models/review");

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
} = graphql;

const GraphQLDateTime = require("graphql-type-datetime");

const AdminType = new GraphQLObjectType({
  name: "Admin",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const AppointmentType = new GraphQLObjectType({
  name: "Appointment",
  fields: () => ({
    id: { type: GraphQLID },
    date: { type: GraphQLDateTime },
    ownerId: { type: GraphQLString },
    doctorId: { type: GraphQLString },
    petId: { type: GraphQLString },
    appointmentType: { type: GraphQLString },
    appointmentStatus: { type: GraphQLString },
  }),
});

const DoctorType = new GraphQLObjectType({
  name: "Doctor",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    name: { type: GraphQLString },
    photo: { type: GraphQLString },
    address: { type: GraphQLString },
    dob: { type: GraphQLString },
    age: { type: GraphQLFloat },
    phone: { type: GraphQLString },
    clinicAddress: { type: GraphQLString },
    clinicCity: { type: GraphQLString },
    experience: { type: GraphQLString },
  }),
});

const OwnerType = new GraphQLObjectType({
  name: "Owner",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    name: { type: GraphQLString },
    photo: { type: GraphQLString },
    address: { type: GraphQLString },
    dob: { type: GraphQLString },
    age: { type: GraphQLFloat },
    phone: { type: GraphQLString },
    pets: {
      type: GraphQLList(PetType),
      resolve(parent, args) {
        return Pet.find({ ownerId: parent.id });
      },
    },
  }),
});

const PetType = new GraphQLObjectType({
  name: "Pet",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    photo: { type: GraphQLString },
    age: { type: GraphQLFloat },
    breed: { type: GraphQLString },
    height: { type: GraphQLFloat },
    weight: { type: GraphQLFloat },
    ownerId: { type: GraphQLString },
  }),
});

const ReviewType = new GraphQLObjectType({
  name: "Review",
  fields: () => ({
    id: { type: GraphQLID },
    rating: { type: GraphQLFloat },
    feedback: { type: GraphQLString },
    ownerId: { type: GraphQLString },
    doctorId: { type: GraphQLString },
    petId: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    admin: {
      type: AdminType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Admin.findById(args.id);
      },
    },
    admins: {
      type: GraphQLList(AdminType),
      resolve(parent, args) {
        return Admin.find({});
      },
    },
    appointment: {
      type: AppointmentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Appointment.findById(args.id);
      },
    },
    appointments: {
      type: GraphQLList(AppointmentType),
      resolve(parent, args) {
        return Appointment.find({});
      },
    },
    doctor: {
      type: DoctorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Doctor.findById(args.id);
      },
    },
    doctors: {
      type: GraphQLList(DoctorType),
      resolve(parent, args) {
        return Doctor.find({});
      },
    },
    owner: {
      type: OwnerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Owner.findById(args.id);
      },
    },
    owners: {
      type: GraphQLList(OwnerType),
      resolve(parent, args) {
        return Owner.find({});
      },
    },
    pet: {
      type: PetType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Pet.findById(args.id);
      },
    },
    pets: {
      type: GraphQLList(PetType),
      resolve(parent, args) {
        return Pet.find({});
      },
    },
    review: {
      type: ReviewType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Review.findById(args.id);
      },
    },
    reviews: {
      type: GraphQLList(ReviewType),
      resolve(parent, args) {
        return Review.find({});
      },
    },
  },
});

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addOwner: {
      type: OwnerType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        photo: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        dob: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLFloat) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let owner = new Owner({
          username: args.username,
          password: args.password,
          name: args.name,
          photo: args.photo,
          address: args.address,
          dob: args.dob,
          age: args.age,
          phone: args.phone,
        });
        return owner.save();
      },
    },
    addPet: {
      type: PetType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        photo: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLFloat) },
        breed: { type: new GraphQLNonNull(GraphQLString) },
        height: { type: new GraphQLNonNull(GraphQLFloat) },
        weight: { type: new GraphQLNonNull(GraphQLFloat) },
        ownerId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let pet = new Pet({
          name: args.name,
          photo: args.photo,
          age: args.age,
          breed: args.breed,
          height: args.height,
          weight: args.weight,
          ownerId: args.ownerId,
        });
        return pet.save();
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
