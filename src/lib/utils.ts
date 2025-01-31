import { VideoWatchPercent } from "@/constants";
import { type ClassValue, clsx } from "clsx"
import moment from "moment";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const timeStringToMilliseconds = (timeString: string): number => {
  
  const timeMoment = moment(timeString, "HH:mm:ss");
  const milliseconds = timeMoment.diff(moment().startOf('day'));
  return milliseconds;
}
export const parseParams = (params: any) => {
  const keys = Object.keys(params);
  let options = '';

  keys.forEach((key) => {
    const isParamTypeObject = typeof params[key] === 'object';
    const isParamTypeArray = isParamTypeObject && (params[key].length >= 0);

    if (!isParamTypeObject) {
      options += `${key}=${params[key]}&`;
    }

    if (isParamTypeObject && isParamTypeArray) {      
      params[key].forEach((element: any) => {
        options += `${key}=${element}&`;
      });
    }
  });

  return options ? options.slice(0, -1) : options;
};
export const watchFull=(pool: Set<number>, videoDuration: number): boolean=> {
  
  return pool.size >= videoDuration * VideoWatchPercent.Full;
}