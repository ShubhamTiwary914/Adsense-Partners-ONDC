//region Contacts
export const contactFields = [
    {
        label: 'Name',
        stateName: 'name',
        tooltipText: 'Name of the Contact No Holder',
    },
    {
        label: 'Email Address',
        stateName: 'email',
        tooltipText: 'Email through which we will be able to reach out towards',
    },
    {
        label: 'Mobile No',
        stateName: 'mobile',
        tooltipText: 'Contact Active Mobile No.',
    },
];


export const contactData = {
    name: 'Shubham Tiwary',
    email: 'shubhamtiwary914@gmail.com',
    mobile: '8131943433',
};






//region Organization
export const organizationFields = [
    {
        label: 'Name',
        stateName: 'name',
        tooltipText: 'Name of the Organization',
    },
    {
        label: 'Type',
        stateName: 'type',
        tooltipText: 'Type of Organization (e.g., Corporation, LLC, Partnership)',
    },
    {
        label: 'Address',
        stateName: 'address',
        tooltipText: 'Street address of the Organization',
    },
    {
        label: 'City',
        stateName: 'city',
        tooltipText: 'City where the Organization is located',
    },
    {
        label: 'State',
        stateName: 'state',
        tooltipText: 'State where the Organization is located',
    },
    {
        label: 'Zipcode',
        stateName: 'zipcode',
        tooltipText: "Postal code of the Organization's location",
    },
];

export const organizationData = {
    name: 'Acme Corporation',
    type: 'Corporation',
    address: '123 Main Street',
    city: 'Anytown',
    state: 'CA',
    zipcode: '12345',
};







//region Buyer App
export const buyerAppFields = [
    {
        label: 'Subscriber ID',
        stateName: 'subscriberId',
        tooltipText: 'Unique identifier for the subscriber',
    },
    {
        label: 'BAP URL',
        stateName: 'bapUrl',
        tooltipText: 'Buyer App Platform URL',
    },
    {
        label: 'Domain',
        stateName: 'domain',
        tooltipText: 'Domain of the Buyer App',
    },
    {
        label: 'Application',
        stateName: 'application',
        tooltipText: 'Name or type of the application',
    },
    {
        label: 'Environment',
        stateName: 'environment',
        tooltipText: 'Operating environment (e.g., Production, Staging, Development)',
    },
];

export const buyerAppData = {
    subscriberId: 'buyer-app-123',
    bapUrl: 'https://buyerapp.example.com',
    domain: 'example.com',
    application: 'E-commerce Platform',
    environment: 'Production',
};






//region Documents
export const documentFields = [
    {
        label: 'Aadhaar',
        stateName: 'aadhaar',
        tooltipText: 'Aadhaar number (12-digit unique identity number)',
    },
    {
        label: 'PAN',
        stateName: 'pan',
        tooltipText: 'Permanent Account Number (10-character alphanumeric identifier)',
    },
    {
        label: 'PAN Owner\'s Name',
        stateName: 'panOwnerName',
        tooltipText: 'Name of the person as it appears on the PAN card',
    },
    {
        label: 'Beneficiary Name',
        stateName: 'beneficiaryName',
        tooltipText: 'Name of the beneficiary for financial transactions',
    },
    {
        label: 'GSTIN',
        stateName: 'gstin',
        tooltipText: 'Goods and Services Tax Identification Number (15-character identifier)',
    },
];

export const documentData = {
    aadhaar: '123456789012',
    pan: 'ABCDE1234F',
    panOwnerName: 'John Doe',
    beneficiaryName: 'John Doe',
    gstin: '27AABCU9603R1ZN',
};