import React from "react";
import { connect } from "react-redux";
import Burger from "../Burger/Burger";
import BuildControls from "../BuildControls/BuildControls";
import Modal from "../../utils/Modal/Modal";
import OrderSummary from "../OrderSummary/OrderSummary";
import { ADD_INGREDIENT, REMOVE_INGREDIENT, LOAD_REQUEST } from "../../redux/actions";

class BurgerBuilder extends React.Component<any, any> {
  state = {
    isModalOpen: false,
  };

  updatePurchaseState = (state:any) => {
    const ingredients = { ...state };
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, ele) => {
        return sum + ele;
      }, 0);

    return sum > 0;
  };

  modalHandler = () => {
    this.setState({ isModalOpen: true });
  };

  modalCloseHandler = () => {
    this.setState({ isModalOpen: false });
  };

  purchaseSuccess = () => {
    // alert("Hope you enjoyed virtual yummy burger!");
  };

  purchaseCancel = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const isDisabled = {
      ...this.props.ingredients,
    };
    console.log(isDisabled);
    for (let key in isDisabled) {
      isDisabled[key] = isDisabled[key] <= 0; //true or false
    }

    return (
      <>
        <Modal
          show={this.state.isModalOpen}
          closeModal={this.modalCloseHandler}
        >
          <OrderSummary
            ingredients={this.props.ingredients}
            purchaseSuccess={this.purchaseSuccess}
            purchaseCancel={this.purchaseCancel}
            price={this.props.price}
          />
        </Modal>
        <div className="builder">
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            addIngredient={this.props.addIngredient}
            removeIngredient={this.props.removeIngredient}
            disabled={isDisabled}
            price={this.props.price}
            purchaseable={this.updatePurchaseState(this.props.ingredients)}
            isModalOpen={this.modalHandler}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state:any) => {
  return {
    ingredients: state.ingredients,
    price: state.totalPrice,
  };
};
const mapDispatchToProps = (dispatch:any) => {
  return {
    addIngredient: (ingredientName:any) =>
      dispatch({
        type: ADD_INGREDIENT,
        payload: ingredientName,
      }),
    removeIngredient: (ingredientName:any) =>
      dispatch({
        type: REMOVE_INGREDIENT,
        payload: ingredientName,
      }),
      // loadRequest: () =>
      // dispatch({
      //   type: LOAD_REQUEST,
        
      // }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
