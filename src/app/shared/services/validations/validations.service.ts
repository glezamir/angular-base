import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ERRORS_VALIDATIONS } from '@shared/services/validations';
import { ENUM_VALIDATION_OPTIONS } from '@data/enum';
import { IResponseValidation } from '@data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {
  //The Form Group
  private formG: FormGroup;

  //validatedForm: FormGroup;

  ////////////////////////////
  //LOGIN FORM

  //  USER NAME
  public userName_formControl: FormControl;
  public userName_validatorPattern1: RegExp;
  public userName_validatorPattern2: RegExp;
  public userName_validatorMaxLength: number;
  //  PASSWORD
  public userPassword_formControl: FormControl;

  //LOGIN FORM
  ////////////////////////////

  constructor(){
    //Form generico para obtener el tipo asociado a los errores en un FormuGroup
    this.formG = new FormGroup({}, null, null);

    //USER NAME
      //validadores
      this.userName_validatorPattern1 = /^[A-Za-z]/;
      this.userName_validatorPattern2 = /^\w{0,}$/;
      this.userName_validatorMaxLength = 30;
      //FormControl
      this.userName_formControl = new FormControl('',[
        Validators.required,
        Validators.pattern(this.userName_validatorPattern1),
        Validators.pattern(this.userName_validatorPattern2),
        Validators.maxLength(this.userName_validatorMaxLength)  //maxLength
      ]);
    //PASSWORD
      //validadores
      //  solo requerido
      //FormControl
      this.userPassword_formControl = new FormControl('',[
        Validators.required
      ]);
  }

  /**
   * Validates all field types
   *
   * @param value any
   * @param type ENUM_VALIDATION_OPTIONS
   * @returns
   */
  validateFieldControl(control: AbstractControl, type: ENUM_VALIDATION_OPTIONS):IResponseValidation {
//    console.info("EN validateField ENUM_VALIDATION_OPTIONS <<<< " + ENUM_VALIDATION_OPTIONS);
    switch (type) {
      case ENUM_VALIDATION_OPTIONS.EMAIL:
        return this.validateEmailControl(control);
      case ENUM_VALIDATION_OPTIONS.USERNAME:
        return this.validateUserNameControl(control);
      case ENUM_VALIDATION_OPTIONS.PASSWORD:
        return this.validatePasswordControl(control);
      default:
        return this.validatePasswordControl(control); //Este default no debe ser usado, es solo para los errores
    }
  }

  private validateUserNameControl(control: AbstractControl): IResponseValidation {

    const r: IResponseValidation = {err_msg: '', isValid: false};

    if(control.errors){
      if(control.hasError("required")){
        r.err_msg = ERRORS_VALIDATIONS.USERNAME_REQUIRED;
        r.isValid = false;
      }else if(control.hasError("pattern")){
        if(control.errors["pattern"].requiredPattern == this.userName_validatorPattern1){
          r.err_msg = ERRORS_VALIDATIONS.USERNAME_FIRSTCHAR;
          r.isValid = false;
        }else if(control.errors["pattern"].requiredPattern == this.userName_validatorPattern2){
          r.err_msg = ERRORS_VALIDATIONS.USERNAME_ALLOWEDCHARS;
          r.isValid = false;
        }
      }else if(control.hasError("maxlength")){
        r.err_msg = ERRORS_VALIDATIONS.USERNAME_LENGTH;
        r.isValid = false;
      }
    }
    return r;
  }

  validateEmailControl(v: any): IResponseValidation {
    const r: IResponseValidation = {err_msg: 'NO IMPLEMENTADO AUN', isValid: false};
    return r; // Nada implementado aqui
  }

  private validatePasswordControl(control: AbstractControl):IResponseValidation {

    const r: IResponseValidation = {err_msg: '', isValid: false};

    if(control.errors){
      r.err_msg = ERRORS_VALIDATIONS.PASSWORD_REQUIRED;
      r.isValid = false;
    }else{
      r.err_msg = "";
      r.isValid = true;
    }
    //
    return r;
  }

}
