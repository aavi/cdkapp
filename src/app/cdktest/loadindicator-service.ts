import {
    Injectable,
    ComponentFactoryResolver,
    ApplicationRef,
    Injector
} from '@angular/core';
import {
    ComponentPortal,
    DomPortalHost
} from '@angular/cdk/portal';
import { LoadindicatorComponent } from './loadindicator/loadindicator.component';


@Injectable({
    providedIn: 'root'
}
)
export class LoadIndicatorService {
    // portalhost (where you render the template or component) >> portal (component or template)
    private loadingSpinnerPortal: ComponentPortal<LoadindicatorComponent>;

    private bodyPortalHost: DomPortalHost;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector) {

        this.loadingSpinnerPortal = new ComponentPortal(LoadindicatorComponent); // or TemplatePortal

        this.bodyPortalHost = new DomPortalHost(
            document.body,
            this.componentFactoryResolver,
            this.appRef,
            this.injector);
    }

    reveal() {
        this.bodyPortalHost.attach(this.loadingSpinnerPortal);
    }

    hide() {
        this.bodyPortalHost.detach();
    }
}
