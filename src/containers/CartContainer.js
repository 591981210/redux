import  {connect} from 'react-redux'
import Cart from '../components/Cart'
function mapStateToProps (state){
    return {}
}

function mapDispatchToProps (state){
    return {}
}

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)


export default CartContainer