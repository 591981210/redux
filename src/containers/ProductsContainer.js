import  {connect} from 'react-redux'
import Products from '../components/Products'



function mapStateToProps (state){
    return {
        foo:state.products.foo
    }
}

function mapDispatchToProps (state){
    return {}
}

const ProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)


export default ProductsContainer