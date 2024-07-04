import { auth } from "@clerk/nextjs/server";
import OrgControl from "./_components/org-control";
import {startCase} from "lodash";

export async function generateMetaData(){
  const {orgSlug}=auth();

  return {
    title:startCase(orgSlug || "organization"),
  };
}

function OrganizationIdLayout({ children }: { children: React.ReactNode }) {
  return <>
  <OrgControl/>
  {children}</>;
}

export default OrganizationIdLayout