-- Keep a log of any SQL queries you execute as you solve the mystery.






CREATE TABLE crime_scene_reports (
    id INTEGER,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    street TEXT,
    description TEXT,
    PRIMARY KEY(id)
);
CREATE TABLE interviews (
    id INTEGER,
    name TEXT,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    transcript TEXT,
    PRIMARY KEY(id)
);
CREATE TABLE atm_transactions (
    id INTEGER,
    account_number INTEGER,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    atm_location TEXT,
    transaction_type TEXT,
    amount INTEGER,
    PRIMARY KEY(id)
);

SELECT person_ID FROM bank_accounts WHERE account_number IN (SELECT account_number, atm_location, transaction_type, amount FROM atm_transactions WHERE year = 2024 and day = 28 and month = 07 AND atm_location = 'Humphrey Lane')

CREATE TABLE bank_accounts (
    account_number INTEGER,
    person_id INTEGER,
    creation_year INTEGER,
    FOREIGN KEY(person_id) REFERENCES people(id)
);
CREATE TABLE airports (
    id INTEGER,
    abbreviation TEXT,
    full_name TEXT,
    city TEXT,
    PRIMARY KEY(id)
);

id = 8;

SELECT id FROM flights WHERE year = 2024 and day = 28 and month = 07 AND  origin_airport_id=8;

CREATE TABLE flights (
    id INTEGER,
    origin_airport_id INTEGER,
    destination_airport_id INTEGER,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    hour INTEGER,
    minute INTEGER,
    PRIMARY KEY(id),
    FOREIGN KEY(origin_airport_id) REFERENCES airports(id),
    FOREIGN KEY(destination_airport_id) REFERENCES airports(id)
);

SELECT passport_number, seat FROM passengers WHERE passport_number ="3592750733" OR passport_number ="5773159633"  OR passport_number ="1988161715" AND flight_id IN (SELECT id FROM flights WHERE hour = 8 AND year = 2024 and day = 29 and month = 07 AND  origin_airport_id=8)
+-----------------+------+
| passport_number | seat |
+-----------------+------+
| 3592750733      | 4C   |
| 3592750733      | 2C   |
| 5773159633      | 4A   |
| 1988161715      | 6D   |
| 3592750733      | 6C   |
+-----------------+------+

CREATE TABLE passengers (
    flight_id INTEGER,
    passport_number INTEGER,
    seat TEXT,
    FOREIGN KEY(flight_id) REFERENCES flights(id)
);

SELECT receiver FROM phone_calls WHERE year = 2024 and day = 28 and month = 07 AND duration <= 60 AND caller = "(286) 555-6063";

CREATE TABLE phone_calls (
    id INTEGER,
    caller TEXT,
    receiver TEXT,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    duration INTEGER,
    PRIMARY KEY(id)
);

SELECT name, passport_number FROM people WHERE phone_number IN (SELECT caller FROM phone_calls WHERE year = 2024 and day = 28 and month = 07 AND duration <= 60) AND license_plate IN (SELECT license_plate FROM bakery_security_logs WHERE year = 2024 and day = 28 and month = 07) AND id IN (
SELECT person_ID FROM bank_accounts WHERE account_number IN (SELECT account_number FROM atm_transactions WHERE year = 2024 and day = 28 and month = 07 AND atm_location = 'Leggett Street' AND transaction_type="withdraw"));

+--------+-----------------+
|  name  | passport_number |
+--------+-----------------+
| Taylor | 1988161715      |
| Diana  | 3592750733      |
| Bruce  | 5773159633      |
+--------+-----------------+

SELECT phone_number, name FROM people WHERE passport_number = "1988161715";

SELECT passport_number, name FROM people WHERE phone_number = "(676) 555-6554"; ==


CREATE TABLE people (
    id INTEGER,
    name TEXT,
    phone_number TEXT,
    passport_number INTEGER,
    license_plate TEXT,
    PRIMARY KEY(id)
);
CREATE TABLE bakery_security_logs (
    id INTEGER,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    hour INTEGER,
    minute INTEGER,
    activity TEXT,
    license_plate TEXT,
    PRIMARY KEY(id)






sqlite> SELECT transcript, name FROM interviews WHERE year = 2024 and day = 28 and month = 07;

| Примерно через десять минут после кражи я видел, как вор сел в машину на парковке пекарни и уехал.
Если у вас есть записи с камер видеонаблюдения с парковки пекарни, возможно, вам стоит поискать машины, покинувшие её в это время. | Рут |

| Я не знаю имени вора, но это был знакомый мне человек. Сегодня утром, перед тем как я приехал в пекарню Эммы,
 я проходил мимо банкомата на Леггетт-стрит и видел, как вор снимал деньги. | Юджин |

| Когда вор выходил из пекарни, он позвонил кому-то, кто разговаривал с ним меньше минуты.
Во время разговора я услышал, как вор сказал, что они планируют вылететь из Файфтивилла ближайшим рейсом завтра.
Затем вор попросил человека на другом конце провода купить билет на самолёт. | Рэймонд |



SELECT activity, license_plate FROM bakery_security_logs WHERE year = 2024 and day = 28 and month = 07;
+----------+---------------+
| activity | license_plate |
+----------+---------------+
| entrance | 1M92998       |
| entrance | N507616       |
| exit     | 1M92998       |
| exit     | N507616       |
| entrance | 7Z8B130       |
| exit     | 7Z8B130       |
| entrance | 47MEFVA       |
| exit     | 47MEFVA       |
| entrance | D965M59       |
| entrance | HW0488P       |
| exit     | D965M59       |
| exit     | HW0488P       |
| entrance | L93JTIZ       |
| entrance | 94KL13X       |
| entrance | L68E5I0       |
| entrance | HOD8639       |
| exit     | HOD8639       |
| exit     | L68E5I0       |
| entrance | 1106N58       |
| entrance | W2CT78U       |
| exit     | W2CT78U       |
| entrance | 322W7JE       |
| entrance | 3933NUH       |
| exit     | 3933NUH       |
| entrance | 0NTHK55       |
| entrance | 1FBL6TH       |
| exit     | 1FBL6TH       |
| entrance | P14PE2Q       |
| exit     | P14PE2Q       |
| entrance | 4V16VO0       |
| exit     | 4V16VO0       |
| entrance | 8LLB02B       |
| exit     | 8LLB02B       |
| entrance | O784M2U       |
| exit     | O784M2U       |
| entrance | 4328GD8       |
| entrance | 5P2BI95       |
| entrance | 6P58WS2       |
| entrance | G412CB7       |
| entrance | R3G7486       |
| entrance | 13FNH73       |
| exit     | 5P2BI95       |
| exit     | 94KL13X       |
| exit     | 6P58WS2       |
| exit     | 4328GD8       |
| exit     | G412CB7       |
| exit     | L93JTIZ       |
| exit     | 322W7JE       |
| exit     | 0NTHK55       |
| exit     | 1106N58       |
| entrance | NRYN856       |
| entrance | WD5M8I6       |
| entrance | V47T75I       |
| entrance | 4963D92       |
| entrance | C194752       |
| entrance | 94MV71O       |
| entrance | FLFN3W0       |
| entrance | 207W38T       |
| entrance | RS7I6A0       |
| entrance | 4468KVT       |
| entrance | NAW9653       |
| exit     | NAW9653       |
| exit     | RS7I6A0       |
| exit     | 94MV71O       |
| exit     | WD5M8I6       |
| exit     | 4468KVT       |
| exit     | 207W38T       |
| exit     | C194752       |
| exit     | NRYN856       |
| exit     | 13FNH73       |
| exit     | V47T75I       |
| exit     | R3G7486       |
| exit     | FLFN3W0       |
| exit     | 4963D92       |
+----------+---------------+



SELECT account_number, atm_location, transaction_type, amount FROM atm_transactions WHERE year = 2024 and day = 28 and month = 07 AND atm_location = 'Humphrey Lane';
+----------------+---------------+------------------+--------+
| account_number | atm_location  | transaction_type | amount |
+----------------+---------------+------------------+--------+
| 94973060       | Humphrey Lane | deposit          | 50     |
| 85274751       | Humphrey Lane | deposit          | 70     |
| 27952274       | Humphrey Lane | deposit          | 95     |
| 32212020       | Humphrey Lane | deposit          | 20     |
| 38010758       | Humphrey Lane | deposit          | 85     |
| 96352349       | Humphrey Lane | deposit          | 10     |
| 34939061       | Humphrey Lane | deposit          | 10     |
| 69638157       | Humphrey Lane | deposit          | 85     |
| 95773068       | Humphrey Lane | deposit          | 70     |
| 13156006       | Humphrey Lane | deposit          | 15     |
| 32134232       | Humphrey Lane | deposit          | 70     |
+----------------+---------------+------------------+--------+


SELECT caller, receiver, duration FROM phone_calls WHERE year = 2024 and day = 28 and month = 07;

+----------------+----------------+----------+
|     caller     |    receiver    | duration |
+----------------+----------------+----------+
| (336) 555-0077 | (098) 555-1164 | 318      |
| (918) 555-5327 | (060) 555-2489 | 146      |
| (491) 555-2505 | (478) 555-1565 | 241      |
| (996) 555-8899 | (059) 555-4698 | 142      |
| (704) 555-5790 | (772) 555-5770 | 200      |
| (984) 555-5921 | (618) 555-9856 | 546      |
| (579) 555-5030 | (971) 555-6468 | 421      |
| (233) 555-0473 | (831) 555-0973 | 113      |
| (293) 555-1469 | (749) 555-4874 | 195      |
| (450) 555-8297 | (771) 555-7880 | 298      |
| (130) 555-0289 | (996) 555-8899 | 51       |
| (209) 555-7806 | (693) 555-7986 | 487      |
| (918) 555-2946 | (006) 555-0505 | 359      |
| (499) 555-9472 | (892) 555-8872 | 36       |
| (669) 555-6918 | (914) 555-5994 | 233      |
| (547) 555-8781 | (398) 555-1013 | 272      |
| (544) 555-8087 | (389) 555-5198 | 595      |
| (666) 555-5774 | (125) 555-8030 | 326      |
| (047) 555-0577 | (059) 555-4698 | 379      |
| (301) 555-4174 | (711) 555-3007 | 583      |
| (801) 555-9266 | (984) 555-5921 | 148      |
| (971) 555-6468 | (267) 555-2761 | 149      |
| (367) 555-5533 | (375) 555-8161 | 45       |
| (609) 555-5876 | (389) 555-5198 | 60       |
| (357) 555-0246 | (502) 555-6712 | 305      |
| (367) 555-5533 | (344) 555-9601 | 120      |
| (394) 555-3247 | (035) 555-2997 | 111      |
| (839) 555-1757 | (487) 555-5865 | 278      |
| (770) 555-1196 | (324) 555-0416 | 527      |
| (636) 555-4198 | (670) 555-8598 | 69       |
| (068) 555-0183 | (770) 555-1861 | 371      |
| (711) 555-3007 | (113) 555-7544 | 157      |
| (060) 555-2489 | (204) 555-4136 | 510      |
| (704) 555-2131 | (891) 555-5672 | 103      |
| (367) 555-5533 | (022) 555-4052 | 241      |
| (873) 555-3868 | (047) 555-0577 | 109      |
| (867) 555-9103 | (068) 555-0183 | 116      |
| (608) 555-9302 | (725) 555-3243 | 280      |
| (901) 555-8732 | (491) 555-2505 | 451      |
| (478) 555-1565 | (717) 555-1342 | 573      |
| (499) 555-9472 | (717) 555-1342 | 50       |
| (695) 555-0348 | (338) 555-6650 | 383      |
| (696) 555-9195 | (258) 555-5627 | 525      |
| (286) 555-6063 | (676) 555-6554 | 43       |
| (770) 555-1861 | (725) 555-3243 | 49       |
| (711) 555-3007 | (147) 555-6818 | 358      |
| (725) 555-4692 | (821) 555-5262 | 456      |
| (324) 555-0416 | (452) 555-8550 | 328      |
| (234) 555-1294 | (772) 555-5770 | 573      |
| (669) 555-6918 | (971) 555-6468 | 67       |
| (031) 555-6622 | (910) 555-3251 | 38       |
| (342) 555-9260 | (219) 555-0139 | 404      |
| (342) 555-9260 | (487) 555-5865 | 560      |
| (801) 555-9266 | (608) 555-9302 | 425      |
| (398) 555-1013 | (329) 555-5870 | 237      |
| (016) 555-9166 | (336) 555-0077 | 88       |
| (594) 555-2863 | (491) 555-2505 | 361      |
| (122) 555-4581 | (831) 555-0973 | 491      |
| (914) 555-5994 | (973) 555-3809 | 320      |
| (258) 555-5627 | (695) 555-0348 | 368      |
| (751) 555-6567 | (594) 555-6254 | 61       |
| (771) 555-7880 | (711) 555-3007 | 288      |
| (219) 555-0139 | (867) 555-9103 | 514      |
| (676) 555-6554 | (328) 555-9658 | 153      |
| (749) 555-4874 | (492) 555-5484 | 575      |
| (328) 555-9658 | (775) 555-7584 | 579      |
| (219) 555-0139 | (910) 555-3251 | 121      |
| (380) 555-4380 | (680) 555-4935 | 550      |
| (826) 555-1652 | (066) 555-9701 | 55       |
| (594) 555-6254 | (123) 555-5144 | 346      |
| (338) 555-6650 | (704) 555-2131 | 54       |
| (971) 555-6468 | (258) 555-5627 | 441      |
| (730) 555-5115 | (343) 555-0167 | 101      |
| (286) 555-6063 | (310) 555-8568 | 235      |
| (367) 555-5533 | (704) 555-5790 | 75       |
| (041) 555-4011 | (609) 555-5876 | 565      |
| (478) 555-1565 | (031) 555-6622 | 398      |
+----------------+----------------+----------+
