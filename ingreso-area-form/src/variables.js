const empresas = ['MLP','AMSA','ACEROS CHILE S.A.','ADM-PLANNING CONSULT. LTDA.','AEROCARDAL LIMITADA','AGGREKO CHILE LIMITADA','ALEJANDRO LEONEL FERRUZ TOLEDO CONSULTORES Y AUDITORES E.I.R.L.','ALEXANDER ERNST-HEINRICH KLEINERT','ALFRED H. KNIGHT INTERNATIONAL LIMITED CHILE LIMITADA','AMECO CHILE S.A.','ANALISIS AMBIENTALES S.A.','ANDEAN MANAGEMENT S.A.','ANDESMINERALS CORP SpA','ANDRITZ CHILE LTDA','ARAMARK SERVICIOS MINEROS Y REMOTOS','ARRIGONI INGENIERIA Y CONSTRUCCION','ASES. TEC. EN MONTANA PUCARA SA','ASESORIAS Y SERVICIOS BIOMAPU SPA','ASESORIAS Y SERVICIOS INNOVAXXION S','AT-EME S.A.','AUSENCO CHILE LTDA.','B. BOSCH S.A.','BACKUP INGENIERIA LTDA','Bailac','BECHTEL CHILE LTDA.','BESALCO MAQUINARIAS SA','BGC INGENIERIA LTDA','BMT SOUTH AMERICA SPA','Bonilla','BORYBOR LTDA.','BUREAU VERITAS CHILE S.A.','CADETECH S. A','CAROLINA OLIVARES EIRL','CAUCHOS INDUSTRIALES S.A.','CDO SERVICIOS EMPRESARIALES SPA','CENTRO DE DESARROLLO EMPRESARIAL','CENTRO DE ECOLOGIA APLICADA LTDA','CHESTERTON INTERNATIONAL CHILE','CICAL CHILE SPA','COASIN CHILE S.A.','COLOMA CONSULTORES LIMITADA','COMERCIAL INGERSOLL RAND (CHILE) LI A','COMERCIAL MEDIO AMBIENTAL CHILE','COMERCIALIZADORA FOURTHANE LIMITADA','COMERCIALIZADORA LUAGHER LTDA','COMERCIALIZADORA MAD S.A.','COMERCIALIZADORA PROTORQ S.A.','COMPAÑÍA ELECTRO METALÚRGICA S.A.','COMUNICACIONES SUR MEDIA SPA','CONSTRUCCIÓN LUIS MARTÍN VEGA FAJAR PRESA INDIVIDUAL DE RESPONSABI','CONSTRUCCION Y OBRAS CIVILES PIMAT OLIVA LTDA.','CONSTRUCTORA IS LIMITADA','CONSULTORA DE BOSQUES LIMITADA','CONSULTORA SYMPATIA SPA','CONTAC INGENIEROS LTDA.','CONTITECH CHILE S.A','CONTRUCTORA FV LTDA','CONVERS SERVICES SPA','COOPERATIVA DE DESARROLLO SUST','CORP DE CAP DE LA CONSTRUCCION','CORPORACION TEC. DE FLUIDOS S.A.','CORPORACION VIAL S.A.','CUMBRES CRISTALES Y ALUMINIOS OSCAR ERTO PASTÉN TORRES EMPRESA IND','CYD INGENIERIA LIMITADA','DETROIT S.A.','DHSIGA S.A','DIGITAL FILMS LTDA.','DIRECTV CHILE TELEVISION LTDA','DISAL CHILE SANITARIOS PORTABLES LI A','DUST A SIDE CHILE SA','E-MINING TECHNOLOGY S. A.','EATON INDUSTRIES CHILE SPA','EIRL JOSE CASTILLO COLLAO','EMERSON ELECTRIC CHILE LTDA.','EMIN INGENIERIA Y CONSTR. S.A.','EMPRESA CONSTR. PETRA CIA. LTDA.','EMPRESA CONSTRUCTORA FE GRANDE','EMPRESA DE SERVICIOS INDUSTRIALES A BONILLA Y COMPANIA LIMITADA','EMPRESA DE SERVICIOS INTEGRALES POR OS LIMITADA','EMPRESA NAC. DE ENERGIA ENEX S.A','ENAEX SERVICIOS S.A.','ENDRESS + HAUSER CHILE LIMITADA','ENRIQUE VEGA GUERRERO INGENIERIA Y RUCCION EMPRESA INDIVIDUAL DE','ENTEL CHILE S.A.','EPIROC CHILE S.A.C','EQUIPOS TECNICOS Y DE COMUN. SA.','EQUIPOS Y SERVICIOS VIVELO LTDA','ESM','EST SERVICE LTDA.','EXCAVACIONES Y PROY DE CHILE S.A.','FABRICACION Y COMERCIALIZACIÓN DE P TOS METÁLICOS MECANIZADOS LIMITADA','FIGUEROA Y DIAZ ING ASOCIADOS SA','FLSMIDTH S.A.','FLUITEK CHILE S. A.','FTF SERVICIOS S.A.','FUNDACION CHILE','FUNDICION TALLERES LIMITADA.','GARMENDIA MACUS S.A.','GEO ATACAMA CONSULTORES LIMITADA','GEOBLAST S.A.','GEOCOM S.A.','GEOSUPPORT SOCIEDAD S.A.','GEOTEC-BOYLES BROS S.A.','GESTION AMBIENTAL S.A','GILDA GALVEZ ARACENA','GLOBAL ELECTRIC INGENIERIA LTDA','GLOBAL MAINTENANCE CONSULTING','GOLDER ASSOCIATES S.A.','GUINEZ ING. LTDA','GUSTAVO ARREDONDO CORTES EIRL','HIGHSERVICE INGENIERIA Y CONSTRUCCI','HUERTA Y POBLETE LIMITADA','I-NOVA IMPORT-EXPORT SPA','Icafal Sicomag','IMA AUTOMATIZACIÓN LTDA.','IMCD INGENIERÍA Y CONSTRUCCIÓN SPA','IMMERSIVE TECHNOLOGIES CHILE S.A','IMP LIB PUB Y TRA RGO EDO CHAHUAN S','IMP.Y SERV.ADVANCED COMP.TEC.S.A','IMS SPA','INDURA S.A.','INDUSTRIAL SUPPORT COMPANY LTDA.','ING INSPEC TEC BSQC SA','ING SERV Y CONST SOC DE RESP LTD','ING Y SERV PATRICIO O. SALAZAR','ING Y TRANSPORTES ROJAS LTDA','INGEN. Y CONST. INCOLUR LTDA.','INGENIERIA CONSTRUCCION Y MONTA','INGENIERIA MANTENIMIENTO Y AUTOMATI DE PROCESOS INDUSTR LTDA','INGENIERIA Y CONSTRUCCION HADYSIC L DA','INGENIERIA Y GEOFISICA LTDA','INGENIERÍA Y SERVICIOS CHOAPA LIMIT','INSTITUTO NACIONAL DE SEGURIDAD Y S','INVERSIONES SANTA ELIANA LIMITADA','INVERSIONES Y TRANS ROJAS LTDA','ITT FLUID TECHNOLOGY S A','JAIME ILLANES Y ASOC CONSULTORES','JHG INGENIERIA LTDA.','JORGE MIRANDA ALVARADO','JORGE OLIVA OLIVA','JOSE BASUALDO S MIN Y TRANS EIRL','JOY GLOBAL (CHILE) S.A.','KEYPRO INGENIERIA SA','KINESIOLOGIA INTEGRAL LIMITADA','KOMATSU CHILE S.A.','KSB CHILE S.A.','KUPFER HERMANOS S.A.','LUBRISIDER CHILE S.A.','LUIS CALDERON RAMIREZ','M Y C OBRAS Y SERVICIOS LIMITADA','MAESTRANZA DIESEL S A','MANAGEMENT ENTERPRISE VENTURE-OPERA CONSULTING Y INVESTMENTS S.A.','MANTENCIONES BOLT SPA','MAQUINARIAS OLMUE LTDA.','MARCO INDUSTRIAL SPA.','MASTER TEC SERVICES LIMITADA','MAURICIO SANCHEZ VENECIA EIRL','MELON HORMIGONES S A','METSO CHILE SPA','MGDL SPA','MI ROBOTIC SOLUTIONS SA','MICHELIN CHILE LTDA','MINCON CHILE S.A.','MINING SAFETY SPA','MODULAR MINING SYSTEMS INC. Y CÍA.','MOTION METRIC LATAM SPA','MOTOROLA SOLUTIONS CHILE S.A.','MOVIMIENTO DE TIERRA Y CONSTRUCCIÓN','MUTUAL DE SEGURIDAD C.CH.C.','N Y M CONTROL Y OPTIMIZACION S.A.','NALCO IND SERVICES CHILE LTDA','NOVAMINE CHILE SPA','NUEVAS VIAS, INGENIERIA Y SERVICIOS','OCCIDENTAL CHEMICAL CHILE LTDA.','ONIX LTDA','OPTIMAL SOLUTIONS S.A.','OUTOTEC (CHILE) S.A.','POCH AMBIENTAL S.A.','POZOS PROFUNDOS S. A.','PRESTACIONES INDUSTRIALES PREIN CHI LTDA','PRINTEC S.A.','PROCLEAN MG S.A.','PROMET SERVICIOS SPA','PROPIPE S.A.','PYB INGENIERÍA Y CONSTRUCCIÓN SPA','QUÍMICA DEL SUR Y CÍA. LTDA.','R Y M SERVICIOS LIMITADA','R Y Q INGENIERIA S A','R Y T AMBIENTE LTDA.','RECICLAJE CHOAPA SIGLO XXI LIMITADA','REMA TIP TOP LATIN AMERICA SPA','RENTAEQUIPOS LEASING SA','RFP LOGISTICA LIMITADA','RICARDO DANIEL DONOSO LÓPEZ','RMC SERVICIOS LIMITADA','ROBERT BOSCH S.A','ROCMIN SERVICIOS MINEROS SPA','RODRIGO PEÑA DIAZ, ASESORIAS Y SERV EIRL','RUBEN ESTEBAN AGUILERA ARANCIBIA','RUSSELL MINERAL EQUIPMENT SA','SAAVEDRA Y ABALO M&S LTDA.','SAN PEDRO INGENIERIA S.A.','SER D SEG CON MANT A VER ALBATRO','SERV ING RAUL VARGAS T EIRL','SERV. INDUSTRIALES SPECTRUM LTDA','SERVICIO INTEGRAL A LA MINERIA L','SERVICIOS BONILLA Y LOPEZ Y COMPAÑI ITADA','SERVICIOS DE INGENIERÍA SIGREN Y SI S.A.','SERVICIOS E INVERSIONES PRAMAR LTDA','SERVICIOS GEO INTEGRALES Y TECNO','SERVICIOS INTEGRADOS ALFREDO TOLEDO','SERVICIOS INTREGRALES DE AUTOMATIZA CONTROL Y COMPUTACION LIMITADA','SERVICIOS MINEROS TECNIPAK LTDA','SERVICIOS SPM INGENIEROS','SERVISUB INGENIEROS LTDA.','SGS CHILE LTDA.','SGS MINERALS S.A.','SHAW ALMEX CHILE SA','SIGA INGENIERIA Y CONSULTORIA S.A.','SIOM SPA','SISDEF LTDA.','SITRANS,SERV INTEG DE TRANSPOR','SOC COMERCIAL POLYBANDAS LTDA','SOC DE INNOVACION Y TRANSF TECNO','SOC DE TPTES CAVILOLEN LTDA','SOC TECNICA DE INSPECCION S A','SOC TRAN AGRIC Y CONST VILLALOBO','SOC. DE TRANSPTE. ILZAUSPE LTDA.','SOC. SERV. WELDER LTDA.','SOCIEDAD ARAYA MOLL Y SALDIAS LIMIT','SOCIEDAD COMERCIAL ELIPSE LIMITADA','SOCIEDAD DACAF INGENIERÍA, CONSTRUC Y SERVICIOS LIMITADA','SOCIEDAD DE SERVICIO DE CONTROL LAB LIMITADA','SOCIEDAD ELECTRICA HECSO LTDA','SOCIEDAD P Y C TECNOLOGIA LTDA.','SODEXO CHILE SPA','SOTRASAL LTDA.','SOURCING SPA','SPAT Y CIA LTDA','SURVEYING CONTROL SYSTEMS LIMITADA','TANDEM S.A.','TECNICA NAC. DE SS, ING., CONSTR','TECNO EN TRANSP DE MINERALES SA','TECNO FAST S.A.','TECNOLOGIA EN MONTAJE Y SERVICIO','TECNYSOL SPA','TEGA ACOTEC S.A.','TEKNORIEGO SOLUCIONES AMBIENTALES S','TERMIKA SERVICIO DE MANTENCION S.A.','THYSSENKRUPP ING CHILE LTDA','TRANE DE CHILE S.A.','TRANSPORTE GEOCAR LTDA.','TRANSPORTES SIMUNOVIC LTDA','TRAZADO NUCLEAR E INGENIERIA LTD','TRIPAN SA','TUNNING INGENIERIA LIMITADA','ULTRAMAR AGENCIA MARITIMA LTDA.','UNIVERSIDAD DE CHILE','VALOR AMBIENTAL, SERVICIOS DE GESTI AMBIENTAL LIMITADA','VALTECK CHILE SPA','VIBA PRODUCCIONES LTDA','VULCO S A','WESTFIRE SUDAMERICA SPA','WILUG LTDA.','WORLD SURVEY SERVICES S.A.','WSP CONSULTING CHILE LIMITADA','XEROX CHILE S.A.','Otra'];

const areas = ['Flotación - Colectiva','Flotación - Flotación general','Flotación - PLF','Flotación - Selectiva','Fluidos - Acueducto Mina','Fluidos - Espesadores','Fluidos - Fluídos general','Fluidos - Pozos SCR','Fluidos - Sistema de Agua fresca','Fluidos - STC','Fluidos - STR','Fluidos - Tranque Quillayes','Molienda  - Gravilla','Molienda  - Molienda general','Molienda  - Pebbles','Molienda - Planta de cal','Molienda - Primaria','Molienda - Secundaria','Molienda - Servicios','Molienda - Stockpile','Tranque - Áreas no Operativas','Tranque - Batería de Ciclones','Tranque - Canales de Contorno','Tranque - Canaleta de Relaves','Tranque - Cubeta','Tranque - Drenes y Pozos PRP','Tranque - Muro de Arena','Tranque - Sistema de Balsas y recirculación 1','Tranque - Tranque general']

const ArrRiesgos = ['HVCC ESO: Gases, ruido y polvo','ERFT1 - Pérdida de control de vehículo','ERFT2 - Pérdida de control de equipo ','ERFT3 - Interacción Personas Equipos y Vehículos','ERFT4 - Caída de Roca / Falla de Terreno','ERFT6 - Pérdida de control en maniobras de izaje','ERFT7 - Pérdida de equilibrio / Caída desde altura','ERFT8 - Falla Estructural','ERFT9 - Caída de objeto','ERFT10 - Contacto con energía eléctrica','ERFT11 - Liberación descontrolada de energía','ERFT12 -Espacio confinado','ERFT13 - Atrapamiento con partes móviles','ERFT14 - Contacto con sustancias peligrosas','ERFT15 - Incendio'];

const imagesUrl =["GasesRuidoPolvo.png","PerdidadeControlDelVehiculo.png","PerdidaDeControldeEquipo.png","InteraccionPersonasEquiposVehiculos.png","CaidaDeRoca.png","PerdidaDeControlenManiobrasDeIzaje.png","PerdidaDeEquilibrioCaidaDesdeAltura.png","FallaEstructural.png","CaidaDeObjeto.png","ContactoConEnergiaElectrica.png","LiberacionDescontroladaDeEnergia.png","EspacioConfinado.png","AtrapamientoConPartesMoviles.png","ContactoConSustanciasPeligrosas.png","Incendio.png"];

const controlesUrl =["controlA.png","control2.png","control3.png","control4.png","control5.png","control6.png","control7.png","control8.png","control9.png","control10.png","control11.png","control12.png","control13.png","control14.png","control15.png"];

const nombresResp = {'Abraham Alafaro':'aalfaro@pelambres.cl',
'Adrianus Stupers':'astupers@aminerals.cl',
'Aldo Badilla':'abadilla@pelambres.cl',
'Alejandra Neveu':'aneveu@pelambres.cl',
'Alex Stegman Hunter':'astegman@pelambres.cl',
'Alvaro Izquierdo Parga':'aizquierdo@aminerals.cl',
'Alvaro Navarro':'anavarro@pelambres.cl',
'Analuisa Perez Osses':'aperezo@pelambres.cl',
'Andrea Fuentes Solar':'afuentes@pelambres.cl',
'Andrea Sanhueza':'asanhueza@pelambres.cl',
'Andrés Araneda':'aaraneda@pelambres.cl',
'Andrés Araneda':'araneda@pelambres.cl',
'Ariel Obreque':'aobreque@pelambres.cl',
'Blas Santana Ramirez':'bsantana@pelambres.cl',
'Camila Valdes Salinas':'cvaldes@pelambres.cl',
'Camilo Viancos':'cviancos@pelambres.cl',
'Carlos Bravo':'cbravo@pelambres.cl',
'Carlos Espinoza':'caespinoza@pelambres.cl',
'Carlos Lopez':'clopez@pelambres.cl',
'Carlos Navia Baeza':'cnavia@pelambres.cl',
'Carlos Ruarte Araya':'cruarte@pelambres.cl',
'Carlos Vera':'carlosvera@pelambres.cl',
'César Carrasco':'ccarrascoa@pelambres.cl',
'Cesar Vásquez Aravena':'cvasquez@pelambres.cl',
'Chirley Coo':'ccoo@pelambres.cl',
'Christian Gonzalez':'cgonzalez@pelambres.cl',
'Christian Sanguinetti':'csanguinetti@pelambres.cl',
'Christian Veliz':'cvelizv@pelambres.cl',
'Christian Venegas':'cvenegas@aminerals.cl',
'Claudio Calderon Aguirre':'ccalderon@pelambres.cl',
'Claudio Corvalan':'ccorvalan@aminerals.cl',
'Claudio Perez':'cperez@pelambres.cl',
'Cristian Bruna':'cbruna@pelambres.cl',
'Cristian Leiva':'cleivav@pelambres.cl',
'Cristian Rojas':'cr@akonsulting.cl',
'Cristian toledo':'ctoledo@pelambres.cl',
'Daniel Arevalo':'darevalo@pelambres.cl',
'Daniel Quiñones':'hidquinones@eeccmlp.cl',
'Daniel Rojas De la Fuente':'drojas@pelambres.cl',
'Daniela Barrios Carvajal':'dbarriosc@pelambres.cl',
'Daniela Gonzalez Ponce':'dgonzalezpo@pelambres.cl',
'Darlin Viveros':'dviveros@pelambres.cl',
'Diego Carrasco':'dcarrasco@pelambres.cl',
'Diego Gonzalez Kovacic':'dgonzalezk@aminerals.cl',
'Edgardo Rivera':'erivera@aminerals.cl',
'Eduardo Gajardo':'egajardo@pelambres.cl',
'Eduardo Gallardo':'egallardo@pelambres.cl',
'Eduardo Silva':'edsilva@pelambres.cl',
'Edward Garces':'teaegarces@eeccmlp.cl',
'Eleodoro Jerez Soto':'ejerez@pelambres.cl',
'Elizabeth Jofré':'ejofres@pelambres.cl',
'Erick Duarte':'eduarte@pelambres.cl',
'Erik Navarro':'enavarro@pelambres.cl',
'Erwin Ramirez':'eramirezg@pelambres.cl',
'Esteban Avalos Rozas':'eavalos@pelambres.cl',
'Esteban Matute':'ematute@pelambres.cl',
'Evelyn Diaz':'ediaz@pelambres.cl',
'Felipe Carmach Iturrieta':'fcarmach@pelambres.cl',
'Felipe Comparini':'fcomparini@pelambres.cl',
'Felipe Figueroa':'ffigueroam@pelambres.cl',
'Felipe Henriquez':'fhenriquez@pelambres.cl',
'Felipe Soto':'fsoto@pelambres.cl',
'Fernando Perez':'fperez@pelambres.cl',
'Fernanda Aranda':'faranda@pelambres.cl',
'Fernando Marín':'fmarin@pelambres.cl',
'Francicsco Torres':'ftorres@pelambres.cl',
'Francisco Abbott':'fabbott@pelambres.cl',
'Francisco Gonzales Diaz':'francisco.gonzalez@pelambres.cl',
'Francisco Seguel Plaza':'fseguel@pelambres.cl',
'Franco Rivera Pino':'frivera@pelambres.cl',
'Freddy Hauyon':'fhauyon@pelambres.cl',
'Gerad Pascual':'gpascual@pelambres.cl',
'Gerando Cortez':'gcortez@pelambres.cl',
'Gerson Villegas':'gvillegas@pelambres.cl',
'Giorgo Calfa Luna':'gcalfa@aminerals.cl',
'Gonzalo Diaz':'gdiazc@pelambres.cl',
'Gonzalo Labbe Kohler':'glabbe@pelambres.cl',
'Gonzalo Ulloa':'gulloa@pelambres.cl',
'Gustavo Mendoza':'gmendoza@aminerals.cl',
'Harold Bolaños':'hbolanos@pelambres.cl',
'Hecto lazo':'hlazo@pelambres.cl',
'Hector Fuentes Vargas':'hfuentesv@pelambres.cl',
'Héctor Jimenez Aguirre':'hjimenez@pelambres.cl',
'Hector Tapia':'htapia@pelambres.cl',
'Héctor Vilches':'hvilches@pelambres.cl',
'Horacio Saavedra':'teahsaavedra@eeccmlp.cl',
'Ivana Kubat Malatto':'ikubat@pelambres.cl',
'Javier Alvarez':'jalvarez@pelambres.cl',
'Javier Dharmawidjaja Muñoz':'jadharmawidjaja@pelambres.cl',
'Javier Morales':'jmorales@pelambres.cl',
'Javier Soto Espinoza':'teajsoto@eeccmlp.cl',
'Jennifer Villalobos':'jvillalobo@pelambres.cl',
'Jerson Villegas':'jvillegas@pelambres.cl',
'Jimmy Madrid':'jmadrid@pelambres.cl',
'Jimmy Ramos Araya':'jramos@pelambres.cl',
'Jorge Albarrán Cid':'jalbarran@pelambres.cl',
'Jorge Caiseo':'jcaiseo@pelambres.cl',
'Jorge Dharmawidjaja':'jdharmawid@pelambres.cl',
'Jorge Gajardo':'jgajardo@pelambres.cl',
'Jorge Olivares':'jolivaresj@pelambres.cl',
'Jorge Ulloa':'joulloa@pelambres.cl',
'Jorge Urrea':'jurrea@aminerals.cl',
'Jorge Vallejos':'jvallejosg@aminerals.cl',
'Jose Hernández':'jbhernandez@pelambres.cl',
'José Hidalgo':'jhidalgo@pelambres.cl',
'José Luis Calderon':'jcalderon@aminerals.cl',
'José Reyes Baeza':'jreyesb@pelambres.cl',
'José Robles':'jrobles@aminerals.cl',
'Jose Tomas Martínez Deck':'jmartinezd@pelambres.cl',
'Juan Astudillo Barraza':'jastudillo@pelambres.cl',
'Juan Jose Donoso':'jdonoso@pelambres.cl',
'Juan Pablo Bravo':'jbravo@pelambres.cl',
'Juan Pablo Salinas Salgado':'jsalinas@pelambres.cl',
'Juan Peralta':'jperaltao@pelambres.cl',
'Juan Velázquez Farias':'jvelasquez@pelambres.cl',
'Julio Cesar Avaca':'javaca@aminerals.cl',
'Karen Dunsmorer':'kdunsmorer@pelambres.cl',
'Karina Tapia Ovalle':'ktapia@pelambres.cl',
'katerine granado':'kgranados@pelambres.cl',
'Katherine Araya':'karaya@pelambres.cl',
'Laura Ramirez':'lramireze@pelambres.cl',
'Lenin castillo':'lecastillo@pelambres.cl',
'Liduvina Rodriguez':'lrodriguezp@pelambres.cl',
'Lilian Pasten':'lpasten@aminerals.cl',
'Lisandro Varas':'lvaras@pelambres.cl',
'Luciano Croxatto':'lcroxatto@pelambres.cl',
'Luis Agurto Guerrero':'lagurto.ryq@aminerals.cl',
'Luis Figueroa ferrada':'lfigueroa@pelambres.cl',
'Luis Maldonado':'lmaldonado@pelambres.cl',
'Luis Menares Ortiz':'lmenares@pelambres.cl',
'Luis Zuleta Retamal':'lzuletar@pelambres.cl',
'Magdiel Lara Camilla':'mlara@pelambres.cl',
'Marcela Poulain Zapata':'mpoulain@pelambres.cl',
'Marcelo Sepúlveda':'jmsepulveda@aminerals.cl',
'Marcia Navarro':'mnavarrom@aminerals.cl',
'Marcos Valenzuela':'mvalenzuela@pelambres.cl',
'Mario Moscoso':'mmoscoso@pelambres.cl',
'Mario Ramos':'mramos@pelambres.cl',
'Matias Martinez Mantzke':'mmartinez@pelambres.cl',
'Mauricio Guzman':'mguzman@pelambres.cl',
'Maximiliano Vivencio':'mvicencioa@aminerals.cl',
'Miguel Alfaro Carrizo':'malfaro@aminerals.cl',
'Natalia Barerra':'nbarrera@pelambres.cl',
'Nelson Riquelme':'nriquelme@pelambres.cl',
'Nelson Rojas':'nrojas@pelambres.cl',
'Nicole Luppichini':'nluppichini@aminerals.cl',
'Omar Villegas':'ovillegas@pelambres.cl',
'Orozimbo Salas Escobar':'osalas@pelambres.cl',
'Pablo Moreno':'pmoreno@pelambres.cl',
'Pablo Silva Godoy':'psilvag@aminerals.cl',
'Pablo Tapia Tordecilla':'ptapiat@pelambres.cl',
'Paola Henríquez':'phenriquezr@pelambres.cl ',
'Patricio Matamala Sanhueza':'pmatamala@pelambres.cl',
'Patricio Toledo':'ptoledo@pelambres.cl',
'Patricio Zuñiga Ortega':'pzuniga@pelambres.cl',
'Paula Morales Parra':'pmoralesp@pelambres.cl',
'Paulina Soto':'psotoh.ryq@aminerals.cl',
'Paulo Callejas Rojo':'pcallejas@pelambres.cl',
'Pedro Carrasco':'pcarrasco@pelambres.cl',
'Pedro Toledo':'ptoledoc@pelambres.cl',
'Pilar Saez':'psaez@pelambres.cl',
'Ramon Robles':'rrobles@pelambres.cl',
'Ricardo cardenas':'rcardenas@pelambres.cl',
'Roberto Briceño':'rbricenos@pelambres.cl',
'Roberto Nilo':'rnilo@pelambres.cl',
'Rocío Antúnez García':'rantunez@pelambres.cl',
'Rodrigo Águila Riquelme':'raguila@pelambres.cl',
'Rodrigo Bernal':'rbernal@pelambres.cl',
'Rodrigo Garces':'rgarces@pelambres.cl',
'Rodrigo Hills':'rhills@pelambres.cl',
'Rodrigo Orrego':'rorrego@pelambres.cl',
'Rodrigo Rothen Veliz':'rrothen@pelambres.cl',
'Sandra Guzmán':'sguzmanb@pelambres.cl',
'Sebastian Carvajal':'scarvajall@pelambres.cl',
'Sebastián Fredes':'sfredes@pelambres.cl',
'Sebastián Morales':'aveliz@pelambres.cl',
'Sebastián muñiz':'smuniz@pelambres.cl',
'Sebastián Villagra Baldizan':'svillagra@pelambres.cl',
'Sergio Vásquez':'svasquez@pelambres.cl',
'Thamara Brown Gomila':'tbrown@pelambres.cl',
'Tomas Posada':'tposada@pelambres.cl',
'Valeria Cornejo':'vcornejov@pelambres.cl',
'Victor Candia':'vcandia@pelambres.cl',
'Victor Montecinos Castillo':'vmontecinos@aminerals.cl',
'Victor Urra Araujo':'vurra@pelambres.cl',
'Victor Valdebenito':'vvaldebenito@pelambres.cl',
'Yelixa Oyarzún':'yoyarzun@pelambres.cl',
'Yerko Fernández Ponce':'yfernandez@pelambres.cl'};

export{
    empresas,
    areas,
    ArrRiesgos,
    imagesUrl,
    controlesUrl,
    nombresResp
};
