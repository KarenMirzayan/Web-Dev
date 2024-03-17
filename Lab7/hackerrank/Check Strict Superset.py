setA = set(input().split())
superset = True

for _ in range(int(input())):
    if not setA.issuperset(input().split()):
        superset = False
        break
        
print(superset)