#Creating a Dictionary:
philip = {
    "name": "Philip",
    "age": "24",
    "occupation": "Programmer"
}

print(philip);

#Changing age:
philip["age"] = "25"
print(philip);

#Adding stuff:
philip["sex"] = "male"
print(philip);

#Removing:
del(philip["sex"])
print(philip);

#Getting length:
print(len(philip));