import  {connect} from 'react-redux'
import Products from '../components/Products'



function mapStateToProps (state){
    return {
        products:state.products.all
    }
}

function mapDispatchToProps (dispatch){
    return {
        getAllProducts(){
            dispatch({
                type:'RECIVE_PRODUCTS',
                products:['a','b','c']
            })
        }
    }
}

const ProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)


export default ProductsContainer