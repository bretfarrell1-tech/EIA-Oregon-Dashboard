import React, { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Area,
  AreaChart,
  ComposedChart,
  ReferenceLine,
} from "recharts";

// Annual trend data by ownership type
const annualData = [
  {
    year: 2014,
    category: "Oregon IOUs",
    price: 0.112369,
    bill: 98.27,
    usage: 874.56,
  },
  {
    year: 2015,
    category: "Oregon IOUs",
    price: 0.113642,
    bill: 97.1,
    usage: 854.41,
  },
  {
    year: 2016,
    category: "Oregon IOUs",
    price: 0.112408,
    bill: 96.41,
    usage: 857.68,
  },
  {
    year: 2017,
    category: "Oregon IOUs",
    price: 0.112921,
    bill: 102.08,
    usage: 903.97,
  },
  {
    year: 2018,
    category: "Oregon IOUs",
    price: 0.116139,
    bill: 97.91,
    usage: 843.05,
  },
  {
    year: 2019,
    category: "Oregon IOUs",
    price: 0.116088,
    bill: 98.72,
    usage: 850.4,
  },
  {
    year: 2020,
    category: "Oregon IOUs",
    price: 0.117298,
    bill: 100.72,
    usage: 858.65,
  },
  {
    year: 2021,
    category: "Oregon IOUs",
    price: 0.119948,
    bill: 105.5,
    usage: 879.51,
  },
  {
    year: 2022,
    category: "Oregon IOUs",
    price: 0.120072,
    bill: 106.12,
    usage: 883.79,
  },
  {
    year: 2023,
    category: "Oregon IOUs",
    price: 0.137892,
    bill: 118.58,
    usage: 859.98,
  },
  {
    year: 2024,
    category: "Oregon IOUs",
    price: 0.163335,
    bill: 134.28,
    usage: 822.1,
  },
  {
    year: 2014,
    category: "Municipal",
    price: 0.108697,
    bill: 105.98,
    usage: 974.96,
  },
  {
    year: 2015,
    category: "Municipal",
    price: 0.11075,
    bill: 101.6,
    usage: 917.38,
  },
  {
    year: 2016,
    category: "Municipal",
    price: 0.112753,
    bill: 101.81,
    usage: 902.96,
  },
  {
    year: 2017,
    category: "Municipal",
    price: 0.112054,
    bill: 111.12,
    usage: 991.7,
  },
  {
    year: 2018,
    category: "Municipal",
    price: 0.113159,
    bill: 103.23,
    usage: 912.27,
  },
  {
    year: 2019,
    category: "Municipal",
    price: 0.11354,
    bill: 105.32,
    usage: 927.58,
  },
  {
    year: 2020,
    category: "Municipal",
    price: 0.113325,
    bill: 102.91,
    usage: 908.13,
  },
  {
    year: 2021,
    category: "Municipal",
    price: 0.113735,
    bill: 105.38,
    usage: 926.51,
  },
  {
    year: 2022,
    category: "Municipal",
    price: 0.116904,
    bill: 110.4,
    usage: 944.38,
  },
  {
    year: 2023,
    category: "Municipal",
    price: 0.12222,
    bill: 113.85,
    usage: 931.48,
  },
  {
    year: 2024,
    category: "Municipal",
    price: 0.130728,
    bill: 115.69,
    usage: 884.99,
  },
  {
    year: 2014,
    category: "PUD",
    price: 0.083219,
    bill: 108.34,
    usage: 1301.86,
  },
  {
    year: 2015,
    category: "PUD",
    price: 0.087424,
    bill: 108.54,
    usage: 1241.55,
  },
  {
    year: 2016,
    category: "PUD",
    price: 0.089975,
    bill: 110.76,
    usage: 1231.05,
  },
  { year: 2017, category: "PUD", price: 0.091239, bill: 125.49, usage: 1375.4 },
  {
    year: 2018,
    category: "PUD",
    price: 0.096073,
    bill: 125.34,
    usage: 1304.67,
  },
  {
    year: 2019,
    category: "PUD",
    price: 0.095625,
    bill: 125.69,
    usage: 1314.38,
  },
  { year: 2020, category: "PUD", price: 0.097039, bill: 127.27, usage: 1311.5 },
  {
    year: 2021,
    category: "PUD",
    price: 0.097426,
    bill: 128.83,
    usage: 1322.31,
  },
  {
    year: 2022,
    category: "PUD",
    price: 0.096603,
    bill: 133.95,
    usage: 1386.55,
  },
  {
    year: 2023,
    category: "PUD",
    price: 0.096541,
    bill: 132.28,
    usage: 1370.15,
  },
  { year: 2024, category: "PUD", price: 0.103075, bill: 130.6, usage: 1267.04 },
  {
    year: 2014,
    category: "Cooperative",
    price: 0.073817,
    bill: 81.82,
    usage: 1108.39,
  },
  {
    year: 2015,
    category: "Cooperative",
    price: 0.081362,
    bill: 88.62,
    usage: 1089.21,
  },
  {
    year: 2016,
    category: "Cooperative",
    price: 0.083139,
    bill: 97.86,
    usage: 1177.09,
  },
  {
    year: 2017,
    category: "Cooperative",
    price: 0.085764,
    bill: 105.67,
    usage: 1232.14,
  },
  {
    year: 2018,
    category: "Cooperative",
    price: 0.09374,
    bill: 107.93,
    usage: 1151.37,
  },
  {
    year: 2019,
    category: "Cooperative",
    price: 0.096046,
    bill: 113.51,
    usage: 1181.78,
  },
  {
    year: 2020,
    category: "Cooperative",
    price: 0.098475,
    bill: 112.38,
    usage: 1141.18,
  },
  {
    year: 2021,
    category: "Cooperative",
    price: 0.099643,
    bill: 114.25,
    usage: 1146.59,
  },
  {
    year: 2022,
    category: "Cooperative",
    price: 0.098213,
    bill: 121.95,
    usage: 1241.72,
  },
  {
    year: 2023,
    category: "Cooperative",
    price: 0.109371,
    bill: 132.23,
    usage: 1208.99,
  },
  {
    year: 2024,
    category: "Cooperative",
    price: 0.127677,
    bill: 148.14,
    usage: 1160.26,
  },
  {
    year: 2014,
    category: "U.S. Average",
    price: 0.125197,
    bill: 114.09,
    usage: 911.31,
  },
  {
    year: 2015,
    category: "U.S. Average",
    price: 0.126504,
    bill: 114.03,
    usage: 901.37,
  },
  {
    year: 2016,
    category: "U.S. Average",
    price: 0.125492,
    bill: 112.59,
    usage: 897.15,
  },
  {
    year: 2017,
    category: "U.S. Average",
    price: 0.128866,
    bill: 111.67,
    usage: 866.55,
  },
  {
    year: 2018,
    category: "U.S. Average",
    price: 0.128673,
    bill: 117.65,
    usage: 914.34,
  },
  {
    year: 2019,
    category: "U.S. Average",
    price: 0.130138,
    bill: 115.49,
    usage: 887.43,
  },
  {
    year: 2020,
    category: "U.S. Average",
    price: 0.131546,
    bill: 117.46,
    usage: 892.95,
  },
  {
    year: 2021,
    category: "U.S. Average",
    price: 0.136576,
    bill: 121.01,
    usage: 885.99,
  },
  {
    year: 2022,
    category: "U.S. Average",
    price: 0.150401,
    bill: 135.25,
    usage: 899.29,
  },
  {
    year: 2023,
    category: "U.S. Average",
    price: 0.159992,
    bill: 136.84,
    usage: 855.27,
  },
  {
    year: 2024,
    category: "U.S. Average",
    price: 0.164793,
    bill: 142.26,
    usage: 863.28,
  },
];

// Individual utility annual data
const utilityAnnual = [
  {
    year: 2014,
    category: "Portland General Electric",
    price: 0.113724,
    bill: 96.15,
    usage: 845.44,
  },
  {
    year: 2015,
    category: "Portland General Electric",
    price: 0.115477,
    bill: 94.94,
    usage: 822.18,
  },
  {
    year: 2016,
    category: "Portland General Electric",
    price: 0.11404,
    bill: 92.81,
    usage: 813.85,
  },
  {
    year: 2017,
    category: "Portland General Electric",
    price: 0.114241,
    bill: 98.42,
    usage: 861.48,
  },
  {
    year: 2018,
    category: "Portland General Electric",
    price: 0.120065,
    bill: 95.52,
    usage: 795.6,
  },
  {
    year: 2019,
    category: "Portland General Electric",
    price: 0.122846,
    bill: 98.1,
    usage: 798.53,
  },
  {
    year: 2020,
    category: "Portland General Electric",
    price: 0.125049,
    bill: 102.17,
    usage: 817.01,
  },
  {
    year: 2021,
    category: "Portland General Electric",
    price: 0.132409,
    bill: 109.99,
    usage: 830.67,
  },
  {
    year: 2022,
    category: "Portland General Electric",
    price: 0.136385,
    bill: 113.55,
    usage: 832.56,
  },
  {
    year: 2023,
    category: "Portland General Electric",
    price: 0.151956,
    bill: 123.42,
    usage: 812.2,
  },
  {
    year: 2024,
    category: "Portland General Electric",
    price: 0.181899,
    bill: 141.4,
    usage: 777.33,
  },
  {
    year: 2014,
    category: "PacifiCorp",
    price: 0.11086,
    bill: 101.07,
    usage: 911.67,
  },
  {
    year: 2015,
    category: "PacifiCorp",
    price: 0.111526,
    bill: 100.02,
    usage: 896.88,
  },
  {
    year: 2016,
    category: "PacifiCorp",
    price: 0.110601,
    bill: 101.41,
    usage: 916.93,
  },
  {
    year: 2017,
    category: "PacifiCorp",
    price: 0.111555,
    bill: 107.14,
    usage: 960.41,
  },
  {
    year: 2018,
    category: "PacifiCorp",
    price: 0.111363,
    bill: 101.19,
    usage: 908.68,
  },
  {
    year: 2019,
    category: "PacifiCorp",
    price: 0.107934,
    bill: 99.5,
    usage: 921.85,
  },
  {
    year: 2020,
    category: "PacifiCorp",
    price: 0.107667,
    bill: 98.49,
    usage: 914.8,
  },
  {
    year: 2021,
    category: "PacifiCorp",
    price: 0.104235,
    bill: 98.67,
    usage: 946.57,
  },
  {
    year: 2022,
    category: "PacifiCorp",
    price: 0.099115,
    bill: 94.44,
    usage: 952.79,
  },
  {
    year: 2023,
    category: "PacifiCorp",
    price: 0.120104,
    bill: 111.08,
    usage: 924.9,
  },
  {
    year: 2024,
    category: "PacifiCorp",
    price: 0.140196,
    bill: 123.75,
    usage: 882.69,
  },
  {
    year: 2014,
    category: "Idaho Power Co",
    price: 0.100796,
    bill: 113.91,
    usage: 1130.13,
  },
  {
    year: 2015,
    category: "Idaho Power Co",
    price: 0.100801,
    bill: 108.82,
    usage: 1079.5,
  },
  {
    year: 2016,
    category: "Idaho Power Co",
    price: 0.100762,
    bill: 112.4,
    usage: 1115.47,
  },
  {
    year: 2017,
    category: "Idaho Power Co",
    price: 0.100096,
    bill: 120.01,
    usage: 1198.94,
  },
  {
    year: 2018,
    category: "Idaho Power Co",
    price: 0.101557,
    bill: 111.4,
    usage: 1096.93,
  },
  {
    year: 2019,
    category: "Idaho Power Co",
    price: 0.09484,
    bill: 105.11,
    usage: 1108.29,
  },
  {
    year: 2020,
    category: "Idaho Power Co",
    price: 0.09185,
    bill: 102.29,
    usage: 1113.66,
  },
  {
    year: 2021,
    category: "Idaho Power Co",
    price: 0.094266,
    bill: 107.25,
    usage: 1137.78,
  },
  {
    year: 2022,
    category: "Idaho Power Co",
    price: 0.102353,
    bill: 123.77,
    usage: 1209.24,
  },
  {
    year: 2023,
    category: "Idaho Power Co",
    price: 0.111731,
    bill: 126.73,
    usage: 1134.21,
  },
  {
    year: 2024,
    category: "Idaho Power Co",
    price: 0.112906,
    bill: 124.44,
    usage: 1102.18,
  },
];

// State comparison data (2024)
const stateData = [
  { year: 2024, state: "AR", price: 0.123176, bill: 129.13, usage: 1048.37 },
  { year: 2024, state: "WI", price: 0.171845, bill: 110.87, usage: 645.15 },
  { year: 2024, state: "TX", price: 0.149362, bill: 163.72, usage: 1096.15 },
  { year: 2024, state: "MI", price: 0.192989, bill: 119.31, usage: 618.21 },
  { year: 2024, state: "AZ", price: 0.149068, bill: 160.24, usage: 1074.92 },
  { year: 2024, state: "NV", price: 0.149956, bill: 139.39, usage: 929.51 },
  { year: 2024, state: "LA", price: 0.117289, bill: 140.96, usage: 1201.84 },
  { year: 2024, state: "PA", price: 0.177652, bill: 145.17, usage: 817.17 },
  { year: 2024, state: "OR", price: 0.146985, bill: 129.62, usage: 881.85 },
  { year: 2024, state: "MO", price: 0.129111, bill: 129.18, usage: 1000.57 },
  { year: 2024, state: "NC", price: 0.141333, bill: 143.5, usage: 1015.32 },
  { year: 2024, state: "MN", price: 0.154512, bill: 110.06, usage: 712.3 },
  { year: 2024, state: "OH", price: 0.159852, bill: 135.16, usage: 845.54 },
  { year: 2024, state: "IN", price: 0.147657, bill: 133.06, usage: 901.13 },
  { year: 2024, state: "WA", price: 0.118982, bill: 113.68, usage: 955.45 },
  { year: 2024, state: "RI", price: 0.28649, bill: 162.4, usage: 566.87 },
  { year: 2024, state: "FL", price: 0.141368, bill: 156.09, usage: 1104.14 },
  { year: 2024, state: "CT", price: 0.287455, bill: 199.66, usage: 694.57 },
  { year: 2024, state: "CA", price: 0.319668, bill: 160.86, usage: 503.21 },
  { year: 2024, state: "UT", price: 0.122151, bill: 94.57, usage: 774.19 },
  { year: 2024, state: "NJ", price: 0.193436, bill: 128.13, usage: 662.38 },
  { year: 2024, state: "VA", price: 0.144105, bill: 148.77, usage: 1032.36 },
  { year: 2024, state: "MD", price: 0.178579, bill: 165.87, usage: 928.84 },
  { year: 2024, state: "CO", price: 0.149169, bill: 100.57, usage: 674.22 },
  { year: 2024, state: "IL", price: 0.158694, bill: 109.99, usage: 693.11 },
  { year: 2024, state: "DC", price: 0.177095, bill: 113.23, usage: 639.37 },
  { year: 2024, state: "MA", price: 0.293497, bill: 167.2, usage: 569.68 },
  { year: 2024, state: "GA", price: 0.140825, bill: 151.25, usage: 1074.01 },
  { year: 2024, state: "NY", price: 0.244297, bill: 139.53, usage: 571.16 },
  { year: 2024, state: "AK", price: 0.248222, bill: 143.54, usage: 578.26 },
  { year: 2024, state: "AL", price: 0.151769, bill: 173.5, usage: 1143.2 },
  { year: 2024, state: "DE", price: 0.165669, bill: 150.87, usage: 910.67 },
  { year: 2024, state: "HI", price: 0.42864, bill: 212.12, usage: 494.87 },
  { year: 2024, state: "IA", price: 0.134024, bill: 111.54, usage: 832.23 },
  { year: 2024, state: "ID", price: 0.115201, bill: 108.73, usage: 943.8 },
  { year: 2024, state: "KS", price: 0.141495, bill: 123.9, usage: 875.67 },
  { year: 2024, state: "KY", price: 0.12786, bill: 133.81, usage: 1046.5 },
  { year: 2024, state: "ME", price: 0.242867, bill: 133.59, usage: 550.08 },
  { year: 2024, state: "MS", price: 0.133944, bill: 154.83, usage: 1155.9 },
  { year: 2024, state: "MT", price: 0.126628, bill: 107.91, usage: 852.16 },
  { year: 2024, state: "ND", price: 0.115084, bill: 118.38, usage: 1028.64 },
  { year: 2024, state: "NE", price: 0.115307, bill: 110.28, usage: 956.38 },
  { year: 2024, state: "NH", price: 0.234045, bill: 144.87, usage: 618.98 },
  { year: 2024, state: "NM", price: 0.141989, bill: 92.88, usage: 654.1 },
  { year: 2024, state: "OK", price: 0.122371, bill: 132.05, usage: 1079.06 },
  { year: 2024, state: "SC", price: 0.14233, bill: 149.51, usage: 1050.42 },
  { year: 2024, state: "SD", price: 0.128613, bill: 127.81, usage: 993.76 },
  { year: 2024, state: "TN", price: 0.124239, bill: 143.32, usage: 1153.56 },
  { year: 2024, state: "VT", price: 0.219037, bill: 125.66, usage: 573.67 },
  { year: 2024, state: "WV", price: 0.150739, bill: 154.76, usage: 1026.64 },
  { year: 2024, state: "WY", price: 0.124679, bill: 107.65, usage: 863.38 },
];

// General Rate Case Approvals (OPUC)
const rateCases = [
  {
    utility: "PGE",
    utilityFull: "Portland General Electric",
    requested: 4.8,
    approved: 1.8,
    effectiveDate: "January 1, 2019",
    year: 2019,
  },
  {
    utility: "PacifiCorp",
    utilityFull: "PacifiCorp",
    requested: 6.0,
    approved: -1.6,
    effectiveDate: "January 1, 2022",
    year: 2022,
  },
  {
    utility: "PGE",
    utilityFull: "Portland General Electric",
    requested: 2.9,
    approved: 0.5,
    effectiveDate: "May 9, 2022",
    year: 2022,
  },
  {
    utility: "PacifiCorp",
    utilityFull: "PacifiCorp",
    requested: 6.8,
    approved: 3.9,
    effectiveDate: "January 1, 2023",
    year: 2023,
  },
  {
    utility: "PGE",
    utilityFull: "Portland General Electric",
    requested: 9.5,
    approved: 7.3,
    effectiveDate: "January 1, 2024",
    year: 2024,
  },
  {
    utility: "Idaho Power",
    utilityFull: "Idaho Power Co",
    requested: 19.3,
    approved: 12.0,
    effectiveDate: "October 15, 2024",
    year: 2024,
  },
  {
    utility: "PacifiCorp",
    utilityFull: "PacifiCorp",
    requested: 17.9,
    approved: 8.5,
    effectiveDate: "January 1, 2025",
    year: 2025,
  },
  {
    utility: "PGE",
    utilityFull: "Portland General Electric",
    requested: 7.4,
    approved: 3.3,
    effectiveDate: "January 1, 2025",
    year: 2025,
  },
];

// Monthly data with 12-month rolling averages (sampled for key dates)
const monthlyData = [
  {
    date: "2015-01",
    OregonIOUs: 0.115091,
    OregonIOUs_MA12: 0.112369,
    Municipal: 0.11178,
    Municipal_MA12: 0.108697,
    PUD: 0.089247,
    PUD_MA12: 0.083219,
    Cooperative: 0.08273,
    Cooperative_MA12: 0.073817,
    USAverage: 0.124557,
    USAverage_MA12: 0.125197,
  },
  {
    date: "2016-01",
    OregonIOUs: 0.114626,
    OregonIOUs_MA12: 0.113642,
    Municipal: 0.114118,
    Municipal_MA12: 0.11075,
    PUD: 0.090689,
    PUD_MA12: 0.087424,
    Cooperative: 0.085,
    Cooperative_MA12: 0.081362,
    USAverage: 0.125247,
    USAverage_MA12: 0.126504,
  },
  {
    date: "2017-01",
    OregonIOUs: 0.114081,
    OregonIOUs_MA12: 0.112408,
    Municipal: 0.113954,
    Municipal_MA12: 0.112753,
    PUD: 0.092233,
    PUD_MA12: 0.089975,
    Cooperative: 0.087,
    Cooperative_MA12: 0.083139,
    USAverage: 0.128119,
    USAverage_MA12: 0.125492,
  },
  {
    date: "2018-01",
    OregonIOUs: 0.118276,
    OregonIOUs_MA12: 0.112921,
    Municipal: 0.114595,
    Municipal_MA12: 0.112054,
    PUD: 0.094862,
    PUD_MA12: 0.091239,
    Cooperative: 0.091,
    Cooperative_MA12: 0.085764,
    USAverage: 0.128357,
    USAverage_MA12: 0.128866,
  },
  {
    date: "2019-01",
    OregonIOUs: 0.119258,
    OregonIOUs_MA12: 0.116139,
    Municipal: 0.115447,
    Municipal_MA12: 0.113159,
    PUD: 0.097319,
    PUD_MA12: 0.096073,
    Cooperative: 0.099,
    Cooperative_MA12: 0.09374,
    USAverage: 0.129581,
    USAverage_MA12: 0.128673,
  },
  {
    date: "2020-01",
    OregonIOUs: 0.119897,
    OregonIOUs_MA12: 0.116088,
    Municipal: 0.115819,
    Municipal_MA12: 0.11354,
    PUD: 0.097785,
    PUD_MA12: 0.095625,
    Cooperative: 0.101,
    Cooperative_MA12: 0.096046,
    USAverage: 0.131298,
    USAverage_MA12: 0.130138,
  },
  {
    date: "2021-01",
    OregonIOUs: 0.121406,
    OregonIOUs_MA12: 0.117298,
    Municipal: 0.116191,
    Municipal_MA12: 0.113325,
    PUD: 0.098251,
    PUD_MA12: 0.097039,
    Cooperative: 0.103,
    Cooperative_MA12: 0.098475,
    USAverage: 0.133019,
    USAverage_MA12: 0.131546,
  },
  {
    date: "2022-01",
    OregonIOUs: 0.122915,
    OregonIOUs_MA12: 0.119948,
    Municipal: 0.116563,
    Municipal_MA12: 0.113735,
    PUD: 0.098717,
    PUD_MA12: 0.097426,
    Cooperative: 0.105,
    Cooperative_MA12: 0.099643,
    USAverage: 0.146543,
    USAverage_MA12: 0.136576,
  },
  {
    date: "2023-01",
    OregonIOUs: 0.137424,
    OregonIOUs_MA12: 0.120072,
    Municipal: 0.123935,
    Municipal_MA12: 0.116904,
    PUD: 0.099183,
    PUD_MA12: 0.096603,
    Cooperative: 0.107,
    Cooperative_MA12: 0.098213,
    USAverage: 0.157267,
    USAverage_MA12: 0.150401,
  },
  {
    date: "2024-01",
    OregonIOUs: 0.158933,
    OregonIOUs_MA12: 0.137892,
    Municipal: 0.131307,
    Municipal_MA12: 0.12222,
    PUD: 0.105649,
    PUD_MA12: 0.096541,
    Cooperative: 0.128,
    Cooperative_MA12: 0.109371,
    USAverage: 0.163991,
    USAverage_MA12: 0.159992,
  },
  {
    date: "2024-06",
    OregonIOUs: 0.173987,
    OregonIOUs_MA12: 0.152635,
    Municipal: 0.137679,
    Municipal_MA12: 0.126082,
    PUD: 0.109115,
    PUD_MA12: 0.099892,
    Cooperative: 0.133,
    Cooperative_MA12: 0.118643,
    USAverage: 0.170523,
    USAverage_MA12: 0.162439,
  },
  {
    date: "2024-12",
    OregonIOUs: 0.159041,
    OregonIOUs_MA12: 0.163335,
    Municipal: 0.121398,
    Municipal_MA12: 0.130728,
    PUD: 0.096621,
    PUD_MA12: 0.103075,
    Cooperative: 0.124,
    Cooperative_MA12: 0.127677,
    USAverage: 0.162713,
    USAverage_MA12: 0.164793,
  },
];

const COLORS = {
  iou: "#0F4C81",
  municipal: "#2E8B57",
  pud: "#8B4513",
  cooperative: "#6B238E",
  usAverage: "#DC4405",
  pge: "#4169E1",
  pacificorp: "#CD853F",
  idaho: "#228B22",
};

export default function OregonEnergyDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedMetric, setSelectedMetric] = useState("price");
  const [compareStates, setCompareStates] = useState([
    "OR",
    "WA",
    "CA",
    "ID",
    "NV",
    "AZ",
    "MT",
    "UT",
  ]);
  const [selectedUtilityFilter, setSelectedUtilityFilter] = useState("all");

  const years = [
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
  ];
  const states = [...new Set(stateData.map((d) => d.state))].sort();

  const metricOptions = {
    price: {
      label: "Residential Price ($/kWh)",
      format: (v) => (v * 100).toFixed(2) + "¢/kWh",
    },
    bill: {
      label: "Avg Monthly Bill ($)",
      format: (v) => "$" + (v || 0).toFixed(2),
    },
    usage: {
      label: "Avg Monthly Usage (kWh)",
      format: (v) => (v || 0).toFixed(0) + " kWh",
    },
  };

  // Transform annual data for charts
  const annualChartData = useMemo(() => {
    const byYear = {};
    annualData.forEach((d) => {
      if (!byYear[d.year]) byYear[d.year] = { year: d.year };
      byYear[d.year][d.category.replace(/[\s.]+/g, "")] = d[selectedMetric];
    });
    return Object.values(byYear).sort((a, b) => a.year - b.year);
  }, [selectedMetric]);

  // Transform utility annual data
  const utilityChartData = useMemo(() => {
    const byYear = {};
    utilityAnnual.forEach((d) => {
      if (!byYear[d.year]) byYear[d.year] = { year: d.year };
      byYear[d.year][d.category.replace(/[\s.]+/g, "")] = d[selectedMetric];
    });
    return Object.values(byYear).sort((a, b) => a.year - b.year);
  }, [selectedMetric]);

  // State comparison data
  const stateComparisonData = useMemo(() => {
    return stateData
      .filter((d) => compareStates.includes(d.state))
      .sort((a, b) => (b[selectedMetric] || 0) - (a[selectedMetric] || 0));
  }, [compareStates, selectedMetric]);

  // Filter rate cases by utility
  const filteredRateCases = useMemo(() => {
    if (selectedUtilityFilter === "all") return rateCases;
    return rateCases.filter((rc) =>
      rc.utility.toLowerCase().includes(selectedUtilityFilter.toLowerCase())
    );
  }, [selectedUtilityFilter]);

  // Rate case summary stats
  const rateCaseStats = useMemo(() => {
    const totalRequested = rateCases.reduce((sum, rc) => sum + rc.requested, 0);
    const totalApproved = rateCases.reduce((sum, rc) => sum + rc.approved, 0);
    const avgReduction =
      rateCases.reduce(
        (sum, rc) => sum + (rc.requested - rc.approved) / rc.requested,
        0
      ) / rateCases.length;
    return {
      totalCases: rateCases.length,
      avgRequested: (totalRequested / rateCases.length).toFixed(1),
      avgApproved: (totalApproved / rateCases.length).toFixed(1),
      avgReduction: (avgReduction * 100).toFixed(0),
    };
  }, []);

  // Summary stats for 2024
  const summaryStats = useMemo(() => {
    const get2024 = (cat) =>
      annualData.find((d) => d.year === 2024 && d.category === cat);
    const get2023 = (cat) =>
      annualData.find((d) => d.year === 2023 && d.category === cat);
    const calcChange = (cat, metric) => {
      const curr = get2024(cat)?.[metric];
      const prev = get2023(cat)?.[metric];
      return curr && prev ? (((curr - prev) / prev) * 100).toFixed(1) : null;
    };
    return {
      iou: {
        ...get2024("Oregon IOUs"),
        priceChange: calcChange("Oregon IOUs", "price"),
      },
      municipal: {
        ...get2024("Municipal"),
        priceChange: calcChange("Municipal", "price"),
      },
      pud: { ...get2024("PUD"), priceChange: calcChange("PUD", "price") },
      cooperative: {
        ...get2024("Cooperative"),
        priceChange: calcChange("Cooperative", "price"),
      },
      usAverage: {
        ...get2024("U.S. Average"),
        priceChange: calcChange("U.S. Average", "price"),
      },
    };
  }, []);

  // Utility stats for 2024
  const utilityStats = useMemo(() => {
    return {
      pge: utilityAnnual.find(
        (d) => d.year === 2024 && d.category === "Portland General Electric"
      ),
      pacificorp: utilityAnnual.find(
        (d) => d.year === 2024 && d.category === "PacifiCorp"
      ),
      idaho: utilityAnnual.find(
        (d) => d.year === 2024 && d.category === "Idaho Power Co"
      ),
    };
  }, []);

  const downloadCSV = (dataType) => {
    let data, filename, headers;
    if (dataType === "annual") {
      data = annualData;
      filename = "oregon_energy_annual.csv";
      headers = [
        "Year",
        "Category",
        "Price ($/kWh)",
        "Avg Monthly Bill ($)",
        "Avg Monthly Usage (kWh)",
      ];
    } else if (dataType === "utilities") {
      data = utilityAnnual;
      filename = "oregon_utilities_annual.csv";
      headers = [
        "Year",
        "Utility",
        "Price ($/kWh)",
        "Avg Monthly Bill ($)",
        "Avg Monthly Usage (kWh)",
      ];
    } else if (dataType === "ratecases") {
      data = rateCases;
      filename = "oregon_rate_cases.csv";
      headers = [
        "Utility",
        "Requested Change (%)",
        "Approved Change (%)",
        "Effective Date",
      ];
      const csvRows = [headers.join(",")];
      data.forEach((row) => {
        csvRows.push(
          [row.utility, row.requested, row.approved, row.effectiveDate].join(
            ","
          )
        );
      });
      const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
      return;
    } else {
      data = stateData;
      filename = "state_comparison_2024.csv";
      headers = [
        "State",
        "Price ($/kWh)",
        "Avg Monthly Bill ($)",
        "Avg Monthly Usage (kWh)",
      ];
    }
    const csvRows = [headers.join(",")];
    data.forEach((row) => {
      const values =
        dataType === "states"
          ? [row.state, row.price, row.bill, row.usage]
          : [row.year, row.category, row.price, row.bill, row.usage];
      csvRows.push(
        values.map((v) => (v !== null && v !== undefined ? v : "")).join(",")
      );
    });
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            padding: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ fontWeight: 600, marginBottom: "8px" }}>{label}</p>
          {payload.map((entry, index) => (
            <p
              key={index}
              style={{ color: entry.color, fontSize: "14px", margin: "4px 0" }}
            >
              {entry.name}: {metricOptions[selectedMetric].format(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #f1f5f9 100%)",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'); * { font-family: 'DM Sans', sans-serif; box-sizing: border-box; margin: 0; padding: 0; } .mono { font-family: 'JetBrains Mono', monospace; }`}</style>

      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(90deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "32px 24px 16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "24px" }}>⚡</span>
            </div>
            <div>
              <h1 style={{ fontSize: "28px", fontWeight: 700 }}>
                Oregon Energy Dashboard
              </h1>
              <p style={{ color: "#93c5fd", fontSize: "14px" }}>
                Utility Analysis by Ownership Type | EIA Data 2014-2024
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "flex",
              gap: "4px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              overflowX: "auto",
            }}
          >
            {[
              { id: "overview", label: "Executive Summary" },
              { id: "ownership", label: "By Ownership Type" },
              { id: "utilities", label: "Individual IOUs" },
              { id: "states", label: "State Comparison" },
              { id: "methodology", label: "Methodology" },
              { id: "download", label: "Download" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "12px 20px",
                  fontSize: "14px",
                  fontWeight: 500,
                  background:
                    activeTab === tab.id
                      ? "rgba(255,255,255,0.05)"
                      : "transparent",
                  color: activeTab === tab.id ? "white" : "#93c5fd",
                  border: "none",
                  borderBottom:
                    activeTab === tab.id
                      ? "2px solid #fbbf24"
                      : "2px solid transparent",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px" }}
      >
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            {/* Summary Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              {[
                {
                  name: "Oregon IOUs",
                  color: COLORS.iou,
                  stats: summaryStats.iou,
                  customers: "1.39M",
                },
                {
                  name: "Municipal",
                  color: COLORS.municipal,
                  stats: summaryStats.municipal,
                  customers: "89K",
                },
                {
                  name: "PUD",
                  color: COLORS.pud,
                  stats: summaryStats.pud,
                  customers: "24K",
                },
                {
                  name: "Cooperative",
                  color: COLORS.cooperative,
                  stats: summaryStats.cooperative,
                  customers: "1.2K",
                },
                {
                  name: "U.S. Average",
                  color: COLORS.usAverage,
                  stats: summaryStats.usAverage,
                  customers: "~160M",
                },
              ].map((card) => (
                <div
                  key={card.name}
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "20px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: card.color,
                      }}
                    ></div>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "#475569",
                      }}
                    >
                      {card.name}
                    </span>
                  </div>
                  <div style={{ marginBottom: "8px" }}>
                    <span
                      className="mono"
                      style={{
                        fontSize: "28px",
                        fontWeight: 700,
                        color: "#0f172a",
                      }}
                    >
                      {(card.stats?.price * 100).toFixed(1)}¢
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color:
                          card.stats?.priceChange > 0 ? "#dc2626" : "#16a34a",
                        marginLeft: "8px",
                      }}
                    >
                      {card.stats?.priceChange > 0 ? "+" : ""}
                      {card.stats?.priceChange}%
                    </span>
                  </div>
                  <div style={{ fontSize: "13px", color: "#64748b" }}>
                    <div>
                      ${card.stats?.bill?.toFixed(0)}/mo •{" "}
                      {card.stats?.usage?.toFixed(0)} kWh
                    </div>
                    <div style={{ marginTop: "4px", fontSize: "11px" }}>
                      {card.customers} customers
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Insights */}
            <div
              style={{
                background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)",
                borderRadius: "16px",
                padding: "24px",
                color: "white",
                marginBottom: "32px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                📊 Key Findings (2024)
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "20px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#bfdbfe",
                      marginBottom: "10px",
                    }}
                  >
                    <strong style={{ color: "#fbbf24" }}>IOUs vs PUDs:</strong>{" "}
                    Oregon IOUs charge{" "}
                    <span style={{ color: "#fbbf24" }}>58% more</span> per kWh
                    than Public Utility Districts (16.3¢ vs 10.3¢)
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#bfdbfe",
                      marginBottom: "10px",
                    }}
                  >
                    <strong style={{ color: "#fbbf24" }}>
                      IOUs vs Municipal:
                    </strong>{" "}
                    IOUs charge{" "}
                    <span style={{ color: "#fbbf24" }}>25% more</span> than
                    Municipal utilities (16.3¢ vs 13.1¢)
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#bfdbfe",
                      marginBottom: "10px",
                    }}
                  >
                    <strong style={{ color: "#fbbf24" }}>
                      National Comparison:
                    </strong>{" "}
                    Oregon IOUs are{" "}
                    <span style={{ color: "#fbbf24" }}>comparable</span> to U.S.
                    average (16.3¢ vs 16.5¢)
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#bfdbfe",
                      marginBottom: "10px",
                    }}
                  >
                    <strong style={{ color: "#fbbf24" }}>YoY Change:</strong>{" "}
                    IOUs increased{" "}
                    <span style={{ color: "#fbbf24" }}>18.5%</span>, highest
                    among all ownership types
                  </p>
                </div>
              </div>
            </div>

            {/* Main Chart */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <h3 style={{ fontSize: "18px", fontWeight: 600 }}>
                  10-Year Trend: All Ownership Types
                </h3>
                <select
                  value={selectedMetric}
                  onChange={(e) => setSelectedMetric(e.target.value)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    fontSize: "14px",
                  }}
                >
                  {Object.entries(metricOptions).map(([key, opt]) => (
                    <option key={key} value={key}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={annualChartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#64748b", fontSize: 12 }}
                  />
                  <YAxis
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    tickFormatter={(v) =>
                      selectedMetric === "price"
                        ? (v * 100).toFixed(0) + "¢"
                        : selectedMetric === "bill"
                        ? "$" + v.toFixed(0)
                        : v.toFixed(0)
                    }
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="OregonIOUs"
                    name="Oregon IOUs"
                    stroke={COLORS.iou}
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Municipal"
                    name="Municipal"
                    stroke={COLORS.municipal}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="PUD"
                    name="PUD"
                    stroke={COLORS.pud}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Cooperative"
                    name="Cooperative"
                    stroke={COLORS.cooperative}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="USAverage"
                    name="U.S. Average"
                    stroke={COLORS.usAverage}
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Ownership Type Tab */}
        {activeTab === "ownership" && (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <h2 style={{ fontSize: "20px", fontWeight: 700 }}>
                  Analysis by Ownership Type
                </h2>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  Comparing IOUs, Municipals, PUDs, and Cooperatives
                </p>
              </div>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "14px",
                }}
              >
                {Object.entries(metricOptions).map(([key, opt]) => (
                  <option key={key} value={key}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Ownership Type Descriptions */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              {[
                {
                  name: "Investor-Owned Utilities (IOUs)",
                  color: COLORS.iou,
                  desc: "For-profit utilities: Portland General Electric, PacifiCorp, Idaho Power",
                  customers: "1.39M customers (94%)",
                },
                {
                  name: "Municipal Utilities",
                  color: COLORS.municipal,
                  desc: "City-owned: Eugene Water & Electric Board (EWEB)",
                  customers: "89K customers (6%)",
                },
                {
                  name: "Public Utility Districts (PUDs)",
                  color: COLORS.pud,
                  desc: "Voter-governed: Emerald PUD, Clatskanie PUD",
                  customers: "24K customers (<2%)",
                },
                {
                  name: "Cooperatives",
                  color: COLORS.cooperative,
                  desc: "Member-owned: Surprise Valley Electrification",
                  customers: "1.2K customers (<1%)",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  style={{
                    background: "white",
                    borderRadius: "12px",
                    padding: "16px",
                    border: "1px solid #e2e8f0",
                    borderLeft: `4px solid ${item.color}`,
                  }}
                >
                  <h4
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    {item.name}
                  </h4>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    {item.desc}
                  </p>
                  <p style={{ fontSize: "12px", color: "#94a3b8" }}>
                    {item.customers}
                  </p>
                </div>
              ))}
            </div>

            {/* Comparison Chart */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #e2e8f0",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                Historical Comparison (2014-2024)
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={annualChartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#64748b", fontSize: 12 }}
                  />
                  <YAxis
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    tickFormatter={(v) =>
                      selectedMetric === "price"
                        ? (v * 100).toFixed(0) + "¢"
                        : selectedMetric === "bill"
                        ? "$" + v.toFixed(0)
                        : v.toFixed(0)
                    }
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="OregonIOUs"
                    name="IOUs"
                    stroke={COLORS.iou}
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Municipal"
                    name="Municipal"
                    stroke={COLORS.municipal}
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="PUD"
                    name="PUD"
                    stroke={COLORS.pud}
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Cooperative"
                    name="Cooperative"
                    stroke={COLORS.cooperative}
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Data Table */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
              }}
            >
              <div
                style={{ padding: "16px", borderBottom: "1px solid #e2e8f0" }}
              >
                <h3 style={{ fontWeight: 600 }}>2024 Comparison Table</h3>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    borderCollapse: "collapse",
                  }}
                >
                  <thead style={{ background: "#f8fafc" }}>
                    <tr>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          fontWeight: 600,
                        }}
                      >
                        Ownership Type
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "right",
                          fontWeight: 600,
                        }}
                      >
                        Price (¢/kWh)
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "right",
                          fontWeight: 600,
                        }}
                      >
                        Avg Bill
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "right",
                          fontWeight: 600,
                        }}
                      >
                        Avg Usage
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "right",
                          fontWeight: 600,
                        }}
                      >
                        vs IOU Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Investor-Owned",
                        stats: summaryStats.iou,
                        color: COLORS.iou,
                      },
                      {
                        name: "Municipal",
                        stats: summaryStats.municipal,
                        color: COLORS.municipal,
                      },
                      {
                        name: "PUD",
                        stats: summaryStats.pud,
                        color: COLORS.pud,
                      },
                      {
                        name: "Cooperative",
                        stats: summaryStats.cooperative,
                        color: COLORS.cooperative,
                      },
                    ].map((row) => {
                      const diff = (
                        ((row.stats.price - summaryStats.iou.price) /
                          summaryStats.iou.price) *
                        100
                      ).toFixed(1);
                      return (
                        <tr
                          key={row.name}
                          style={{ borderTop: "1px solid #f1f5f9" }}
                        >
                          <td
                            style={{
                              padding: "12px 16px",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <div
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: row.color,
                              }}
                            ></div>
                            {row.name}
                          </td>
                          <td
                            className="mono"
                            style={{ padding: "12px 16px", textAlign: "right" }}
                          >
                            {(row.stats.price * 100).toFixed(2)}¢
                          </td>
                          <td
                            className="mono"
                            style={{ padding: "12px 16px", textAlign: "right" }}
                          >
                            ${row.stats.bill.toFixed(2)}
                          </td>
                          <td
                            className="mono"
                            style={{ padding: "12px 16px", textAlign: "right" }}
                          >
                            {row.stats.usage.toFixed(0)} kWh
                          </td>
                          <td
                            style={{
                              padding: "12px 16px",
                              textAlign: "right",
                              fontWeight: 500,
                              color:
                                parseFloat(diff) < 0
                                  ? "#16a34a"
                                  : parseFloat(diff) > 0
                                  ? "#dc2626"
                                  : "#64748b",
                            }}
                          >
                            {row.name === "Investor-Owned"
                              ? "—"
                              : (diff > 0 ? "+" : "") + diff + "%"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Individual IOUs Tab */}
        {activeTab === "utilities" && (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <h2 style={{ fontSize: "20px", fontWeight: 700 }}>
                  Oregon's Three Investor-Owned Utilities
                </h2>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  Portland General Electric, PacifiCorp, and Idaho Power
                </p>
              </div>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "14px",
                }}
              >
                {Object.entries(metricOptions).map(([key, opt]) => (
                  <option key={key} value={key}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Utility Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              {[
                {
                  name: "Portland General Electric",
                  short: "PGE",
                  color: COLORS.pge,
                  stats: utilityStats.pge,
                  customers: "829K",
                  territory: "Portland metro area",
                },
                {
                  name: "PacifiCorp",
                  short: "PAC",
                  color: COLORS.pacificorp,
                  stats: utilityStats.pacificorp,
                  customers: "547K",
                  territory: "Eastern & Southern Oregon",
                },
                {
                  name: "Idaho Power Co",
                  short: "IPC",
                  color: COLORS.idaho,
                  stats: utilityStats.idaho,
                  customers: "14K",
                  territory: "Eastern Oregon (Ontario area)",
                },
              ].map((u) => (
                <div
                  key={u.name}
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "20px",
                    border: "1px solid #e2e8f0",
                    borderTop: `4px solid ${u.color}`,
                  }}
                >
                  <h4 style={{ fontWeight: 600, marginBottom: "4px" }}>
                    {u.name}
                  </h4>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "16px",
                    }}
                  >
                    {u.territory} • {u.customers} customers
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#94a3b8",
                          textTransform: "uppercase",
                        }}
                      >
                        Price
                      </p>
                      <p
                        className="mono"
                        style={{ fontSize: "20px", fontWeight: 700 }}
                      >
                        {(u.stats?.price * 100).toFixed(1)}¢
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#94a3b8",
                          textTransform: "uppercase",
                        }}
                      >
                        Avg Bill
                      </p>
                      <p
                        className="mono"
                        style={{ fontSize: "20px", fontWeight: 700 }}
                      >
                        ${u.stats?.bill?.toFixed(0)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Utility Chart */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #e2e8f0",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                IOU Comparison (2014-2024)
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={utilityChartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#64748b", fontSize: 12 }}
                  />
                  <YAxis
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    tickFormatter={(v) =>
                      selectedMetric === "price"
                        ? (v * 100).toFixed(0) + "¢"
                        : selectedMetric === "bill"
                        ? "$" + v.toFixed(0)
                        : v.toFixed(0)
                    }
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="PortlandGeneralElectric"
                    name="Portland General Electric"
                    stroke={COLORS.pge}
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="PacifiCorp"
                    name="PacifiCorp"
                    stroke={COLORS.pacificorp}
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="IdahoPowerCo"
                    name="Idaho Power Co"
                    stroke={COLORS.idaho}
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Rate Cases Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "24px",
                border: "1px solid #fbbf24",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <span style={{ fontSize: "24px" }}>⚖️</span>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700 }}>
                    OPUC General Rate Case Approvals
                  </h3>
                  <p style={{ fontSize: "13px", color: "#92400e" }}>
                    Oregon Public Utility Commission rate revision decisions
                    (2019-2025)
                  </p>
                </div>
              </div>

              {/* Rate Case Summary Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: "8px",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#92400e",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Total Cases
                  </p>
                  <p
                    className="mono"
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#78350f",
                    }}
                  >
                    {rateCaseStats.totalCases}
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: "8px",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#92400e",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Avg Requested
                  </p>
                  <p
                    className="mono"
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#dc2626",
                    }}
                  >
                    +{rateCaseStats.avgRequested}%
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: "8px",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#92400e",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Avg Approved
                  </p>
                  <p
                    className="mono"
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#16a34a",
                    }}
                  >
                    +{rateCaseStats.avgApproved}%
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: "8px",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#92400e",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Avg Reduction
                  </p>
                  <p
                    className="mono"
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#0369a1",
                    }}
                  >
                    {rateCaseStats.avgReduction}%
                  </p>
                </div>
              </div>

              {/* Filter Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "16px",
                  flexWrap: "wrap",
                }}
              >
                {["all", "PGE", "PacifiCorp", "Idaho"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedUtilityFilter(filter)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: 500,
                      background:
                        selectedUtilityFilter === filter ? "#78350f" : "white",
                      color:
                        selectedUtilityFilter === filter ? "white" : "#78350f",
                      border: "1px solid #78350f",
                      cursor: "pointer",
                    }}
                  >
                    {filter === "all" ? "All Utilities" : filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Rate Cases Table */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  padding: "16px",
                  borderBottom: "1px solid #e2e8f0",
                  background: "#f8fafc",
                }}
              >
                <h3 style={{ fontWeight: 600 }}>
                  Rate Case History ({filteredRateCases.length} cases)
                </h3>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    borderCollapse: "collapse",
                  }}
                >
                  <thead style={{ background: "#f8fafc" }}>
                    <tr>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          fontWeight: 600,
                        }}
                      >
                        Utility
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "right",
                          fontWeight: 600,
                        }}
                      >
                        Requested
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "right",
                          fontWeight: 600,
                        }}
                      >
                        Approved
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "right",
                          fontWeight: 600,
                        }}
                      >
                        Difference
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          fontWeight: 600,
                        }}
                      >
                        Effective Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRateCases.map((rc, idx) => {
                      const diff = rc.requested - rc.approved;
                      const utilityColor =
                        rc.utility === "PGE"
                          ? COLORS.pge
                          : rc.utility === "PacifiCorp"
                          ? COLORS.pacificorp
                          : COLORS.idaho;
                      return (
                        <tr
                          key={idx}
                          style={{ borderTop: "1px solid #f1f5f9" }}
                        >
                          <td
                            style={{
                              padding: "12px 16px",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <div
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: utilityColor,
                              }}
                            ></div>
                            {rc.utility}
                          </td>
                          <td
                            className="mono"
                            style={{
                              padding: "12px 16px",
                              textAlign: "right",
                              color: "#dc2626",
                            }}
                          >
                            +{rc.requested.toFixed(1)}%
                          </td>
                          <td
                            className="mono"
                            style={{
                              padding: "12px 16px",
                              textAlign: "right",
                              color: rc.approved >= 0 ? "#16a34a" : "#0369a1",
                              fontWeight: 600,
                            }}
                          >
                            {rc.approved >= 0 ? "+" : ""}
                            {rc.approved.toFixed(1)}%
                          </td>
                          <td
                            className="mono"
                            style={{
                              padding: "12px 16px",
                              textAlign: "right",
                              color: "#64748b",
                            }}
                          >
                            -{diff.toFixed(1)}%
                          </td>
                          <td
                            style={{ padding: "12px 16px", color: "#475569" }}
                          >
                            {rc.effectiveDate}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Rate Case Visualization */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                Requested vs Approved Rate Changes
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={rateCases.map((rc) => ({
                    name: `${rc.utility} (${rc.year})`,
                    requested: rc.requested,
                    approved: rc.approved,
                    utility: rc.utility,
                  }))}
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#64748b", fontSize: 11 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    tickFormatter={(v) => v + "%"}
                  />
                  <Tooltip
                    formatter={(v, name) => [
                      v.toFixed(1) + "%",
                      name === "requested" ? "Requested" : "Approved",
                    ]}
                  />
                  <Legend />
                  <Bar
                    dataKey="requested"
                    name="Requested"
                    fill="#fca5a5"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="approved"
                    name="Approved"
                    fill="#86efac"
                    radius={[4, 4, 0, 0]}
                  />
                  <ReferenceLine y={0} stroke="#94a3b8" />
                </BarChart>
              </ResponsiveContainer>
              <p
                style={{
                  fontSize: "12px",
                  color: "#64748b",
                  marginTop: "12px",
                  textAlign: "center",
                }}
              >
                Note: OPUC typically approves lower rate increases than
                requested. PacifiCorp received a rate decrease (-1.6%) in 2022.
              </p>
            </div>
          </div>
        )}

        {/* State Comparison Tab */}
        {activeTab === "states" && (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <h2 style={{ fontSize: "20px", fontWeight: 700 }}>
                State Comparison (2024)
              </h2>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "14px",
                }}
              >
                {Object.entries(metricOptions).map(([key, opt]) => (
                  <option key={key} value={key}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "16px",
                border: "1px solid #e2e8f0",
                marginBottom: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  marginBottom: "12px",
                }}
              >
                Select states to compare:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {states.map((state) => (
                  <button
                    key={state}
                    onClick={() => {
                      if (compareStates.includes(state)) {
                        setCompareStates(
                          compareStates.filter((s) => s !== state)
                        );
                      } else {
                        setCompareStates([...compareStates, state]);
                      }
                    }}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      fontWeight: 500,
                      background: compareStates.includes(state)
                        ? state === "OR"
                          ? COLORS.iou
                          : "#334155"
                        : "#f1f5f9",
                      color: compareStates.includes(state)
                        ? "white"
                        : "#475569",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {state}
                  </button>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #e2e8f0",
              }}
            >
              <ResponsiveContainer
                width="100%"
                height={Math.max(300, stateComparisonData.length * 32)}
              >
                <BarChart
                  data={stateComparisonData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    type="number"
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    tickFormatter={(v) =>
                      selectedMetric === "price"
                        ? (v * 100).toFixed(0) + "¢"
                        : selectedMetric === "bill"
                        ? "$" + v.toFixed(0)
                        : v.toFixed(0)
                    }
                  />
                  <YAxis
                    type="category"
                    dataKey="state"
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    width={40}
                  />
                  <Tooltip
                    formatter={(v) => metricOptions[selectedMetric].format(v)}
                  />
                  <Bar dataKey={selectedMetric} radius={[0, 4, 4, 0]}>
                    {stateComparisonData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={entry.state === "OR" ? COLORS.iou : "#94a3b8"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Methodology Tab */}
        {activeTab === "methodology" && (
          <div>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "24px",
              }}
            >
              Data Methodology
            </h2>

            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #e2e8f0",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                📊 Data Source
              </h3>
              <p
                style={{
                  color: "#475569",
                  lineHeight: 1.6,
                  marginBottom: "12px",
                }}
              >
                All data is sourced from the{" "}
                <strong>U.S. Energy Information Administration (EIA)</strong>{" "}
                Form EIA-861M, which collects monthly electricity sales,
                revenue, and customer counts from all U.S. electric utilities.
              </p>
              <p style={{ color: "#475569", lineHeight: 1.6 }}>
                The Oregon dataset includes <strong>17 utilities</strong> across
                6 ownership types, with monthly data from{" "}
                <strong>January 2014 through October 2025</strong>.
              </p>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #e2e8f0",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                🧮 Calculation Methods
              </h3>
              <div style={{ display: "grid", gap: "16px" }}>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <h4
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    Annual Price ($/kWh)
                  </h4>
                  <code style={{ fontSize: "13px", color: "#64748b" }}>
                    = Sum(Annual Revenue) / Sum(Annual kWh Sales)
                  </code>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      marginTop: "8px",
                    }}
                  >
                    Revenue-weighted average price across all months in the
                    year.
                  </p>
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <h4
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    Average Monthly Bill ($)
                  </h4>
                  <code style={{ fontSize: "13px", color: "#64748b" }}>
                    = Sum(Annual Revenue) / Avg(Monthly Customer Count) / 12
                  </code>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      marginTop: "8px",
                    }}
                  >
                    Total annual revenue divided by average monthly customers,
                    then divided by 12 to get monthly average.
                  </p>
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <h4
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    Average Monthly Usage (kWh)
                  </h4>
                  <code style={{ fontSize: "13px", color: "#64748b" }}>
                    = Sum(Annual kWh Sales) / Avg(Monthly Customer Count) / 12
                  </code>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      marginTop: "8px",
                    }}
                  >
                    Total annual sales divided by average monthly customers,
                    then divided by 12.
                  </p>
                </div>
              </div>
            </div>

            {/* Rate Case Methodology */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #e2e8f0",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                ⚖️ General Rate Case Data
              </h3>
              <p
                style={{
                  color: "#475569",
                  lineHeight: 1.6,
                  marginBottom: "12px",
                }}
              >
                Rate case data is sourced from{" "}
                <strong>Oregon Public Utility Commission (OPUC) orders</strong>{" "}
                for general rate revisions. These represent formal rate change
                requests filed by investor-owned utilities and the commission's
                final approved changes.
              </p>
              <div
                style={{
                  background: "#fef3c7",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  marginTop: "12px",
                }}
              >
                <p style={{ fontSize: "13px", color: "#92400e" }}>
                  <strong>Note:</strong> Approved rate changes may differ
                  significantly from actual price changes observed in EIA data
                  due to timing, customer class allocations, power cost
                  adjustments, and other rate mechanisms outside general rate
                  cases.
                </p>
              </div>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                📋 Oregon Utility Classification
              </h3>
              <table
                style={{
                  width: "100%",
                  fontSize: "14px",
                  borderCollapse: "collapse",
                }}
              >
                <thead style={{ background: "#f8fafc" }}>
                  <tr>
                    <th
                      style={{
                        padding: "12px",
                        textAlign: "left",
                        fontWeight: 600,
                      }}
                    >
                      Ownership Type
                    </th>
                    <th
                      style={{
                        padding: "12px",
                        textAlign: "left",
                        fontWeight: 600,
                      }}
                    >
                      Utilities
                    </th>
                    <th
                      style={{
                        padding: "12px",
                        textAlign: "right",
                        fontWeight: 600,
                      }}
                    >
                      2024 Customers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "12px" }}>Investor-Owned</td>
                    <td style={{ padding: "12px" }}>
                      Portland General Electric, PacifiCorp, Idaho Power Co
                    </td>
                    <td style={{ padding: "12px", textAlign: "right" }}>
                      1,390,189
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "12px" }}>Municipal</td>
                    <td style={{ padding: "12px" }}>City of Eugene (EWEB)</td>
                    <td style={{ padding: "12px", textAlign: "right" }}>
                      89,134
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "12px" }}>
                      Political Subdivision (PUD)
                    </td>
                    <td style={{ padding: "12px" }}>
                      Emerald People's Utility Dist, Clatskanie Peoples Util
                      Dist
                    </td>
                    <td style={{ padding: "12px", textAlign: "right" }}>
                      23,729
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "12px" }}>Cooperative</td>
                    <td style={{ padding: "12px" }}>
                      Surprise Valley Electrification
                    </td>
                    <td style={{ padding: "12px", textAlign: "right" }}>
                      1,211
                    </td>
                  </tr>
                </tbody>
              </table>
              <p
                style={{
                  fontSize: "13px",
                  color: "#64748b",
                  marginTop: "16px",
                }}
              >
                <strong>Excluded:</strong> "Behind the Meter" providers (solar
                companies like Tesla, SolarCity) and Federal (Bonneville Power
                Administration, which has no direct residential customers).
              </p>
            </div>
          </div>
        )}

        {/* Download Tab */}
        {activeTab === "download" && (
          <div>
            <h2
              style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}
            >
              Download Data
            </h2>
            <p style={{ color: "#64748b", marginBottom: "24px" }}>
              Export the analyzed data in CSV format.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#dbeafe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    fontSize: "24px",
                  }}
                >
                  📊
                </div>
                <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>
                  Annual by Ownership Type
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    marginBottom: "16px",
                  }}
                >
                  IOUs, Municipal, PUD, Cooperative, U.S. Average (2014-2024)
                </p>
                <button
                  onClick={() => downloadCSV("annual")}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: COLORS.iou,
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Download CSV
                </button>
              </div>
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#dcfce7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    fontSize: "24px",
                  }}
                >
                  🏢
                </div>
                <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>
                  Individual IOUs
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    marginBottom: "16px",
                  }}
                >
                  PGE, PacifiCorp, Idaho Power annual data (2014-2024)
                </p>
                <button
                  onClick={() => downloadCSV("utilities")}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: COLORS.municipal,
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Download CSV
                </button>
              </div>
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#fef3c7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    fontSize: "24px",
                  }}
                >
                  ⚖️
                </div>
                <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>
                  OPUC Rate Cases
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    marginBottom: "16px",
                  }}
                >
                  General rate revision approvals (2019-2025)
                </p>
                <button
                  onClick={() => downloadCSV("ratecases")}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "#b45309",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Download CSV
                </button>
              </div>
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#ffedd5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    fontSize: "24px",
                  }}
                >
                  🗺️
                </div>
                <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>
                  State Comparison
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    marginBottom: "16px",
                  }}
                >
                  All 50 states + DC residential metrics (2024)
                </p>
                <button
                  onClick={() => downloadCSV("states")}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: COLORS.usAverage,
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Download CSV
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #e2e8f0",
          background: "white",
          marginTop: "48px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "24px",
            fontSize: "13px",
            color: "#64748b",
          }}
        >
          <p>
            <strong>Data Source:</strong> U.S. Energy Information Administration
            (EIA) Form EIA-861M | 2014-2024 | Oregon Public Utility Commission
            (OPUC) rate case orders
          </p>
          <p style={{ marginTop: "8px" }}>
            <strong>Note:</strong> Prices are weighted averages based on actual
            revenue and sales. Bills and usage are monthly averages derived from
            annual totals divided by average customer counts.
          </p>
        </div>
      </div>
    </div>
  );
}
