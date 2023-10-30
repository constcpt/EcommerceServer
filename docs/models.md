# Data modeling

List examples of each data model, write down the attributes

## user

```js
{
    _id:'xxx',
    username:'18677778888',
    password:'123'
}
```

## address

```js
{
    _id:'xxx',
    username:'18677778888',//就和用户产生关联
    city:'Sydney',
    department:'UTS Housing',
    houseNumber:'1733D',
    name:'Li Li',
    phone:'18655566666'
}
```

## shop

```js
{
    _id:'xxxxx',
    name:'Woolworths',
    imgUrl:'xxx.png',
    sales:10000,
    expressLimt:0,
    expressPrice:5,
    slogan:'fresh food people'
}
```

## Product

```js
{
    _id:'xxx',
    shopId:'xxxxx' //对应商店的_id
    name:'tomato',
    imgUrl:'xxx.png',
    sales:10,
    price:33.6,
    oldPrice:40.6,
    tabs:['all','seckill'] //左侧 tab 类型
}
```

## order

```js
{
    _id:'xxx',

    username:'constcpt',

    shopId:'商店的id',
    shopName:'Woolworths',

    isCanceled:false,//订单是否被取消

    address:{
        "username": "constcpt",
        "city": "Sydney",
        "department": "UTS Housing",
        "houseNumber": "1733D",
        "name": "Li Li",
        "phone": "18632451111",
    },

    products:[
        {
            product:{
                {
                    "tabs": ["all", "fruit"],
                    "shopId": "6162b97e226bf13191c1207f",
                    "name": "grape",
                    "imgUrl": "/images/product/grape.jpg",
                    "sales": 100,
                    "price": 33,
                    "oldPrice": 36,
                },
                orderSales:3
            }
        }
    ]
}
```
