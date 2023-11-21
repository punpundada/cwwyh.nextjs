import { IInputControllerProp } from "@/types/muiControllerTypes/IInputControllerProp";
import {
  TextField,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Controller } from "react-hook-form";

const InputController = ({
  control,
  name,
  label,
  disabled,
  type,
  className,
  endAdornmentIcon,
  onEndAdornmentIconClick,
  onStartAdornmentIconClick,
  startAdornmentIcon,
}: IInputControllerProp) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <TextField
              {...field}
              label={label}
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!error}
              size="small"
              className={className ? className : ""}
              // disabled={disabled}
              type={type ? type : "text"}
              helperText={error?.message}
              InputProps={{
                startAdornment: startAdornmentIcon && (
                  <InputAdornment
                    position="end"
                    onClick={onStartAdornmentIconClick}
                  >
                    {startAdornmentIcon}
                  </InputAdornment>
                ),
                endAdornment: endAdornmentIcon && (
                  <InputAdornment
                    position="start"
                    onClick={onEndAdornmentIconClick}
                  >
                    <IconButton>{endAdornmentIcon}</IconButton>
                  </InputAdornment>
                ),
                readOnly: disabled ? true : false,
              }}
            />
          </>
        );
      }}
    />
  );
};

export default InputController;
