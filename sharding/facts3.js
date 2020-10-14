db = db.getSisterDB("finanzas");
db.facturas.insert([
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1000
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1002
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1003
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1001
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1006
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1005
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1007
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1004
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1008
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1011
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1009
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1010
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1012
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1013
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1014
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1015
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1016
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1017
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1018
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1020
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1019
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1022
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1023
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1024
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1025
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1021
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1027
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1026
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1029
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1028
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1030
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1032
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1031
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1033
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1034
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1036
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1035
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1037
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1039
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1038
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1040
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1041
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1042
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1043
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1044
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1046
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1045
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1047
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1048
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1049
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1050
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1051
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1053
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1052
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1054
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1055
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1056
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1057
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1058
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1059
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1060
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1061
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1062
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1063
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1064
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1067
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1068
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1069
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1070
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1071
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1065
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1072
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1073
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1074
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1075
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1066
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1076
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1077
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1078
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1079
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1081
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1080
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1082
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1083
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1084
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1085
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1086
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1088
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1087
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1090
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1089
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1091
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1092
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1093
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1094
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1095
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1096
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1097
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1098
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1099
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1100
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1101
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1102
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1103
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1104
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1105
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1106
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1107
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1109
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1108
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1112
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1113
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1114
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1110
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1111
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1115
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1116
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1118
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1117
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1119
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1120
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1122
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1121
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1123
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1125
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1124
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1126
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1127
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1128
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1129
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1130
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1131
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1132
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1133
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1134
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1135
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1136
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1137
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1139
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1138
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1140
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1142
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1141
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1143
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1145
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1144
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1146
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1147
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1148
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1149
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1150
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1151
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1154
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1153
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1155
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1156
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1157
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1159
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1160
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1158
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1163
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1161
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1164
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1166
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1165
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1168
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1167
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1152
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1169
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1170
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1173
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1171
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1172
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1174
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1175
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1177
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1176
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1178
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1180
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1162
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1179
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1181
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1182
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1183
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1184
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1185
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1187
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1186
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1188
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1189
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1191
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1190
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1192
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1194
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1193
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1195
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1196
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1198
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1197
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1199
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1200
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1201
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1203
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1202
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1204
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1206
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1205
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1209
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1207
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1208
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1210
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1211
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1212
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1213
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1215
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1214
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1217
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1218
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1219
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1220
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1216
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1221
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1222
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1223
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1225
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1224
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1226
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1227
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1229
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1228
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1230
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1231
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1232
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1233
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1235
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1234
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1237
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1236
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1238
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1240
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1239
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1241
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1244
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1242
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1243
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1245
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1246
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1250
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1249
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1251
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1253
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1252
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1254
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1255
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1257
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1256
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1247
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1248
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1258
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1259
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1260
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1261
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1262
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1264
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1263
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1265
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1266
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1268
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1267
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1270
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1269
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1273
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1275
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1274
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1276
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1272
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1277
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1278
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1279
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1280
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1281
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1282
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1283
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1284
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1285
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1287
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1271
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1288
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1290
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1289
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1291
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1292
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1293
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1294
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1295
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1296
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1297
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1286
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1298
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1299
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1300
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1301
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1302
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1303
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1304
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1305
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1306
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1307
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1308
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1309
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1310
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1311
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1312
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1313
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1314
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1315
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1316
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1317
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1318
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1319
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1320
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1321
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1323
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1322
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1324
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1325
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1326
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1327
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1328
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1329
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1330
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1332
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1333
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1334
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1335
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1336
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1337
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1338
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1331
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1339
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1340
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1341
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1342
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1343
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1344
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1345
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1346
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1348
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1347
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1349
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1350
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1351
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1353
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1352
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1354
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1356
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1355
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1357
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1358
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1360
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1359
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1361
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1363
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1362
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1365
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1364
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1366
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1367
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1368
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1369
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1370
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1371
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1372
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1373
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1374
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1375
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1376
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1377
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1378
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1379
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1380
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1381
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1382
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1384
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1383
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1385
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1386
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1387
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1388
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1389
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1391
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1390
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1392
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1393
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1394
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1395
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1396
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1398
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1399
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1401
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1402
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1403
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1400
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1397
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1405
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1404
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1406
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1407
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1408
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1409
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1410
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1411
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1414
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1412
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1413
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1415
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1416
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1417
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1420
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1418
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1419
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1421
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1423
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1422
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1424
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1425
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1426
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1428
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1429
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1430
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1431
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1432
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1433
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1434
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1427
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-25T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 10,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1435
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1436
	},
	{
		"cliente" : {
			"apellido" : "Malinez",
			"cuit" : 2740488484,
			"nombre" : "Marina",
			"region" : "CENTRO"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 11,
				"precio" : 18,
				"producto" : " CORREA 12mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1437
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-22T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1438
	},
	{
		"cliente" : {
			"apellido" : "Zavasi",
			"cuit" : 2038373771,
			"nombre" : "Martin",
			"region" : "CABA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-20T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-20T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 6,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 12,
				"precio" : 134,
				"producto" : "CORREA 10mm"
			}
		],
		"nroFactura" : 1439
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "CONTADO",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-02-24T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 2,
				"precio" : 60,
				"producto" : "TUERCA 2mm"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			},
			{
				"cantidad" : 15,
				"precio" : 90,
				"producto" : "TUERCA 5mm"
			}
		],
		"nroFactura" : 1440
	},
	{
		"cliente" : {
			"apellido" : "Lavagno",
			"cuit" : 2729887543,
			"nombre" : "Soledad",
			"region" : "NOA"
		},
		"condPago" : "30 Ds FF",
		"fechaEmision" : ISODate("2014-02-24T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-03-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			}
		],
		"nroFactura" : 1441
	},
	{
		"cliente" : {
			"apellido" : "Manoni",
			"cuit" : 2029889382,
			"nombre" : "Juan Manuel",
			"region" : "NEA"
		},
		"condPago" : "60 Ds FF",
		"fechaEmision" : ISODate("2014-02-25T00:00:00Z"),
		"fechaVencimiento" : ISODate("2014-04-26T00:00:00Z"),
		"item" : [
			{
				"cantidad" : 1,
				"precio" : 700,
				"producto" : "SET HERRAMIENTAS"
			},
			{
				"cantidad" : 1,
				"precio" : 490,
				"producto" : "TALADRO 12mm"
			}
		],
		"nroFactura" : 1442
	}
])