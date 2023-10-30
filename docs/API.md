# RESTful API Design

## Sign up

### url

`/api/user/register`

### method

`post`

### request body

```json
{
  "username": "18633334444",
  "password": "123abc"
}
```

### response body

```js
{
  errno: 0,
  message: 'errn0 !== 0 show errror message'
}
```

## Sign in

### url

`/api/user/login`

### method

`post`

### request body

```json
{
  "username": "18633334444",
  "password": "123abc"
}
```

### response body

```json
{
  "errno": 0,
  "message": "errno !== 0 show errror message"
}
```

## Get user information

### url

`/api/user/info`

### method

`get`

### request body

None

### response body

```json
{
    ereno:0,
    data:{
        username:'xxxx'
    }
    message: 'errno !== 0 show errror message'
}
```

## Create shipping address

### url

`/api/user/address`

### method

`post`

### request body

```json
{
  "city": "Sydney",
  "department": "UTS Housing",
  "houseNumber": "1733D",
  "name": "Li Li",
  "phone": "18677778888"
}
```

### response body

```json
{
    errno:0,
    data:{
        _id:'收货地址的 id',
        city:'Sydney',
    	department:'UTS Housing',
    	houseNumber:'1733D',
    	name:'Li Li',
    	phone:'18677778888'
        createAt:'Date',
        updateAt:'Date'
    },
    message:'errno !== 0 show errror message'
}
```

## Get list of shipping addresses

### url

`/api/user/address`

### method

`get`

### request body

None

### response body

```js
{
    errno:0,
    data:[
        {
            _id:'收货地址的 id',
            city:'Sydney',
            department:'UTS Housing',
            houseNumber:'1733D',
            name:'Li Li',
            phone:'18677778888'
            createAt:'Date',
            updateAt:'Date'
        },
        {
            _id:'另一个收货地址的 id',
            city:'Sydney',
            department:'Another Housing',
            houseNumber:'1355S',
            name:'Li Hua',
            phone:'18856974339'
            createAt:'Date',
            updateAt:'Date'
        }
    ]
    message:'errno !== 0 show errror message'
}
```

## Get single shipping address

### url

`/api/user/address/:id` (`:id`是一个动态参数，服务端可获取具体的参数值)

Example：

`/api/user/address/100`

`/api/user/address/101`

### method

`get`

### request body

None

### response body

```js
{
    errno:0,
    data:{
            _id:'收货地址的 id',
            city:'Sydney',
            department:'Another Housing',
            houseNumber:'1355S',
            name:'Li Hua',
            phone:'18856974339'
            createAt:'Date',
            updateAt:'Date'
    },
    message:'errno !== 0 show errror message'

}
```

## 更新收货地址

### url

`/api/user/address/:id`

### method

`patch`

### request body

```json
{
  "city": "Sydney",
  "department": "Another Housing",
  "houseNumber": "1355S",
  "name": "Li Hua",
  "phone": "18856974339"
}
```

### response body

```json
{
  "errno": 0,
  "message": "errno !== 0 show errror message"
}
```

## Get Naearby Shops

### url

`/api/shop/hot-list`

### method

`get`

### request body

None

### response body

```json
{
  "errno": 0,
  "data": [
    {
      "_id": "shop 的 id",
      "name": "Wolworths",
      "imgUrl": "shop img url",
      "sales": 10000,
      "expressLimit": 0,
      "expressPrice": 5,
      "slogan": "fresh food people"
    },
    {
      "_id": "shop 的 id",
      "name": "Coles",
      "imgUrl": "shop img url",
      "sales": 20000,
      "expressLimit": 0,
      "expressPrice": 5,
      "slogan": "Good things are happening at Coles"
    }
  ],
  "message": "errno !== 0 show errror message"
}
```

## 商店详情

### url

`/api/shop/:id`

### method

`get`

### request body

None

### response body

```json
{
  "errno": 0,
  "data": {
    "_id": "shop 的 id",
    "name": "Wolworths",
    "imgUrl": "shop img url",
    "sales": 10000,
    "expressLimit": 0,
    "expressPrice": 5,
    "slogan": "fresh food people"
  },
  "message": "errno !== 0 show errror message"
}
```

## 查询（某个）商店的商品列表

### url

`/api/shop/:id/products`

### query

`tab=all`

eg：

`/api/shop/10/products?tab=all`

`/api/shop/10/products?tab=seckill`

### method

`get`

### request body

None

### response body

```js
{
    errno:0,
    data:[
        {
            _id:'商品 id',
            name:'Orange 500g',
            imgUrl:'xxx.png',
            sales:10,//月售
            price:33.6,
            oldprice:40.6
        },
        {
            _id:'商品 id',
            name:'Apple 500g',
            imgUrl:'xxx.png',
            sales:10,//月售
            price: 99.6,
            oldprice: 119.6
        }
    ]
    message:'errno !== 0 show errror message'
}
```

## 创建订单

### url

`/api/order`

### method

`post`

### request body

```js
{
    addressId:'收货地址的 id',
    shopId:'商店的 id',
    shopName:'Woolworths',
    isCanceled:false,//订单是否被取消
    products:[
        {
            id:'商品1 id',//复制？引用？
            num:3 //购买数量
        },
        {
            id:'商品2 id',
            num:5 //购买数量
        }
    ]
}
```

### response body

```js
{
    errno:0,
    data:{
        _id:'订单 id',
    },
    message:'errno !== 0 show error message'
}
```

<!--

## Title

### url

### method

### request body

```js
{
}
```

### response body

```js
{
}
```

-->
