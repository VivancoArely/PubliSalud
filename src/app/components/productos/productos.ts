import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var M:any

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class Productos implements AfterViewInit, OnInit {
  constructor(private route: ActivatedRoute) {}

  marca: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const marca = params['marca'];
      this.marca = marca || '';
      this.marcaFilter = marca ? [marca] : [];
      this.currentPage = 1;
    });
  }

  ngAfterViewInit(): void {
    M.FormSelect.init(document.querySelectorAll('select'));
  }
  productos=[
    {
    "idCatalogo": "01",
    "nombre": "CENTRIFUGA",
    "icono": "/assets/img/Equipos.png",
    "division": "EQUIPOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "02",
    "nombre": "D10",
    "icono": "/assets/img/Equipos.png",
    "division": "EQUIPOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "03",
    "nombre": "D100",
    "icono": "/assets/img/Equipos.png",
    "division": "EQUIPOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "04",
    "nombre": "EVOLIS",
    "icono": "/assets/img/Equipos.png",
    "division": "EQUIPOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "05",
    "nombre": "INCUBADOR",
    "icono": "/assets/img/Equipos.png",
    "division": "EQUIPOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "06",
    "nombre": "VARIANT",
    "icono": "/assets/img/Equipos.png",
    "division": "EQUIPOS",
    "marca": "BIO-RAD"
  },
   
  {
    "idCatalogo": "12000949",
    "nombre": "D-10 HbA1c Reorder Pack",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000447",
    "nombre": "VARIANT II TURBO HbA1c Kit - 2.0",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "370",
    "nombre": "IA PLUS TRI LYPH 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "740",
    "nombre": "DIABETES BI LYPH 6X0.5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "435",
    "nombre": "URINALYSIS BI LIQ 12X12ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "360",
    "nombre": "IA PLUS TRI LIQ 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2503000",
    "nombre": "VNBS SICKLE CELL REORDER PACK",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72460",
    "nombre": "Geenius HIV-1/2 Confirmatory Assay 20t",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "548",
    "nombre": "TUMOR MKR 2 LIQ 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "547",
    "nombre": "TUMOR MKR 1 LIQ 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72251",
    "nombre": "NEW LAV-BLOT I Assay 18 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "397",
    "nombre": "URINE CHEMISTRY 1 LIQ 12X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72526",
    "nombre": "Malaria EIA Test Kit 96 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "549",
    "nombre": "TUMOR MKR 3 LIQ 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "148",
    "nombre": "CARD MKR LT PLUS 3 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2901010",
    "nombre": "D-100 BUFFER A",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "593",
    "nombre": "IMMUNOLOGY 3 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "591",
    "nombre": "IMMUNOLOGY 1 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4017",
    "nombre": "ID-LISS/Coombs 24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2901012",
    "nombre": "D-100 WASH SOLUTION",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1237",
    "nombre": "ID-DiaClon ABO/D+Reverse.Grp. 24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "398",
    "nombre": "URINE CHEMISTRY 2 LIQ 12X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "147",
    "nombre": "CARD MKR LT PLUS 2 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "694",
    "nombre": "MULTIQUAL ASSAYED 1 LIQ 12X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "146",
    "nombre": "CARD MKR LT PLUS 1 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "592",
    "nombre": "IMMUNOLOGY 2 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1234",
    "nombre": "ID-DiaClon ABO/D+Reverse.Grp. 4x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2901004",
    "nombre": "D-100 HBA1C CART & CAL PACK",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4014",
    "nombre": "ID-LISS/Coombs 4x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72561",
    "nombre": "Monolisa HCV Ag-Ab ULTRA V2 96 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "361",
    "nombre": "IA PLUS LIQ 1 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "C-315-5",
    "nombre": "CHEM ASSAYED 2 LYPH 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "C-310-5",
    "nombre": "CHEM ASSAYED 1 LYPH 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "695",
    "nombre": "MULTIQUAL ASSAYED 2 LIQ 12X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2901007",
    "nombre": "D-100 HBA1C PREFILTER Set",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "744",
    "nombre": "COAGULATION 1 LYPH 12X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72386",
    "nombre": "Genscreen ULTRA HIV Ag-Ab 96 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "760",
    "nombre": "HEMATOLOGY-16 TRI 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "745",
    "nombre": "COAGULATION 2 LYPH 12X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "363",
    "nombre": "IA PLUS LIQ 3 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "696",
    "nombre": "MULTIQUAL ASSAYED 3 LIQ 12X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2127",
    "nombre": "ID-DiaClon Rh-subgroups+K 24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2901011",
    "nombre": "D-100 Buffer B",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC23",
    "nombre": "EQAS SERUM PROT 12X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00108A",
    "nombre": "VIROTROL HIV-1 AG 1X5ML Clss A",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "746",
    "nombre": "COAGULATION 3 LYPH 12X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "801165",
    "nombre": "SERACLONE ANTI-H  5 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72530",
    "nombre": "Syphilis Total Ab 96 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC50",
    "nombre": "EQAS CHEMISTRY PROG 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "365",
    "nombre": "SPECIALTY IA LIQ 2 6X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702730",
    "nombre": "GENERIC WASH/DILUENT PACK",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "364",
    "nombre": "SPECIALTY IA LIQ 1 6X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "61607",
    "nombre": "Pastorex Meningitis Complete Kit 25t",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2124",
    "nombre": "ID-DiaClon Rh-subgroups+K 4x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "487",
    "nombre": "HEMATOLOGY X TRI-LEV 12X4.5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "3624",
    "nombre": "ID-DiaCell ABO (A1,B) 2x10 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "594",
    "nombre": "IMMUNOLOGY 1 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72346",
    "nombre": "Monolisa HBs Ag ULTRA 96 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "62794",
    "nombre": "Platelia Aspergillus Ag 96 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC75",
    "nombre": "EQAS IA PROG 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "362",
    "nombre": "IA PLUS LIQ 2 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "596",
    "nombre": "IMMUNOLOGY 3 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC80",
    "nombre": "EQAS HEMOGLOBIN PROG 12X0.5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000538",
    "nombre": "Virotrol Plus-R 5x4ml",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "366",
    "nombre": "SPECIALTY IA LIQ 3 6X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00110A",
    "nombre": "VIROTROL III 1X5ML Class A",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "804601",
    "nombre": "ANTI-C3d  5ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "595",
    "nombre": "IMMUNOLOGY 2 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2503010",
    "nombre": "VNBS INSTRUMENT-1VNAS+1VNCS",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "367",
    "nombre": "TUMOR MARKER PLUS 1 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "511",
    "nombre": "BLOOD GAS + EGL 1 30X1.7ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000810",
    "nombre": "EQAS URINALYSIS PROG 12 X 12ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "368",
    "nombre": "TUMOR MARKER PLUS 2 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "512",
    "nombre": "BLOOD GAS + EGL 2 30X1.7ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC39",
    "nombre": "EQAS CARD MKRS PROG 12X1.5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "371",
    "nombre": "IA PLUS 1 LYPH 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "112",
    "nombre": "VIROCLEAR 10X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "372",
    "nombre": "IA PLUS 2 LYPH 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000815",
    "nombre": "EQAS HIV/HEPATITIS PROG 12X 2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1133",
    "nombre": "ID-DiaClon ABD-Conf.Donor 24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9818",
    "nombre": "CONCENTR.WASH SOL.A 10x100 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "513",
    "nombre": "BLOOD GAS + EGL 3 30X1.7ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00117B",
    "nombre": "VIROTROL TORCH-M 1X5ML Class B",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC45",
    "nombre": "EQAS U CHEM PROG 12X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "61721",
    "nombre": "Pastorex Strep A,B,C,D,F,G Kit 60 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "118",
    "nombre": "VIROCLEAR TORCH 1X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9290",
    "nombre": "ID-Diluent2 for IH-Analyzers10x60x700 µl",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC34",
    "nombre": "EQAS COAGULATION PROG 12X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "801136",
    "nombre": "SERACLONE ANTI-A1  5 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72515",
    "nombre": "RPR 100, 100 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72830",
    "nombre": "Platelia Dengue NS1 Ag 96 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "449",
    "nombre": "HEMATOLOGY S TRI-LEV 12X3.5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "373",
    "nombre": "IA PLUS 3 LYPH 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808141",
    "nombre": "ANTI Kpb LIQUID  2 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "672",
    "nombre": "CK/LD ISOENZYME 2 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4114",
    "nombre": "ID-DiaPanel (1-11) 11x4 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "60780",
    "nombre": "FUNGITEST Kit 10 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "91587",
    "nombre": "PR 4100",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "802039",
    "nombre": "SERACLONE ANTI-D 1X10ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89611",
    "nombre": "EVOLIS 300µL Tips x17280",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "544",
    "nombre": "ETHANOL/AMMONIA 1 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "106",
    "nombre": "VIROCLEAR 1X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4134",
    "nombre": "ID-Dia (Diego) positiv 1x10 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9321",
    "nombre": "IH-QC1 4x6 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "369",
    "nombre": "TUMOR MARKER PLUS 3 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "545",
    "nombre": "ETHANOL/AMMONIA 2 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72516",
    "nombre": "RPR 500, 500 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "671",
    "nombre": "CK/LD ISOENZYME 1 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9322",
    "nombre": "IH-QC2 4x6 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "274",
    "nombre": "WHOLE BLD IMMSUP 1 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "437",
    "nombre": "URINALYSIS 2 LIQ 12X12ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "802280",
    "nombre": "Seraclone Anti-C 5ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27101",
    "nombre": "D-DIMER 1 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000837",
    "nombre": "EQAS BLD TYPING SHIP A 3X4ML + 1X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27102",
    "nombre": "D-DIMER 2 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9260",
    "nombre": "ID-Diluent 2 2x100 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC31",
    "nombre": "EQAS BLOOD GAS 12X2.5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000833",
    "nombre": "EQAS SYPHILIS/CHAGAS PROG 12X1.5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "546",
    "nombre": "ETHANOL/AMMONIA 3 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89612",
    "nombre": "EVOLIS 1100µL Tips x9600",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "275",
    "nombre": "WHOLE BLD IMMSUP 2 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "125",
    "nombre": "VIROTROL CHAGAS 5X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "731",
    "nombre": "CHEM UNASSAY 1 LYPH 25X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC90C",
    "nombre": "EQAS HEM PROG 3X2ML SHIPMENT C",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "276",
    "nombre": "WHOLE BLD IMMSUP 3 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC90B",
    "nombre": "EQAS HEM PROG 3X2ML SHIPMENT B",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC90A",
    "nombre": "EQAS HEM PROG 3X2ML SHIPMENT A",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27125",
    "nombre": "SPECIALTY IA LYPH 2 6x2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27126",
    "nombre": "SPECIALTY IA LYPH 3 6x2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "904",
    "nombre": "HEMATOLOGY C TRI 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "3613",
    "nombre": "ID-DiaCell I-II 2x10 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27124",
    "nombre": "SPECIALTY IA LYPH 1 6x2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00101E",
    "nombre": "VIROTROL I 10X4ML Class E",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00108B",
    "nombre": "VIROTROL HIV-1 AG 1X5ML Clss B",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "732",
    "nombre": "CHEM UNASSAY 2 LYPH 25X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "85499",
    "nombre": "PW 40 - Microplate Washer",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4310",
    "nombre": "ID-DiaCell I-II-III 3x10 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12010405",
    "nombre": "D-10 Hb Testing System",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "802330",
    "nombre": "SERACLONE ANTI-E 5ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "865",
    "nombre": "HEMATOLOGY A TRI 12X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000838",
    "nombre": "EQAS BLD TYPING SHIP B 3X4ML + 1X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "802032",
    "nombre": "SERACLONE ANTI-D BLEND 10ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808270",
    "nombre": "ANTI Dia  1 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "430",
    "nombre": "IMMUNOLOGY PLUS BI LYPH 12X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000839",
    "nombre": "EQAS BLD TYPING SHIP C 3X4ML + 1X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1037",
    "nombre": "ID-DiaClon ABO/Rh (donors) 4x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808404",
    "nombre": "SERACLONE ANTI-LE a 2 ML (LE1)",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2901006",
    "nombre": "D-100 HbA1C CALIBRATOR PACK",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72329",
    "nombre": "Geenius HIV-1/2 Confirm Controls 2x120µL",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "962",
    "nombre": "QUANTIFY PLUS LIQ BI 4X120ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200110",
    "nombre": "D10 HBA1C ELUTION BUFFER 1",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "804120",
    "nombre": "AHG COLOUR 10ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27125X",
    "nombre": "SPECIALTY IA LYPH MP 3x2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "801370",
    "nombre": "Seraclone Anti-A,B 10ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "801320",
    "nombre": "SERACLONE ANTI-A 1X10ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "752",
    "nombre": "SPINAL FLUID 2 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200375",
    "nombre": "D10 PRINTER PAPER, 10/BX",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808216",
    "nombre": "ANTI Lua  LIQUID  2 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808158",
    "nombre": "SERACLONE ANTI-P1  2 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "801345",
    "nombre": "SERACLONE ANTI-B 1X10 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "995",
    "nombre": "QUANTIFY PLUS LIQ BI 10X12ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72503",
    "nombre": "TPHA 200, 200 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808410",
    "nombre": "SERACLONE ANTI-M  2 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "802370",
    "nombre": "Seraclone Anti-small e 5ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808052",
    "nombre": "SERACLONE ANTI-S  2 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "751",
    "nombre": "SPINAL FLUID 1 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1047",
    "nombre": "ID-DiaClon ABO/Rh Newborn 4x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "802346",
    "nombre": "Seraclone Anti-small c 5ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "68678",
    "nombre": "Nitrofurantoin 300µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "436",
    "nombre": "URINALYSIS 1 LIQ 12X12ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27103",
    "nombre": "D-DIMER 3 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC90D",
    "nombre": "EQAS HEM PROG 3X2ML SHIPMENT D",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808184",
    "nombre": "SERACLONE ANTI-Jkb   2 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808068",
    "nombre": "SERACLONE ANTI-s  2 ML  (MNS4)",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC10",
    "nombre": "EQAS TDM PROG 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000539",
    "nombre": "Virotrol Plus-R 1x4ml",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "816017",
    "nombre": "BIOTESTCELL-P  3  3X10 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00101C",
    "nombre": "VIROTROL I 10X4ML Class C",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72252",
    "nombre": "NEW LAV-BLOT II Assay 18 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808227",
    "nombre": "SERACLONE ANTI-LUB  2 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9622",
    "nombre": "Tips 1x1000 pces",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "805205",
    "nombre": "MLB 2 10x10 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00100F",
    "nombre": "VIROTROL I 1X5ML Class F",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "68648",
    "nombre": "Ciprofloxacin 5µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72408",
    "nombre": "Monolisa HBs Ag ULTRA Confirmatory 25t",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2901009",
    "nombre": "D-100 SAMPLE DILUENT",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808188",
    "nombre": "SERACLONE ANTI FYA 2 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "C-320-10",
    "nombre": "CHEM UNASSAY 1 LYPH 50X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66608",
    "nombre": "Gentamicin 10µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27100",
    "nombre": "D-DIMER LOW LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "598",
    "nombre": "HEMOSTASIS 2 LYPH 12X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "278",
    "nombre": "WHOLE BLD IMMSUP 5 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "289",
    "nombre": "HOMOCYSTEINE 3 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67658",
    "nombre": "Fosfomycin 200µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "108230",
    "nombre": "DiaCidel 1x10 tests",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "171",
    "nombre": "VIROTROL SYPHILIS LR A 5X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67448",
    "nombre": "Tetracycline 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "287",
    "nombre": "HOMOCYSTEINE 1 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "C-325-10",
    "nombre": "CHEM UNASSAY 2 LYPH 50X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "424",
    "nombre": "U TOX S2E LOW OP LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "423",
    "nombre": "U TOX S1E LOW OP LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "500",
    "nombre": "ANEMIA LYPH 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "239",
    "nombre": "TORCH P UNASSY POS LIQ 3X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66568",
    "nombre": "Imipenem 10µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "599",
    "nombre": "HEMOSTASIS 3 LYPH 12X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "450",
    "nombre": "TDM TRI LYPH 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "816021",
    "nombre": "BIOTESTCELL-I  11   11 X 4 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808415",
    "nombre": "SERACLONE ANTI-N  2 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "92465",
    "nombre": "Geenius Reader",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "288",
    "nombre": "HOMOCYSTEINE 2 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66858",
    "nombre": "Levofloxacin 5µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC35",
    "nombre": "EQAS ETHANOL/AMMONIA 12X3ML 2",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66188",
    "nombre": "Ceftriaxone 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "5014",
    "nombre": "ID-NaCl,Enzyme test 4x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "804501",
    "nombre": "ANTI-IgG  5ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "68898",
    "nombre": "Trimetho-Sulfam. 1.25-23.75µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "50294",
    "nombre": "7-Disk Dispenser",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66178",
    "nombre": "Amoxicillin-Clav.Acid 20-10µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27113",
    "nombre": "IA PREMIUM CTL 3 LIQ 6X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00125X",
    "nombre": "VIROTROL CHAGAS 1X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "514",
    "nombre": "SED RATE 1 LIQ 4X9ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "515",
    "nombre": "SED RATE 2 LIQ 4X9ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "62740",
    "nombre": "Mycoplasma Duo Kit 20 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000070",
    "nombre": "HB A1C Lin Lyph 6 x 0.5ml",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "597",
    "nombre": "HEMOSTASIS 1 LYPH 12X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12015696",
    "nombre": "EQAS SPECIALTY IA PROGRAM 12X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "62783",
    "nombre": "Platelia Aspergillus IgG 96 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "724",
    "nombre": "TDM TRI LIQ 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66278",
    "nombre": "Chloramphenicol 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27112",
    "nombre": "IA PREMIUM CTL 2 LIQ 6X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66148",
    "nombre": "Amikacin 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "BC47",
    "nombre": "EQAS LIPIDS PROG 12X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808090",
    "nombre": "SERACLONE ANTI-K (KELL)  5 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "90071",
    "nombre": "Microcide SQ (1x237 ml bottle)",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "227",
    "nombre": "TORCH P ASSAY POS LIQ 3X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00117A",
    "nombre": "VIROTROL TORCH-M 1X5ML Class A",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "87530",
    "nombre": "IPS",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66098",
    "nombre": "Cefepime 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "805171",
    "nombre": "SERACLONE CONTROL AB0+RH 10 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27111",
    "nombre": "IA PREMIUM CTL 1 LIQ 6X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "56353",
    "nombre": "Pastorex Staph Plus 5x50 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "228",
    "nombre": "TORCH P UNASSY NEG LIQ 3X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66308",
    "nombre": "Ceftazidime 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808179",
    "nombre": "Seraclone Anti-Jka 2ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66358",
    "nombre": "Cefuroxime 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2901008",
    "nombre": "D-100 SYSTEM CLEANING TUBE",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "3630",
    "nombre": "ID-DiaCell PooL 1x10 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "460",
    "nombre": "U TOX NEGATIVE LIQ 10X20ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702149",
    "nombre": "SMPL VIAL W/PIERC CAPS, 100/BG",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4851",
    "nombre": "ID-DC Screening I 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "62784",
    "nombre": "Platelia Candida Ag Plus 96 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66368",
    "nombre": "Cefotaxime 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "529",
    "nombre": "WHOLE BLOOD METAL 3 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "528",
    "nombre": "WHOLE BLOOD METAL 2 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "816030",
    "nombre": "COOMBSCELL-E  10 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "572",
    "nombre": "BLOOD GAS 2 30X1.7ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00101B",
    "nombre": "VIROTROL I 10X4ML Class B",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00171X",
    "nombre": "VIROTROL SYPHILIS LR A 1X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00100C",
    "nombre": "VIROTROL I 1X5ML Class C",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67048",
    "nombre": "Meropenem 10µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "571",
    "nombre": "BLOOD GAS 1 30X1.7ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "573",
    "nombre": "BLOOD GAS 3 30X1.7ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66448",
    "nombre": "Erythromycin 15µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "804-1",
    "nombre": "UNITY REAL TIME 1 YEAR SUBSCR",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "804-W1",
    "nombre": "UNITY REAL TIME ONLINE 1 YEAR",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "577",
    "nombre": "BLOOD GAS + E 2 30X1.7ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "576",
    "nombre": "BLOOD GAS + E 1 30X1.7ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200149",
    "nombre": "D10 MICROVIALS, BAG X100",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66128",
    "nombre": "Ampicillin 10µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808191",
    "nombre": "ANTI Fyb  LIQUID  2 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1134",
    "nombre": "ID-DiaClon ABD-Conf.Donor 4x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "578",
    "nombre": "BLOOD GAS + E 3 30X1.7ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "527",
    "nombre": "WHOLE BLOOD METAL 1 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72315",
    "nombre": "Monolisa Anti-HBc PLUS 96 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "68928",
    "nombre": "Vancomycin 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66328",
    "nombre": "Clindamycin 2µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "439",
    "nombre": "U TOX S2E LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66338",
    "nombre": "Norfloxacin 10µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67518",
    "nombre": "Ertapenem 10µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "820-1",
    "nombre": "UNITY CONNECT SOFTWARE 1 YEAR",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "144",
    "nombre": "HEMATOLOGY 16T TRI 12X2.5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "144",
    "nombre": "VIROTROL HBEAG 1X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00100E",
    "nombre": "VIROTROL I 1X5ML Class E",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67218",
    "nombre": "Penicillin 6µG/10 IU 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67238",
    "nombre": "Piperacillin-Tazo. 100-10µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89799",
    "nombre": "EVOETP Waste Bag, Box of 10",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12006327",
    "nombre": "AMH TRILEV LIQ 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9325",
    "nombre": "IH-QC5 4x6 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66258",
    "nombre": "Cefazolin 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "438",
    "nombre": "U TOX S1E LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67058",
    "nombre": "Clarithromycin 15µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67008",
    "nombre": "Azithromycin 15µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "56356",
    "nombre": "Pastorex Staph Plus 50 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "91766",
    "nombre": "DECON 90 Sol (x5 liters)",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66928",
    "nombre": "Aztreonam 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "808131",
    "nombre": "ANTI Kpa LIQUID  2 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200201",
    "nombre": "D10 DUAL REORDER PACK",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66888",
    "nombre": "Oxacillin 1µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00101F",
    "nombre": "VIROTROL I 10X4ML Class F",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66388",
    "nombre": "Doxycycline 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12020217",
    "nombre": "Laptop para equipos IDD",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "61727",
    "nombre": "Pastorex Strep B 60 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "923",
    "nombre": "RETIC S 3 4X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "922",
    "nombre": "RETIC S 2 4X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "921",
    "nombre": "RETIC S 1 4X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66218",
    "nombre": "Cephalotin 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "68938",
    "nombre": "Ofloxacin 5µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12011345",
    "nombre": "DIABETES 3 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12011343",
    "nombre": "DIABETES 1 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12011344",
    "nombre": "DIABETES 2 LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9327",
    "nombre": "IH-QC7 1x6 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67018",
    "nombre": "Ampicillin-Sulbactam 10-10µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67488",
    "nombre": "Tobramycin 10µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "7531",
    "nombre": "ID-DiaClon Anti-D for Dweak 1x5 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67388",
    "nombre": "Linezolid 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27105",
    "nombre": "CARD MKR LT PLUS 1B LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "277",
    "nombre": "WHOLE BLD IMMSUP 4 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "379",
    "nombre": "MICRO ALBUMIN 2 LIQ 12X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "378",
    "nombre": "MICRO ALBUMIN 1 LIQ 12X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012455",
    "nombre": "Biotestcell A1 & B 2x10ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "642",
    "nombre": "LIPIDS 2 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4831",
    "nombre": "ID-DC Screening II 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9323",
    "nombre": "IH-QC3 4x6 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9328",
    "nombre": "IH-QC8 1x6 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66728",
    "nombre": "Minocycline 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "641",
    "nombre": "LIPIDS 1 LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "68618",
    "nombre": "Nalidixic Acid 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "68260",
    "nombre": "Beta CARBA Test 25 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000243",
    "nombre": "Sample Vials (Microvials), 100 x 1.5mL",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "461",
    "nombre": "U TOX S1 LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "462",
    "nombre": "U TOX S2 LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012454",
    "nombre": "Biotestcell A2 1x10ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67588",
    "nombre": "Cefixime 5µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9819",
    "nombre": "CONCENTR.WASH SOL.B 10x100 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "811-1",
    "nombre": "Westgard Advisor",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67318",
    "nombre": "Gentamicin 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "725",
    "nombre": "TDM LIQ 1 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "727",
    "nombre": "TDM LIQ 3 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "726",
    "nombre": "TDM LIQ 2 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66228",
    "nombre": "Cefoxitin 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67498",
    "nombre": "Cefaclor 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "61728",
    "nombre": "Pastorex Strep D 60 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66758",
    "nombre": "Netilmicin 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012125",
    "nombre": "CEFOTAXIME-CLAV.ACID 30-10μG 4X50 DISKS",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67288",
    "nombre": "Ampicillin 2µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67608",
    "nombre": "Streptomycin 300µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67598",
    "nombre": "Gentamicin 120µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66208",
    "nombre": "Cefalexin 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00110C",
    "nombre": "VIROTROL III 1X5ML Class C",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "805200",
    "nombre": "MLB  2  50 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "359X",
    "nombre": "SPECIALTY IA 4 LEV LIQ MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "805030",
    "nombre": "PAPAIN  5ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67268",
    "nombre": "Colistin 10µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "453",
    "nombre": "TDM 3 LYPH 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "548X",
    "nombre": "TUMOR MKR LIQ SP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "451",
    "nombre": "TDM 1 LYPH 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "452",
    "nombre": "TDM 2 LYPH 12X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "61726",
    "nombre": "Pastorex Strep A 60 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012453",
    "nombre": "Biotestcell O 1x10ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "906",
    "nombre": "HEMATOLOGY C NOR 4X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "905",
    "nombre": "HEMATOLOGY C LOW 4X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "907",
    "nombre": "HEMATOLOGY C HIGH 4X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "87041",
    "nombre": "PW 40 8-Channel Manifold",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "463",
    "nombre": "U TOX S3 LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67228",
    "nombre": "Piperacillin 100µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "63726",
    "nombre": "UriSelect 4, 20x90mm plates",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "563",
    "nombre": "WHOLE BLOOD 3 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "561",
    "nombre": "WHOLE BLOOD 1 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "562",
    "nombre": "WHOLE BLOOD 2 LYPH 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67618",
    "nombre": "Cefoperazone 75µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66618",
    "nombre": "Kanamycin 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "870-1",
    "nombre": "UNITY WEB ANNUAL SUBSCRIPTION",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "109",
    "nombre": "VIROTROL TORCH 1X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "94195",
    "nombre": "PR4100 SW-APF-IFU",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "131",
    "nombre": "VIROCLEAR EBV 1X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4024",
    "nombre": "ID-Coombs Anti-IgG 4x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00100B",
    "nombre": "VIROTROL I 1X5ML Class B",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1324",
    "nombre": "ID-DiaClon ABO/D 4x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66648",
    "nombre": "Rifampicin 5µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9160",
    "nombre": "ID-Diluent 1 2x100 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200111",
    "nombre": "D10 HBA1C ELUTION BUFFER 2",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000846",
    "nombre": "QUALITY CONTROL TRAY",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "590X",
    "nombre": "IMMUNOLOGY LIQ SP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "92502",
    "nombre": "Geenius HCV Supplemental Controls",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4043",
    "nombre": "ID-Anti-IgG1/G3 DAT 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200297",
    "nombre": "D10 MICROVIAL ADAPTERS, 10/PK",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200305",
    "nombre": "D10 Tube adapter, 14mm 10/pk",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "92461",
    "nombre": "Geenius Software with APF/Manual OUS",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67398",
    "nombre": "Tigecycline 15µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012199",
    "nombre": "CEFTAZIDIME-CLAV.ACID 30-10μG 4X50DISKS",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012811",
    "nombre": "D-10 IMAGE DVD 5.0",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "91610",
    "nombre": "Autoblot 3000 500mL Bottle",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89894",
    "nombre": "PE Kit, Pipettor-Washer 10 plates",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89603",
    "nombre": "EVOLIS Accessory Box",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "93569",
    "nombre": "ETP Touchscreen Pen",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "90433",
    "nombre": "EVOLIS Sample Rack, with Numbering 1-20",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4214",
    "nombre": "ID-Panel P (Set of 11 vials) 11x4 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12013237",
    "nombre": "CPU HP FlexPro VNBS",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12015656",
    "nombre": "WIN10 PC OUS + Pre-Installed EVOLIS SW",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12020511",
    "nombre": "IHD 2-0 - 2.5 KVA UPS",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12011384",
    "nombre": "D-10 Printer OS10 Install Kit, Kyospeed2",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12020524",
    "nombre": "IHD 3.0 KVA UPS",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12020525",
    "nombre": "Impresora para equipos CSD",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12020740",
    "nombre": "IDD 2.0 - 2.2 KVA UPS",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702392",
    "nombre": "MONITOR, LCD, 17\"",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000825",
    "nombre": "EQAS TORCH/EBV/MUMZ PROG12X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "553",
    "nombre": "HEMOGLOBIN A2 BI LYPH 4X0.5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "359",
    "nombre": "SPECIALTY IA LIQ LTA 6X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89794",
    "nombre": "EVOLIS Cover, Waste Bag",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "284",
    "nombre": "MULTIQL PREM ASSAY 1 LIQ 6X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9410",
    "nombre": "HEAD 24 CARDS",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "66198",
    "nombre": "Carbenicillin 100µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67458",
    "nombre": "Ticarcillin 75µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00100H",
    "nombre": "VIROTROL I 1X5ML Class H",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9414",
    "nombre": "HEAD 2 RACKS",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "840010",
    "nombre": "DiaCent - 12 head",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "370X",
    "nombre": "IA PLUS LYPH SP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200302",
    "nombre": "D10 RACK, SYSMEX",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "640X",
    "nombre": "LIPIDS LIQ SP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9326",
    "nombre": "IH-QC6 1x6 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12013714",
    "nombre": "GDM SW v3.3 DVD Image for FlexPro",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12013719",
    "nombre": "BP22 License SQL Server Std RT 2019 IoT",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200468",
    "nombre": "D-10 Printer Paper 10 per Box",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200600",
    "nombre": "D-10 Rack Loader",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200665",
    "nombre": "D-10 Bio-Rad USB Key (8GB)",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12004545",
    "nombre": "D10 IMAGE CD 4.30 DJ",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12004555",
    "nombre": "D10 SOFTWARE  4.30 UPGRADE CD",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12005305",
    "nombre": "D-10 MLCD (op man, Rel Notes, LIS) revB",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1962051",
    "nombre": "Hemo Cap Coll System, 5 Tests",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1962052",
    "nombre": "Hemo Cap Coll, Sys., 100 Tests",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1962053",
    "nombre": "HB CAP COLLECTION KIT 5000 TESTS",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702016-10",
    "nombre": "VAR II MICROVIAL ADAPTER 10/PK",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702077",
    "nombre": "VAR II POWER CORD FOR 110V",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702174",
    "nombre": "VSS RACK ADPTR 13mmTUBE,30/PK",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702175",
    "nombre": "VSS RACK ADPTR 12mmTUBE,30/PK",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702279",
    "nombre": "VII COMPLETE ACCESSORY KIT",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702280",
    "nombre": "VII ACCESSORY KIT W/O RESRVOIR",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702463",
    "nombre": "VII TURBO 2.0 CARTRIDGE HOLDER",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702464",
    "nombre": "VII TURBO 2.0 PREFILTER",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702600",
    "nombre": "VII TURBO SYSTEM",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200215",
    "nombre": "D10 DUAL PROGRAM DISKETTE",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009789",
    "nombre": "D-10 IMAGE DVD 4.30 V2",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000296",
    "nombre": "D-100 UTILITY CARTRIDGE",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12000297",
    "nombre": "D-100 UTILITY PREFILTER",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008984",
    "nombre": "D-100 HEMOGLOBIN TESTING SYSTEM (ROW)",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12011375",
    "nombre": "WINDOWS 10 IOT ENTERPRISE 2016 LTSB",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12013032",
    "nombre": "D-100 Image v1.4",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12013225",
    "nombre": "D-10 MLCD SOFTWARE 5.0",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12014100",
    "nombre": "D-100 OP. MANUAL MLCD SW1.4",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12014621",
    "nombre": "D-100 UPGRADE KIT LICENCE W10&SQL SW1.4",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12015455",
    "nombre": "D-100 Image v1.4.1",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12005754",
    "nombre": "EZR Decontamination Cartridge",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1957264",
    "nombre": "FLOW CELL CLEANING LIQUID",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2200220",
    "nombre": "D-10 Hemoglobin Testing System",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2503001",
    "nombre": "VNBS SCP ELUTION BUFFER 1",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2503002",
    "nombre": "VNBS SCP ELUTION BUFFER 2",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2500249",
    "nombre": "GDM 3.1.1 Vnbs Image for RP5000",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2503042",
    "nombre": "GDM 3.1 Vnbs Img RP5000 CDx2pk",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2503044",
    "nombre": "GDM 3.1 VNBS IMAGE CD RP5700",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2503055",
    "nombre": "VNBS COMPUTER",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008717",
    "nombre": "GDM 3.3 Image",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702793",
    "nombre": "HB ADVISOR SOFTWARE",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702494",
    "nombre": "FIRMWARE CD, VII Platforms",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702832",
    "nombre": "CDM 5.2 HP RP5000 Image",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702833",
    "nombre": "CDM 5.2 HP rp5700IMAGE",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702835",
    "nombre": "CDM 5.2 HP rp5800 IMAGE",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702842",
    "nombre": "CDM ARCHIVE VIEWER CD",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702845",
    "nombre": "FIRMWARE CD-VII PLATFORMS",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2702847",
    "nombre": "CDM 5.2 SOFTWARE",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12010508",
    "nombre": "CDM Software Image USB ver. 5.4",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2500250",
    "nombre": "GDM 3.1.1 Vnbs Image for RP5700",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12004684",
    "nombre": "GDM 3.2 Image for RP 5700",
    "icono": "/assets/img/SistemasClinicos.png",
    "division": "SISTEMAS CLINICOS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "93489",
    "nombre": "EVOLIS SW-APF-IFU",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "93502",
    "nombre": "ETP SW-APF-IFU",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "63740",
    "nombre": "CandiSelect 20x90mm plates",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "63750",
    "nombre": "StrepBSelect 20x90mm plates",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "64694",
    "nombre": "UriSelect 4, 500g",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "62762",
    "nombre": "Mycoplasma U9 Urea Broth 10x2mL ampules",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "62763",
    "nombre": "Mycoplasma Arginine Broth 10x2mL ampules",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "94197",
    "nombre": "Anti-Theft Lock",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72316",
    "nombre": "Monolisa Anti-HBc PLUS 480 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72348",
    "nombre": "Monolisa HBs Ag ULTRA 480 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "92501",
    "nombre": "Geenius HCV Supplemental Assay 20 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72562",
    "nombre": "Monolisa HCV Ag-Ab ULTRA V2 480 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72388",
    "nombre": "Genscreen ULTRA HIV Ag-Ab 480 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "62739",
    "nombre": "Mycoplasma Duo Suspension Medium 40x2mL",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "61608",
    "nombre": "Pastorex Meningitis N.meningitidis A 25t",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "61610",
    "nombre": "Pastorex Meningitis N.meningitidis C 25t",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "61613",
    "nombre": "Pastorex Meningitis Streptococcus B 25t",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "61616",
    "nombre": "Pastorex Meningitis H. influenzae b 25t",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "61618",
    "nombre": "Pastorex Meningitis Control Kit 2x25t",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "61729",
    "nombre": "Pastorex Strep Extraction Enzyme 2x10mL",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72686",
    "nombre": "Platelia Measles IgG 48 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89601",
    "nombre": "EVOLIS",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89649",
    "nombre": "EVOETP Assy, System Liquid Container",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89657",
    "nombre": "EVOETP Bottle 1L, Wash Buffer, Red",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89661",
    "nombre": "EVOETP Bottle 2L, Wash Buffer, Blue",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89679",
    "nombre": "EVOLIS Assy, Plate Carrier A1",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89684",
    "nombre": "EVOETP Filter, Optical, 650nm",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89685",
    "nombre": "EVOETP Filter, Optical, 690nm",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89686",
    "nombre": "EVOETP Filter, Optical, 620nm",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89687",
    "nombre": "EVOETP Filter, Optical, 492nm",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89688",
    "nombre": "EVOETP Filter, Optical, 450nm",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89689",
    "nombre": "EVOETP Filter, Optical, 405nm",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89780",
    "nombre": "EVOLIS Reagent Rack 2, CTRL",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89934",
    "nombre": "EVOETP Bottle 1L, Wash Buffer, W/ Cap",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89962",
    "nombre": "EVOETP Filter, Optical, 550nm",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89964",
    "nombre": "EVOLIS Bottle Set, Disp/Asp",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "91736",
    "nombre": "EVOLIS Holder, Waste Bag, W/ Clamps",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "93501",
    "nombre": "EVOLIS Twin Plus",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "93517",
    "nombre": "ETP Sample Rack",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "93518",
    "nombre": "ETP Control Rack",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "93555",
    "nombre": "ETP Assy, Plate Carrier, 2-PS",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "87530K",
    "nombre": "§KIT IPS 2° GENERATION°",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "82387",
    "nombre": "PW 4X Complete 2L WASTE Bottle with Conn",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "85274",
    "nombre": "PW 4X Hydrophobic Filter 1µm",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "85509",
    "nombre": "PW 40 Complete Trap Vial",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "87042",
    "nombre": "2 L COMPLETE WASH BOTTLE",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "87046",
    "nombre": "PW 40 Manifold Connector O-Rings x3",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "87048",
    "nombre": "PW 4X Removable Microplate Carrier",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "87060",
    "nombre": "PW 41 Clear RINSE Dispensing Tube",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "87062",
    "nombre": "PW 41 Green WASH3 Dispensing Tube",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "87067",
    "nombre": "PW 41 Cap W/Tubing-Conn for 8L WASTE Btl",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "87083",
    "nombre": "PW 40 Trap Vial without Cap",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "87085",
    "nombre": "PW 41 Tube/Conn for Vac Sensing SN Kxxxx",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "89847",
    "nombre": "2 L COMPLETE RINSE BOTTLE",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "61747",
    "nombre": "Pastorex Crypto Plus 60 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "62785",
    "nombre": "Platelia Candida Ab Plus 96 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72520",
    "nombre": "Syphilis IgM EIA 96 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67098",
    "nombre": "Moxifloxacin 5µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67468",
    "nombre": "Ticarcillin-Clav.Acid 75-10µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "67528",
    "nombre": "Quinupristin-Dalfopristin15µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "68948",
    "nombre": "Teicoplanin 30µG 4x50 disks",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012123",
    "nombre": "CEFEPIME-CLAV. ACID 30-10μG 4X50 DISKS",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "68250",
    "nombre": "Beta LACTA Test 50 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72504",
    "nombre": "TPHA 500, 500 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "72531",
    "nombre": "Syphilis Total Ab 480 tests",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "805060",
    "nombre": "Bovine Albumin 22% 10x10ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "806506",
    "nombre": "ALSEVERS F 1000 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "816026",
    "nombre": "BIOTESTCELL-C  5 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "3631",
    "nombre": "ID-DiaCell PooL 3x10 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4027",
    "nombre": "ID-Coombs Anti-IgG 24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4033",
    "nombre": "ID-Anti-IgG DAT Dil. 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4414",
    "nombre": "ID-DiaPanel Plus 6 6x4 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4837",
    "nombre": "ID-DC Screening II 24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "4857",
    "nombre": "ID-DC Screening I 24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "806505",
    "nombre": "ALSEVERS  F  50 ML",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1033",
    "nombre": "ID-DiaClon ABO/Rh (donors)   24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1043",
    "nombre": "ID-DiaClon ABO/Rh 24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1044",
    "nombre": "ID-DiaClon ABO/Rh 4x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1048",
    "nombre": "ID-DiaClon ABO/Rh Newborn 24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1254",
    "nombre": "ID-DiaClon ABD-Confirmation 4x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1257",
    "nombre": "ID-DiaClon ABD-Confirmation 24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1323",
    "nombre": "ID-DiaClon ABO/D 24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1811",
    "nombre": "ID-Anti-A1 (human) 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1911",
    "nombre": "ID-DiaClon Anti-H 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "2121",
    "nombre": "ID-DiaClon-Anti-K 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "3615",
    "nombre": "ID-DiaCell ABO (A1,B,0) 3x10 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "3619",
    "nombre": "ID-DiaCell ABO (A1,A2,B,O) 4x10 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "3621",
    "nombre": "ID-DiaCell ABO (A2) 1x10 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "3623",
    "nombre": "ID-DiaCell ABO (O) 1x10 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "6041",
    "nombre": "ID-DiaClon Anti-Lea / Leb 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "7221",
    "nombre": "ID-DiaClon Anti-Lea 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "7231",
    "nombre": "ID-DiaClon Anti-Leb 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "7251",
    "nombre": "ID-Anti-k (KEL2) 1x12 pces",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "8610",
    "nombre": "ID-Antigen profile II 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "8701",
    "nombre": "ID-Antigen profile III 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "8712",
    "nombre": "ID-Antigprf. III Test sera 6x5 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9360",
    "nombre": "ID-Titration solution 10x10 mL",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "5017",
    "nombre": "ID-NaCl,Enzyme test 24x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9893",
    "nombre": "Dispenser (100 magnets)",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9902",
    "nombre": "Setup Clean 1x500 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "5550",
    "nombre": "ID-CellWash-P 1x500 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "5650",
    "nombre": "ID-CellStab 1x500 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "5660",
    "nombre": "ID-CellStab 2x100 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9190",
    "nombre": "ID-Diluent1 for IH-Analyzers10x60x700 µl",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9280",
    "nombre": "ID-Diluent 2 1x500 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "109905",
    "nombre": "EC-Stabilizing solution      1x500 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "200188",
    "nombre": "Diluent N.A. 1x10 Ltr",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12007850",
    "nombre": "POWER CABLE type B HG 15A",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009844",
    "nombre": "IH-AbID Fullversion",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009845",
    "nombre": "IH-AbID Demoversion",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "560081",
    "nombre": "Barcode Scanner Heron HD3430",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "850000",
    "nombre": "DiaCent - CW -12MM (100-240V)",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "850012",
    "nombre": "DiaCent - CW head 12mm",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9201",
    "nombre": "ID-Centrifuge L",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9203",
    "nombre": "ID-Incubator L",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9412",
    "nombre": "HEAD 28 TUBES",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9413",
    "nombre": "HEAD 12 TUBES",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9415",
    "nombre": "HEAD 28 TUBES",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9551",
    "nombre": "HEAD ID-12 SII",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1000",
    "nombre": "IH-1000",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1000ESV",
    "nombre": "Keyboard (Spanish)",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1000GBV",
    "nombre": "Keyboard (English)",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1000USAV",
    "nombre": "Keyboard (US-Euro)",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "1500",
    "nombre": "IH-500",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9951",
    "nombre": "Saxo ID-Reader II",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "101514",
    "nombre": "IH 16A POWER CABLE TYPE B",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "590130",
    "nombre": "IH-1000 BARCODE LABEL SET ( 5 sheet )",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "590300",
    "nombre": "HANDHELD SCANNER",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "590335",
    "nombre": "IH SAMPLE RACK SUPPORT",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "595115",
    "nombre": "IH-500 SAMPLE RACK",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "510029",
    "nombre": "GEN. INSTR. ELECTRICAL SOCKET",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "590229",
    "nombre": "4 USB PORTS HUB & ADAPTER",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9390",
    "nombre": "ID-Titration rack (for IH-Analyser)",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9612",
    "nombre": "ID-Dispenser Red",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9613",
    "nombre": "ID-Diluent Holder",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9614",
    "nombre": "ID Dispenser Green",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9660",
    "nombre": "ID-WorkTable",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9899",
    "nombre": "Swing TwinSampler II",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9651",
    "nombre": "ID-Pipetor FP-6",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9945",
    "nombre": "Banjo ID-Reader",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9324",
    "nombre": "IH-QC4 4x6 ml",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9000",
    "nombre": "IH-COM KIT FULLVERSION",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "9010",
    "nombre": "IH-COM KIT FOR READER",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12020926",
    "nombre": "Lector de Código de Barras IHD",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12020946",
    "nombre": "Monitor IHD",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12020967",
    "nombre": "Computadora IHD",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "510X",
    "nombre": "BLOOD GAS + EGL 9X1.7ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12011334",
    "nombre": "DIABETES LIQ 1ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "636",
    "nombre": "MAT SERUM 1STTRI LEV LIQ 6X1ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "636X",
    "nombre": "MAT SERUM 1ST TRI LIQ 1ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "HIVQP200",
    "nombre": "HIV-1 / HIV-2 Verification Panel",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27102X",
    "nombre": "D-DIMER LIQ MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "146X",
    "nombre": "CARD MKR LT PLUS 1 LIQ 3ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "147X",
    "nombre": "CARD MKR LT PLUS 2 LIQ 3ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "148X",
    "nombre": "CARD MKR LT PLUS 3 LIQ 3ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "149",
    "nombre": "CARD MKR LT LOWPLUS 1 LIQ6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "600",
    "nombre": "HYPERTENSION MKR TRI LYP 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "600X",
    "nombre": "HYPERTENSION MKR LYPH SP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27104",
    "nombre": "CARD MKR LT PLUS 1A LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27106",
    "nombre": "CARD MKR LT PLUS 1C LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27106X",
    "nombre": "CARD MKR LT PLUS LIQ 1C 3ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009955",
    "nombre": "CARD MKR PLUS LT 1 INTELIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009956",
    "nombre": "CARD MKR PLUS LT 2 INTELIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009957",
    "nombre": "CARD MKR PLUS LT 3 INTELIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009958",
    "nombre": "CARD MKR PLUS LT 1A INTELIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009959",
    "nombre": "CARD MKR PLUS LT 1B INTELIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009960",
    "nombre": "CARD MKR PLUS LT 1C INTELIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "313X",
    "nombre": "CHEM ASSAYED LYPH SP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "987000",
    "nombre": "SQUEEZER CAPS BIO-RAD 100/PKG",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012693",
    "nombre": "SER IND LIQ HEMOLYSIS 6X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012694",
    "nombre": "SER IND LIQ ICTERUS 6X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012695",
    "nombre": "SER IND LIQ LIPEMIA 6X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012696",
    "nombre": "SER IND LIQ NON-INTERFERED 6X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012697",
    "nombre": "SER IND LIQ HEMOLYSIS MP 1X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012698",
    "nombre": "SER IND LIQ ICTERUS MP 1X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012699",
    "nombre": "SER IND LIQ LIPEMIA MP 1X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12012700",
    "nombre": "SER IND LIQ NON-INTERFERED MP 1X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "227X",
    "nombre": "TORCH P ASSAY POS LIQ MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "228X",
    "nombre": "TORCH P UNASSY NEG LIQ MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "239X",
    "nombre": "TORCH P UNASSY POS LIQ MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008299",
    "nombre": "ETHANOL/AMMONIA 1 INTELIQ 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008300",
    "nombre": "ETHANOL/AMMONIA 2 INTELIQ 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008301",
    "nombre": "ETHANOL/AMMONIA 3 INTELIQ 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00100A",
    "nombre": "VIROTROL I 1X5ML Class A",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00100G",
    "nombre": "VIROTROL I 1X5ML Class G",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "113",
    "nombre": "VIROTROL HIV-1 gO 5X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00113X",
    "nombre": "VIROTROL HIV-1 gO 1X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "00142A",
    "nombre": "VIROTROL HAV-IGM 1X5ML Class A",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "COV000",
    "nombre": "SARS-CoV-2 Negative",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "COV019",
    "nombre": "SARS-CoV-2 Standard",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "COVA",
    "nombre": "SARS-CoV-2 S Gene Alpha Variant",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "COVB",
    "nombre": "SARS-CoV-2 S Gene Beta Variant",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "COVDK",
    "nombre": "SARS-CoV-2 S Gene Delta, Kappa Variants",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "COVE",
    "nombre": "SARS-CoV-2 S Gene Epsilon Variant",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "COVG",
    "nombre": "SARS-CoV-2 S Gene Gamma Variant",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "360X",
    "nombre": "IA PLUS LIQ SP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27110",
    "nombre": "IA PREMIUM CTL TRILEV 6X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27110X",
    "nombre": "IA PREMIUM CTL LIQ MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009948",
    "nombre": "IA PLUS 1 INTELIQ 12X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009949",
    "nombre": "IA PLUS 2 INTELIQ 12X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009950",
    "nombre": "IA PLUS 3 INTELIQ 12X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009941",
    "nombre": "IMMUNOLOGY 1 INTELIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009942",
    "nombre": "IMMUNOLOGY 2 INTELIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009943",
    "nombre": "IMMUNOLOGY 3 INTELIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "285",
    "nombre": "MULTIQL PREM ASSAY 2 LIQ 6X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "285X",
    "nombre": "MULTIQL PREM ASSAY LIQ 5ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "286",
    "nombre": "MULTIQL PREM ASSAY 3 LIQ 6X5ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "695X",
    "nombre": "MULTIQUAL ASSAYED LIQ SP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008256",
    "nombre": "MULTIQUAL 1 INTELIQ 12X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008257",
    "nombre": "MULTIQUAL 2 INTELIQ 12X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008258",
    "nombre": "MULTIQUAL 3 INTELIQ 12X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008276",
    "nombre": "SPECIALTY IA LTA INTELIQ 6X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008277",
    "nombre": "SPECIALTY IA 1 INTELIQ 6X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008278",
    "nombre": "SPECIALTY IA 2 INTELIQ 6X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008279",
    "nombre": "SPECIALTY IA 3 INTELIQ 6X4ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008289",
    "nombre": "TUMOR MARKERS 1 INTELIQ 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "395X",
    "nombre": "URINE CHEMISTRY LIQ SP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "409",
    "nombre": "U TOX S1S LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "419",
    "nombre": "U TOX S2S LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "454",
    "nombre": "QUAL URINE TOX NEG LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "454X",
    "nombre": "QUAL URINE TOX LIQ SP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "455",
    "nombre": "QUAL URINE TOX POS LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "466",
    "nombre": "U TOX S1 LOW OP LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "467",
    "nombre": "U TOX S2 LOW OP LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "683",
    "nombre": "U TOX S1O LOW OP LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "706",
    "nombre": "U TOX S2O LOW OP LIQ 10X10ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "435X",
    "nombre": "URINALYSIS LIQ SP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "962X",
    "nombre": "QUANTIFY PLUS LIQ 2X120ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "995X",
    "nombre": "QUANTIFY PLUS LIQ 2X12ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "740X",
    "nombre": "DIABETES LYPH SP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008309",
    "nombre": "DIABETES 1 INTELIQ 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008310",
    "nombre": "DIABETES 2 INTELIQ 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008311",
    "nombre": "DIABETES 3 INTELIQ 6X2ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "449X",
    "nombre": "HEMATOLOGY S 3X3.5ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "487X",
    "nombre": "HEMATOLOGY X 3X4.5ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "514X",
    "nombre": "SED RATE LIQ 2X9ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "760X",
    "nombre": "HEMATOLOGY-16 3X3ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "761",
    "nombre": "HEMATOLOGY-16 LOW 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "762",
    "nombre": "HEMATOLOGY-16 NORMAL 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "763",
    "nombre": "HEMATOLOGY-16 HIGH 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "865X",
    "nombre": "HEMATOLOGY A MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "866",
    "nombre": "HEMATOLOGY A LOW 4X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "867",
    "nombre": "HEMATOLOGY A NORMAL 4X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "868",
    "nombre": "HEMATOLOGY A HIGH 4X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "904X",
    "nombre": "HEMATOLOGY C 3X5ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "922X",
    "nombre": "RETIC S 3X4ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "926",
    "nombre": "RETIC X 1 4X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "927",
    "nombre": "RETIC X 2 4X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "927X",
    "nombre": "RETIC X 3X3ML MP",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "928",
    "nombre": "RETIC X 3 4X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008280",
    "nombre": "InteliQ Specialty Immunoassay Control Trilevel MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009951",
    "nombre": "INTELIQ, IA PLUS Trilevel MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009961",
    "nombre": "Liquichek Cardiac Markers Plus Control LT Level 1 MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009962",
    "nombre": "Liquichek Cardiac Markers Plus Control LT Level 2 MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009963",
    "nombre": "Liquichek Cardiac Markers Plus Control LT Level 3 MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009964",
    "nombre": "Liquichek Cardiac Markers Plus Control LT Level 1A MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009965",
    "nombre": "Liquichek Cardiac Markers Plus Control LT Level 1B MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12009966",
    "nombre": "Liquichek Cardiac Markers Plus Control LT Level 1C MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "149X",
    "nombre": "CARD MKR LT PLUS Low LIQ 6X3ML",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27104X",
    "nombre": "CARD MKR LT PLUS 1A MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "27105X",
    "nombre": "CARD MKR LT PLUS 1B MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "279X",
    "nombre": "WHOLE BLD IMMSUP Five level MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "528X",
    "nombre": "WHOLE BLOOD METAL Trilevel MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "553X",
    "nombre": "HEMOGLOBIN A2 Bilevel MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "598X",
    "nombre": "HEMOSTASIS Trilevel MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "670X",
    "nombre": "CK/LD ISOENZYME Bilevel MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "724X",
    "nombre": "TDM Trilevel MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "750X",
    "nombre": "SPINAL FLUID Bilevel MiniPak (1 of each level)",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "804",
    "nombre": "UNITY INSTALLATION PACKAGE",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "806-1",
    "nombre": "UNITY ALERT 1 YEAR SUBSCR",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "825i",
    "nombre": "UNITY REMOTE INSTALLATION & TRAINING",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12002594",
    "nombre": "Liquichek™ Opiate Control Level 1 MiniPak 1x5 mL",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12002595",
    "nombre": "Liquichek™ Opiate Control Level 2 MiniPak 1x5 mL",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12005786",
    "nombre": "Liquichek™ Opiate Control Level 1 6x5 mL",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12005787",
    "nombre": "Liquichek™ Opiate Control Level 2 6x5 mL",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008259",
    "nombre": "InteliQ Assayed Multiqual Control trilevel MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008302",
    "nombre": "Liquichek Ethanol/Ammonia Control Trilevel MiniPak",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008290",
    "nombre": "InteliQ Tumor Marker Control LEVEL 2",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "12008291",
    "nombre": "InteliQ Tumor Marker Control LEVEL 3",
    "icono": "/assets/img/ControlCalidad.png",
    "division": "CONTROL DE CALIDAD",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "62792",
    "nombre": "Platelia Aspergillus Ag Verif Panel",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "6051",
    "nombre": "ID-DiaClon Anti-Jka / Jkb 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "7321",
    "nombre": "ID-DiaClon Anti-Jka 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "7331",
    "nombre": "ID-DiaClon Anti-Jkb 1x12",
    "icono": "/assets/img/Inmunohematologia.png",
    "division": "INMUNOHEMATOLOGÍA",
    "marca": "BIO-RAD"
  },
  {
    "idCatalogo": "EI 2668-9601 M",
    "nombre": "Virus Zika IgM",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2668-9601 G",
    "nombre": "Virus Zika IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 266B-9601 M",
    "nombre": "Virus Elisa Dengue (DENV) IgM",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 266B-9601 G",
    "nombre": "Virus Elisa Dengue (DENV) IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2610-9601 M",
    "nombre": "Virus del sarampión IgM.",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2610-9601 G",
    "nombre": "Virus del sarampión IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2532-9601-2 M",
    "nombre": "Virus del herpes simple 2 (HSV-2) IgM",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2532-9601-2 G",
    "nombre": "Virus del herpes simple 2 (HSV-2) IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2531-9601-2 G",
    "nombre": "Virus del herpes simple 1 (HSV-1) IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2531-9601-1 M",
    "nombre": "Virus del herpes simple (HSV-1/2 Pool)",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2630-9601 M",
    "nombre": "Virus de las paperas incluido: absorbent",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2630-9601 G",
    "nombre": "Virus de las paperas",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2650-9601 G",
    "nombre": "Virus de la varicela zoster (VZV)",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2650-9601 M",
    "nombre": "Virus de la varicela zoster (VZV)",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2650-9601 M",
    "nombre": "Virus de la varicela zoster (VZV)",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2590-9601 G",
    "nombre": "Virus de la rubeola IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2590-9601 M",
    "nombre": "Virus de la rub‚ola incl. Absorbente de",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2525-9601 G",
    "nombre": "Virus de la hepatitis E (HEV)",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2525-9601 M",
    "nombre": "Virus de la hepatitis E (HEV)",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2795-9601 A",
    "nombre": "Virus de Epstein-Barr Antígeno temprano",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2795-9601 G",
    "nombre": "Virus Anti-Epstein-Barr",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 266A-9601-1 G",
    "nombre": "Virus anti-dengue tipo 1-4",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 266A-9601-1 M",
    "nombre": "Virus anti-dengue tipo 1-4",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2111-9601 O",
    "nombre": "Treponema pallidum",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2410-9601 M",
    "nombre": "Toxoplasma gondii IGM",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2410-9601 G",
    "nombre": "Toxoplasma gondii IGG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2050-9601 A",
    "nombre": "Toxina de Bordetella pertussis",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2050-9601 G",
    "nombre": "Toxina de Bordetella pertussis",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2606-9601 A",
    "nombre": "SARS-CoV-2 IgA",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2606-9601-2 M",
    "nombre": "SARS CoV 2 NCP",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2202-9601 G",
    "nombre": "Mycoplasma pneumoniae",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2202-9601 M",
    "nombre": "Mycoplasma pneumoniae",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2531-9601-2 M",
    "nombre": "Herpes simplex virus 1 IgM",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2080-9601 G",
    "nombre": "Helicobacter pylori IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2080-9601 A",
    "nombre": "Helicobacter pylori IgA",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2081-9601 A",
    "nombre": "Helicobacter pylori (CagA) IgA",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2590-9601-1 G",
    "nombre": "Determinación avidez  virus rubéola",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2191-9601 A",
    "nombre": "Clamidia trachomatis",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2191-9601 G",
    "nombre": "Clamidia trachomatis",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2191-9601 M",
    "nombre": "Clamidia trachomatis",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2570-9601 M",
    "nombre": "Citomegalovirus (CMV) IGM",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2570-9601 G",
    "nombre": "Citomegalovirus (CMV) IGG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2570-9601-L G",
    "nombre": "Citomegalovirus (CMV)",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2189-9601 M",
    "nombre": "Brucella abortus incl. Absorbente de IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2189-9601 G",
    "nombre": "Brucella abortus",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2132-9601-2 G",
    "nombre": "Borrelia plus VIsE",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2132-9601 M",
    "nombre": "Borrelia incl. Absorbente de IgG / RF",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2132-9601-24 O",
    "nombre": "Borrelia burgdorferi VlsE and OspC",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2050-9601 M",
    "nombre": "Bordetella pertussis",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2212-9601 G",
    "nombre": "Anti-Trypanosoma cruzi Elisa IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2311-9601 G",
    "nombre": "Anti-Toxocara IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2606-9601-10 G",
    "nombre": "Anti-SARS-CoV-2 QuantiVac ELISA (IgG)",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2580-9601 M",
    "nombre": "Anti-Parvovirus B19 IgM",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2580-9601 G",
    "nombre": "Anti-Parvovirus B19 IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2580-9601 G",
    "nombre": "Anti-Parvovirus B19 IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2793-9601 G",
    "nombre": "Antígeno nuclear de Epstein-Barr",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2791-9601 G",
    "nombre": "Antígeno de la capside de Epstein-Barr",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2791-9601 M",
    "nombre": "Antígeno de la capside de Epstein Barr",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 293A-9601 M",
    "nombre": "Anti-Chikungunya virus (CHIKV) IgM",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 293A-9601 G",
    "nombre": "Anti-Chikungunya virus (CHIKV) IgG",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2791-9601-L G",
    "nombre": "Ant¡geno de la cápside del virus Epstein",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EI 2791-9601-1 G",
    "nombre": "Ant¡geno de la c pside del virus de Epst",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1910-9601 A",
    "nombre": "Transglutaminasa tisular [endomisio]",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1910-9601 G",
    "nombre": "Transglutaminasa tisular [endomisio]",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1597-9601 G",
    "nombre": "SS-B (La)",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1595-9601 G",
    "nombre": "SS-A (Ro)",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1593-9601 G",
    "nombre": "Sm",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1599-9601 G",
    "nombre": "Scl-70",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 151A-4802 G",
    "nombre": "Sa",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1254-9601 G",
    "nombre": "Receptor de fosfolipasa A2 [PLA2R]",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1435-9601 G",
    "nombre": "Receptor de acetilcolina",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1641-9601 G",
    "nombre": "Proteínas P ribosomales",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1505-9601 G",
    "nombre": "Péptidos cíclicos citrulinados (CCP)",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1211-9601 G",
    "nombre": "pANCA: mieloperoxidasa (MPO)",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1574-9601 G",
    "nombre": "Nucleosomas",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1591-9601 G",
    "nombre": "nRNP / Sm",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1251-9601 G",
    "nombre": "Membrana del sótano glomerular [GBM]",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1661-9601 G",
    "nombre": "Jo-1",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1560-9601 G",
    "nombre": "Histonas",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1321-9601 G",
    "nombre": "H¡gado Riñón microsomas LKM-1",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1022-9601 G",
    "nombre": "Gad",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1814-9601 M",
    "nombre": "Factor reumatoide IgM",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1814-9601 G",
    "nombre": "Factor reumatoide IgG",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1814-9601 A",
    "nombre": "Factor reumatoide IgA",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1362-9601",
    "nombre": "Factor intrínseco",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1572-9601 G",
    "nombre": "dsDNA-NcX",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1818-9601 G",
    "nombre": "Complejos inmunes circulantes (CIC)",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1611-9601 G",
    "nombre": "Centrómeros",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1621-9601 M",
    "nombre": "Cardiolipina (AMA M1) IgM",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1621-9601 G",
    "nombre": "Cardiolipina (AMA M1) IgG",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1621-9601 A",
    "nombre": "Cardiolipina (AMA M1) IgA",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1201-9601-2 G",
    "nombre": "cANCA: proteinasa 3 [PR3-hn-hr]",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1632-9601 G",
    "nombre": "B2-glucoproteína 1 IgG",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1632-9601 A",
    "nombre": "B2-glucoproteína 1 IgA",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1632-9601 M",
    "nombre": "B2-Glicoproteína IgM",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1590-9601-7 G",
    "nombre": "Anti-ENA PoolPlus",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1590-1208-2 G",
    "nombre": "Anti-ENA Perfil Plus 2",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1590-1208-1 G",
    "nombre": "Anti-ENA Perfil plus 1",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 159Z-9601 G",
    "nombre": "Anti-DFS70",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1947-4801 G",
    "nombre": "Anti-col geno tipo VII",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1590-9601-8 G",
    "nombre": "ANA screen 8",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1622-9601 G",
    "nombre": "AMA M2-3E",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1576-9601 G",
    "nombre": "ADN monocatenario (ADNss)",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  {
    "idCatalogo": "EA 1571-9601 G",
    "nombre": "ADN bicatenario (dsDNA)",
    "icono": "/assets/img/default.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "EUROIMMUN"
  },
  
  {
    "idCatalogo": "1073151",
    "nombre": "ASO Látex",
    "division": "Pruebas de Látex",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1103152",
    "nombre": "Artitest directo",
    "division": "Pruebas de Látex",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1683152",
    "nombre": "PCR Látex directo",
    "division": "Pruebas de Látex",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1723096",
    "nombre": "HIV 1+2 ELISA (3ª Generación)",
    "division": "Banco de Sangre",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1723451",
    "nombre": "HIV Ag/Ac ELISA (4a Generación)",
    "division": "Banco de Sangre",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1483254",
    "nombre": "HBsAg ELISA",
    "division": "Banco de Sangre",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1483258",
    "nombre": "HCV ELISA 3a Generación",
    "division": "Banco de Sangre",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1293205",
    "nombre": "Chagatest HAI",
    "division": "Banco de Sangre",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1293096",
    "nombre": "Chagatest ELISA lisado",
    "division": "Banco de Sangre",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1293257",
    "nombre": "Chagatest ELISA recombinante V.4.0",
    "division": "Banco de Sangre",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1060010",
    "nombre": "T. cruzi DNA Test",
    "division": "Banco de Sangre",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1853153",
    "nombre": "V.D.R.L. test (incluye controles)",
    "division": "Banco de Sangre",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1853154",
    "nombre": "RPR slide test",
    "division": "Banco de Sangre",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1723452",
    "nombre": "Sífilis ELISA V.4.0",
    "division": "Banco de Sangre",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705002",
    "nombre": "APTTest",
    "division": "Coagulación",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705004",
    "nombre": "APTTest ellágico (en coagulómetros)",
    "division": "Coagulación",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705001",
    "nombre": "Soluplastin",
    "division": "Coagulación",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705005",
    "nombre": "Soluplastin para COR 50",
    "division": "Coagulación",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705006",
    "nombre": "Fibrinógeno",
    "division": "Coagulación",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705009",
    "nombre": "Tiempo de Trombina",
    "division": "Coagulación",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705031",
    "nombre": "Dimero D Turbitest AA c/calibrador",
    "division": "Coagulación",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705034",
    "nombre": "Control D-Dimer",
    "division": "Coagulación",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1937001",
    "nombre": "Plasma Control Normal",
    "division": "Coagulación",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1937002",
    "nombre": "Plasma Control Patológico",
    "division": "Coagulación",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705007",
    "nombre": "Coagulation Calibrator para COR 50",
    "division": "Coagulación",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1443152",
    "nombre": "Anti-A monoclonal",
    "division": "Hemoclasificadores (Reaclones)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1443154",
    "nombre": "Anti-B monoclonal",
    "division": "Hemoclasificadores (Reaclones)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1443153",
    "nombre": "Anti-AB monoclonal",
    "division": "Hemoclasificadores (Reaclones)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1443155",
    "nombre": "Anti-D (Rho) monoclonal",
    "division": "Hemoclasificadores (Reaclones)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1443151",
    "nombre": "Albúmina Bovina 30%",
    "division": "Hemoclasificadores (Reaclones)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1443156",
    "nombre": "Suero Anti-humano (Coombs)",
    "division": "Hemoclasificadores (Reaclones)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1474535",
    "nombre": "WL Diluent (sustituye a 1474504)",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1474537",
    "nombre": "WL Diluent (sustituye a 1474510)",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1474539",
    "nombre": "WL Lyse (sustituye a 1474508)",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1474515",
    "nombre": "WL 19 Rinse AA",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1474511",
    "nombre": "WL 19 Rinse AA",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1474512",
    "nombre": "WL 19 Lyse AA",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1474513",
    "nombre": "WL 19 E-Z Cleanser AA",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1474521",
    "nombre": "WL Probe Cleanser (sustituye al 1474514)",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1474518",
    "nombre": "WL 19 Con AA 3 Niveles (pedidos programados trimestralmente)",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1474519",
    "nombre": "WL 19 Con AA Nivel 2 (pedidos programados trimestralmente)",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1475002",
    "nombre": "WL-29 LH Lyse 100mL x 4",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1475001",
    "nombre": "WL-29 DIFF Lyse 500mL x 4",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1475000",
    "nombre": "WL-29D Diluent x 20L",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1474521",
    "nombre": "WL Probe Cleanser",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1475006",
    "nombre": "WL-31 LEO (II) 500mL x 4",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1475004",
    "nombre": "WL-31 LEO (I) Lyse 1L x 4",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1475008",
    "nombre": "WL-31 LH Lyse 500mL x 4",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1475003",
    "nombre": "WL-31D Diluent x 20L",
    "division": "Hematología",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1200000",
    "nombre": "e32 tests",
    "division": "Eritrosedimentación",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1920140",
    "nombre": "Urine Strip",
    "division": "Urianálisis",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1840107",
    "nombre": "Uricostat enzimático AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1840110",
    "nombre": "Uricostat enzimático AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1690008",
    "nombre": "Albúmina AA",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1021404",
    "nombre": "Amilasa 405 AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009693",
    "nombre": "Ammonia",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1120007",
    "nombre": "Bilirrubina Directa AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1120008",
    "nombre": "Bilirrubina Total AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1152004",
    "nombre": "Ca-color Arsenazo III AA",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1492361",
    "nombre": "UIBC/TIBC AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1220114",
    "nombre": "Colestat enzimático AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1220222",
    "nombre": "Colestat enzimático AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1220231",
    "nombre": "HDL Colesterol monofase AA v.2",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1220239",
    "nombre": "HDL Colesterol monofase AA v.2 (sin calibrador)",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1220229",
    "nombre": "HDL Cholesterol Fast 40 ml (sin calibrador)",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1220233",
    "nombre": "HDL Cholesterol Fast 80 ml (sin calibrador)",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1220220",
    "nombre": "LDL Colesterol monofase AA",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1241403",
    "nombre": "Colinesterasa AA",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999704",
    "nombre": "Cholinesterase",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1271360",
    "nombre": "CK NAC UV AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1271361",
    "nombre": "CK-MB NAC UV AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1260360",
    "nombre": "Creatinina cinética AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1260362",
    "nombre": "Creatinina enzimática AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1351402",
    "nombre": "Fosfatasa Acida Total y Prostática cinética",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1361402",
    "nombre": "ALP 405 AA liquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1382321",
    "nombre": "Fosfatemia UV AA",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1421404",
    "nombre": "gG--test cinética AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1400060",
    "nombre": "Glicemia enzimática AA liquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1752360",
    "nombre": "GOT (AST) UV AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1762360",
    "nombre": "GPT (ALT) UV AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1492360",
    "nombre": "Fer-color AA liquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009365",
    "nombre": "Homocysteine",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999795",
    "nombre": "Lactate",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1521304",
    "nombre": "LDH-P UV AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009284",
    "nombre": "Lipasa AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999803",
    "nombre": "Magnesium CPZ",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1580001",
    "nombre": "Mg color AA",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1690007",
    "nombre": "Proti U/LCR",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1690009",
    "nombre": "Proteínas Totales AA",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1780111",
    "nombre": "TG Color GPO/PAP AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1780112",
    "nombre": "TG Color GPO/PAP AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1810324",
    "nombre": "Urea UV cinética AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1810328",
    "nombre": "Urea UV cinética AA líquida",
    "division": "Química Clínica (Línea Líquida)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009803",
    "nombre": "Glicemia Enzimática AA Líquida",
    "division": "Línea Automatizada CM200 y CM250 (pedidos programados)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009807",
    "nombre": "Urea UV Cinética AA Liquida",
    "division": "Línea Automatizada CM200 y CM250 (pedidos programados)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009810",
    "nombre": "Creatinina Cinética AA Líquida",
    "division": "Línea Automatizada CM200 y CM250 (pedidos programados)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009808",
    "nombre": "Uricostat Enzimático AA Liquida",
    "division": "Línea Automatizada CM200 y CM250 (pedidos programados)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009802",
    "nombre": "Colestat Enzimático AA Líquida",
    "division": "Línea Automatizada CM200 y CM250 (pedidos programados)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009806",
    "nombre": "TG Color GPO/PAP AA Líquida",
    "division": "Línea Automatizada CM200 y CM250 (pedidos programados)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009804",
    "nombre": "HDL Cholesterol fast",
    "division": "Línea Automatizada CM200 y CM250 (pedidos programados)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009811",
    "nombre": "GOT (AST) UV AA Liquida",
    "division": "Línea Automatizada CM200 y CM250 (pedidos programados)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009812",
    "nombre": "GPT (ALT) UV AA Líquida",
    "division": "Línea Automatizada CM200 y CM250 (pedidos programados)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009805",
    "nombre": "Proteínas Totales AA",
    "division": "Línea Automatizada CM200 y CM250 (pedidos programados)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009801",
    "nombre": "Albúmina AA",
    "division": "Línea Automatizada CM200 y CM250 (pedidos programados)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009809",
    "nombre": "ALP 405 AA líquida",
    "division": "Línea Automatizada CM200 y CM250 (pedidos programados)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008158",
    "nombre": "Glicemia enzimática AA líquida (sustituye al 1008138)",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008108",
    "nombre": "Urea UV cinética AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008107",
    "nombre": "Creatinina cinética AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008109",
    "nombre": "Uricostat enzimático AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008157",
    "nombre": "Colestat enzimático AA liquida (sustituye al 1008136)",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008160",
    "nombre": "TG Color GPO/PAP AA líquida (sustituye al 1008141)",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008102",
    "nombre": "HDL Cholesterol fast",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008103",
    "nombre": "LDL Colesterol monofase AA",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008111",
    "nombre": "GOT (AST) UV AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008112",
    "nombre": "GPT (ALT) UV AA liquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008115",
    "nombre": "Bilirrubina Total AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008116",
    "nombre": "Bilirrubina Directa AA liquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008110",
    "nombre": "ALP 405 AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008142",
    "nombre": "Amilasa 405 AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008159",
    "nombre": "Proteinas totales AA (sustituye al 1008139)",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008156",
    "nombre": "Albúmina AA (sustituye 1008135)",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008162",
    "nombre": "Ca-Color Arsenazo III AA (sustituye al 1008143)",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008163",
    "nombre": "Fosfatemia UV AA (1008144)",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008145",
    "nombre": "Mg-Color AA",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008128",
    "nombre": "Magnesium CPZ",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008114",
    "nombre": "LDH-P UV AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008113",
    "nombre": "yG--test cinética AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008118",
    "nombre": "CK-MB NAC UV AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008119",
    "nombre": "CK-NAC UV AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008161",
    "nombre": "Proti U/LCR (sustituye 1008140)",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008122",
    "nombre": "Fer-color AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008123",
    "nombre": "UIBC/TIBC AA líquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008152",
    "nombre": "Lipasa AA liquida",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008120",
    "nombre": "Cholinesterase",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008146",
    "nombre": "Amonia",
    "division": "Línea Dedicada CM Series (CM160, CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009601",
    "nombre": "Albúmina AA",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009602",
    "nombre": "ALP 405 AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009603",
    "nombre": "Amilasa 405 AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009604",
    "nombre": "Bilirrubina Directa AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009605",
    "nombre": "Bilirrubina Total AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009606",
    "nombre": "Ca Color Arsenazo III AA",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009607",
    "nombre": "Cholinesterase",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009608",
    "nombre": "CK-MB NAC UV AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009609",
    "nombre": "CK NAC UV AA liquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009610",
    "nombre": "Colestat enzimático AA líquido",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009611",
    "nombre": "Creatinina cinética AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009613",
    "nombre": "Fer Color AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009614",
    "nombre": "Fosfatemia UV AA",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009616",
    "nombre": "gG--test cinética AA liquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009617",
    "nombre": "Glicemia enzimática AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009619",
    "nombre": "GOT (AST) UV AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009620",
    "nombre": "GPT (ALT) UV AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009702",
    "nombre": "HDL Colesterol monofase AA v.2",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009626",
    "nombre": "LDH-P UV AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009627",
    "nombre": "LDL Colesterol monofase AA",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009628",
    "nombre": "Lipasa AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009629",
    "nombre": "Magnesium CPZ",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009630",
    "nombre": "Proteínas Totales AA",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009631",
    "nombre": "Proti U/LCR",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009632",
    "nombre": "TG Color GPO/PAP AA liquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009633",
    "nombre": "UIBC/TIBC AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009634",
    "nombre": "Urea UV cinética AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009635",
    "nombre": "Uricostat enzimático AA líquida",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009669",
    "nombre": "Fosfatasa Acida Total y Prostática cinética",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009623",
    "nombre": "Homocysteine",
    "division": "Línea Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1073261",
    "nombre": "ASO látex Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1103261",
    "nombre": "FR látex Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1683263",
    "nombre": "CRP hs Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009800",
    "nombre": "CRP hs Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1683267",
    "nombre": "PCR Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1513262",
    "nombre": "IgG Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1513261",
    "nombre": "IgA Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1513263",
    "nombre": "IgM Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1513267",
    "nombre": "IgE Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1513264",
    "nombre": "C3 Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1513265",
    "nombre": "C4 Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009366",
    "nombre": "Cystatin C Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009646",
    "nombre": "Cystatin C Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1453861",
    "nombre": "HbA1c Turbitest AA v.2 (Calibrador por separado)",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999701",
    "nombre": "Reactivo Hemolizante HbA1c",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1513266",
    "nombre": "Microalbuminuria Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999703",
    "nombre": "TRF Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999747",
    "nombre": "Ferritin Turbitest AA",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705031",
    "nombre": "Dímero D Turbitest AA c/calibrador",
    "division": "Línea de Turbidimetría",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008126",
    "nombre": "HbA1c Turbitest AA v.2",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008147",
    "nombre": "ASO látex Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008106",
    "nombre": "FR látex Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008100",
    "nombre": "CRP hs Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008133",
    "nombre": "IgG Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008132",
    "nombre": "IgA Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008134",
    "nombre": "IgM Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008101",
    "nombre": "IgE Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008130",
    "nombre": "C3 Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008131",
    "nombre": "C4 Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008104",
    "nombre": "Ferritin Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008127",
    "nombre": "TRF Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008165",
    "nombre": "D dimer Turbitest AAC/CAL",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008124",
    "nombre": "Microalbúmina Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008150",
    "nombre": "Cystatin C Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008117",
    "nombre": "Lactate",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1008125",
    "nombre": "PCR Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CM Series (CM260, CM260i, CM320, CM320i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009641",
    "nombre": "ASO látex Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009648",
    "nombre": "FR látex Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009677",
    "nombre": "CRP HS Turbitest AA - CMD",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009667",
    "nombre": "IgA Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009652",
    "nombre": "IgG Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009653",
    "nombre": "IgM Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009643",
    "nombre": "C3 Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009644",
    "nombre": "C4 Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009651",
    "nombre": "HbA1c v2 Turb AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999701",
    "nombre": "Reactivo Hemolizante",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009656",
    "nombre": "Microalbúmina Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009646",
    "nombre": "Cystatin C Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009659",
    "nombre": "TRF Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1513267",
    "nombre": "IgE Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999747",
    "nombre": "Ferritin Turbitest AA",
    "division": "Línea Turbidimetría Dedicada CMD Series (CMD600i, CMD600i X1 y CMD800i)",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009277",
    "nombre": "Uricostat enzimático AA liquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009240",
    "nombre": "Albúmina AA",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009243",
    "nombre": "Amilasa 405 AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009244",
    "nombre": "Bilirrubina Total AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009246",
    "nombre": "Bilirrubina Directa AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009248",
    "nombre": "Ca-color Arsenazo III AA",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009253",
    "nombre": "Colestat enzimático AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009264",
    "nombre": "HDL Colesterol monofase AA v.2",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009251",
    "nombre": "CK NAC UV AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009249",
    "nombre": "CK-MB NAC UV AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009254",
    "nombre": "Creatinina cinética AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009241",
    "nombre": "ALP 405 AA liquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009256",
    "nombre": "Fosfatemia UV AA",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009258",
    "nombre": "g-G-test cinética AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009260",
    "nombre": "Glicemia enzimática AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009261",
    "nombre": "GOT (AST) UV AA Liquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009263",
    "nombre": "GPT (ALT) UV AA Líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009285",
    "nombre": "Fer-color AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009267",
    "nombre": "LDH-P UV AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009271",
    "nombre": "Mg Color AA",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009282",
    "nombre": "Proti U/LCR",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009273",
    "nombre": "Proteínas Totales AA",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009274",
    "nombre": "TG Color GPO/PAP AA liquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009275",
    "nombre": "Urea UV cinética AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009284",
    "nombre": "Lipasa AA líquida",
    "division": "Línea Automatizada Equipos CB/BT",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009320",
    "nombre": "Uricostat enzimático AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009300",
    "nombre": "Albúmina AA (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009326",
    "nombre": "Amilasa 405 AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009335",
    "nombre": "Bilirrubina Directa AA liquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009334",
    "nombre": "Bilirrubina Total AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009307",
    "nombre": "Ca-color Arsenazo III AA (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009308",
    "nombre": "Colestat enzimático AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1220231",
    "nombre": "HDL Colesterol monofase AA v.2",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009401",
    "nombre": "HDL Colesterol monofase AA v.2",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1220220",
    "nombre": "LDL Colesterol monofase AA (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009331",
    "nombre": "CK NAC UV AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009333",
    "nombre": "CK-MB NAC UV AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009329",
    "nombre": "Creatinina cinética AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009301",
    "nombre": "ALP 405 AA liquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009311",
    "nombre": "Fosfatemia UV AA (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009330",
    "nombre": "gG--test cinética AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009313",
    "nombre": "Glicemia enzimática AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009321",
    "nombre": "GOT (AST) UV AA Líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009322",
    "nombre": "GPT (ALT) UV AA Liquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009336",
    "nombre": "Fer-color AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009315",
    "nombre": "LDH-P UV AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009337",
    "nombre": "Mg Color AA (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009367",
    "nombre": "Magnesium CPZ (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009317",
    "nombre": "Proti U/LCR (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009327",
    "nombre": "Proteínas Totales AA (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009318",
    "nombre": "TG Color GPO/PAP AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009319",
    "nombre": "Urea UV cinética AA líquida (K)",
    "division": "Línea Automatizada Equipo Kone",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1918005",
    "nombre": "Calibrador A plus",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1220232",
    "nombre": "HDL cholesterol Calibrator",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999744",
    "nombre": "Ammonia Calibrator",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1913261",
    "nombre": "Calibrador proteínas nivel alto Turbitest AA",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1913263",
    "nombre": "ASO Calibrador Turbitest AA",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1913264",
    "nombre": "FR Calibrador Turbitest",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1913266",
    "nombre": "Microalbuminuria Calibrador Turbitest AA",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1913267",
    "nombre": "PCR Calibrador en serie Turbitest AA",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999880",
    "nombre": "HbA1c Calibrator Turbitest AA",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999727",
    "nombre": "HbA1c enzymatic Calibrator",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999796",
    "nombre": "Cystatin C Calibrator Turbitest AA",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999732",
    "nombre": "Homocysteine Calibrator",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1950400",
    "nombre": "IgE Calibrator Turbitest AA",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999742",
    "nombre": "Ferritin Calibrator Turbitest AA",
    "division": "Calibradores",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1937553",
    "nombre": "Standatrol S-E 2 niveles",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1271553",
    "nombre": "CK MB Control 3 niveles",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999746",
    "nombre": "Ammonia Control",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999728",
    "nombre": "HbA1c enzymatic Control",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999797",
    "nombre": "Cystatin C control Turbitest AA",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999733",
    "nombre": "Homocysteine Control",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1933261",
    "nombre": "Control Inmunológico nivel 1 Turbitest AA",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1933262",
    "nombre": "Control Inmunológico nivel 2 Turbitest AA",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1937262",
    "nombre": "PCR Control N Turbitest AA",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999702",
    "nombre": "HbA1c Control Turbitest AA",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1933266",
    "nombre": "Microalbuminuria Turbitest AA Controles",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1937003",
    "nombre": "Proti U/LCR Control 2 niveles",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1950300",
    "nombre": "IgE Control Turbitest AA",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705034",
    "nombre": "Control D-Dimer",
    "division": "Controles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9331029",
    "nombre": "Dispo-System FL Cuv mix (CUBETAS para Coagulómetros CoL 1, 2 y 4/ Fibrintimer)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9331037",
    "nombre": "Cubetas con imán",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009902",
    "nombre": "CMD 600 Urine Diluent (1x125 mL)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009903",
    "nombre": "CMD 600 Cleaning Solution (6x12 mL)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009904",
    "nombre": "CMD 600 Reagent Module LT",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009665",
    "nombre": "CMD Urine Quality Control (2 x 100mL)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9313104",
    "nombre": "5206 SPACER ELECTRODE, ISE 4CH",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9313100",
    "nombre": "040-000101-00 Cl electrode",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9313101",
    "nombre": "BA34-10-63640 Reference electrode",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9313102",
    "nombre": "BA34-10-63641 K electrode",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9313103",
    "nombre": "BA34-10-63642 Na electrode",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999970",
    "nombre": "Afdaptadores Frascos 20ml CMD600 x 50",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9313113",
    "nombre": "115-020323-00 Plastuc Cuvettes (10/BOX)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1474521",
    "nombre": "WL Probe Cleanser",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009666",
    "nombre": "CMD 80 Detergent (6x2L)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999720",
    "nombre": "Acid solution",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9315502",
    "nombre": "Na electrode",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9315501",
    "nombre": "K electrode",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9315503",
    "nombre": "Cl electrode",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9315500",
    "nombre": "Reference electrode",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9313220",
    "nombre": "ISE Reagent Pack",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9313210",
    "nombre": "ISE Cleaning Solution (50mL)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9313240",
    "nombre": "Na Cleaning Solution (15mL)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009660",
    "nombre": "MR Buffer Solution (antes 9280026)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009666",
    "nombre": "CD80 Detergent",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009676",
    "nombre": "CD80 Detergent",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999745",
    "nombre": "Set de frascos CMD de 20 ml",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999754",
    "nombre": "Set de frascos CMD de 62 ml",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9280022",
    "nombre": "Na electrode, CMD 800",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9280023",
    "nombre": "Kelectrode, CMD 800",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9280024",
    "nombre": "Cl electrode, CMD 800",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9280025",
    "nombre": "Reference electrode, CMD 800",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009661",
    "nombre": "CMD Cleaning Solution",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009662",
    "nombre": "Serum Standard (High, Low)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009663",
    "nombre": "MR Urine Standard (High, Low)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009665",
    "nombre": "MR Urine Quality Control (High, Low)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705008",
    "nombre": "COR Cleanser",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1705022",
    "nombre": "Imidazole Buffer",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9339092",
    "nombre": "Cuvette (Cubetas para COR 50)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9353063",
    "nombre": "Copas de muestra estandar",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9339091",
    "nombre": "4L Plastic Bottle",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1958003",
    "nombre": "Solución de limpieza SE",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1979002",
    "nombre": "TW AA",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999551",
    "nombre": "NOION",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999601",
    "nombre": "NOION",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9353001",
    "nombre": "Cubetas de reacción (x1200) 6mm, M 2300 Plus",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9353002",
    "nombre": "Recipientes de reactivos (50 ml), M 2300 Plus",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9353003",
    "nombre": "Recipiente doble de reactivos (30 y 20 ml) M 2300 Plus",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9353006",
    "nombre": "Tubuladura de bomba peristaltica, M 1600 y M 2300 Plus",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9353007",
    "nombre": "Tubos de muestra de 13 mm. (Hasta agotar existencias)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9353009",
    "nombre": "Lámpara con zocalo, M 2300 Plus",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9990115",
    "nombre": "Lámpara 6V 20W Sin zocalo M2300",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9353013",
    "nombre": "Bloque de secado, M 2300 Plus",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9353056",
    "nombre": "Lámpara con zocalo, M1600",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9990116",
    "nombre": "Lámpara 6V 10W Sin zocalo, M1600",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9999979",
    "nombre": "Papel para metrolab 1600 DR",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9354200",
    "nombre": "Tubuladura de bomba peristaltica",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9354201",
    "nombre": "Bloque de secado6 mm",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9356130",
    "nombre": "Kit reparación bomba de secado",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9356142",
    "nombre": "Kit Tubuladura peristaltica CM250 v5",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9356167",
    "nombre": "Kit Filtros lavador",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1009279",
    "nombre": "ISE TAR Plus iones",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999719",
    "nombre": "Tensoactive",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999721",
    "nombre": "Basic Solution",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9252183",
    "nombre": "Sample cups (copillas de muestra)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9259995",
    "nombre": "Reagent bottle 50 ML (Frascos de reactivos 50 ml)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999579",
    "nombre": "Set de Frascos BT 3000 Plus 50 ml",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9259998",
    "nombre": "Reagent bottle 10 ML (Frascos de reactivos 10 ml)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999577",
    "nombre": "Set de Frascos BT 3000 Plus 10 ml",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9259999",
    "nombre": "Reagent bottle 20 ML (Frascos de reactivos 20 ml)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999578",
    "nombre": "Set de Frascos BT 3000 Plus 20 ml",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9253102",
    "nombre": "Reference electrode (Electrodo de Referencia CB 350i)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9253103",
    "nombre": "Na Electrode (Electrodo de Sodio (Na) BT 3000/ CB 350i)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9253104",
    "nombre": "K Electrode (Electrodo de Potasio (K) BT 3000 / CB 350i)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9253105",
    "nombre": "CI Electrode (Electrodo de Cloro (CI) BT 3000/ CB 350i)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9253114",
    "nombre": "Lámpara 12 V, 35 W (CB 350i)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333001",
    "nombre": "Reference electrode kit (Kit p/ electrodo de referencia)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333002",
    "nombre": "KM.F. Micro volume electrode (Potasio)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333003",
    "nombre": "Na M.F. Micro volume electrode (Sodio)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333004",
    "nombre": "Ca M.F. Micro volume electrode (Calcio)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333005",
    "nombre": "CI M.F. Micro volume electrode (Cloro)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333006",
    "nombre": "pH M.F. Micro volume electrode (PH)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333008",
    "nombre": "Li M.F. Micro volume electrode (Litio)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333010",
    "nombre": "ISE Calibrator solution 1 (Solución Calibradora 1)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333011",
    "nombre": "ISE Calibrator solution 2 & 3 (Soluciones calibradoras 2 & 3)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333014",
    "nombre": "REF Electrodes solution (Solución para electrodo Referencia)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333019",
    "nombre": "Halogen lamp EMC (Lámpara de halógeno Konelab)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333020",
    "nombre": "Multicell cuvette (Cubetas multicelda, tira c/12 celdas).",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333023",
    "nombre": "Sample cup 0.5 ml (Copillas muestra 0.5 ml)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333028",
    "nombre": "Reagent vessel 10 ml (Fcos. reactivos 10 ml)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333029",
    "nombre": "Reagent vessel 20 ml (Fcos. reactivos 20 ml)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999575",
    "nombre": "Set de frascos Konelab de 20 ml",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "9333030",
    "nombre": "Reagent vessel 60 ml (Fcos. reactivos 60 ml)",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
  {
    "idCatalogo": "1999576",
    "nombre": "Set de frascos Konelab de 60 ml",
    "division": "Consumibles",
    "marca": "Wiener Lab"
  },
 
  {
    "idCatalogo": "DK0044",
    "nombre": "T3",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0053",
    "nombre": "T3 libre",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0045",
    "nombre": "T4",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0038",
    "nombre": "T4 libre",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0013",
    "nombre": "TSH",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0053",
    "nombre": "Aldosterona",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0087",
    "nombre": "SHBG",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0012",
    "nombre": "Alfafetoproteina",
    "icono": "/assets/img/MarcadoresTumorales.png",
    "division": "Marcadores Tumorales",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0048",
    "nombre": "Tiroglobulina",
    "icono": "/assets/img/MarcadoresTumorales.png",
    "division": "Marcadores Tumorales",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0051",
    "nombre": "CEA",
    "icono": "/assets/img/MarcadoresTumorales.png",
    "division": "Marcadores Tumorales",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0054",
    "nombre": "CA 125",
    "icono": "/assets/img/MarcadoresTumorales.png",
    "division": "Marcadores Tumorales",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0055",
    "nombre": "CA 15-3",
    "icono": "/assets/img/MarcadoresTumorales.png",
    "division": "Marcadores Tumorales",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0056",
    "nombre": "CA 19-9",
    "icono": "/assets/img/MarcadoresTumorales.png",
    "division": "Marcadores Tumorales",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0073",
    "nombre": "h-NSE",
    "icono": "/assets/img/MarcadoresTumorales.png",
    "division": "Marcadores Tumorales",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0137",
    "nombre": "PSA Total",
    "icono": "/assets/img/MarcadoresTumorales.png",
    "division": "Marcadores Tumorales",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0138",
    "nombre": "PSA libre",
    "icono": "/assets/img/MarcadoresTumorales.png",
    "division": "Marcadores Tumorales",
    "marca": "DiaMetra"
  },
  {
    "idCatalogo": "DK0114",
    "nombre": "Cribado de Anticuerpos Anti-fosfolipidos",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "DiaMetra"
  }, 
  {
    "idCatalogo": "LTV 005",
    "nombre": "Vedolizumab",
    "icono": "/assets/img/LisaTracker.png",
    "division": "LISA - TRACKER",
    "marca": "Theradiag"
  },
  {
    "idCatalogo": "LTC 005",
    "nombre": "Certolizumab",
    "icono": "/assets/img/LisaTracker.png",
    "division": "LISA - TRACKER",
    "marca": "Theradiag"
  },
  {
    "idCatalogo": "LTA 005",
    "nombre": "Adalimumab",
    "icono": "/assets/img/LisaTracker.png",
    "division": "LISA - TRACKER",
    "marca": "Theradiag"
  },
  {
    "idCatalogo": "LTB 006",
    "nombre": "Bevacizumab",
    "icono": "/assets/img/LisaTracker.png",
    "division": "LISA - TRACKER",
    "marca": "Theradiag"
  },
  {
    "idCatalogo": "LTI 005",
    "nombre": "Infliximab",
    "icono": "/assets/img/LisaTracker.png",
    "division": "LISA - TRACKER",
    "marca": "Theradiag"
  },
  {
    "idCatalogo": "DE2924",
    "nombre": "Testosterona Libre",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DEH3322",
    "nombre": "17-OH-Progesterona",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DEH3344",
    "nombre": "DHEA",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DE3265",
    "nombre": "Androstenediona",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DEE8100",
    "nombre": "Metanefrina en Plasma",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DEE007",
    "nombre": "Leptin",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DE5761",
    "nombre": "Dihidrotestosterona (DHT)",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DEE1900",
    "nombre": "5-HIAA ELISA",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DEE8900",
    "nombre": "Serotonina ELISA",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DE7430",
    "nombre": "Anticuerpos anti-insulina",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DE7470",
    "nombre": "Cribado de Anticuerpos anti -fosfolipidos (IgG/IgM)",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "100-01",
    "nombre": "Secretoneurina",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DEE6600",
    "nombre": "3-CAT ELISA",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DE4434",
    "nombre": "INF-gamma humano",
    "icono": "/assets/img/Citocinas.png",
    "division": "Citocinas",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DE4640",
    "nombre": "Interleucina-6 humana (IL-6)",
    "icono": "/assets/img/Citocinas.png",
    "division": "Citocinas",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DE4641",
    "nombre": "TNF-alfa humano",
    "icono": "/assets/img/Citocinas.png",
    "division": "Citocinas",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DE4700",
    "nombre": "Interleucina-8 humana ELISA",
    "icono": "/assets/img/Citocinas.png",
    "division": "Citocinas",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DEASCG0020",
    "nombre": "Ascaris lumbricoides (IgG)",
    "icono": "/assets/img/DiagnosticoInfeccioso.png",
    "division": "Diagnóstico Infeccioso",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DETAEG0420",
    "nombre": "Taenia solium (IgG)",
    "icono": "/assets/img/DiagnosticoInfeccioso.png",
    "division": "Diagnóstico Infeccioso",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DETRIG0480",
    "nombre": "Trichinella spiralis (IgG)",
    "icono": "/assets/img/DiagnosticoInfeccioso.png",
    "division": "Diagnóstico Infeccioso",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DENO0114",
    "nombre": "Chagas (Trypanosoma cruzi) (IgG)",
    "icono": "/assets/img/DiagnosticoInfeccioso.png",
    "division": "Diagnóstico Infeccioso",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "DE4247",
    "nombre": "Epstein-Barr Virus (EBNA-1) (IgM)",
    "icono": "/assets/img/DiagnosticoInfeccioso.png",
    "division": "Diagnóstico Infeccioso",
    "marca": "Dimeditec"
  },
  {
    "idCatalogo": "302-103",
    "nombre": "Ribospin vRD",
    "icono": "/assets/img/Molecular.png",
    "division": "Molecular",
    "marca": "GenieAll"
  },
  {
    "idCatalogo": "901-048A | 901-096A",
    "nombre": "GENTiTM Kit avanzado de extracción de AND genómico a partir de varias muestras clínicas incluyendo tejidos.",
    "icono": "/assets/img/Molecular.png",
    "division": "Molecular",
    "marca": "GenieAll"
  },
  {
    "idCatalogo": "902-048 | 902-096",
    "nombre": "GENTiTM Viral ADN/ARN Kit avanzado de extracción de ADN y ARN viral, junto con el equipo de extracción automática avanzada GENTiTM basado en perlas magnéticas.",
    "icono": "/assets/img/Molecular.png",
    "division": "Molecular",
    "marca": "GenieAll"
  },
  {
    "idCatalogo": "903-048A | 903-096A",
    "nombre": "GENTiTM Kit avanzado de extracción de ADN sanguíneo a partir de sangre entera, plasma, suero, capa leucocitaria, fluido libre de células, fluidos corporales, muestras de sangre infectadas con virus o hisopados.",
    "icono": "/assets/img/Molecular.png",
    "division": "Molecular",
    "marca": "GenieAll"
  },
  {
    "idCatalogo": "108-101 | 108-152 | 108-226 | 108-201 | 108-310 | 108-326",
    "nombre": "Exgene Clinic SV Kit para el aislamiento de ADN total (genómico, mitocondrial, bacterial, parásitos o ADN viral) de tejidos, sangre entera o fluidos corporales.",
    "icono": "/assets/img/Molecular.png",
    "division": "Molecular",
    "marca": "GenieAll"
  },
  {
    "idCatalogo": "IS-4600",
    "nombre": "IDS Cortisol",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-4620",
    "nombre": "IDS Set Calibrador de Cortisol",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-5130",
    "nombre": "IDS-iSYS 17-OH Progesterona (Set de control)",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-5100",
    "nombre": "IDS-iSYS 17-OH Progesterona",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-5130",
    "nombre": "IDS-iSYS 17-OH Progesterona (Kit)",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-3700",
    "nombre": "IDS-iSYS Hormona del crecimiento humana (hGH)",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-5300",
    "nombre": "IDS-iSYS Testosterona libre",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-3900",
    "nombre": "IDS-iSYS Factor de crecimiento semejante a la insulina tipo I (IGF-I)",
    "icono": "/assets/img/Endocrinologia.png",
    "division": "Endocrinología",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-ID5001",
    "nombre": "IDS TOXO IgG",
    "icono": "/assets/img/DiagnosticoInfeccioso.png",
    "division": "Diagnóstico Infeccioso",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-ID5002",
    "nombre": "IDS TOXO IgM",
    "icono": "/assets/img/DiagnosticoInfeccioso.png",
    "division": "Diagnóstico Infeccioso",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1002",
    "nombre": "IDS Cribado de ENA",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1801",
    "nombre": "IDS Anticuerpos Anti-mitocondriales (AMA-M2)",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1901",
    "nombre": "IDS Anticuerpos Anti-tiroglobulina (anti-Tg)",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1109",
    "nombre": "IDS Jo-1",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1110",
    "nombre": "IDS Centrómero B",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1108",
    "nombre": "IDS Anticuerpos Anti-Scl-70",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1302",
    "nombre": "IDS Gliadina Desamidada IgG",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1108",
    "nombre": "IDS Gliadina Desamidada IgM",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1103",
    "nombre": "IDS SS-A-Ro 52 kDa",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1104",
    "nombre": "IDS SS-A-Ro 60kDa",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-5330",
    "nombre": "Set de control de testosterona gratuito",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-4630",
    "nombre": "Set de control de cortisol",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1030",
    "nombre": "Set de control de pantalla IDS ANA",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1501",
    "nombre": "IDS Cardiolipina IgG",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1502",
    "nombre": "IDS β2-Glicoproteína I IgG",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1601",
    "nombre": "IDS Cardiolipina IgM",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1602",
    "nombre": "IDS β2-Glicoproteína I IgM",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1105",
    "nombre": "IDS SS-B-La",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1101",
    "nombre": "IDS dsDNA IgG",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1902",
    "nombre": "IDS Anticuerpos Antiperoxidasa Tiroidea Anti-TPO",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1401",
    "nombre": "IDS t-TG IgG",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  },
  {
    "idCatalogo": "IS-AI1303",
    "nombre": "IDS t-TG IgA",
    "icono": "/assets/img/DiagnosticoAutoinmune.png",
    "division": "DIAGNÓSTICO AUTOINMUNE",
    "marca": "ids"
  }

  ];

  pageSize = 15;
  currentPage = 1;
  searchTerm = '';
  divisionFilter: string | null = null;
  marcaFilter: string[] = [];

  get filteredProductos() {
    const term = this.searchTerm.toLowerCase().trim();
    return this.productos.filter(p => {
      const matchesSearch = !term ||
        p.idCatalogo.toLowerCase().includes(term) ||
        p.nombre.toLowerCase().includes(term) ||
        p.division.toLowerCase().includes(term) ||
        p.marca.toLowerCase().includes(term);
      const matchesDivision = !this.divisionFilter || p.division === this.divisionFilter;
      const matchesMarca = this.marcaFilter.length === 0 || this.marcaFilter.includes(p.marca);
      return matchesSearch && matchesDivision && matchesMarca;
    });
  }

  get paginatedProductos() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredProductos.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProductos.length / this.pageSize);
  }

  get visiblePages(): number[] {
    let start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, start + 4);
    start = Math.max(1, end - 4);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  toggleDivision(division: string): void {
    this.divisionFilter = this.divisionFilter === division ? null : division;
    this.currentPage = 1;
  }

  sidenavOpen = false;
  toggleSidenav(): void { this.sidenavOpen = !this.sidenavOpen; }
  onSearch(): void { this.currentPage = 1; }
  onMarcaChange(): void { this.currentPage = 1; }
  toggleMarca(marca: string): void {
    const idx = this.marcaFilter.indexOf(marca);
    this.marcaFilter = idx === -1
      ? [...this.marcaFilter, marca]
      : this.marcaFilter.filter(m => m !== marca);
    this.currentPage = 1;
  }
  prevPage(): void { if (this.currentPage > 1) this.currentPage--; }
  nextPage(): void { if (this.currentPage < this.totalPages) this.currentPage++; }
  goToPage(page: number): void { this.currentPage = page; }
}
