import  {connect} from 'react-redux'
import Products from '../components/Products'
import {getAllProducts} from '../actions/'


function mapStateToProps (state){
    return {
        products:state.products.all
    }
}

// function mapDispatchToProps (dispatch){
//     return {
//         getAllProducts(){
//             dispatch(getAllProducts())
//         }
//         // getAllProducts(){
//         //     dispatch({
//         //         type:'RECIVE_PRODUCTS',
//         //         products:['a','b','c']
//         //     })
//         // }
//     }
// }

const mapDispatchToProps = {
    getAllProducts
}

const ProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)


export default ProductsContainer