import { InputAdornmentTypeMap } from "@mui/material"
import { ReactNode } from "react"

export interface IInputControllerProp    {
    name:string,
    label:string,
    control:any,
    disabled?:boolean,
    type?:string
    className?:string
    endAdornmentIcon?:ReactNode,
    onEndAdornmentIconClick ?: ()=>void,
    startAdornmentIcon?: ReactNode,
    onStartAdornmentIconClick?:()=>void,
};
