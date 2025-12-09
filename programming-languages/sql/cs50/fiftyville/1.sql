SELECT passport_number, seat FROM passengers WHERE passport_number ="3592750733" OR passport_number ="5773159633"  OR passport_number ="1988161715" AND flight_id IN (SELECT id FROM flights WHERE hour = 8 AND year = 2024 and day = 29 and month = 07 AND  origin_airport_id=8)
+-----------------+------+
| passport_number | seat |
+-----------------+------+
| 3592750733      | 4C   |
| 3592750733      | 2C   |


| 5773159633      | 4A   |

+----------------+-------+
|  phone_number  | name  |
+----------------+-------+
| (367) 555-5533 | Bruce | --> (375) 555-8161
+----------------+-------+


| 1988161715      | 6D   |

+----------------+--------+
|  phone_number  |  name  |
+----------------+--------+
| (286) 555-6063 | Taylor | --> (676) 555-6554 --> James -->  LaGuardia Airport
+----------------+--------+


| 3592750733      | 6C   |
+-----------------+------+



SELECT destination_airport_id, id FROM flights WHERE hour = 8 AND year = 2024 and day = 29 and month = 07 AND  origin_airport_id=8
