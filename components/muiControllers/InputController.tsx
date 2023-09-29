import { IInputControllerProp } from '@/types/muiControllerTypes/IInputControllerProp'
import { TextField,FormHelperText } from '@mui/material'
import { Controller } from 'react-hook-form'




const InputController = ({control,name,label,disabled,type}:IInputControllerProp) => {
  return (
    <Controller
        name={name}
         control={control}
         render={({ field,fieldState:{error} }) => {
            return (
                <>
                <TextField
                {...field}
                label={label}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!error}
                size='small'
                className=''
                disabled={disabled}
                type={type ? type : 'text'}
                helperText={error?.message}
                />
                </>
                )
            }}
    />
  )
}

export default InputController
