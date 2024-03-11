// import {
//     ComponentFactoryResolver,
//     Injectable,
//     Inject,
//     ReflectiveInjector
//   } from '@angular/core'
// import { ComponentFactory } from '@angular/core/src/linker/component_factory';

// @Injectable()
// export class ComponentService{

//     constructor(private factoryResolver: ComponentFactoryResolver) { }

//       public setRootViewContainerRef(viewContainerRef) {
//         this.rootViewContainer = viewContainerRef
//       }

//       public addDynamicComponent() {
//         const factory = this.factoryResolver.resolveComponentFactory(DynamicComponent)
//         const component = factory.create(this.rootViewContainer.parentInjector)

//         this.rootViewContainer.insert(component.hostView)
//       }

// }
