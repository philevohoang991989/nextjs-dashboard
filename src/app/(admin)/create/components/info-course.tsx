/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Button } from "@/components/ui/button";
import { updateIdClass, updateIdCourse } from "@/redux/slices/seminarSlice";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";

import useAxiosAuth from "@/lib/hook/useAxiosAuth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ENDPOINT } from "@/constants/endpoint";
import CreateCourse from "./form-create-course";

export default function InfoCourse() {
  const dispatch = useDispatch();
  const [infoCourse, setInfoCourse] = useState<any>()
  const { data: session } = useSession();
  const axiosAuth = useAxiosAuth();
  const [listCourseHRMS, setlistCourseHRMS] = useState<any>([]);
  const [disable, setDisable] = useState<boolean>(false);
  
  const getDetailCourse = (value: any) => {
    dispatch(updateIdCourse(value.courseDetail?.id));
    dispatch(updateIdClass(value.id));
    axiosAuth
      .get(`/Course/${value.courseDetail.id}/classes/${value.id}`)
      .then((res) => {
        setInfoCourse(res.data)
      });
  };
  useEffect(() => {
    try {
      const res = session && axiosAuth.get(ENDPOINT.LIST_COURSE_HRMS);
      res?.then((res) => {
        setlistCourseHRMS(res.data);
      });
    } catch (error) {
      console.error("Error fetching courses:", error);
      // Optionally handle specific error cases here
    }
  }, [session]);
  return (
    <div className="bg-white rounded-2xl border-[1px] border-[#D0D5DD] p-6">
      <div className="flex items-start justify-between">
        <h3 className="text-[18px] font-semibold leading-7">
          HRMS Course Information
        </h3>
        <Button className="h-[2.5rem] shadow-none">Create Local Course</Button>
      </div>
      <>
        <Label>Course</Label>{" "}
        <Select
        value={infoCourse}
          onValueChange={(value: any) => {
            getDetailCourse(value);
            setInfoCourse(value)
          }}
        >
          <SelectTrigger className="h-[2.5rem]">
            <SelectValue placeholder="Choose course" />
          </SelectTrigger>
          <SelectContent>
            {listCourseHRMS.map((item: any) => {
              return (
                <SelectItem key={item.id} value={item}>
                  {`[${item.id} - ${item.name}] ${item.courseDetail.id} - `}
                  <strong>{item.courseDetail.name}</strong>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </>
      <CreateCourse infoCourse={infoCourse}/>
    </div>
  );
}
