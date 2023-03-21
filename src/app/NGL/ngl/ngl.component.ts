import { P, U } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit } from '@angular/core';
declare var NGL: any;
import { PocketService } from '../../jdock/pocket.service';
import { Pocket } from '../../jdock/models/pocket'; 


// import { PluginContext } from 'molstar/lib/mol-plugin/context';
// import { Viewer } from 'molstar/build/viewer/molstar'
// import { DefaultPluginSpec, PluginSpec } from 'molstar/lib/mol-plugin/spec';
// import { PluginConfig } from 'molstar/lib/mol-plugin/config';
// import * as $ from 'jquery';
// import * as $3Dmol from '3dmol';

// window["$"] = $;
// window["jQuery"] = $;
// window["$3Dmol"] = $3Dmol;

// import { Stage } from 'ngl'

// import Structure from 'ngl/src/structure/structure.js'

@Component({
  selector: 'app-ngl',
  templateUrl: './ngl.component.html',
  styleUrls: ['./ngl.component.css']
})
export class NglComponent implements OnInit {


  stage: any
  basePdb:string 

  hasBase = true

  baseComponent: any

  base:string = "https://files.rcsb.org/download/"


  components:any[] = [];

  presentations:string[] = ['cartoon', "ball+stick", "surface"]

  constructor(
    private _pocketService: PocketService,
    private elRef: ElementRef
  ) { }


  // MySpec: PluginSpec = {
  //   ...DefaultPluginSpec(),
  //     config: [
  //         [PluginConfig.VolumeStreaming.Enabled, false]
  //     ]
  // }


  // async initViewer() {
  //   const plugin = new PluginContext(this.MySpec);
  //   await plugin.init();

  //   const canvas = <HTMLCanvasElement> document.getElementById('molstar-canvas');
  //   const parent = <HTMLDivElement> document.getElementById('molstar-parent');

  //   if (!plugin.initViewer(canvas, parent)) {
  //       console.error('Failed to init Mol*');
  //       return;
  //   }

  //   const data = await plugin.builders.data.download({ url: '...' }, { state: { isGhost: true } });
  //   // const trajectory = await plugin.builders.structure.parseTrajectory(data, format);
  //   // await plugin.builders.structure.hierarchy.applyPreset(trajectory, 'default');
  // }


  ngOnInit(): void {


    // this.initViewer()
    // this.init3Dmol()

    // var st = Stage("viewport" , { backgroundColor: "#1a1a1a" })

    this.stage = new NGL.Stage( "viewport" , { backgroundColor: "#1a1a1a" });

    this.stage.handleResize()

    // Handle window resizing
    window.addEventListener( "resize", function( event ){

      // this.stage.handleResize();

    }, {passive:true} );
    

    // this.stage.loadFile("https://files.rcsb.org/download/1CRN.cif", { defaultRepresentation: true });

    // Load PDB entry 1CRN
    // this.stage.loadFile( "rcsb://1CRN", { defaultRepresentation: true } )
    
      // .then(function(component){

        // component.addRepresentation("unitcell")

        // var shape = new NGL.Shape( "shape" );
        // var sphereBuffer = new NGL.SphereBuffer( {
        //   position: new Float32Array( [ 0, 0, 0, 4, 0, 0 ] ),
        //   color: new Float32Array( [ 1, 0, 0, 1, 1, 0 ] ),
        //   radius: new Float32Array( [ 1, 1.2 ] )
        // } );
        // shape.addBuffer( sphereBuffer );

        // var lineBuffer  = new NGL.BoxBuffer({
        //   position: new Float32Array([ 0, 3, 0, -2, 0, 0 ]),
        //   color: new Float32Array([ 1, 0, 1, 0, 1, 0 ]),
        //   size: new Float32Array([ 2, 1.5 ]),
        //   heightAxis: new Float32Array([ 0, 1, 1, 0, 2, 0 ]),
        //   depthAxis: new Float32Array([ 1, 0, 1, 0, 0, 2 ])
        // })



        // var b = new NGL.LineBuffer({
        //   position1: new Float32Array( [ 0, 0, 0 ] ),
        //   position2: new Float32Array( [ 1, 1, 1 ] ),
        //   color: new Float32Array( [ 1, 0, 0 ] ),
        //   color2: new Float32Array( [ 0, 1, 0 ] )
        // })


        // component.addBufferRepresentation( sphereBuffer, { opacity: 0.5 } ); 
        // component.addBufferRepresentation( lineBuffer, { opacity: 0.5 } ); 
            
        // var shapeComp = this.stage.addComponentFromObject( shape );

        // shapeComp.addRepresentation( "buffer" );
        // shapeComp.autoView();
        // })

    // this.stage.signals.clicked.add(function (pickingProxy) {
    //   console.log(pickingProxy)
    // });    
    
    
  }


  defaultStructureRepresentation( component ){

    // bail out if the component does not contain a structure
    if( component.type !== "structure" ) return;
    // add three representations
    component.addRepresentation( "cartoon", {
        aspectRatio: 3.0,
        scale: 1.5
    } );
    component.addRepresentation( "licorice", {
        sele: "hetero and not ( water or ion )",
        multipleBond: true
    } );
    component.addRepresentation( "spacefill", {
        sele: "water or ion",
        scale: 0.5
    } );
  }



  addBaseStruct(val:string){
    
    var url:string = this.base + val + ".pdb"

    fetch(url).then(res => res.blob()).then(

      blob => {
        this.stage.removeAllComponents()
        // this.stage = new NGL.Stage( "viewport" , { backgroundColor: "#1a1a1a" });
        var stringBlob = new Blob( [ blob ], { type: 'application/octet-stream'} );

        var file = new File([stringBlob],  val + ".pdb")
        this.stage.loadFile(file, { defaultRepresentation: true })
        // .then(function(component){
        //   // console.log(component)
        // });
        this.basePdb = val
        this.hasBase = false
        
      }
    )
  }


  findPocket(){

    var pocket:Pocket = {}
    pocket.meta = {}
    pocket.file =  this.base + this.basePdb + ".pdb"
    pocket.database = "rcsb"
    this._pocketService.createPocket(pocket).subscribe(res => {
      console.log(res)
    })
    console.log("Find Pocket for pdb")
  }


  addBox(){


    var boxBuffer = new NGL.BoxBuffer({
      position: new Float32Array([ 0, 3, 0, -2, 0, 0 ]),
      color: new Float32Array([ 1, 0, 1, 0, 1, 0 ]),
      size: new Float32Array([ 2, 1.5 ]),
      heightAxis: new Float32Array([ 0, 1, 1, 0, 2, 0 ]),
      depthAxis: new Float32Array([ 1, 0, 1, 0, 0, 2 ])
    })

    // console.log(this.basePdb)

    // var comp: any = this.stage.getComponentsByName(this.basePdb + ".pdb")
    
    // console.log(comp)
    // console.log(typeof(comp))
    // comp.addBufferRepresentation(boxBuffer, { opacity: 0.5 })



    var shape = new NGL.Shape("shape", { disableImpostor: true });
    shape.addBox([ 4.0, -2.0, 2.0], [ 1, 1, 1 ], 20, [ 0, 20, 0 ], [ 0, 20, 0 ], "box1");

    // shape.addBox([ 84, 89, 51 ], [ 100, 1, 1 ], 10, [ 0, 100, 100 ], [ 100, 100, 100 ], "box3");

    var shapeComp = this.stage.addComponentFromObject(shape);
    shapeComp.addRepresentation( "buffer" , { opacity: 0.4 , disablePicking:true});
    // shapeComp.autoView();




    // var lineBuffer  = new NGL.BoxBuffer({
        //   position: new Float32Array([ 0, 3, 0, -2, 0, 0 ]),
        //   color: new Float32Array([ 1, 0, 1, 0, 1, 0 ]),
        //   size: new Float32Array([ 2, 1.5 ]),
        //   heightAxis: new Float32Array([ 0, 1, 1, 0, 2, 0 ]),
        //   depthAxis: new Float32Array([ 1, 0, 1, 0, 0, 2 ])
        // })


   
        // component.addBufferRepresentation( lineBuffer, { opacity: 0.5 } ); 
  }




  changeListener(files: FileList) {
    

    for (let i = 0; i < files.length; i++) {
      let file = files.item(i)
      let reader: FileReader = new FileReader();
      var fileName = file.name
      reader['fileName'] = fileName
      console.log(fileName)
      reader.readAsText(file);
      reader.onload =  (e) => {

        var stringBlob = new Blob( [ reader.result ], { type: 'application/octet-stream'} );

        var file_blob = new File([stringBlob], reader['fileName'] )
        this.stage.loadFile(file_blob, { defaultRepresentation: true }).then( function( structureComponent ){
              
              structureComponent.setName(reader['fileName'] )
              // structureComponent.addRepresentation("bal")
              return new Promise((resolve, reject) => {
                resolve(function(structureComponent){
                  return structureComponent
                });
              })

           } ).then(
            f => { 
              var comp = this.stage.getComponentsByName(reader['fileName'])
              console.log(comp['list'])
              console.log(Object.keys(comp['list'][0]))
              this.components.push(comp['list'][0])
              console.log(this.components)
              // console.log(typeof this.components[0])
              f();
            }
           );


        
      }
    }

    

    // if (files && files.length === 1) {
    //   let reader: FileReader = new FileReader();
    //   let file: File = files.item(0);
    //   var fileName = file.name
    //   reader.readAsText(file);
    //   reader.onload = (e) => {
    //     console.log(e.target)
    //     // console.log(reader.result)

    //     var stringBlob = new Blob( [ reader.result ], { type: 'application/octet-stream'} );

    //     var file = new File([stringBlob], fileName)

    //     this.stage.loadFile(file, { defaultRepresentation: true }).then( function( structureComponent ){
    //           console.log(structureComponent)
    //           //  structureComponent.addRepresentation( "cartoon" );
    //           //  structureComponent.autoView();
    //        } );

    //     console.log(e)
    //   }
    // }

  }


  onPresentationChange(event, component){
    component.addRepresentation(event['value'])
    component.autoView()
    var repr = this.stage.getRepresentationsByName("cartoon")
    component.removeRepresentation(repr)
  }

  changeVisible(event, comp){
    comp.setVisibility(event['checked'])
    // comp.addRepresentation()
  }

  makeNoVisible(comp){
    comp.setVisibility(false)
  }

  logComponent(comp){
    console.log(comp)
  }


  // init3Dmol(): void {
  //   // This does NOT work. it generated an exception with text g.width is not a function
  //   // var element = this.elRef.nativeElement.querySelector('#container-01');

  //   var e1 = this.elRef.nativeElement.querySelector('#container-01');
  //   var e2 = $('#container-01');

  //   var t1 = typeof e1;
  //   var t2 = typeof e2;

  //   var n1 = e1.constructor.name;
  //   var n2 = e2.constructor.name;

  //   var sdfDataValue = this.elRef.nativeElement.querySelector('#moldata_sdf').value;
  //   var sdfData2Value = $('#moldata_sdf').val();
  //   var config = {backgroundColor: 'white'};
  //   var viewer = $3Dmol.createViewer('container-01', config);
  //   this.initSDF(viewer, sdfDataValue);
  // }

  initSDF(viewer: any, sdfData: String): void {
    viewer.addModel(sdfData, "sdf");
    var atomLabels = this.getAtomLabels(sdfData);
    var i;
    for (i = 0; i < atomLabels.length; i++) {
      var atomWithLabel = atomLabels[i];
      viewer.addLabel(atomWithLabel.label, {
        position: atomWithLabel.atom.coord,
        backgroundColor: 0xff0000,
        backgroundOpacity: 0.8
      });
    }
    viewer.setStyle({stick: {}});
    viewer.zoomTo();
    viewer.render();
  };

  getAtomLabels(sdfData: String): Array<AtomLabel> {
    var atoms = [];
    var lines = sdfData.split(/\r?\n|\r/);
    var atomCount = parseInt(lines[3].substr(0, 3));
    var bondCount = parseInt(lines[3].substr(3, 3));

    var i, line;
    for (i = 4; i < 4 + atomCount; i++) {
      line = lines[i];
      var elem = line.substr(31, 3).replace(/ /g, "");

      var atom = new Atom(
        elem[0].toUpperCase() + elem.substr(1).toLowerCase(),
        new Coordinate(
          parseFloat(line.substr(0, 10)),
          parseFloat(line.substr(10, 10)),
          parseFloat(line.substr(20, 10))
        )
      );
      atoms.push(atom);
    }

    var atomLabels = [];
    for (i = 4 + atomCount + bondCount; i < lines.length; i++) {
      line = lines[i];
      if (line.startsWith("A")) {
        var parts = line.split(/\s+/);
        var atomSerial = parseInt(parts[1]);
        var atomWithLabel = new AtomLabel(lines[i + 1], atoms[atomSerial - 1]);
        i++;
        atomLabels.push(atomWithLabel);
      }
    }
    return atomLabels;
  };



}


class Coordinate {
  constructor(public x: number, public y: number, public z: number) {
  }
}

class Atom {
  constructor(public atom: String, public coord: Coordinate) {
  }
}

class AtomLabel {
  constructor(public label: String, public atom: Atom) {
  }
}




