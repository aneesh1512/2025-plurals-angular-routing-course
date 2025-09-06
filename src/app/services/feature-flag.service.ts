import { Injectable, resource } from '@angular/core';;

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  readonly featureFlags = fetch('/assets/feature-flags.json').then(res => res.json())
  .then(json => {
    return json as {isPizzaFeatureEnabled: boolean};
  });

  isPizzaFeatureEnabled = resource({loader: () => this.featureFlags.then(flags => flags.isPizzaFeatureEnabled)});
}
