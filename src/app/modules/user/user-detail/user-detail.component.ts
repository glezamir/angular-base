import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@data/services/api/user.service';
import { SOLID_BUTTON_TYPE_ENUM } from '@shared/components/buttons/solid-button/solid-button-type.enum';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public users: ICardUser[] | undefined;
  public id: number;
  public currentUser?: ICardUser | null;
  public $btnTypes = SOLID_BUTTON_TYPE_ENUM;
  
  constructor(
    private route: ActivatedRoute, private userService: UserService
  ) {
    this.id = +this.route.snapshot.params['id'];
console.log("id: " + this.id + " usuarios: " + this.users?.length);
    // this.currentUser = this.users?.find(user => user.id === this.id);  -- Muestra de busqueda en arreglo
    this.userService.getUserById(this.id).subscribe( r => {
      if (!r.error){
        this.currentUser = r.data;
      }
    });
console.log(this.currentUser);
   }

  ngOnInit(): void {
    
  }
}
