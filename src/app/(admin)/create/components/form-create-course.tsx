"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import moment from "moment";
import { Calendar } from "@/components/ui/calendar";
import { useDispatch, useSelector } from "react-redux";
import { CreateClass, TypeCourse } from "@/types";
import useAxiosAuth from "@/lib/hook/useAxiosAuth";
import { ENDPOINT } from "@/constants/endpoint";
import { updateIdClass, updateIdCourse } from "@/redux/slices/seminarSlice";

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
  disable: boolean;
  localCourse: boolean;
  actionCourse: boolean;
  setActionCourse:(value: boolean)=>void;
}
export default function CreateCourse({
  infoCourse,
  disable,
  localCourse,
  actionCourse,
  setActionCourse
}: Props) {
  const seminar = useSelector((state: any) => state.seminar);
  const [info, setInfo] = useState();
  const axiosAuth = useAxiosAuth();
  const dispatch = useDispatch();
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
  useEffect(() => {
    form.reset(info);
  }, [info]);
  const UpdateCourse = (data: TypeCourse) => {
    const newClassCourse: CreateClass = {
      name: data.referenceClass,
      heldDate: data.heldDate,
      courseDetail: {
        id: 0,
        name: data.name,
        curriculum: data.curriculum,
        category: data.category,
        modelOfTraining: data.modelOfTraining,
        subject: data.subject,
        targetParticipant: data.targetParticipant,
        isLocal: localCourse,
      },
    };
    axiosAuth.put(ENDPOINT.CREATE_CLASS, newClassCourse).then((res) => {
      form.reset(data);
      dispatch(updateIdCourse(res.data.courseId));
      dispatch(updateIdClass(res.data.id));
      typeof setActionCourse === "function" && setActionCourse(false)
      setActionCourse(false);
    });
  };
  const createCourse = (data: TypeCourse) => {
    const newClassCourse: CreateClass = {
      name: data.referenceClass,
      heldDate: data.heldDate,
      courseDetail: {
        id: 0,
        name: data.name,
        curriculum: data.curriculum,
        category: data.category,
        modelOfTraining: data.modelOfTraining,
        subject: data.subject,
        targetParticipant: data.targetParticipant,
        isLocal: localCourse,
      },
    };
    axiosAuth.post(ENDPOINT.CREATE_CLASS, newClassCourse).then((res) => {
      form.reset(data);
      typeof setActionCourse === "function" && setActionCourse(false)
      dispatch(updateIdCourse(res.data.courseId));
      dispatch(updateIdClass(res.data.id));
      // setActionCourse(false);
    });
  };
  const onSubmit = async (data: CourseFormValues) => {
    if (seminar.idClass && seminar.idCourse > 0) {
      UpdateCourse(data);
    } else {
      createCourse(data);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="pt-0 grid gap-4 mt-[1rem]"
        >
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Name</FormLabel>
                  <Input
                    placeholder="Not specified"
                    disabled={disable}
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-5 grid-flow-row gap-4">
            <FormField
              control={form.control}
              name="curriculum"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Curriculum</FormLabel>
                  <Input
                    placeholder="Not specified"
                    disabled={disable}
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Catgory</FormLabel>
                  <Input
                    placeholder="Not specified"
                    disabled={disable}
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="modelOfTraining"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mode of Training</FormLabel>
                  <Input
                    placeholder="Not specified"
                    disabled={disable}
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Subject</FormLabel>
                  <Input
                    placeholder="Not specified"
                    disabled={disable}
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetParticipant"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Participant</FormLabel>
                  <Input
                    placeholder="Not specified"
                    disabled={disable}
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 grid-flow-row gap-4">
            <FormField
              control={form.control}
              name="heldDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Held Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          disabled={disable}
                          className={cn(
                            "pl-3 text-left font-normal w-[100%] h-[44px]",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            moment(field.value).format("DD/MM/YYYY")
                          ) : (
                            <span>Not specified</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        // initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            {localCourse && (
              <FormField
                control={form.control}
                name="referenceClass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reference Class</FormLabel>
                    <Input placeholder="Not specified" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          {actionCourse && (
            <div className="flex justify-end items-center gap-[12px]">
              <Button
                type="button"
                variant="outline"
                className="border-none text-[14px]"
                onClick={() => {
                  form.reset(defaultValues);
                }}
              >
                Cancel
              </Button>
              <Button type="submit" className="text-[14px]">
                Save
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
