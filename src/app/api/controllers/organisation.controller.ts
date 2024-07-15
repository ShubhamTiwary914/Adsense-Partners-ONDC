import { organisationSchema, Organisation } from '@/app/api/models/organisation.model'
import { InferSchemaType } from "mongoose";

type OrganisationInterface = InferSchemaType<typeof organisationSchema>;





export async function createOrg(orgData: Omit<OrganisationInterface, '_id'>): Promise<OrganisationInterface> {
    const newOrg = new Organisation(orgData);
    return await newOrg.save();
}


export async function fetchOrg(searchQuery: any): Promise<OrganisationInterface> {
    try {
        const organisation = await Organisation.findOne(searchQuery).exec();
        return organisation;
    } catch (error) {
        console.error('Error finding organisation by Search Parameters Given:', error);
        return null;
    }
}
