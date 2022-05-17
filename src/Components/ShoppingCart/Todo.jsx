const thunk = ReduxThunk.default
const {useState, useEffect} = React
const {applyMiddleware, combineReducers, createStore} = Redux;
const {Provider, useSelector, useDispatch} = ReactRedux;

const SET_CART = 'SET_CART'

const cartData = [{
        id: "fruit01",
        name: "Fuji Apple",
        type: "Import",
        price: "32",
        producent: "FreshBox",
        notes: "max 10kg",
        max: 10,
        qty: 1,
        image: 'https://i.ibb.co/0jwQxLn/img-apple.jpg',
        wishlisted: false
    },
    {
        id: "fruit02",
        name: "Fresh Guava",
        type: "Local",
        price: "15",
        producent: "FreshBox",
        notes: "max 20kg",
        max: 20,
        qty: 1,
        image: 'https://i.ibb.co/fNPztkX/img-guava.jpg',
        wishlisted: false
    },
    {
        id: "fruit03",
        name: "Orange",
        type: "Import",
        price: "18",
        producent: "FreshBox",
        notes: "max 12kg",
        max: 12,
        qty: 1,
        image: 'https://i.ibb.co/DtYvztW/img-orange.jpg',
        wishlisted: false
    }
    ]

const initialState = {
    productData: [{
        id: "fruit01",
        name: "Fuji Apple",
        type: "Import",
        price: "32",
        producent: "FreshBox",
        notes: "max 10kg",
        max: 10,
        qty: 1,
        image: 'https://i.ibb.co/0jwQxLn/img-apple.jpg',
        wishlisted: false
    },
    {
        id: "fruit02",
        name: "Fresh Guava",
        type: "Local",
        price: "15",
        producent: "FreshBox",
        notes: "max 20kg",
        max: 20,
        qty: 1,
        image: 'https://i.ibb.co/fNPztkX/img-guava.jpg',
        wishlisted: false
    },
    {
        id: "fruit03",
        name: "Orange",
        type: "Import",
        price: "18",
        producent: "FreshBox",
        notes: "max 12kg",
        max: 12,
        qty: 1,
        image: 'https://i.ibb.co/DtYvztW/img-orange.jpg',
        wishlisted: false
    }
    ],
    showDiscountForm: false,
    discountCode: "",
    discountCodeValid: null,
    showCheckoutScreen: false
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
}

const addWishlist = (index) => {
   return async (dispatch, getState) => {
        const { cartReducer } = getState()
        const { productData } = cartReducer
        let wishlistData = productData[index].wishlisted

        dispatch({
            type: SET_CART,
            payload:
                productData[index].wishlisted = !wishlistData
        })

    }
}

const addItemQuantity = (index) => {
   return async (dispatch, getState) => {
        const { cartReducer } = getState()
        const { productData } = cartReducer
        let maxData = productData[index].max

        if (productData[index].qty >= maxData) {
            return false
        } else {
            dispatch({
                type: SET_CART,
                payload:
                    productData[index].qty = productData[index].qty + 1,
            })
        }
    }
}

const decreaseItemQuantity = (index) => {
    return async (dispatch, getState) => {
        const { cartReducer } = getState()
        const { productData } = cartReducer

        if (productData[index].qty <= 1) {
            return false
        } else {
            dispatch({
                type: SET_CART,
                payload:
                    productData[index].qty = productData[index].qty - 1,
            })
        }
    }
}

const addItem = () => {
    return async (dispatch, ) => {

        dispatch({
            type: SET_CART,
            payload: {
                productData: cartData
            }
        })
    }
}

const removeItem = (id) => {
    return async (dispatch, getState) => {
        const { cartReducer } = getState()
        const { productData } = cartReducer
        
        dispatch({
            type: SET_CART,
            payload: {
                productData:productData.filter(item => {return item.id !== id})
            }
        })
    }
}

const changeCart = (data) => {
    return async (dispatch) => {
        dispatch({
            type: SET_CART,
            payload: data
        })
    }
}

const reducer = combineReducers({
    cartReducer
});

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

const Product = ({ data, index }) => {
    const dispatch = useDispatch()
    const [toDelete, setToDelete] = useState(false)
    const { id, name, type, price, producent, notes, qty, image, max, wishlisted } = data

    const addProductQtyHandler = () => {
        dispatch(addItemQuantity(index))
    }
    
    const removeProductQtyHandler = () => {
        dispatch(decreaseItemQuantity(index))
    }
    
    const wishlistHandler = () => {
        dispatch(addWishlist(index))
    }
    
    const removeItemHandler = () => {
        setToDelete(true)
        setTimeout(() => {
        dispatch(removeItem(id))
        setToDelete(false)
        }, 300)
    }

    return (
        <div key={id} className={`flex justify-between flex-col lg:flex-row space-y-4 lg:space-y-0 transition-opacity ease-in-out duration-700 ${toDelete ? ' opacity-0 ' : 'opacity-100'}`}>
            <div className='space-y-4 lg:space-y-0 lg:space-x-4 flex flex-col lg:flex-row'>
                <img style={{ content: `url(${image})` }} alt='img-product' className='w-full lg:w-48' />
                <div className='space-y-6'>
                    <div className='space-y-2'>
                        <h3 className='text-gray-800 text-xl font-semibold'>{name}</h3>
                        <p className='text-sm text-gray-600'>{type}</p>
                        <p className='text-sm text-gray-600'>from {producent}</p>
                        <p className='text-gray-600'>${Number(price).toFixed(2)} <span className='text-sm'>/ kg</span></p>
                    </div>
                    <div className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 text-gray-600 '>
                        <div onClick={removeItemHandler} className='flex items-center space-x-1 text-xs lg:text-sm hover:text-gray-400 cursor-pointer'>
                            <span>
                                <i className="fas fa-trash"></i>
                            </span>
                            <p>REMOVE ITEM</p>
                        </div>
                        <div onClick={wishlistHandler} className={wishlisted ? 'flex items-center space-x-1 text-xs lg:text-sm text-red-600 cursor-pointer' : 'flex items-center space-x-1 text-xs lg:text-sm hover:text-red-600 cursor-pointer'}>
                            <span>
                                <i className="fas fa-heart"></i>
                            </span>
                          <p>{wishlisted ? "REMOVE FROM WISHLIST" : "MOVE TO WISHLIST"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row lg:flex-col justify-between items-center lg:items-end'>
                <div className='flex flex-col items-center'>
                    <div className='flex items-center text-gray-800 text-xs lg:text-base '>
                        <div onClick={removeProductQtyHandler} className={qty === 1 ? 'cursor-not-allowed flex justify-center w-10 h-full items-center p-2 hover:bg-gray-50 border rounded-l-md text-gray-500' : 'cursor-pointer flex justify-center w-10 h-full items-center p-2 hover:bg-gray-200 border rounded-l-md'}>
                            <span >
                                <i className="fas fa-minus"></i>
                            </span>
                        </div>
                        <div className='flex justify-center w-12 h-full items-center p-2 border-t border-b'>
                            {qty}
                        </div>
                        <div onClick={addProductQtyHandler} className={max === qty ? 'cursor-not-allowed flex justify-center w-10 h-full items-center p-2 hover:bg-gray-50 border rounded-r-md text-gray-500' : 'cursor-pointer flex justify-center w-10 h-full items-center p-2 hover:bg-gray-200 border rounded-r-md'}>
                            <span>
                                <i className="fas fa-plus"></i>
                            </span>
                        </div>
                    </div>
                    <p className='text-xs text-gray-600 mt-2'>(Note, {notes})</p>
                </div>
                <p className='items-center text-gray-800 text-right text-lg font-semibold'>${Number(price * qty).toFixed(2)}</p>
            </div>

        </div>
    )
}

const Discount = () => {

    const dispatch = useDispatch()

    const cartReducer = useSelector(state => state.cartReducer)
    const {showDiscountForm, discountCode, discountCodeValid} = cartReducer

    const openDiscountForm = () => {
        dispatch(changeCart({
            showDiscountForm: !showDiscountForm
        }))
    }

    const sendDiscountCodeValidation = () => {
        if (discountCode === "RAMEN") {
            dispatch(changeCart({
                discountCodeValid: true
            }))
        } else {
            dispatch(changeCart({
                discountCodeValid: false
            }))
        }
    }

    return (
        <div className='w-full'>
        <div className={showDiscountForm ? 'bg-white p-4 rounded-t-md shadow-lg h-full' :'bg-white p-4 rounded-md shadow-lg h-full'}>
            <div className='flex items-center justify-between text-gray-600 text-sm'>
                <p>Add a discount code [optional]</p>
                    <span onClick={openDiscountForm} className={showDiscountForm ? ' transition duration-700 transform rotate-180 cursor-pointer' : 'transition duration-700 transform rotate-0 cursor-pointer '}>
                    <i className={"fas fa-chevron-down"}></i>
                </span>
            </div>
            </div>
            {showDiscountForm &&
                <div className=' bg-white px-4 pb-4 h-full space-y-2'>
            <div className='flex justify-between text-gray-600 text-sm space-x-2 h-full items-stretch'>
                    <input defaultValue={discountCode} onChange={e => {
                        dispatch(changeCart({
                            discountCode: e.target.value.toUpperCase(),
                            discountCodeValid: null
                        }))

                    }} placeholder='Type discount code...'
                        className='rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent p-2 w-full bg-white border border-gray-400' />
                <button onClick={sendDiscountCodeValidation} title={discountCode === "" ? "Please, type discount code first" : ""} disabled={discountCode === "" } className={discountCode === ''  ? "bg-gray-200 text-black cursor-not-allowed text-xs py-2 px-4 w-auto rounded-md" : 'bg-blue-600 text-white text-xs py-2 px-4 w-auto rounded-md hover:bg-blue-700'}>
                ADD
                 </button>
                </div>
                
                {discountCodeValid !== null && 
                <div className='space-x-2 flex items-center'>
                    <span className={discountCodeValid ? 'text-green-600 text-lg' : 'text-red-600 text-lg'}>
                    <i className={discountCodeValid ? "far fa-check-circle" : "far fa-times-circle"}></i>
                    </span>
                    <p className='text-sm text-gray-600'>{ discountCodeValid ? "Congratulation you've got 50% discounts off!" : 'Sorry wrong code, try again!'}</p>
                </div>
               }
        </div>}
        </div>
    )
}

const Checkout = () => {
    const dispatch = useDispatch()

    const showCheckoutScreen = () => {
        dispatch(
            changeCart({
                showCheckoutScreen: true,
                showDiscountForm: false,
                discountCode: "",
                discountCodeValid: null,
            })
        )
    }

    const state = useSelector(state => state.cartReducer)
    const { productData, discountCodeValid } = state

    const totalPrice = productData.reduce((value, acc) => {
        return value + (acc.price * acc.qty)
    }, 0)

    return (
        <div className='bg-white p-4 rounded-md shadow-lg h-full space-y-6 '>
            <h2 className='text-gray-800 font-bold text-lg'>The total amount of</h2>
            <div className='space-y-3 text-gray-600 text-sm'>
                <div className='flex items-center justify-between'>
                    <p>Temporary amount</p>
                    <p>${Number(totalPrice).toFixed(2)}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p>Shipping</p>
                    <p>Gratis</p>
                </div>
                <hr />
                <div className='flex justify-between font-bold'>
                    <p >The total amount of <br />
            (including VAT)
            </p>
                    {discountCodeValid ?
                        <div className='flex flex-col space-y-1 text-right'>
                            <p className='text-gray-300 font-normal'><span className=' line-through '>${Number(totalPrice).toFixed(2)}</span> <span className=' text-green-600'>+50%</span></p>
                            <p>${Number(totalPrice*0.5).toFixed(2)}</p>
                        </div> :
                        <p>${Number(totalPrice).toFixed(2)}</p>
                }
                </div>
            </div>
            <button onClick={showCheckoutScreen} title={totalPrice === 0 ? "Please add item to your cart first" : ""} disabled={totalPrice === 0} className={totalPrice === 0 ?
                'bg-gray-200 text-black cursor-not-allowed text-xs p-4 w-full rounded-md' :
                ' bg-blue-600 text-white text-xs p-4 w-full rounded-md hover:bg-blue-700'} >
                GO TO CHECKOUT
    </button>
        </div>
    )
}

const Cart = () => {

   const dispatch = useDispatch()
    const state = useSelector(state => state.cartReducer)
    const { productData } = state

    const addItemHandler = () => {
        dispatch(addItem())
    } 


    return (
        <main className='py-6 px-12 w-full flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6'>

            <section className=' h-full lg:w-2/3 bg-white p-4 rounded-md shadow-lg space-y-4'>
                <h2 className='text-gray-800 font-bold text-lg'>Cart ({productData.length} {productData.length <=1 ? "item" : "items"})</h2>
                {
                    productData.length === 0 ?
                        <React.Fragment>
                            <div className='flex items-center space-y-4 flex-col'>
                                <h3 className='text-gray-500 text-lg font-semibold'>Oops... Seems your cart is empty</h3>
                                <button onClick={addItemHandler} className=' bg-white text-blue-600 text-xs p-4 w-full lg:w-auto rounded-md hover:bg-blue-600 border border-blue-600 hover:border-white hover:text-white'>
                ADD ITEMS
    </button>
                            </div>
                    </React.Fragment>
                    : productData && productData.map((item, index) => (
                    <React.Fragment key={index}>
                        <Product data={item} index={index} />
                        {productData.length - 1 === index ? null : <hr />}
                    </React.Fragment>
                ))}
            </section>

            <section className='lg:w-1/3 h-full space-y-6 '>
                <Checkout />
                <Discount />
            </section>
        </main>
    )
}

const Header = () => {
    return (
        <header className=' py-10 flex justify-center items-center bg-gray-100 '>
            <h1 className='text-2xl font-bold text-gray-800'>Shopping Cart</h1>
        </header>
    )
}

const Home = () => {
     const dispatch = useDispatch()
    const cartReducer = useSelector(state => state.cartReducer)

    const { showCheckoutScreen } = cartReducer
    

    useEffect(() => {
        if (showCheckoutScreen) {
            const setShowCheckout = setTimeout(() => {
                dispatch(changeCart({
                    showCheckoutScreen: false,
                    productData:[]
                }))
            }, 5000)

            return () => { clearTimeout(setShowCheckout) }
        } 
    }, [showCheckoutScreen, dispatch])

    return (
        <div className='flex flex-col min-h-screen bg-gray-50 '>
            <Header />
            {showCheckoutScreen ? 
        
                <main className='py-6 px-12 w-full items-center flex-1 flex flex-col justify-center'>
                    <div className='space-x-8 flex items-center'>
                    <span className='text-6xl text-green-600'>
                            <i className='far fa-check-circle'></i>
                        </span>
                        <h3 className='text-2xl font-semibold'>Thanks for shopping with us!</h3>
                       </div>
                </main>
        
        :
        
            <Cart />
                
        }
        </div>
    )
}

const App = () => {
  return (
    <Home />
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);