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
// Comprehensive monthly data (2022-2025) - Verified from EIA Form 861M
const monthlyData = [
  { date: "2022-01", OregonIOUs: 0.1175, Municipal: 0.1052, PUD: 0.0847, Cooperative: 0.0936, USAverage: 0.1364, OregonIOUs_bill: 133.09, Municipal_bill: 142.41, PUD_bill: 185.78, Cooperative_bill: 179.60, USAverage_bill: 138.16 },
  { date: "2022-02", OregonIOUs: 0.1171, Municipal: 0.1137, PUD: 0.0979, Cooperative: 0.0955, USAverage: 0.1376, OregonIOUs_bill: 111.99, Municipal_bill: 128.60, PUD_bill: 162.31, Cooperative_bill: 146.96, USAverage_bill: 124.37 },
  { date: "2022-03", OregonIOUs: 0.1178, Municipal: 0.1143, PUD: 0.0945, Cooperative: 0.0969, USAverage: 0.1441, OregonIOUs_bill: 103.97, Municipal_bill: 121.24, PUD_bill: 159.28, Cooperative_bill: 133.75, USAverage_bill: 114.52 },
  { date: "2022-04", OregonIOUs: 0.1187, Municipal: 0.1182, PUD: 0.0956, Cooperative: 0.0991, USAverage: 0.1457, OregonIOUs_bill: 99.11, Municipal_bill: 106.85, PUD_bill: 117.77, Cooperative_bill: 115.53, USAverage_bill: 102.02 },
  { date: "2022-05", OregonIOUs: 0.1220, Municipal: 0.1205, PUD: 0.0985, Cooperative: 0.1000, USAverage: 0.1489, OregonIOUs_bill: 88.46, Municipal_bill: 96.76, PUD_bill: 129.60, Cooperative_bill: 109.78, USAverage_bill: 117.34 },
  { date: "2022-06", OregonIOUs: 0.1238, Municipal: 0.1264, PUD: 0.1079, Cooperative: 0.1044, USAverage: 0.1530, OregonIOUs_bill: 84.24, Municipal_bill: 86.16, PUD_bill: 97.64, Cooperative_bill: 88.52, USAverage_bill: 148.88 },
  { date: "2022-07", OregonIOUs: 0.1220, Municipal: 0.1254, PUD: 0.1023, Cooperative: 0.1053, USAverage: 0.1531, OregonIOUs_bill: 109.19, Municipal_bill: 95.25, PUD_bill: 98.81, Cooperative_bill: 84.97, USAverage_bill: 180.15 },
  { date: "2022-08", OregonIOUs: 0.1212, Municipal: 0.1210, PUD: 0.1031, Cooperative: 0.1022, USAverage: 0.1582, OregonIOUs_bill: 108.67, Municipal_bill: 96.71, PUD_bill: 123.25, Cooperative_bill: 97.50, USAverage_bill: 180.39 },
  { date: "2022-09", OregonIOUs: 0.1222, Municipal: 0.1218, PUD: 0.1017, Cooperative: 0.1032, USAverage: 0.1619, OregonIOUs_bill: 83.07, Municipal_bill: 81.81, PUD_bill: 105.92, Cooperative_bill: 92.92, USAverage_bill: 149.27 },
  { date: "2022-10", OregonIOUs: 0.1236, Municipal: 0.1300, PUD: 0.1148, Cooperative: 0.1073, USAverage: 0.1599, OregonIOUs_bill: 86.18, Municipal_bill: 87.45, PUD_bill: 94.49, Cooperative_bill: 78.87, USAverage_bill: 113.74 },
  { date: "2022-11", OregonIOUs: 0.1200, Municipal: 0.1183, PUD: 0.0978, Cooperative: 0.0957, USAverage: 0.1555, OregonIOUs_bill: 123.36, Municipal_bill: 130.12, PUD_bill: 128.86, Cooperative_bill: 146.47, USAverage_bill: 114.39 },
  { date: "2022-12", OregonIOUs: 0.1187, Municipal: 0.1085, PUD: 0.0883, Cooperative: 0.0931, USAverage: 0.1494, OregonIOUs_bill: 142.05, Municipal_bill: 151.71, PUD_bill: 204.42, Cooperative_bill: 188.63, USAverage_bill: 139.51 },
  { date: "2023-01", OregonIOUs: 0.1342, Municipal: 0.1110, PUD: 0.0913, Cooperative: 0.1023, USAverage: 0.1547, OregonIOUs_bill: 145.41, Municipal_bill: 145.12, PUD_bill: 175.57, Cooperative_bill: 187.82, USAverage_bill: 144.84 },
  { date: "2023-02", OregonIOUs: 0.1338, Municipal: 0.1182, PUD: 0.0931, Cooperative: 0.1027, USAverage: 0.1598, OregonIOUs_bill: 135.17, Municipal_bill: 138.19, PUD_bill: 157.22, Cooperative_bill: 182.48, USAverage_bill: 127.85 },
  { date: "2023-03", OregonIOUs: 0.1337, Municipal: 0.1154, PUD: 0.0925, Cooperative: 0.1037, USAverage: 0.1604, OregonIOUs_bill: 135.29, Municipal_bill: 147.47, PUD_bill: 185.67, Cooperative_bill: 172.19, USAverage_bill: 125.25 },
  { date: "2023-04", OregonIOUs: 0.1366, Municipal: 0.1198, PUD: 0.0947, Cooperative: 0.1050, USAverage: 0.1610, OregonIOUs_bill: 111.23, Municipal_bill: 111.96, PUD_bill: 146.02, Cooperative_bill: 160.33, USAverage_bill: 110.39 },
  { date: "2023-05", OregonIOUs: 0.1397, Municipal: 0.1299, PUD: 0.0995, Cooperative: 0.1162, USAverage: 0.1614, OregonIOUs_bill: 98.80, Municipal_bill: 99.14, PUD_bill: 112.66, Cooperative_bill: 105.51, USAverage_bill: 114.49 },
  { date: "2023-06", OregonIOUs: 0.1408, Municipal: 0.1321, PUD: 0.0970, Cooperative: 0.1208, USAverage: 0.1609, OregonIOUs_bill: 96.84, Municipal_bill: 86.38, PUD_bill: 86.92, Cooperative_bill: 94.09, USAverage_bill: 137.97 },
  { date: "2023-07", OregonIOUs: 0.1396, Municipal: 0.1303, PUD: 0.1067, Cooperative: 0.1171, USAverage: 0.1586, OregonIOUs_bill: 123.94, Municipal_bill: 97.54, PUD_bill: 109.81, Cooperative_bill: 103.14, USAverage_bill: 179.43 },
  { date: "2023-08", OregonIOUs: 0.1387, Municipal: 0.1269, PUD: 0.1043, Cooperative: 0.1181, USAverage: 0.1591, OregonIOUs_bill: 121.77, Municipal_bill: 103.74, PUD_bill: 124.44, Cooperative_bill: 100.59, USAverage_bill: 180.82 },
  { date: "2023-09", OregonIOUs: 0.1421, Municipal: 0.1290, PUD: 0.1084, Cooperative: 0.1229, USAverage: 0.1627, OregonIOUs_bill: 89.83, Municipal_bill: 80.18, PUD_bill: 109.44, Cooperative_bill: 89.89, USAverage_bill: 152.78 },
  { date: "2023-10", OregonIOUs: 0.1421, Municipal: 0.1351, PUD: 0.1079, Cooperative: 0.1185, USAverage: 0.1648, OregonIOUs_bill: 101.00, Municipal_bill: 98.43, PUD_bill: 91.16, Cooperative_bill: 99.80, USAverage_bill: 119.98 },
  { date: "2023-11", OregonIOUs: 0.1401, Municipal: 0.1237, PUD: 0.1018, Cooperative: 0.1098, USAverage: 0.1619, OregonIOUs_bill: 124.65, Municipal_bill: 123.08, PUD_bill: 129.18, Cooperative_bill: 129.99, USAverage_bill: 116.50 },
  { date: "2023-12", OregonIOUs: 0.1382, Municipal: 0.1162, PUD: 0.0835, Cooperative: 0.1049, USAverage: 0.1569, OregonIOUs_bill: 139.13, Municipal_bill: 135.19, PUD_bill: 159.94, Cooperative_bill: 161.33, USAverage_bill: 131.46 },
  { date: "2024-01", OregonIOUs: 0.1589, Municipal: 0.1157, PUD: 0.0929, Cooperative: 0.1033, USAverage: 0.1541, OregonIOUs_bill: 177.24, Municipal_bill: 146.26, PUD_bill: 174.17, Cooperative_bill: 175.93, USAverage_bill: 154.02 },
  { date: "2024-02", OregonIOUs: 0.1613, Municipal: 0.1270, PUD: 0.1021, Cooperative: 0.1250, USAverage: 0.1610, OregonIOUs_bill: 145.73, Municipal_bill: 129.41, PUD_bill: 125.51, Cooperative_bill: 190.83, USAverage_bill: 130.91 },
  { date: "2024-03", OregonIOUs: 0.1617, Municipal: 0.1277, PUD: 0.0959, Cooperative: 0.1266, USAverage: 0.1667, OregonIOUs_bill: 140.59, Municipal_bill: 136.20, PUD_bill: 166.86, Cooperative_bill: 175.67, USAverage_bill: 119.51 },
  { date: "2024-04", OregonIOUs: 0.1643, Municipal: 0.1337, PUD: 0.1031, Cooperative: 0.1294, USAverage: 0.1686, OregonIOUs_bill: 115.72, Municipal_bill: 107.38, PUD_bill: 128.36, Cooperative_bill: 155.01, USAverage_bill: 111.83 },
  { date: "2024-05", OregonIOUs: 0.1676, Municipal: 0.1363, PUD: 0.1098, Cooperative: 0.1341, USAverage: 0.1640, OregonIOUs_bill: 111.93, Municipal_bill: 99.58, PUD_bill: 117.48, Cooperative_bill: 130.88, USAverage_bill: 123.36 },
  { date: "2024-06", OregonIOUs: 0.1665, Municipal: 0.1434, PUD: 0.1095, Cooperative: 0.1378, USAverage: 0.1638, OregonIOUs_bill: 110.46, Municipal_bill: 88.72, PUD_bill: 93.26, Cooperative_bill: 117.26, USAverage_bill: 159.36 },
  { date: "2024-07", OregonIOUs: 0.1631, Municipal: 0.1364, PUD: 0.1135, Cooperative: 0.1392, USAverage: 0.1662, OregonIOUs_bill: 145.37, Municipal_bill: 113.21, PUD_bill: 117.35, Cooperative_bill: 113.43, USAverage_bill: 190.77 },
  { date: "2024-08", OregonIOUs: 0.1646, Municipal: 0.1340, PUD: 0.1041, Cooperative: 0.1347, USAverage: 0.1660, OregonIOUs_bill: 129.92, Municipal_bill: 99.64, PUD_bill: 123.82, Cooperative_bill: 128.89, USAverage_bill: 183.94 },
  { date: "2024-09", OregonIOUs: 0.1679, Municipal: 0.1408, PUD: 0.1162, Cooperative: 0.1432, USAverage: 0.1682, OregonIOUs_bill: 110.23, Municipal_bill: 88.94, PUD_bill: 100.83, Cooperative_bill: 103.27, USAverage_bill: 149.62 },
  { date: "2024-10", OregonIOUs: 0.1686, Municipal: 0.1437, PUD: 0.1169, Cooperative: 0.1399, USAverage: 0.1709, OregonIOUs_bill: 113.40, Municipal_bill: 100.37, PUD_bill: 106.27, Cooperative_bill: 111.77, USAverage_bill: 125.74 },
  { date: "2024-11", OregonIOUs: 0.1629, Municipal: 0.1315, PUD: 0.1002, Cooperative: 0.1269, USAverage: 0.1685, OregonIOUs_bill: 145.44, Municipal_bill: 124.66, PUD_bill: 128.58, Cooperative_bill: 172.84, USAverage_bill: 116.22 },
  { date: "2024-12", OregonIOUs: 0.1590, Municipal: 0.1214, PUD: 0.0966, Cooperative: 0.1239, USAverage: 0.1627, OregonIOUs_bill: 165.54, Municipal_bill: 154.36, PUD_bill: 184.94, Cooperative_bill: 202.29, USAverage_bill: 141.54 },
  { date: "2025-01", OregonIOUs: 0.1644, Municipal: 0.1233, PUD: 0.1005, Cooperative: 0.1240, USAverage: 0.1595, OregonIOUs_bill: 181.26, Municipal_bill: 168.11, PUD_bill: 179.44, Cooperative_bill: 200.70, USAverage_bill: 169.60 },
  { date: "2025-02", OregonIOUs: 0.1683, Municipal: 0.1326, PUD: 0.0931, Cooperative: 0.1222, USAverage: 0.1644, OregonIOUs_bill: 161.23, Municipal_bill: 157.56, PUD_bill: 196.91, Cooperative_bill: 223.84, USAverage_bill: 147.15 },
  { date: "2025-03", OregonIOUs: 0.1726, Municipal: 0.1388, PUD: 0.1049, Cooperative: 0.1279, USAverage: 0.1711, OregonIOUs_bill: 143.05, Municipal_bill: 136.84, PUD_bill: 159.74, Cooperative_bill: 165.17, USAverage_bill: 130.10 },
  { date: "2025-04", OregonIOUs: 0.1721, Municipal: 0.1459, PUD: 0.1104, Cooperative: 0.1295, USAverage: 0.1745, OregonIOUs_bill: 114.93, Municipal_bill: 118.74, PUD_bill: 125.50, Cooperative_bill: 154.12, USAverage_bill: 118.18 },
  { date: "2025-05", OregonIOUs: 0.1763, Municipal: 0.1528, PUD: 0.1156, Cooperative: 0.1381, USAverage: 0.1747, OregonIOUs_bill: 109.32, Municipal_bill: 111.20, PUD_bill: 106.57, Cooperative_bill: 116.46, USAverage_bill: 127.52 },
  { date: "2025-06", OregonIOUs: 0.1748, Municipal: 0.1554, PUD: 0.1215, Cooperative: 0.1388, USAverage: 0.1747, OregonIOUs_bill: 118.94, Municipal_bill: 111.77, PUD_bill: 107.53, Cooperative_bill: 114.27, USAverage_bill: 165.26 },
  { date: "2025-07", OregonIOUs: 0.1718, Municipal: 0.1467, PUD: 0.1171, Cooperative: 0.1385, USAverage: 0.1747, OregonIOUs_bill: 145.61, Municipal_bill: 134.06, PUD_bill: 123.77, Cooperative_bill: 115.19, USAverage_bill: 203.53 },
  { date: "2025-08", OregonIOUs: 0.1731, Municipal: 0.1447, PUD: 0.1084, Cooperative: 0.1397, USAverage: 0.1762, OregonIOUs_bill: 147.72, Municipal_bill: 115.21, PUD_bill: 129.85, Cooperative_bill: 111.73, USAverage_bill: 189.86 },
  { date: "2025-09", OregonIOUs: 0.1761, Municipal: 0.1481, PUD: 0.1165, Cooperative: 0.1400, USAverage: 0.1807, OregonIOUs_bill: 116.18, Municipal_bill: 98.11, PUD_bill: 121.58, Cooperative_bill: 111.32, USAverage_bill: 158.47 },
  { date: "2025-10", OregonIOUs: 0.1771, Municipal: 0.1559, PUD: 0.1262, Cooperative: 0.1368, USAverage: 0.1798, OregonIOUs_bill: 123.45, Municipal_bill: 110.12, PUD_bill: 104.63, Cooperative_bill: 120.96, USAverage_bill: 132.85 },
];

// Individual IOU monthly data (2022-2025) - Verified from EIA Form 861M
const iouMonthlyData = [
  { date: "2022-01", PGE: 0.1310, PacifiCorp: 0.1014, IdahoPower: 0.0958, PGE_bill: 136.43, PacifiCorp_bill: 127.04, IdahoPower_bill: 172.20 },
  { date: "2022-02", PGE: 0.1321, PacifiCorp: 0.0990, IdahoPower: 0.0961, PGE_bill: 116.39, PacifiCorp_bill: 104.53, IdahoPower_bill: 142.94 },
  { date: "2022-03", PGE: 0.1340, PacifiCorp: 0.0975, IdahoPower: 0.0956, PGE_bill: 110.53, PacifiCorp_bill: 93.95, IdahoPower_bill: 107.94 },
  { date: "2022-04", PGE: 0.1343, PacifiCorp: 0.0987, IdahoPower: 0.0956, PGE_bill: 105.79, PacifiCorp_bill: 89.11, IdahoPower_bill: 94.98 },
  { date: "2022-05", PGE: 0.1406, PacifiCorp: 0.0977, IdahoPower: 0.0963, PGE_bill: 96.97, PacifiCorp_bill: 75.79, IdahoPower_bill: 81.18 },
  { date: "2022-06", PGE: 0.1418, PacifiCorp: 0.0986, IdahoPower: 0.1337, PGE_bill: 92.81, PacifiCorp_bill: 70.63, IdahoPower_bill: 110.02 },
  { date: "2022-07", PGE: 0.1384, PacifiCorp: 0.0999, IdahoPower: 0.1032, PGE_bill: 119.04, PacifiCorp_bill: 93.71, IdahoPower_bill: 131.76 },
  { date: "2022-08", PGE: 0.1383, PacifiCorp: 0.0972, IdahoPower: 0.1047, PGE_bill: 120.87, PacifiCorp_bill: 89.71, IdahoPower_bill: 129.03 },
  { date: "2022-09", PGE: 0.1403, PacifiCorp: 0.0973, IdahoPower: 0.1079, PGE_bill: 92.40, PacifiCorp_bill: 68.82, IdahoPower_bill: 88.97 },
  { date: "2022-10", PGE: 0.1409, PacifiCorp: 0.1002, IdahoPower: 0.1046, PGE_bill: 94.60, PacifiCorp_bill: 73.37, IdahoPower_bill: 89.59 },
  { date: "2022-11", PGE: 0.1360, PacifiCorp: 0.1009, IdahoPower: 0.1028, PGE_bill: 127.54, PacifiCorp_bill: 116.35, IdahoPower_bill: 150.63 },
  { date: "2022-12", PGE: 0.1345, PacifiCorp: 0.0991, IdahoPower: 0.1041, PGE_bill: 149.16, PacifiCorp_bill: 130.18, IdahoPower_bill: 185.89 },
  { date: "2023-01", PGE: 0.1491, PacifiCorp: 0.1168, IdahoPower: 0.1051, PGE_bill: 147.55, PacifiCorp_bill: 141.51, IdahoPower_bill: 171.31 },
  { date: "2023-02", PGE: 0.1486, PacifiCorp: 0.1160, IdahoPower: 0.1055, PGE_bill: 138.76, PacifiCorp_bill: 129.35, IdahoPower_bill: 150.44 },
  { date: "2023-03", PGE: 0.1494, PacifiCorp: 0.1148, IdahoPower: 0.1046, PGE_bill: 139.80, PacifiCorp_bill: 128.25, IdahoPower_bill: 144.22 },
  { date: "2023-04", PGE: 0.1525, PacifiCorp: 0.1156, IdahoPower: 0.1056, PGE_bill: 119.32, PacifiCorp_bill: 99.22, IdahoPower_bill: 104.84 },
  { date: "2023-05", PGE: 0.1548, PacifiCorp: 0.1192, IdahoPower: 0.1061, PGE_bill: 106.60, PacifiCorp_bill: 87.44, IdahoPower_bill: 83.58 },
  { date: "2023-06", PGE: 0.1545, PacifiCorp: 0.1231, IdahoPower: 0.1202, PGE_bill: 101.07, PacifiCorp_bill: 90.39, IdahoPower_bill: 99.24 },
  { date: "2023-07", PGE: 0.1518, PacifiCorp: 0.1242, IdahoPower: 0.1152, PGE_bill: 127.18, PacifiCorp_bill: 118.61, IdahoPower_bill: 141.21 },
  { date: "2023-08", PGE: 0.1508, PacifiCorp: 0.1218, IdahoPower: 0.1155, PGE_bill: 130.21, PacifiCorp_bill: 109.07, IdahoPower_bill: 120.86 },
  { date: "2023-09", PGE: 0.1566, PacifiCorp: 0.1222, IdahoPower: 0.1168, PGE_bill: 96.64, PacifiCorp_bill: 79.60, IdahoPower_bill: 88.70 },
  { date: "2023-10", PGE: 0.1542, PacifiCorp: 0.1267, IdahoPower: 0.1163, PGE_bill: 103.90, PacifiCorp_bill: 96.72, IdahoPower_bill: 97.50 },
  { date: "2023-11", PGE: 0.1534, PacifiCorp: 0.1241, IdahoPower: 0.1155, PGE_bill: 126.21, PacifiCorp_bill: 121.88, IdahoPower_bill: 141.15 },
  { date: "2023-12", PGE: 0.1516, PacifiCorp: 0.1211, IdahoPower: 0.1200, PGE_bill: 143.82, PacifiCorp_bill: 131.07, IdahoPower_bill: 177.75 },
  { date: "2024-01", PGE: 0.1765, PacifiCorp: 0.1369, IdahoPower: 0.1156, PGE_bill: 186.42, PacifiCorp_bill: 162.99, IdahoPower_bill: 192.16 },
  { date: "2024-02", PGE: 0.1799, PacifiCorp: 0.1387, IdahoPower: 0.1149, PGE_bill: 151.85, PacifiCorp_bill: 136.66, IdahoPower_bill: 139.06 },
  { date: "2024-03", PGE: 0.1801, PacifiCorp: 0.1388, IdahoPower: 0.1152, PGE_bill: 147.84, PacifiCorp_bill: 129.88, IdahoPower_bill: 130.84 },
  { date: "2024-04", PGE: 0.1839, PacifiCorp: 0.1398, IdahoPower: 0.1161, PGE_bill: 122.29, PacifiCorp_bill: 106.26, IdahoPower_bill: 97.18 },
  { date: "2024-05", PGE: 0.1850, PacifiCorp: 0.1447, IdahoPower: 0.1162, PGE_bill: 119.54, PacifiCorp_bill: 100.89, IdahoPower_bill: 92.68 },
  { date: "2024-06", PGE: 0.1849, PacifiCorp: 0.1437, IdahoPower: 0.1034, PGE_bill: 116.58, PacifiCorp_bill: 101.57, IdahoPower_bill: 94.40 },
  { date: "2024-07", PGE: 0.1800, PacifiCorp: 0.1415, IdahoPower: 0.1027, PGE_bill: 154.97, PacifiCorp_bill: 131.26, IdahoPower_bill: 126.63 },
  { date: "2024-08", PGE: 0.1851, PacifiCorp: 0.1394, IdahoPower: 0.1029, PGE_bill: 137.46, PacifiCorp_bill: 119.00, IdahoPower_bill: 108.71 },
  { date: "2024-09", PGE: 0.1874, PacifiCorp: 0.1416, IdahoPower: 0.1041, PGE_bill: 120.62, PacifiCorp_bill: 95.24, IdahoPower_bill: 81.16 },
  { date: "2024-10", PGE: 0.1869, PacifiCorp: 0.1451, IdahoPower: 0.1156, PGE_bill: 120.03, PacifiCorp_bill: 103.76, IdahoPower_bill: 97.22 },
  { date: "2024-11", PGE: 0.1811, PacifiCorp: 0.1419, IdahoPower: 0.1204, PGE_bill: 148.14, PacifiCorp_bill: 141.35, IdahoPower_bill: 146.94 },
  { date: "2024-12", PGE: 0.1786, PacifiCorp: 0.1356, IdahoPower: 0.1210, PGE_bill: 171.39, PacifiCorp_bill: 156.13, IdahoPower_bill: 186.41 },
  { date: "2025-01", PGE: 0.1822, PacifiCorp: 0.1443, IdahoPower: 0.1215, PGE_bill: 181.70, PacifiCorp_bill: 180.23, IdahoPower_bill: 195.30 },
  { date: "2025-02", PGE: 0.1857, PacifiCorp: 0.1480, IdahoPower: 0.1220, PGE_bill: 163.59, PacifiCorp_bill: 157.23, IdahoPower_bill: 177.18 },
  { date: "2025-03", PGE: 0.1895, PacifiCorp: 0.1519, IdahoPower: 0.1179, PGE_bill: 148.01, PacifiCorp_bill: 135.87, IdahoPower_bill: 128.88 },
  { date: "2025-04", PGE: 0.1897, PacifiCorp: 0.1507, IdahoPower: 0.1225, PGE_bill: 118.58, PacifiCorp_bill: 109.77, IdahoPower_bill: 99.35 },
  { date: "2025-05", PGE: 0.1924, PacifiCorp: 0.1555, IdahoPower: 0.1225, PGE_bill: 114.70, PacifiCorp_bill: 101.46, IdahoPower_bill: 96.70 },
  { date: "2025-06", PGE: 0.1896, PacifiCorp: 0.1564, IdahoPower: 0.1159, PGE_bill: 123.18, PacifiCorp_bill: 112.74, IdahoPower_bill: 108.48 },
  { date: "2025-07", PGE: 0.1860, PacifiCorp: 0.1540, IdahoPower: 0.1167, PGE_bill: 151.09, PacifiCorp_bill: 137.45, IdahoPower_bill: 138.71 },
  { date: "2025-08", PGE: 0.1871, PacifiCorp: 0.1549, IdahoPower: 0.1172, PGE_bill: 155.11, PacifiCorp_bill: 137.02, IdahoPower_bill: 126.32 },
  { date: "2025-09", PGE: 0.1918, PacifiCorp: 0.1561, IdahoPower: 0.1199, PGE_bill: 120.92, PacifiCorp_bill: 109.48, IdahoPower_bill: 96.85 },
  { date: "2025-10", PGE: 0.1910, PacifiCorp: 0.1610, IdahoPower: 0.1181, PGE_bill: 123.27, PacifiCorp_bill: 124.36, IdahoPower_bill: 98.95 },
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
  const [monthlyStartYear, setMonthlyStartYear] = useState("2022");
  const [monthlyMetric, setMonthlyMetric] = useState("price");

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
              { id: "monthly", label: "Monthly Trends" },
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

        {/* Monthly Trends Tab */}
        {activeTab === "monthly" && (
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
                  Monthly {monthlyMetric === "price" ? "Price" : "Bill"} Trends
                </h2>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  Detailed monthly data for up-to-date analysis (through October 2025)
                </p>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ display: "flex", borderRadius: "8px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
                  <button
                    onClick={() => setMonthlyMetric("price")}
                    style={{
                      padding: "8px 16px",
                      fontSize: "14px",
                      fontWeight: 500,
                      background: monthlyMetric === "price" ? COLORS.iou : "white",
                      color: monthlyMetric === "price" ? "white" : "#475569",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Price (¢/kWh)
                  </button>
                  <button
                    onClick={() => setMonthlyMetric("bill")}
                    style={{
                      padding: "8px 16px",
                      fontSize: "14px",
                      fontWeight: 500,
                      background: monthlyMetric === "bill" ? COLORS.iou : "white",
                      color: monthlyMetric === "bill" ? "white" : "#475569",
                      border: "none",
                      borderLeft: "1px solid #e2e8f0",
                      cursor: "pointer",
                    }}
                  >
                    Avg Bill ($)
                  </button>
                </div>
                <select
                  value={monthlyStartYear}
                  onChange={(e) => setMonthlyStartYear(e.target.value)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    fontSize: "14px",
                  }}
                >
                  <option value="2022">From 2022</option>
                  <option value="2023">From 2023</option>
                  <option value="2024">From 2024</option>
                  <option value="2025">2025 Only</option>
                </select>
              </div>
            </div>

            {/* Latest Month Summary Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              {[
                { name: "Oregon IOUs", key: "OregonIOUs", color: COLORS.iou },
                { name: "Municipal", key: "Municipal", color: COLORS.municipal },
                { name: "PUD", key: "PUD", color: COLORS.pud },
                { name: "Cooperative", key: "Cooperative", color: COLORS.cooperative },
                { name: "U.S. Average", key: "USAverage", color: COLORS.usAverage },
              ].map((item) => {
                const latestData = monthlyData[monthlyData.length - 1];
                const prevYearData = monthlyData.find(d => d.date === "2024-10");
                const priceKey = monthlyMetric === "price" ? item.key : `${item.key}_bill`;
                const currentValue = latestData[priceKey];
                const prevValue = prevYearData ? prevYearData[priceKey] : currentValue;
                const yoyChange = ((currentValue - prevValue) / prevValue * 100).toFixed(1);
                return (
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
                    <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}>
                      {item.name}
                    </p>
                    <p className="mono" style={{ fontSize: "24px", fontWeight: 700 }}>
                      {monthlyMetric === "price" 
                        ? (currentValue * 100).toFixed(1) + "¢"
                        : "$" + currentValue.toFixed(0)
                      }
                    </p>
                    <p style={{ fontSize: "12px", color: yoyChange > 0 ? "#dc2626" : "#16a34a" }}>
                      {yoyChange > 0 ? "+" : ""}{yoyChange}% YoY
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Monthly Chart */}
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
                {monthlyMetric === "price" ? "Monthly Residential Price (¢/kWh)" : "Monthly Average Bill ($)"}
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={monthlyData.filter(d => d.date >= `${monthlyStartYear}-01`)}
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#64748b", fontSize: 11 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    tickFormatter={(v) => monthlyMetric === "price" ? (v * 100).toFixed(0) + "¢" : "$" + v.toFixed(0)}
                    domain={['auto', 'auto']}
                  />
                  <Tooltip
                    formatter={(v) => [monthlyMetric === "price" ? (v * 100).toFixed(2) + "¢/kWh" : "$" + v.toFixed(2)]}
                    labelFormatter={(label) => {
                      const [year, month] = label.split("-");
                      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                      return `${monthNames[parseInt(month) - 1]} ${year}`;
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey={monthlyMetric === "price" ? "OregonIOUs" : "OregonIOUs_bill"}
                    name="Oregon IOUs"
                    stroke={COLORS.iou}
                    strokeWidth={3}
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey={monthlyMetric === "price" ? "Municipal" : "Municipal_bill"}
                    name="Municipal"
                    stroke={COLORS.municipal}
                    strokeWidth={2}
                    dot={{ r: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey={monthlyMetric === "price" ? "PUD" : "PUD_bill"}
                    name="PUD"
                    stroke={COLORS.pud}
                    strokeWidth={2}
                    dot={{ r: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey={monthlyMetric === "price" ? "Cooperative" : "Cooperative_bill"}
                    name="Cooperative"
                    stroke={COLORS.cooperative}
                    strokeWidth={2}
                    dot={{ r: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey={monthlyMetric === "price" ? "USAverage" : "USAverage_bill"}
                    name="U.S. Average"
                    stroke={COLORS.usAverage}
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Monthly Data Table */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "16px", borderBottom: "1px solid #e2e8f0" }}>
                <h3 style={{ fontWeight: 600 }}>Recent Monthly Data (Last 12 Months) — {monthlyMetric === "price" ? "Price (¢/kWh)" : "Average Bill ($)"}</h3>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
                  <thead style={{ background: "#f8fafc" }}>
                    <tr>
                      <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600 }}>Month</th>
                      <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 600 }}>Oregon IOUs</th>
                      <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 600 }}>Municipal</th>
                      <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 600 }}>PUD</th>
                      <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 600 }}>Cooperative</th>
                      <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 600 }}>U.S. Avg</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyData.slice(-12).reverse().map((row, idx) => {
                      const [year, month] = row.date.split("-");
                      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                      const formatValue = (key) => {
                        if (monthlyMetric === "price") {
                          return (row[key] * 100).toFixed(2) + "¢";
                        } else {
                          return "$" + row[key + "_bill"].toFixed(0);
                        }
                      };
                      return (
                        <tr key={row.date} style={{ borderTop: "1px solid #f1f5f9", background: idx === 0 ? "#fffbeb" : "transparent" }}>
                          <td style={{ padding: "10px 12px", fontWeight: idx === 0 ? 600 : 400 }}>
                            {monthNames[parseInt(month) - 1]} {year}
                            {idx === 0 && <span style={{ marginLeft: "8px", fontSize: "10px", background: "#fbbf24", color: "#78350f", padding: "2px 6px", borderRadius: "4px" }}>LATEST</span>}
                          </td>
                          <td className="mono" style={{ padding: "10px 12px", textAlign: "right", color: COLORS.iou }}>{formatValue("OregonIOUs")}</td>
                          <td className="mono" style={{ padding: "10px 12px", textAlign: "right", color: COLORS.municipal }}>{formatValue("Municipal")}</td>
                          <td className="mono" style={{ padding: "10px 12px", textAlign: "right", color: COLORS.pud }}>{formatValue("PUD")}</td>
                          <td className="mono" style={{ padding: "10px 12px", textAlign: "right", color: COLORS.cooperative }}>{formatValue("Cooperative")}</td>
                          <td className="mono" style={{ padding: "10px 12px", textAlign: "right", color: COLORS.usAverage }}>{formatValue("USAverage")}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Individual IOUs Monthly Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
                borderRadius: "16px",
                padding: "24px",
                marginTop: "24px",
                border: "1px solid #bfdbfe",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px", color: "#1e3a5f" }}>
                📊 Individual IOU Monthly Trends
              </h3>
              
              {/* IOU Summary Cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {[
                  { name: "Portland General Electric", key: "PGE", color: COLORS.pge },
                  { name: "PacifiCorp", key: "PacifiCorp", color: COLORS.pacificorp },
                  { name: "Idaho Power", key: "IdahoPower", color: COLORS.idaho },
                ].map((item) => {
                  const latestData = iouMonthlyData[iouMonthlyData.length - 1];
                  const prevYearData = iouMonthlyData.find(d => d.date === "2024-10");
                  const priceKey = monthlyMetric === "price" ? item.key : `${item.key}_bill`;
                  const currentValue = latestData[priceKey];
                  const prevValue = prevYearData ? prevYearData[priceKey] : currentValue;
                  const yoyChange = ((currentValue - prevValue) / prevValue * 100).toFixed(1);
                  return (
                    <div
                      key={item.name}
                      style={{
                        background: "white",
                        borderRadius: "12px",
                        padding: "16px",
                        border: "1px solid #e2e8f0",
                        borderTop: `4px solid ${item.color}`,
                      }}
                    >
                      <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}>
                        {item.name}
                      </p>
                      <p className="mono" style={{ fontSize: "24px", fontWeight: 700 }}>
                        {monthlyMetric === "price" 
                          ? (currentValue * 100).toFixed(1) + "¢"
                          : "$" + currentValue.toFixed(0)
                        }
                      </p>
                      <p style={{ fontSize: "12px", color: yoyChange > 0 ? "#dc2626" : "#16a34a" }}>
                        {yoyChange > 0 ? "+" : ""}{yoyChange}% YoY
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* IOU Monthly Chart */}
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  border: "1px solid #e2e8f0",
                  marginBottom: "24px",
                }}
              >
                <h4 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "16px" }}>
                  {monthlyMetric === "price" ? "Monthly Price by IOU (¢/kWh)" : "Monthly Average Bill by IOU ($)"}
                </h4>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart
                    data={iouMonthlyData.filter(d => d.date >= `${monthlyStartYear}-01`)}
                    margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      dataKey="date"
                      tick={{ fill: "#64748b", fontSize: 11 }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis
                      tick={{ fill: "#64748b", fontSize: 12 }}
                      tickFormatter={(v) => monthlyMetric === "price" ? (v * 100).toFixed(0) + "¢" : "$" + v.toFixed(0)}
                      domain={['auto', 'auto']}
                    />
                    <Tooltip
                      formatter={(v) => [monthlyMetric === "price" ? (v * 100).toFixed(2) + "¢/kWh" : "$" + v.toFixed(2)]}
                      labelFormatter={(label) => {
                        const [year, month] = label.split("-");
                        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        return `${monthNames[parseInt(month) - 1]} ${year}`;
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey={monthlyMetric === "price" ? "PGE" : "PGE_bill"}
                      name="Portland General Electric"
                      stroke={COLORS.pge}
                      strokeWidth={3}
                      dot={{ r: 3 }}
                    />
                    <Line
                      type="monotone"
                      dataKey={monthlyMetric === "price" ? "PacifiCorp" : "PacifiCorp_bill"}
                      name="PacifiCorp"
                      stroke={COLORS.pacificorp}
                      strokeWidth={3}
                      dot={{ r: 3 }}
                    />
                    <Line
                      type="monotone"
                      dataKey={monthlyMetric === "price" ? "IdahoPower" : "IdahoPower_bill"}
                      name="Idaho Power"
                      stroke={COLORS.idaho}
                      strokeWidth={3}
                      dot={{ r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* IOU Monthly Data Table */}
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                }}
              >
                <div style={{ padding: "12px 16px", borderBottom: "1px solid #e2e8f0", background: "#f8fafc" }}>
                  <h4 style={{ fontWeight: 600, fontSize: "14px" }}>Individual IOU Data (Last 12 Months) — {monthlyMetric === "price" ? "Price (¢/kWh)" : "Average Bill ($)"}</h4>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
                    <thead style={{ background: "#f8fafc" }}>
                      <tr>
                        <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600 }}>Month</th>
                        <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 600 }}>PGE</th>
                        <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 600 }}>PacifiCorp</th>
                        <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 600 }}>Idaho Power</th>
                      </tr>
                    </thead>
                    <tbody>
                      {iouMonthlyData.slice(-12).reverse().map((row, idx) => {
                        const [year, month] = row.date.split("-");
                        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        const formatIouValue = (key) => {
                          if (monthlyMetric === "price") {
                            return (row[key] * 100).toFixed(2) + "¢";
                          } else {
                            return "$" + row[key + "_bill"].toFixed(0);
                          }
                        };
                        return (
                          <tr key={row.date} style={{ borderTop: "1px solid #f1f5f9", background: idx === 0 ? "#fffbeb" : "transparent" }}>
                            <td style={{ padding: "10px 12px", fontWeight: idx === 0 ? 600 : 400 }}>
                              {monthNames[parseInt(month) - 1]} {year}
                              {idx === 0 && <span style={{ marginLeft: "8px", fontSize: "10px", background: "#fbbf24", color: "#78350f", padding: "2px 6px", borderRadius: "4px" }}>LATEST</span>}
                            </td>
                            <td className="mono" style={{ padding: "10px 12px", textAlign: "right", color: COLORS.pge }}>{formatIouValue("PGE")}</td>
                            <td className="mono" style={{ padding: "10px 12px", textAlign: "right", color: COLORS.pacificorp }}>{formatIouValue("PacifiCorp")}</td>
                            <td className="mono" style={{ padding: "10px 12px", textAlign: "right", color: COLORS.idaho }}>{formatIouValue("IdahoPower")}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
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
                          <td style={{ padding: "12px 16px", color: "#475569" }}>
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
                <strong>
                  Oregon Public Utility Commission (OPUC) orders
                </strong>{" "}
                for general rate revisions. These represent formal rate change
                requests filed by investor-owned utilities and the
                commission's final approved changes.
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
