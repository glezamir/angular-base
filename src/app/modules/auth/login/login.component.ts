import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ERRORS_VALIDATIONS } from '@shared/services/validations/errors/errors-validations.const';
import { AuthService } from '@data/services/api/auth.service';
import { ENUM_VALIDATION_OPTIONS } from '@shared/services/validations/enums/validations-options.enum';
import { IResponseValidation } from '@shared/services/validations/interfaces/iresponse-validation.metadata';
import { ValidationsService } from '@shared/services/validations/validations.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup; //aqui va el formulario

  constructor(
    private formBuilder: FormBuilder,
    private validationsService: ValidationsService
  ){
    //Definiendo el formulario
    this.loginForm = this.formBuilder.group({
      //email: [''],
      nombre: validationsService.userName_formControl,
      password: validationsService.userPassword_formControl
    });
    //Pasandoselo al servicio de validacion

  }

  get formLoginControls(){
    return this.loginForm.controls;
  }

  psw_hide = true; //Oculta/Muestra la contraseña
  matcher = new MyErrorStateMatcher(); //Errores en los inputs detectados instantaneamente

  //Authentication
  loginSubmitted = false;

  ngOnInit(): void {
  }

  isValidForm(){
    // console.log("isValidForm: running");
    let output = JSON.stringify(this.loginForm.controls["nombre"].errors);
    console.log("isValidForm: " + output);
    return (this.loginForm.controls["nombre"].valid && this.loginForm.controls["password"].valid);
  }

  getNameControlError():IResponseValidation {
    return this.validationsService.validateFieldControl(this.loginForm.controls["nombre"], ENUM_VALIDATION_OPTIONS.USERNAME);
  }

  getPasswordControlError():IResponseValidation {
    return this.validationsService.validateFieldControl(this.loginForm.controls["password"], ENUM_VALIDATION_OPTIONS.PASSWORD);
  }

  //getControlError(control: AbstractControl):IResponseValidation {





    // type ctrlErrorKey = keyof typeof this.loginForm.controls.errors;
    // if(control == this.loginForm.controls["nombre"]){ //viene del template
    //   //En el control nombre
    //   if(this.loginForm.controls["nombre"].errors){
    //     if(this.loginForm.controls["nombre"].errors["required" as ctrlErrorKey]){
    //       return ERRORS_VALIDATIONS.USERNAME_REQUIRED;
    //     }else if(this.loginForm.controls["nombre"].errors["pattern" as ctrlErrorKey]){
    //       //pattern requiere de profundizacion
    //       const patternError = this.loginForm.controls["nombre"].errors["pattern" as ctrlErrorKey]["requiredPattern"];
    //       if(patternError == this.patron1){
    //         return ERRORS_VALIDATIONS.USERNAME_FIRSTCHAR;
    //       }else if(patternError == this.patron2){
    //         return ERRORS_VALIDATIONS.USERNAME_ALLOWEDCHARS;
    //       }
    //       //console.log("El err pattern: " + typeof this.loginForm.controls["nombre"].errors["pattern" as ctrlErrorKey]["requiredPattern"]);
    //       //console.log("El err pattern: " + this.loginForm.controls["nombre"].errors["pattern" as ctrlErrorKey]["requiredPattern"]);
    //       return ERRORS_VALIDATIONS.USERNAME_UNDEFINED; //De llegar aqui, el error seria indeterminado
    //     }
    //   }
    //   return "Error indeterminado. (1)";
    // }else if(control == this.loginForm.controls["password"]){ //viene del template
    //   //En el control password
    //   if(this.loginForm.controls["password"].errors){
    //     return ERRORS_VALIDATIONS.PASSWORD_REQUIRED
    //   }
    //   return "Error indeterminado. (2)";
    // }else{
    //   return "Error indeterminado. (3)";
    // }
  //}

  authenticate(){
    // alert("aqui");
    this.loginSubmitted = true;
    //validando redundante
    // if(!this.isValidForm()){
    //   return;
    // }
    //Authenticating
    console.log('authenticated', "usuario: " + this.loginForm.controls["nombre"].value + " contraseña: " + this.loginForm.controls["password"].value);

    // //utilizando el servicio
    // this.authService.login(
    //   {
    //     userName: this.loginForm.nombreUsuario.val,
    //     password: this.loginForm.password.val
    //   }
    // ).subscribe(r => {
    //   console.log("authenticate(): ");
    //   console.log(r);
    // });
  }

    //public loginForm: {
  //   email: {
  //     val: string;
  //     error: string;
  //   },
  //   nombreUsuario: {
  //     val: string;
  //     error: string;
  //     },
  //   password: {
  //     val: string;
  //     error: string;
  //   }
  // }

  // constructor(private authService: AuthService) {

  //   this.validationService = new ValidationsService();

  //   this.formControlUserName = this.validationService.formControlUserName;
  //   this.formControlPassword = this.validationService.formControlPassword;

  //   this.loginForm = {
  //   //   email: {
  //   //     val: '',
  //   //     error: '*El email es requerido',
  //   //   },
  //     nombreUsuario: {
  //       val: '',
  //       error: '', //se determina dinamicamente
  //     },
  //     password: {
  //       val: '',
  //       error: '',
  //     }
  //   };
  // }

}
