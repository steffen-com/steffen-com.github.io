from cgitb import grey
import numbers
from re import X
import time
import random

#navn = input("ka heite du: ")
#print("stir in i kamra i 8 sekund: ")

#alder = random.randrange(-20,100)

#time.sleep(8)
#print("hei", navn, " eg veit at du er", alder, "år gammal:")

import math


#lengde = input("ka er lengden: ")
#bredde = input("ka er bredden: ")
#lengde = int(lengde)
#bredde = int(bredde)

#print("areal din er", lengde * bredde, "kvadratmeter:")

#p = math.pi
#radius = input("ka er radiusen: ")
#radius = int(radius)
#print("arealen til sirkelen er", p * radius * radius)

#trekantLengde = int(input("ka er lengden til trekanten: "))
#trekantBredde = int(input("ka er trekant bredda: "))
#print("areale på trekanten er", trekantLengde * trekantBredde /2)

prod = input("ka vil du kjøpa: ")
kost = random.randrange(100,20000)
print(prod, "kosta", kost, "kr")
time.sleep(1)
print("butikken fekk",kost - 94)
