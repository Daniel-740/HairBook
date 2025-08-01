export enum Routes {
    HOME = 'Home',
    DETAILS = 'Details',
    CREDIT = 'Credit',
    PROFILE = 'Profile',
    SIGN_IN = 'SignIn',
}   

export type RootParamsList = {
    [Routes.HOME]: undefined;
    [Routes.DETAILS]: {
        salonId: string;
    };
    [Routes.CREDIT]: undefined;
    [Routes.PROFILE]: undefined;
    [Routes.SIGN_IN]: undefined;
}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootParamsList {}
    }
  }