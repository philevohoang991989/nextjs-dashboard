import PageLayout from "@/components/PageLayout";
import InfoCourse from "./components/info-course";
import { useForm } from "react-hook-form";

export default function CreatePage() {
    return(
        <PageLayout title="Create">
            <InfoCourse/>
        </PageLayout>
    )
}