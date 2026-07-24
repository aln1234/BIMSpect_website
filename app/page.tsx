import { FullBimspectSite } from "@/components/site/FullBimspectSite";
import { PreLaunchTechnicalSite } from "@/components/site/PreLaunchTechnicalSite";
import { hasLaunched } from "@/lib/launch";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  return hasLaunched() ? <FullBimspectSite /> : <PreLaunchTechnicalSite />;
}
