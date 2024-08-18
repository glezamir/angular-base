import { FormControl, Validators } from "@angular/forms";
import { ENUM_VALIDATION_OPTIONS } from "@data/enum";
import { IField, IResponseValidation } from "@data/interfaces";
import { ValidationsService } from "@shared/services/validations/validations.service";

//No se utiliza porque ReactiveForms no lo necesita
//
//     FORM: {
//         userName: {
//             val: '',
//             error: '',
//             formControl: new FormControl('',[]),
//             setFormControl() {
//                 const validationService = new ValidationsService();
//                 this.formControl = validationService.formControlUserName;
//             },
//             isValid() {
//                 const validationService = new ValidationsService();
//                 const validateUserName: IResponseValidation = validationService.validateField(this.val, ENUM_VALIDATION_OPTIONS.USERNAME);
//                 this.error = validateUserName.err_msg;
// console.info("isValid userName val: " + this.val + " error: " + this.error);
//                 return validateUserName.isValid;
//             }
//         },
//         password: {
//             val: '',
//             error: '',
//             formControl: new FormControl('',[]),
//             setFormControl() {
//                 const validationService = new ValidationsService();
//                 this.formControl = validationService.formControlPassword;
//             },
//             isValid() {
//                 const validationService = new ValidationsService();
//                 const validatePassword: IResponseValidation = validationService.validateField(this.val, ENUM_VALIDATION_OPTIONS.PASSWORD);
//                 this.error = validatePassword.err_msg;
//                 return validatePassword.isValid;
//             }
//         }
//     }
//}


