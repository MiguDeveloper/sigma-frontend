// Home route
export const SgHomeRoute = '/sigma';

// Modules route
export enum SgModulesRoutes {
  App = 'app',
  UiElements = 'ui-elements',
}

// Modules root routes
const SgModuleUiElementsRootRoute = `${SgModulesRoutes.UiElements}`;

// UiElements modules routes
export enum SgModuleUiElmentsRoutes {
  General = 'general',
}

// Routes tree
export const SgRoutes = {
  Home: SgHomeRoute,
  UiElements: {
    Root: SgModuleUiElementsRootRoute,
    General: `${SgModuleUiElementsRootRoute}/${SgModuleUiElmentsRoutes.General}`,
  },
};
