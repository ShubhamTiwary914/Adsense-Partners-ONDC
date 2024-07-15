
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Org Details
const addressSchema = new Schema({
    address: String,
    city: String,
    state: String,
    zipcode: String
}, { _id: false });

const contactSchema = new Schema({
    name: String,
    email: String,
    mobile: String
}, { _id: false });

const documentSchema = new Schema({
    type: String,
    owner: String,
    beneficiary: String,
    status: String,
    date: Date
}, { _id: false });



//Payments
const paymentCardSchema = new Schema({
    
    name: String,
    no: String,
    expires: Date,
    cvv: Number
}, { _id: false });

const paymentPaypalSchema = new Schema({
    accname: String,
    accemail: String
}, { _id: false });

const paymentUpiSchema = new Schema({
    accname: String,
    upiID: String,
    branchIFSC: String
}, { _id: false });

const paymentSchema = new Schema({
    type: String,
    details: {
        type: new Schema({
        card: paymentCardSchema,
        paypal: paymentPaypalSchema,
        upi: paymentUpiSchema
        }, { _id: false })
    }
}, { _id: false });




const buyerAppSchema = new Schema({
    subscriberID: String,
    BAP_URL: String,
    country: String,
    domain: String,
    environment: Number,
    apptype: String
}, { _id: false });



// Organisation Schema
const organisationSchema = new Schema({
    name: String,
    email: String,
    credAuth: Boolean,
    encpass: String,
    address: addressSchema,
    contacts: [contactSchema],
    documents: [documentSchema],
    payments: [paymentSchema],
    buyerApp: buyerAppSchema
});


const Organisation = mongoose.models.Organisation || mongoose.model('Organisation', organisationSchema);


export {
    organisationSchema, Organisation
}
