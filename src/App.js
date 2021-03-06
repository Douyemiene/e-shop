import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { connect } from "react-redux";
import {selectCurrentUser}  from "./redux/user/user.selectors";
import {createStructuredSelector} from 'reselect'
import {checkUserSession} from './redux/user/user.actions'
import {
  addCollectionAndDocuments
} from './firebase/firebase.util'
import {
  selectCollectionsForPreview
} from './redux/shop/shop.selectors'
import SHOP_DATA from './redux/shop/shop.data';
class App extends React.Component {
  //unsubscribeFromAuth = null;
  componentDidMount() {
     const {checkUserSession/*, collectionsArray*/} = this.props
     checkUserSession()
    //  const x = collectionsArray.map(({
    //    title,
    //    items
    //  }) => ({
    //    title,
    //    items
    //  }))
    //  console.log(x)
    //  //addCollectionAndDocuments('abcdef',x)
    //   console.log(x)
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {//has no exact bcus of shop/hats etc
          }
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser/*,
  collectionsArray: selectCollectionsForPreview*/
});
export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
