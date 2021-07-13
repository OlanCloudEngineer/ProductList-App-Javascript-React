const widgetprods=[
    {name: 'Master Widget', price:'$125.00'},
    {name: 'Sub Widget', price:'$115.00'},
    {name: 'Long Widget', price:'$150.00'},
    {name: 'Short Widget', price:'$135.00'}
  ]

  const [currProdState,setProdState]=useState({
    wudgetprods:[
      {name: 'Master Wudget', price:'$75.00'},
      {name: 'Sub Wudget', price:'$85.00'},
      {name: 'Long Wudget', price:'$135.00'},
      {name: 'Short Wudget', price:'$110.00'}
      ]
    });
  
    const applyDiscountHandler= (event)=>{
     
      setProdState({ 
        wudgetprods:[
            {name: 'Master Wudget', price:'$55.00'},
            {name: 'Sub Wudget', price:'$75.00'},
            {name: 'Long Wudget', price:'$115.00'},
            {name: 'Short Wudget', price:'$95.00'}
          ]
      })
    }

    