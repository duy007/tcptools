# TCP / IP Tools
## NOTE: tracert did not produce stddev, so I do not have the statistic for that variable

Ping:
* Amazon:
  * min: 3ms, max: 3ms, avg: 3ms
  * min: 2ms, max: 4ms, avg: 3ms
  * min: 3ms, max: 3ms, avg: 3ms
  * No packet loss for all 3 pings
  * IP did change from 104.71.134.32 to 18.172.169.208, and then to 18.65.233.187
* Google:
  * min: 2ms, max: 4ms, avg: 3ms
  * min: 3ms, max: 4ms, avg: 3ms
  * min: 3ms, max: 5ms, avg: 3ms
  * No packet loss for all 3 pings
  * IP did not change from 142.250.69.196
* Google:
  * min: 3ms, max: 3ms, avg: 3ms
  * min: 3ms, max: 5ms, avg: 3ms
  * min: 3ms, max: 5ms, avg: 3ms
  * No packet loss for all 3 pings
  * IP did change from 23.36.53.236 in the first ping to 23.200.56.161 for the others.

tracert:
* Amazon:
  * target IP: 162.219.225.118
  * Required 7 hops.
  * I believe my ISP would be tukw-dsl-gw70.tukw.qwest.net [63.231.10.70]
  * The first IP is Class C, then 3 Class A, and finally Class B
* Google:
  * target IP: 142.251.211.228
  * Required 8 hops.
  * I believe my ISP would be tukw-dsl-gw70.tukw.qwest.net [63.231.10.70]
  * The first IP is Class C, then 2 Class A, then 2 Class B, then 1 Class C, and finally Class B
* Microsoft:
  * target IP: 104.71.133.251
  * Required 8 hops.
  * I believe my ISP would be tukw-dsl-gw70.tukw.qwest.net [63.231.10.70]
  * The first IP is Class C, and 6 Class A