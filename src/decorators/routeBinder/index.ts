import {routeBinder} from './routeBinder';
import { httpRequestStrings } from "../../enums/httpRequestStrings/httpRequestStrings";

export const Get = routeBinder(httpRequestStrings.GET);
export const Post = routeBinder(httpRequestStrings.POST);
export const Put = routeBinder(httpRequestStrings.PUT);
export const Patch = routeBinder(httpRequestStrings.PATCH);