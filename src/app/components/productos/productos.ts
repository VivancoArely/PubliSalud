import { Component, AfterViewInit} from '@angular/core';
declare var M:any

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class Productos  implements AfterViewInit {
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
    "idCatalogo": "1293205",
    "nombre": "Chagatest HAI *",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "WIENER"
  },
  {
    "idCatalogo": "1293096",
    "nombre": "Chagatest ELISA lisado *",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "WIENER"
  },
  {
    "idCatalogo": "1293257",
    "nombre": "Chagatest ELISA recombinante V.4.0 *",
    "icono": "/assets/img/EnfermedadesInfecciosas.png",
    "division": "ENFERMEDADES INFECCIOSAS",
    "marca": "WIENER"
  },
  {
    "idCatalogo": "PT-34",
    "nombre": "MULTIBAC PARA BACTERIAS GRAM (+)",
    "icono": "/assets/img/bacteria.png",
    "division": "BACTERIOLOGÍA",
    "marca": "IDLAB"
  },
  {
    "idCatalogo": "PT-35",
    "nombre": "MULTIBAC PARA BACTERIAS GRAM (-)",
    "icono": "/assets/img/bacteria.png",
    "division": "BACTERIOLOGÍA",
    "marca": "IDLAB"
  },
  {
    "idCatalogo": "PT-36",
    "nombre": "MULTIBAC CON ANTIBIOTICOS COMBINADOS",
    "icono": "/assets/img/bacteria.png",
    "division": "BACTERIOLOGÍA",
    "marca": "IDLAB"
  },
  {
    "idCatalogo": "PT-37",
    "nombre": "SUSPIBAC A",
    "icono": "/assets/img/bacteria.png",
    "division": "BACTERIOLOGÍA",
    "marca": "IDLAB"
  },
  {
    "idCatalogo": "PT-38",
    "nombre": "SUSPIBAC PN",
    "icono": "/assets/img/bacteria.png",
    "division": "BACTERIOLOGÍA",
    "marca": "IDLAB"
  },
  {
    "idCatalogo": "PT-39",
    "nombre": "SUSPIBAC OXI",
    "icono": "/assets/img/bacteria.png",
    "division": "BACTERIOLOGÍA",
    "marca": "IDLAB"
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
