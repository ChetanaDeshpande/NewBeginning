#!/bin/bash

echo "There are 5 books on the table" > /Users/sameersegal/Desktop/File.log
echo "There were 2 apples in the basket" > /Users/sameersegal/Desktop/File1.log
echo "1 2 3 4 5" > /Users/sameersegal/Desktop/File2.log
echo "A B C D" > /Users/sameersegal/Desktop/File3.log
echo "Give me 5 minutes" > /Users/sameersegal/Desktop/File4.log
echo "How are you?" > /Users/sameersegal/Desktop/File5.log
echo "I finished the task" > /Users/sameersegal/Desktop/File6.log
echo "Thank you" > /Users/sameersegal/Desktop/File7.log
echo "123456678" > /Users/sameersegal/Desktop/File8.log
echo "I work in Artoo" > /Users/sameersegal/Desktop/File9.log

cat /Users/sameersegal/Desktop/*.log
echo " "
for i in `grep -oE --no-filename "[[:digit:]]{1,}" /Users/sameersegal/Desktop/*.log`;
do
        if [ $(($i%2)) == 0 ]
        then
                j=${i};
                k=$(($j*5));
                echo $j;
                echo "->$(($j*5))";
                sed -iE "s/${i}/${k}/g" /Users/sameersegal/Desktop/*.log
        fi

done
echo " "
sed  "s/5/7/g" /Users/sameersegal/Desktop/*.log
