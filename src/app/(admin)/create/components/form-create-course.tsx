"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const courseFormSchema = z.object({
  id: z.number(),
  name: z.string(),
  curriculum: z.string(),
  category: z.string(),
  modelOfTraining: z.string(),
  subject: z.string(),
  targetParticipant: z.string(),
  isLocal: z.boolean(),
  courseCode: z.string(),
  heldDate: z.date().optional(),
  referenceClass: z.string(),
});

type CourseFormValues = z.infer<typeof courseFormSchema>;
interface Props {
  infoCourse: any;
}
export default function CreateCourse({ infoCourse }: Props) {
  const [info, setInfo] = useState();
  const defaultValues: Partial<CourseFormValues> = {
    id: 0,
    name: "",
    curriculum: "",
    category: "",
    modelOfTraining: "",
    subject: "",
    targetParticipant: "",
    isLocal: false,
    courseCode: "",
    heldDate: undefined,
    referenceClass: "",
  };
  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues,
  });
  useEffect(() => {
    setInfo(infoCourse);
  }, [infoCourse]);
  useEffect(()=>{
    form.reset(info)
  },[info])
  console.log(form.getValues("courseCode"));
  
  return <div></div>;
}
