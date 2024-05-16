accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(`the total number of account is ${accounts.length}`);
console.log('------------------------------');

//2. print account number whose ac_type is savings
savings= accounts.filter((items)=>items["ac_type"]=='savings').forEach((elements) => console.log(elements["acno"]))
console.log('------------------------------');


//3.print the balance of accnount number 1000
 bal=accounts.find((items)=>items.acno == 1000).balance
 console.log(bal);
console.log('------------------------------');

//4. print all gpay transactions
a = accounts.map((elements)=>elements.transaction).flat().filter((items)=>items.mode=='gpay').forEach((ele)=>console.log(ele))

console.log('------------------------------');


//5. print all transaction whose amount > 5000
amount = accounts.map((elements)=>elements.transaction).flat().filter((items)=>items.amount>5000).forEach((ele)=>console.log(ele))
console.log('------------------------------');

//6. print credit transaction of account 1002

credits = accounts.map((elements)=>elements.transaction).flat().filter((items)=>items.to==1002)
console.log(credits);
console.log('------------------------------');
//7. print debit transaction of account 1002
console.log('print debit transaction of account 1002');
debits = accounts.find((items)=>items.acno==1002).transaction
console.log(debits);
console.log('------------------------------');

//8. print transaction history of 1002
history = {}
history['debit'] = debits
history['credit'] =credits
console.log(history);
transHis = [...credits,...debits]
console.log(transHis);

//9. print highest balance account details

highest = accounts.reduce((acc1,acc2) => acc1['balance']>acc2['balance']?acc1:acc2)
console.log(highest);