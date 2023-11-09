import random
coins = [ "AUD", "CAD", "CHF", "EUR", "JPY", "NZD", "SGD", "USD" ]

def getData():
    data = {}
    for i in coins:
        data[str(i)] = {}
        for j in coins:
            if i != j:
                number = random.random()*2-1
                data[str(i)].update({ str(j): str(round(number, 2))})
    return data

