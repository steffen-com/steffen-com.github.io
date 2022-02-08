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

#prod = input("ka vil du kjøpa: ")
#kost = random.randrange(100,20000)
#print(prod, "kosta", kost, "kr")
#time.sleep(1)
#print("butikken fekk",kost - 94)

#age = 18
#if age >= 18:
    #print("ingen liker deg")





diamenter1 = input("si! ka er diamente or else ")
radius1 = float(diamenter1)/2
arealSirkel1 = 3.14*radius1*radius1

diamenter2 = input("si ka diameteren på den andre sirkelen er eller kommer du til å angra da! ")
radius2 = float(diamenter2)/2
arealSirkel2 = 3.14*radius2*radius2

print("den første sirkelen er",arealSirkel1,"den andre sirkelen er ",arealSirkel2)

diffrens = arealSirkel1 - arealSirkel2

print("diffrens er",diffrens)