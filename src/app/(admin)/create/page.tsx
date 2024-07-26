import PageLayout from "@/components/PageLayout";
import InfoCourse from "./components/info-course";
import ListSeminar from "./components/list-seminar";
import InfoSeminar from "./components/info-seminar";

export default function CreatePage() {
  return (
    <PageLayout title="Create">
      <InfoCourse />
      <div className="mt-6 flex justify-start flex-col lg:flex-row rounded-2xl bg-white border-[1px] border-[#D0D5DD]">
        <ListSeminar />
        <InfoSeminar />
      </div>
    </PageLayout>
  );
}
