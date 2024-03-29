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
    owner: {
      type: OwnerType,
      resolve(parent, args) {
        return Owner.findById(parent.ownerId);
      },
    },
    doctor: {
      type: DoctorType,
      resolve(parent, args) {
        return Doctor.findById(parent.doctorId);
      },
    },
    pet: {
      type: PetType,
      resolve(parent, args) {
        return Pet.findById(parent.petId);
      },
    },
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
    owner: {
      type: OwnerType,
      resolve(parent, args) {
        return Owner.findById(parent.ownerId);
      },
    },
    doctor: {
      type: DoctorType,
      resolve(parent, args) {
        return Doctor.findById(parent.doctorId);
      },
    },
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
      args: {
        ownerId: { type: GraphQLString },
        doctorId: { type: GraphQLString },
      },
      resolve(parent, args) {
        if (Object.keys(args).length === 0 && args.constructor === Object) {
          return Appointment.find({});
        } else if ("ownerId" in args) {
          return Appointment.find({ ownerId: args.ownerId });
        } else if ("doctorId" in args) {
          return Appointment.find({ doctorId: args.doctorId });
        }
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
      args: { ownerId: { type: GraphQLString } },
      resolve(parent, args) {
        if (Object.keys(args).length === 0 && args.constructor === Object) {
          return Pet.find({});
        } else if ("ownerId" in args) {
          return Pet.find({ ownerId: args.ownerId });
        }
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
      args: {
        ownerId: { type: GraphQLString },
        doctorId: { type: GraphQLString },
      },
      resolve(parent, args) {
        if (Object.keys(args).length === 0 && args.constructor === Object) {
          return Review.find({});
        } else if ("ownerId" in args) {
          return Review.find({ ownerId: args.ownerId });
        } else if ("doctorId" in args) {
          return Review.find({ doctorId: args.doctorId });
        }
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
    addDoctor: {
      type: DoctorType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        photo: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        dob: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLFloat) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
        clinicAddress: { type: new GraphQLNonNull(GraphQLString) },
        clinicCity: { type: new GraphQLNonNull(GraphQLString) },
        experience: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let doctor = new Doctor({
          username: args.username,
          password: args.password,
          name: args.name,
          photo: args.photo,
          address: args.address,
          dob: args.dob,
          age: args.age,
          phone: args.phone,
          clinicAddress: args.clinicAddress,
          clinicCity: args.clinicCity,
          experience: args.experience,
        });
        return doctor.save();
      },
    },
    addAdmin: {
      type: AdminType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let admin = new Admin({
          username: args.username,
          password: args.password,
        });
        return admin.save();
      },
    },
    addAppointment: {
      type: AppointmentType,
      args: {
        date: { type: new GraphQLNonNull(GraphQLString) },
        ownerId: { type: new GraphQLNonNull(GraphQLString) },
        doctorId: { type: new GraphQLNonNull(GraphQLString) },
        petId: { type: new GraphQLNonNull(GraphQLString) },
        appointmentType: { type: new GraphQLNonNull(GraphQLString) },
        appointmentStatus: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let appointment = new Appointment({
          date: args.date,
          ownerId: args.ownerId,
          doctorId: args.doctorId,
          petId: args.petId,
          appointmentType: args.appointmentType,
          appointmentStatus: args.appointmentStatus,
        });
        return appointment.save();
      },
    },
    addReview: {
      type: ReviewType,
      args: {
        rating: { type: new GraphQLNonNull(GraphQLFloat) },
        feedback: { type: new GraphQLNonNull(GraphQLString) },
        ownerId: { type: new GraphQLNonNull(GraphQLString) },
        doctorId: { type: new GraphQLNonNull(GraphQLString) },
        petId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let review = new Review({
          rating: args.rating,
          feedback: args.feedback,
          ownerId: args.ownerId,
          doctorId: args.doctorId,
          petId: args.petId,
        });
        return review.save();
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
