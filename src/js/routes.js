// import HomePage from '../pages/home.f7';
import LoginPage from '../pages/login.f7'
import BeginPage from '../pages/begin.f7'
import RegistrationPage from '../pages/registration.f7'
import RegisterFarmPage from '../pages/register-farm.f7'
import PicketPage from '../pages/picket.f7'
import TypePicketPage from '../pages/type-picket.f7'
import SettingsPage from '../pages/settings.f7'
import PersonalDataPage from '../pages/personal-data.f7'
import PasswordSecurityPage from '../pages/password-security.f7'
import RegisterPeriodPage from '../pages/register-period.f7'
import RegisterPicketPage from '../pages/register-picket.f7'
import NewPicketPage from '../pages/new-picket.f7'
import NewPasturePage from '../pages/new-pasture.f7'

var routes = [

  {
    path: '/',
    component: LoginPage
  },

  {
    path: '/begin/',
    component: BeginPage
  },

  {
    path: '/registration/',
    component: RegistrationPage
  },

  {
    path: '/registerFarm/',
    component: RegisterFarmPage
  },

  {
    path: '/picket/',
    component: PicketPage
  },

  {
    path: '/typePicket/',
    component: TypePicketPage
  },

  {
    path: '/settings/',
    component: SettingsPage
  },

  {
    path: '/personalData/',
    component: PersonalDataPage
  },

  {
    path: '/passwordSecurity/',
    component: PasswordSecurityPage
  },

  {
    path: '/registerPeriod/',
    component: RegisterPeriodPage
  },

  {
    path: '/registerPicket/',
    component: RegisterPicketPage
  },

  {
    path: '/newPicket/',
    component: NewPicketPage
  },

  {
    path: '/newPasture/',
    component: NewPasturePage
  },

];

export default routes;