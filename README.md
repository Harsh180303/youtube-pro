Debouncing:

typing slow = 200ms
typing fast = 30ms


Performance: 
 - iphone pro max = 14 letter * 1000 = 14000
 - with debouncing = 3 Api calls * 1000 = 3000
 - 14000 - 3000 = 11000 less Api calls which makes huge difference


Debouncing with 200ms 
 - if difference between 2 key strokes is <200ms - DECLINE API call 
    >200ms make an API call and show the results 






# Time Complexity

Cache:
Time complexity to search in array = O(n)
Time complexity to search in object = O(1)

[i, ip, iph, iphone]

{
   i:
   ip:
   iph:
   iphone:
}

new Map() ---> This even move optemised...