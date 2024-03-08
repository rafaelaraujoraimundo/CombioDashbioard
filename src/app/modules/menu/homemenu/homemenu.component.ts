import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { PoMenuItem, PoDialogService, PoNotificationService, PoToolbarAction, PoToolbarProfile, PoNavbarItem  } from '@po-ui/ng-components';
import { MingleService } from '@totvs/mingle';
import { LoginService } from '../login/login.service';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-homemenu',
  templateUrl: './homemenu.component.html',
  styleUrls: ['./homemenu.component.css']
})
export class HomemenuComponent {
  public collapsed = true
  public titleMenu: string = '';
  public poNavBarShadow = true;
  public isAuth: boolean = false
  public displayName: any = ''
  public displayEmail: any = localStorage.getItem('displayEmail')
  public avatar: any = 'https://via.placeholder.com/48x48?text=AVATAR'
  public user: any = {}
  public userDetail: any
  navbarMenus: Array<PoNavbarItem> = [
    {
      label: 'User' , link: '/user'
    }
  ]



  public profile: PoToolbarProfile = {
    avatar: this.avatar,
    subtitle: this.displayEmail,
    title: this.displayName
  };

  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'Logout', action: (item: any) => this.showAction(item) }
  ];


  constructor( public loginService: LoginService, private mingleService: MingleService,  private menuService: MenuService, private poDialog: PoDialogService, private poNotification: PoNotificationService,
    ) {
      console
    this.loginService.getDisplayUser$().subscribe({
      next: ((user) => {
        this.displayName = user.Name
        this.avatar = user.Avatar
        this.displayEmail = user.Email
           this.profile = {
            avatar: this.avatar,
            subtitle: this.displayEmail,
            title: this.displayName
          };
        })
      })}


    ngAfterViewInit () {
    this.menuService.getTitleMenu$().subscribe((titleMenu) => this.titleMenu = titleMenu);
    this.loginService.getIsAuthenticated$().subscribe((isOnline) => this.isAuth = isOnline )
    if (this.profile.title === undefined) {
      this.userDetail = localStorage.getItem('userCombio')
      this.user = JSON.parse(this.userDetail)
      this.displayEmail = this.user.Email
      this.displayName = this.user.Name
      this.avatar= this.user.avatar
          this.profile = {
        avatar: this.avatar,
        subtitle: this.displayEmail,
        title: this.displayName
      };
    }
    }



  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home' ,icon: 'po-icon-user',  shortLabel: 'Home'},
    { label: 'Dashboard', link: '/dashboard' , icon: 'po-icon-world',  shortLabel: 'Dash'},
    { label: 'Usuários', link: '/user' , icon: 'po-icon-user',  shortLabel: 'Usuários'},
    { label: 'Familia Comercial', link: '/commercial-families' , icon: 'po-icon-settings',  shortLabel: 'Familias'},
    { label: 'Login', action: this.onClick.bind(this), icon: 'po-icon-user', shortLabel: 'Login'},

  ];

  private onClick() {
    this.loginService.refreshToken()
    //this.loginService.logout()
    }


  showAction(item: PoToolbarAction): void {
    this.loginService.logout()
  }
}
