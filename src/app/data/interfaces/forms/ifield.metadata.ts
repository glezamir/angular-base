import { FormControl } from "@angular/forms";
import { IResponseValidation } from "..";

//No está en uso

export interface IField {
    val: string;
    error: string;
    formControl: FormControl;
    setFormControl: () => void;
    //iResponseValidation: IResponseValidation; //Contiene el FormControl
    isValid: () => boolean;
}
